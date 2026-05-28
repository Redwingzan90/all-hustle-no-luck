import { useEffect, useRef, useState, useCallback } from "react";
import { X, Play, Pause, Volume2, Music } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface Track {
  name: string;
  src: string;
}

interface MusicSettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
  currentTrack: number;
  onTrackChange: (index: number) => void;
  tracks: Track[];
  isPlaying: boolean;
  onPlayPause: () => void;
}

// Web Audio API bass and treble boost setup
interface AudioChain {
  context: AudioContext;
  source: MediaElementAudioSourceNode;
  bassFilter: BiquadFilterNode;
  trebleFilter: BiquadFilterNode;
  gainNode: GainNode;
}

export function MusicSettingsPanel({
  isOpen,
  onClose,
  audioRef,
  currentTrack,
  onTrackChange,
  tracks,
  isPlaying,
  onPlayPause,
}: MusicSettingsPanelProps) {
  const [volume, setVolume] = useState([80]);
  const [bass, setBass] = useState([50]);
  const [treble, setTreble] = useState([50]);
  const [bassEnabled, setBassEnabled] = useState(false);
  const [trebleEnabled, setTrebleEnabled] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const isSeekingRef = useRef(false);
  const seekPositionRef = useRef(0); // Track seek position to avoid stale closure
  const isPlayingRef = useRef(isPlaying);
  const audioChainRef = useRef<AudioChain | null>(null);
  const initInProgressRef = useRef(false); // Prevent multiple simultaneous initializations

  // Keep ref in sync with state
  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  // Initialize Web Audio API chain for bass boost - only runs once
  const initAudioChain = useCallback(() => {
    // Prevent multiple simultaneous initializations
    if (initInProgressRef.current || audioChainRef.current || !audioRef.current) return;
    
    initInProgressRef.current = true;
    
    try {
      // Create audio context
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const context = new AudioContextClass();
      
      // Create source from audio element
      const source = context.createMediaElementSource(audioRef.current);
      
      // Create bass filter (lowshelf at ~200Hz for bass boost)
      const bassFilter = context.createBiquadFilter();
      bassFilter.type = "lowshelf";
      bassFilter.frequency.value = 200;
      // Apply current bass value (default 50 = 0dB)
      bassFilter.gain.value = ((bass[0] - 50) / 50) * 6;
      
      // Create treble filter (highshelf at ~3000Hz for treble boost)
      const trebleFilter = context.createBiquadFilter();
      trebleFilter.type = "highshelf";
      trebleFilter.frequency.value = 3000;
      // Apply current treble value (default 50 = 0dB)
      trebleFilter.gain.value = ((treble[0] - 50) / 50) * 6;
      
      // Create gain node for volume control
      const gainNode = context.createGain();
      gainNode.gain.value = volume[0] / 100;
      
      // Connect chain: source -> bassFilter -> trebleFilter -> gain -> destination
      source.connect(bassFilter);
      bassFilter.connect(trebleFilter);
      trebleFilter.connect(gainNode);
      gainNode.connect(context.destination);
      
      audioChainRef.current = { context, source, bassFilter, trebleFilter, gainNode };
      setBassEnabled(true);
      setTrebleEnabled(true);
      initInProgressRef.current = false; // Reset after successful init
      console.log('Audio chain initialized for bass boost');
    } catch (err) {
      console.error('Failed to initialize audio chain:', err);
      initInProgressRef.current = false; // Reset so it can try again
    }
  }, [audioRef, volume, bass, treble]);

  // Update volume - handle both normal and bass-enhanced playback
  useEffect(() => {
    if (!audioRef.current) return;
    
    if (audioChainRef.current) {
      // Use gain node for volume when bass chain is active
      audioChainRef.current.gainNode.gain.value = volume[0] / 100;
    } else {
      // Use native volume when no bass chain
      audioRef.current.volume = volume[0] / 100;
    }
  }, [volume, audioRef]);

  // Debounced handler for bass slider to prevent lag
  const handleBassChange = useCallback((newBass: number[]) => {
    setBass(newBass);
    
    // Apply bass gain if chain exists (skip expensive initialization)
    if (audioChainRef.current) {
      // Map 0-100 slider to -6 to +6 dB
      const bassGain = ((newBass[0] - 50) / 50) * 6;
      audioChainRef.current.bassFilter.gain.value = bassGain;
    }
  }, []); // No dependencies - uses refs

  // Initialize audio chain lazily on first interaction (bass or treble)
  const handleAudioInteraction = useCallback(() => {
    if (!audioChainRef.current && !initInProgressRef.current) {
      initAudioChain();
    }
  }, [initAudioChain]);

  // Debounced handler for treble slider to prevent lag
  const handleTrebleChange = useCallback((newTreble: number[]) => {
    setTreble(newTreble);
    
    // Apply treble gain if chain exists
    if (audioChainRef.current) {
      // Map 0-100 slider to -6 to +6 dB
      const trebleGain = ((newTreble[0] - 50) / 50) * 6;
      audioChainRef.current.trebleFilter.gain.value = trebleGain;
      setTrebleEnabled(true);
    }
  }, []); // No dependencies - uses refs

  // Resume audio context on user interaction (required by browsers)
  useEffect(() => {
    if (audioChainRef.current && audioChainRef.current.context.state === 'suspended') {
      audioChainRef.current.context.resume();
    }
  }, [isPlaying]);

  // Auto-initialize audio chain when music starts playing
  useEffect(() => {
    if (isPlaying && !audioChainRef.current && !initInProgressRef.current && audioRef.current) {
      initAudioChain();
    }
  }, [isPlaying, audioRef, initAudioChain]);

  // Sync bass and treble whenever audio chain is created or values change
  useEffect(() => {
    if (audioChainRef.current) {
      const bassGain = ((bass[0] - 50) / 50) * 6;
      const trebleGain = ((treble[0] - 50) / 50) * 6;
      audioChainRef.current.bassFilter.gain.value = bassGain;
      audioChainRef.current.trebleFilter.gain.value = trebleGain;
    }
  }, [bass, treble]);

  const handleTrackSelect = useCallback((index: number) => {
    onTrackChange(index);
    if (audioRef.current) {
      const wasPlaying = isPlayingRef.current;
      audioRef.current.src = tracks[index].src;
      
      // If audio chain exists, we need to reconnect to the new source
      if (audioChainRef.current) {
        // Disconnect old source
        try {
          audioChainRef.current.source.disconnect();
        } catch (e) {}
        
        // Recreate source for new audio element
        try {
          const newSource = audioChainRef.current.context.createMediaElementSource(audioRef.current);
          newSource.connect(audioChainRef.current.bassFilter);
          audioChainRef.current.source = newSource;
        } catch (e) {
          console.error('Failed to reconnect audio chain:', e);
        }
      }
      
      if (wasPlaying) {
        audioRef.current.play().catch(() => {});
      }
    }
  }, [audioRef, tracks, onTrackChange]);

  const handlePlayPause = useCallback(() => {
    onPlayPause();
  }, [onPlayPause]);

  // Track audio time updates
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      if (!isSeekingRef.current) {
        setCurrentTime(audio.currentTime);
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      setCurrentTime(0);
      onPlayPause(); // Auto-pause when track ends
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [audioRef, onPlayPause]);

  // Handle seek slider change - update state and ref during drag
  const handleSeek = useCallback((newTime: number[]) => {
    setCurrentTime(newTime[0]);
    seekPositionRef.current = newTime[0];
  }, []);

  // Handle seek slider release - apply the seek position from ref
  const handleSeekCommit = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = seekPositionRef.current;
    }
    isSeekingRef.current = false;
  }, [audioRef]);

  // Handle seek slider drag start
  const handleSeekStart = useCallback(() => {
    isSeekingRef.current = true;
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-start justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Panel */}
      <div className={cn(
        "relative w-full max-w-sm h-full bg-card border-l border-border overflow-y-auto",
        "animate-slide-in-right"
      )}>
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-border bg-card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Music className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-stencil text-xl text-bone">SOUNDTRACK</h3>
              <p className="font-mono-grit text-[10px] text-muted-foreground">SET THE MOOD</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-bone hover:text-primary hover:border-primary transition-colors"
            aria-label="Close music panel"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Now Playing */}
          <div className="relative bg-background border border-border p-6">
            <div className="absolute inset-2 crt-corners pointer-events-none opacity-50">
              <span /><span /><span /><span />
            </div>
            <p className="font-mono-grit text-[10px] text-primary tracking-[0.3em] mb-3">// NOW PLAYING</p>
            <h4 className="font-stencil text-2xl text-bone mb-4 truncate">
              {tracks[currentTrack]?.name || "No track selected"}
            </h4>
            <div className="flex items-center gap-4">
              <button
                onClick={handlePlayPause}
                className={cn(
                  "w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center",
                  "hover:brightness-110 transition-colors",
                  isPlaying && "animate-pulse"
                )}
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
              </button>
              <div className="flex-1 space-y-2">
                {/* Progress bar */}
                <div className="h-1 bg-border rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: duration > 0 ? `${(currentTime / duration) * 100}%` : "0%" }}
                  />
                </div>
                {/* Seek slider */}
                <Slider
                  value={[currentTime]}
                  onValueChange={handleSeek}
                  onPointerDown={handleSeekStart}
                  onPointerUp={handleSeekCommit}
                  max={duration > 0 ? duration : 100}
                  step={0.1}
                  className="w-full"
                  aria-label="Seek"
                />
                <div className="flex justify-between font-mono-grit text-[9px] text-muted-foreground">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Volume Control */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Volume2 className="w-4 h-4 text-primary" />
              <p className="font-mono-grit text-[10px] text-primary tracking-[0.3em]">VOLUME</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-mono-grit text-[10px] text-muted-foreground w-8">♫</span>
              <Slider
                value={volume}
                onValueChange={setVolume}
                max={100}
                step={1}
                className="flex-1"
                aria-label="Volume"
              />
              <span className="font-mono-grit text-[10px] text-muted-foreground w-8">{volume[0]}%</span>
            </div>
          </div>

          {/* Bass Control */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className={cn(
                "w-4 h-4 rounded flex items-center justify-center transition-colors relative",
                bassEnabled ? "bg-primary" : "bg-border"
              )}>
                <span className={cn(
                  "text-[8px] font-bold",
                  bassEnabled ? "text-primary-foreground" : "text-muted-foreground"
                )}>B</span>
                {/* Bass indicator pulse */}
                {bassEnabled && bass[0] > 50 && (
                  <span className="absolute inset-0 rounded bg-primary animate-ping opacity-75" />
                )}
              </div>
              <p className="font-mono-grit text-[10px] text-primary tracking-[0.3em]">BASS</p>
              <span className={cn(
                "font-mono-grit text-[9px] ml-auto",
                bass[0] > 50 ? "text-primary" : "text-muted-foreground"
              )}>
                {bass[0] > 50 ? "+" : ""}{Math.round(((bass[0] - 50) / 50) * 6)}
              </span>
              {!bassEnabled && (
                <span className="font-mono-grit text-[9px] text-muted-foreground animate-pulse">MOVE TO ACTIVATE</span>
              )}
            </div>
            <div 
              className="flex items-center gap-4"
              onPointerDown={handleAudioInteraction}
            >
              <span className="font-mono-grit text-[10px] text-muted-foreground w-8">-6</span>
              <Slider
                value={bass}
                onValueChange={handleBassChange}
                max={100}
                step={1}
                className="flex-1"
                aria-label="Bass"
              />
              <span className="font-mono-grit text-[10px] text-muted-foreground w-8">+6</span>
            </div>
          </div>

          {/* Treble Control */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className={cn(
                "w-4 h-4 rounded flex items-center justify-center transition-colors relative",
                trebleEnabled ? "bg-primary" : "bg-border"
              )}>
                <span className={cn(
                  "text-[8px] font-bold",
                  trebleEnabled ? "text-primary-foreground" : "text-muted-foreground"
                )}>T</span>
                {/* Treble indicator pulse */}
                {trebleEnabled && treble[0] > 50 && (
                  <span className="absolute inset-0 rounded bg-primary animate-ping opacity-75" />
                )}
              </div>
              <p className="font-mono-grit text-[10px] text-primary tracking-[0.3em]">TREBLE</p>
              <span className={cn(
                "font-mono-grit text-[9px] ml-auto",
                treble[0] > 50 ? "text-primary" : "text-muted-foreground"
              )}>
                {treble[0] > 50 ? "+" : ""}{Math.round(((treble[0] - 50) / 50) * 6)}
              </span>
              {!trebleEnabled && (
                <span className="font-mono-grit text-[9px] text-muted-foreground animate-pulse">MOVE TO ACTIVATE</span>
              )}
            </div>
            <div 
              className="flex items-center gap-4"
              onPointerDown={handleAudioInteraction}
            >
              <span className="font-mono-grit text-[10px] text-muted-foreground w-8">-6</span>
              <Slider
                value={treble}
                onValueChange={handleTrebleChange}
                max={100}
                step={1}
                className="flex-1"
                aria-label="Treble"
              />
              <span className="font-mono-grit text-[10px] text-muted-foreground w-8">+6</span>
            </div>
          </div>

          {/* Track Selection */}
          <div className="space-y-4">
            <p className="font-mono-grit text-[10px] text-primary tracking-[0.3em]">// SELECT TRACK</p>
            <div className="space-y-2">
              {tracks.map((track, index) => (
                <button
                  key={track.src}
                  onClick={() => handleTrackSelect(index)}
                  className={cn(
                    "w-full flex items-center gap-4 p-4 border transition-colors",
                    currentTrack === index
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50 bg-background"
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-xs",
                    currentTrack === index
                      ? "bg-primary text-primary-foreground"
                      : "bg-border text-muted-foreground"
                  )}>
                    {index + 1}
                  </div>
                  <span className={cn(
                    "font-stencil text-sm flex-1 text-left truncate",
                    currentTrack === index ? "text-primary" : "text-bone"
                  )}>
                    {track.name}
                  </span>
                  {currentTrack === index && (
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div className="pt-4 border-t border-border">
            <p className="font-mono-grit text-[10px] text-muted-foreground leading-relaxed">
              Audio files: public/track1.mp3, public/track2.mp3, public/track3.mp3
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Format time in MM:SS
export function formatTime(seconds: number): string {
  if (!seconds || isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Demo tracks - update these to match your actual audio files
export const defaultTracks: Track[] = [
  { name: "Blackedout Baseline", src: "/track1.mp3" },
  { name: "F*CK AROUND & FIND OUT \u2014 Redneck Outlaw", src: "/track2.mp3" },
  { name: "3AM \u2022 Country Lunatic", src: "/track3.mp3" },
];