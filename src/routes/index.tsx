import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, useCallback } from "react";
import { Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import heroImg from "@/assets/hero.jpg";
import studioImg from "@/assets/studio.jpg";
import needleImg from "@/assets/needle.jpg";
import knucklesImg from "@/assets/knuckles.jpg";
import tattoo1 from "@/assets/pink-teddy-bear-heart-tattoo.png";
import tattoo2 from "@/assets/baby-footprints-memorial-tattoo.png";
import tattoo3 from "@/assets/rose-script-memorial-tattoo.png";
import tattoo4 from "@/assets/stitched-rag-doll-tattoo.png";
import tattoo5 from "@/assets/purple-rose-frame-tattoo.png";
import tattoo6 from "@/assets/purple-rose-tattoo.png";
import tattoo7 from "@/assets/cartoon-turtle-tattoo.png";
import tattoo8 from "@/assets/black-butterfly-tattoo.png";
import tattoo9 from "@/assets/cracked-hole-3d-tattoo.png";
import tattoo10 from "@/assets/black-grey-cross-tattoo.png";
import tattoo11 from "@/assets/blue-flower-script-tattoo.jpeg";
import tattoo12 from "@/assets/cowboy-clown-tattoo.jpeg";
import tattoo13 from "@/assets/owl-eye-realism-tattoo.jpeg";
import tattoo14 from "@/assets/texas-card-symbol-tattoo.jpeg";
import tattoo15 from "@/assets/angel-memorial-tattoo.jpeg";
import tattoo16 from "@/assets/crown-roses-leg-tattoo.jpeg";
import tattoo17 from "@/assets/grim-reaper-sketch-tattoo.jpeg";
import tattoo18 from "@/assets/religious-cross-leg-tattoo.jpeg";
import tattoo19 from "@/assets/winged-cross-back-tattoo.jpeg";
import tattoo20 from "@/assets/jesus-portrait-memorial-tattoo.jpeg";
import tattoo21 from "@/assets/texan-star-western-tattoo.jpeg";
import tattoo22 from "@/assets/red-skull-hand-tattoo.jpeg";
import tattoo23 from "@/assets/red-rose-skull-hand-tattoo.jpeg";
import tattoo24 from "@/assets/rose-hand-tattoo.jpeg";
import tattoo26 from "@/assets/illuminati-skull-tattoo.jpeg";
import tattoo27 from "@/assets/flying-cardinal-tattoo.jpeg";
import tattoo28 from "@/assets/baby-yoda-tattoo.jpeg";
import tattoo29 from "@/assets/beast-claw-mark-tattoo.jpeg";
import tattoo30 from "@/assets/crescent-moon-star-tattoo.jpeg";
import tattoo31 from "@/assets/geometric-eye-triangle-tattoo.jpeg";
import tattoo32 from "@/assets/microphone-realism-tattoo.jpeg";
import tattoo34 from "@/assets/royal-crown-tattoo.jpeg";
import tattoo35 from "@/assets/venom-mask-tattoo.jpeg";
import tattoo38 from "@/assets/rose-dreamcatcher-color-tattoo.jpeg";
import tattoo39 from "@/assets/forest-triangle-tattoo.jpeg";
import tattoo40 from "@/assets/wolf-head-dark-tattoo.jpeg";
import tattoo41 from "@/assets/royal-crown-tattoo.jpeg";
import tattoo42 from "@/assets/tattoo-artist-photo.png";
import tattoo43 from "@/assets/bar-photo.jpeg";
import tattoo44 from "@/assets/customer-photo.jpeg";
import tattoo45 from "@/assets/motorcycle-night-photo.jpeg";
import tattoo46 from "@/assets/drink-photo.jpeg";
import tattoo47 from "@/assets/tattoo-life-magazine-cover.jpeg";
import tattoo48 from "@/assets/tattoo-biz-magazine-cover.jpeg";
import tattoo49 from "@/assets/tattoo-convention-photo.png";
import tattoo50 from "@/assets/tattoo-artist-client-photo.jpeg";
import tattoo51 from "@/assets/reaper-skull-dark-tattoo.jpeg";
import tattoo52 from "@/assets/skull-rose-memorial-tattoo.jpeg";
import tattoo53 from "@/assets/grim-reaper-hand-tattoo.jpeg";
import tattoo54 from "@/assets/skull-rose-portrait-tattoo.jpeg";
import tattoo55 from "@/assets/lion-shield-portrait.jpeg";
import tattoo56 from "@/assets/angel-wings-memorial.jpeg";
import tattoo57 from "@/assets/blue-rose-portrait.jpeg";
import tattoo58 from "@/assets/skull-angel-memorial.png";
import tattoo59 from "@/assets/skull-rose-sketch.jpeg";
import tattoo60 from "@/assets/angel-memorial-dark.jpeg";
import thomasImg from "@/assets/bar-photo.jpeg";
import { MusicSettingsPanel, defaultTracks } from "@/components/music-settings-panel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "All Hustle No Luck Tattoo | Brownsboro, TX" },
      { name: "description", content: "Dark, gritty, custom tattoo work in Brownsboro, TX. Black & grey, traditional, fine line, geometric, cover-ups." },
      { property: "og:title", content: "All Hustle No Luck Tattoo" },
      { property: "og:description", content: "No shortcuts. No luck. Just pure hustle." },
      { property: "og:image", content: heroImg },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Black+Ops+One&family=Lobster&family=Oswald:wght@400;700&family=Anton&family=Russo+One&family=Bungee&family=Inter:wght@300;400;500&display=swap" },
    ],
  }),
  component: Index,
});

const nav = [
  { href: "#manifesto", label: "01 / Manifesto" },
  { href: "#ink", label: "02 / Ink" },
  { href: "#works", label: "03 / Works" },
  { href: "#rituals", label: "04 / Rituals" },
  { href: "#summon", label: "05 / Summon" },
];

const services = [
  { n: "I", title: "Black & Grey Realism", desc: "Portraits drawn from photographs. Shadows that breathe." },
  { n: "II", title: "Traditional / Neo-Trad", desc: "Heavy outlines. Saturated black. Built to last fifty years." },
  { n: "III", title: "Fine Line & Script", desc: "Whisper-thin work. Single needles, single passes." },
  { n: "IV", title: "Geometric & Mandala", desc: "Sacred symmetry, dotwork, mathematical precision." },
  { n: "V", title: "Custom Originals", desc: "Drawn for you. Worn only by you. No flash." },
  { n: "VI", title: "Cover-Ups", desc: "Old regrets transformed. We bury the past in new ink." },
];

const works = [
  { src: tattoo1, title: "Pink Teddy Bear Heart", meta: "Memorial" },
  { src: tattoo2, title: "Baby Footprints", meta: "Memorial" },
  { src: tattoo3, title: "Rose Script Memorial", meta: "Script" },
  { src: tattoo4, title: "Chucky", meta: "Horror" },
  { src: tattoo5, title: "Purple Rose Frame", meta: "Floral" },
  { src: tattoo6, title: "Purple Rose", meta: "Floral" },
  { src: tattoo7, title: "Cartoon Turtle", meta: "Custom" },
  { src: tattoo8, title: "Black Butterfly", meta: "Traditional" },
  { src: tattoo9, title: "Cracked Hole 3D", meta: "Realism" },
  { src: tattoo10, title: "Black & Grey Cross", meta: "Black & Grey" },
  { src: tattoo11, title: "Blue Flower Script", meta: "Script" },
  { src: tattoo12, title: "Cowboy Clown", meta: "Custom" },
  { src: tattoo13, title: "Owl Eye Realism", meta: "Realism" },
  { src: tattoo14, title: "Texas Card Symbol", meta: "Traditional" },
  { src: tattoo15, title: "Angel Memorial", meta: "Memorial" },
  { src: tattoo16, title: "Crown & Roses Leg", meta: "Floral" },
  { src: tattoo17, title: "Grim Reaper Sketch", meta: "Black Work" },
  { src: tattoo18, title: "Religious Cross Leg", meta: "Traditional" },
  { src: tattoo19, title: "Winged Cross Back", meta: "Traditional" },
  { src: tattoo20, title: "Memorabilia", meta: "Memorial" },
  { src: tattoo21, title: "Texan Star Western", meta: "Custom" },
  { src: tattoo22, title: "Red Skull Hand", meta: "Black Work" },
  { src: tattoo23, title: "Red Rose Skull Hand", meta: "Black & Grey" },
  { src: tattoo24, title: "Red Rose Hand", meta: "Floral" },
  { src: tattoo26, title: "Illuminati Skull", meta: "Dark" },
  { src: tattoo27, title: "Flying Cardinal", meta: "Color" },
  { src: tattoo28, title: "Baby Yoda", meta: "Pop Culture" },
  { src: tattoo29, title: "Beast Claw Mark", meta: "Custom" },
  { src: tattoo30, title: "Crescent Moon Star", meta: "Geometric" },
  { src: tattoo31, title: "Geometric Eye Triangle", meta: "Geometric" },
  { src: tattoo32, title: "Microphone Realism", meta: "Realism" },
  { src: tattoo34, title: "Royal Crown", meta: "Custom" },
  { src: tattoo35, title: "Venom Mask", meta: "Pop Culture" },
  { src: tattoo38, title: "Rose Dreamcatcher Color", meta: "Color" },
  { src: tattoo39, title: "Forest Triangle", meta: "Geometric" },
  { src: tattoo40, title: "Wolf Head Dark", meta: "Black Work" },
  { src: tattoo41, title: "Royal Crown", meta: "Custom" },
  { src: tattoo42, title: "Tattoo Artist At Work", meta: "Studio" },
  { src: tattoo43, title: "Couple At The Bar", meta: "Lifestyle" },
  { src: tattoo44, title: "Customer Portrait", meta: "Studio" },
  { src: tattoo45, title: "Motorcycle Night", meta: "Custom" },
  { src: tattoo46, title: "Couple Drinks", meta: "Lifestyle" },
  { src: tattoo47, title: "Tattoo Life Magazine", meta: "Feature" },
  { src: tattoo48, title: "Tattoo Biz Magazine", meta: "Feature" },
  { src: tattoo49, title: "Tattoo Convention", meta: "Event" },
  { src: tattoo50, title: "Artist & Client", meta: "Studio" },
  { src: tattoo51, title: "All Hustle No Luck", meta: "Studio" },
  { src: tattoo52, title: "Fluorescent Ink", meta: "UV" },
  { src: tattoo53, title: "Glow Work", meta: "UV" },
  { src: tattoo54, title: "Tattoo Shop", meta: "Studio" },
  { src: tattoo55, title: "Tattoo Shop", meta: "Studio" },
  { src: tattoo56, title: "Tattoo Shop", meta: "Studio" },
  { src: tattoo57, title: "Tattoo Shop", meta: "Studio" },
  { src: tattoo58, title: "All Hustle No Luck", meta: "Studio" },
  { src: tattoo59, title: "All Hustle No Luck", meta: "Studio" },
  { src: tattoo60, title: "All Hustle No Luck", meta: "Studio" },
];

const faqs = [
  { q: "How long does a tattoo take?", a: "Depends on size and complexity. Small pieces: 1-3 hrs. Medium: 4-8 hrs. Large pieces can take multiple sessions." },
  { q: "Do you take walk-ins?", a: "By appointment only. Send us your idea through the form and we'll get back to you within 24-48 hours." },
  { q: "Can you cover an old tattoo?", a: "Yes. We specialize in cover-ups. Send us photos of your existing tattoo and we'll design something to transform it." },
  { q: "How much does it cost?", a: "Pricing depends on size, placement, and time needed. We don't do minimums — pay for what your piece requires." },
  { q: "Do you do custom designs only?", a: "Yes. Every piece is custom-drawn for you. We don't use flash or stock designs." },
];

const testimonials = [
  { name: "Marcus T.", text: "T. took my vision and made it real. First tattoo and I was nervous, but the whole experience was professional and the result speaks for itself.", service: "Black & Grey Sleeve" },
  { name: "Sarah K.", text: "Covered my old regret with something I'm proud of. The attention to detail is unreal. Worth every penny.", service: "Cover-Up" },
  { name: "Derek M.", text: "Fine line work that's been holding up perfectly for 2 years. This guy knows what he's doing.", service: "Fine Line Script" },
];

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setSeen(true), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, seen };
}

function Index() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [maxScroll, setMaxScroll] = useState(1);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [musicPanelOpen, setMusicPanelOpen] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const visualizerBarsRef = useRef<(HTMLDivElement | null)[]>([]);
  const mainTitleRef = useRef<HTMLHeadingElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationRef = useRef<number | null>(null);
  const isPlayingRef = useRef(false);
  const audioDataRef = useRef<Uint8Array>(new Uint8Array(64));
  // Separate refs for audio levels to avoid re-renders
  const bassLevelRef = useRef(0);
  const midLevelRef = useRef(0);
  const trebleLevelRef = useRef(0);
  const overallLevelRef = useRef(0);
  const beatLevelRef = useRef(0);
  const energyLevelRef = useRef(0);
  const subBassLevelRef = useRef(0);
  const drip1Ref = useRef<HTMLElement | null>(null);
  const drip2Ref = useRef<HTMLElement | null>(null);
  const knucklesTitleRef = useRef<HTMLHeadingElement | null>(null);
  const knucklesSubRef = useRef<HTMLSpanElement | null>(null);
  const buildUpRef = useRef<{ intensity: number; lastPeak: number }>({ intensity: 0, lastPeak: 0 });
  const barBuildUpRef = useRef<{ buildup: number; peakTime: number }[]>([]);


  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY);
      setMaxScroll(Math.max(1, document.documentElement.scrollHeight - window.innerHeight));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const setupAudioAnalyzer = () => {
    if (!audioRef.current || !audioContextRef.current) return;
    try {
      const source = audioContextRef.current.createMediaElementSource(audioRef.current);
      const analyser = audioContextRef.current.createAnalyser();
      analyser.fftSize = 128;
      source.connect(analyser);
      analyser.connect(audioContextRef.current.destination);
      analyserRef.current = analyser;
    } catch (e) {
      // Source may already be connected
    }
  };

  const updateAudioData = useCallback(() => {
    if (!isPlayingRef.current) return;
    
    const t = Date.now();
    let bass = 0, mid = 0, treble = 0, overall = 0, beat = 0, energy = 0, subBass = 0;
    let dropIntensity = 0; // Default for real audio, updated in fake audio block
    
    if (analyserRef.current) {
      const data = new Uint8Array(analyserRef.current.frequencyBinCount);
      analyserRef.current.getByteFrequencyData(data);
      audioDataRef.current = data;
      
      // Enhanced bass detection - focus on sub-bass (0-2) and bass (2-6)
      const subBassVal = data.slice(0, 2).reduce((a, b) => a + b, 0) / (2 * 255);
      bass = data.slice(0, 6).reduce((a, b) => a + b, 0) / (6 * 255);
      mid = data.slice(6, 16).reduce((a, b) => a + b, 0) / (10 * 255);
      treble = data.slice(16, 40).reduce((a, b) => a + b, 0) / (24 * 255);
      overall = data.reduce((a, b) => a + b, 0) / (data.length * 255);
      
      // Aggressive beat detection with peak tracking
      const peakThreshold = 0.65;
      const isPeak = bass > peakThreshold && bass > bassLevelRef.current;
      beat = isPeak ? Math.min(1, bass * 1.2) : (bassLevelRef.current > 0.6 ? bassLevelRef.current * 0.8 : 0);
      
      // Sub-bass for heavy drops
      subBass = subBassVal;
      
      // Energy multiplier for drops
      energy = Math.min(1, (bass * 2 + mid + treble) / 4 + beat * 0.5);
      
      // For real audio, detect major drops from subBass peaks
      dropIntensity = subBass > 0.5 ? subBass : 0;
    } else {
      // Dramatic fake audio with bass drops and peaks
      const fakeT = t / 100;
      
      // Create a rhythm pattern with occasional massive bass drops
      const beatPhase = fakeT * 4; // 4 beats per second base
      const measurePhase = fakeT * 1; // measures every ~6 seconds
      
      // Main bass pattern - every beat
      const beatPulse = Math.sin(beatPhase * Math.PI * 2);
      const halfBeatPulse = Math.sin(beatPhase * Math.PI * 4);
      
      // Drop pattern - happens every ~8 seconds
      const dropCycle = Math.sin(fakeT * 0.8);
      dropIntensity = Math.pow(Math.max(0, dropCycle), 2);
      
      // Build bass with drops
      bass = 0.3 + beatPulse * 0.25 + dropIntensity * 0.45;
      
      // Sub bass for extra impact
      subBass = dropIntensity * 0.8 + beatPulse * 0.15;
      subBass = Math.max(0, Math.min(1, subBass));
      
      // Mid follows but delayed
      mid = 0.3 + Math.sin(beatPhase * Math.PI * 2 + 0.3) * 0.2 + dropIntensity * 0.3;
      
      // Treble reacts to drops but less
      treble = 0.25 + Math.sin(beatPhase * Math.PI * 2 + 1) * 0.15 + dropIntensity * 0.25;
      
      // Overall energy
      overall = (bass + mid + treble) / 3;
      
      // Beat detection
      beat = (beatPulse > 0.7 || dropIntensity > 0.7) ? Math.min(1, (beatPulse > 0.7 ? beatPulse : dropIntensity) * 1.1) : 0;
      
      // Energy for filters
      energy = Math.min(1, overall * 1.4 + beat * 0.6 + subBass * 0.4);
      
      // Clamp all values
      bass = Math.max(0, Math.min(1, bass));
      mid = Math.max(0, Math.min(1, mid));
      treble = Math.max(0, Math.min(1, treble));
      overall = Math.max(0, Math.min(1, overall));
    }
    
    // Store in refs
    bassLevelRef.current = bass;
    midLevelRef.current = mid;
    trebleLevelRef.current = treble;
    overallLevelRef.current = overall;
    beatLevelRef.current = beat;
    energyLevelRef.current = energy;
    subBassLevelRef.current = subBass;
    
    // Update visualizer bars - dramatic reaction
    const bars = visualizerBarsRef.current;
    if (bars && bars.length > 0) {
      bars.forEach((bar, i) => {
        if (!bar) return;
        let value = 0;
        
        if (analyserRef.current && audioDataRef.current.length > 0) {
          const data = audioDataRef.current;
          // Bass bars (0-3) get bass data directly
          if (i < 4) {
            value = data[Math.min(i, data.length - 1)] || 0;
          } else if (i < 10) {
            value = data[4 + Math.floor((i - 4) * 1.5)] || 0;
          } else {
            value = data[12 + Math.floor((i - 10) * 2)] || 0;
          }
        } else {
          // Fake visualization with dramatic bass drops
          const phase = t / 70 + i * 0.6;
          const wave = Math.sin(phase);
          const bassWave = Math.sin(t / 50 + i * 0.3);
          const dropWave = Math.sin(t / 30 + i * 0.2);
          
          // Each bar reacts differently to bass
          const bassInfluence = i < 6 ? bass : (i < 12 ? mid : treble);
          value = bassInfluence * 220 + wave * 30 + bassWave * beat * 80 + dropWave * subBass * 100;
        }
        
        // Initialize bar build-up data if needed
        if (!barBuildUpRef.current[i]) {
          barBuildUpRef.current[i] = { buildup: 0, peakTime: 0 };
        }
        const barData = barBuildUpRef.current[i];
        
        // Calculate height with beat impact and build-up
        const baseHeight = (value / 255) * 26;
        const beatBoost = beat * 14;
        const subBoost = subBass * 10;
        
        // Build-up: bars gain intensity when there's sustained energy
        if (baseHeight > 15 || beat > 0.5 || subBass > 0.5) {
          barData.buildup = Math.min(1, barData.buildup + 0.04);
          barData.peakTime = t;
        } else {
          barData.buildup = Math.max(0, barData.buildup - 0.015);
        }
        const buildBoost = barData.buildup * 12;
        
        const height = Math.max(4, Math.min(35, baseHeight + beatBoost + subBoost + buildBoost + Math.sin(t / 60 + i) * 2));
        
        bar.style.height = `${height}px`;
        
        // Color shifts based on frequency - more muted during normal playback
        const hue = 15 + treble * 20 + subBass * 10;
        const sat = 60 + bass * 20 + beat * 15;
        const lit = 45 + overall * 15;
        bar.style.backgroundColor = `hsl(${hue}, ${sat}%, ${lit}%)`;
        
        // Glow effect on beats - capped to prevent visual overload
        if (height > 15 || beat > 0.6) {
          const glowIntensity = Math.min(Math.max(height * 0.8, beat * 10), 20);
          bar.style.boxShadow = `0 0 ${glowIntensity}px hsl(${hue}, 85%, 50%)`;
        } else {
          bar.style.boxShadow = 'none';
        }
      });
    }
    
    // Update main title - ALL HUSTLE NO LUCK with constant floating, beat shakes, and big drop reactions
    if (mainTitleRef.current) {
      const spans = mainTitleRef.current.querySelectorAll('span');
      if (spans.length >= 4) {
        const floatTime = t / 1000;
        
        // Detect major bass drop moments for BIG reactions
        const isMajorDrop = subBass > 0.6 || (bass > 0.7 && dropIntensity > 0.5);
        const isBeat = beat > 0.5;
        
        // Track major drop state with decay - only stay big during actual drop, then decay fast
        // Initialize lastPeak on first frame to avoid huge timeSinceDrop value
        if (buildUpRef.current.lastPeak === 0 && !isMajorDrop) {
          buildUpRef.current.lastPeak = t; // Initialize to current time
        }
        if (isMajorDrop) {
          buildUpRef.current.intensity = Math.min(1, buildUpRef.current.intensity + 0.15); // Quick spike on drop
          buildUpRef.current.lastPeak = t;
        } else {
          // Fast decay after drop - return to small quickly
          const timeSinceDrop = t - buildUpRef.current.lastPeak;
          if (timeSinceDrop > 200) { // After 200ms, start decaying
            buildUpRef.current.intensity = Math.max(0, buildUpRef.current.intensity - 0.08);
          }
        }
        const dropBoost = buildUpRef.current.intensity;
        const isDropping = dropBoost > 0.1; // Only react big when there's actual drop intensity
        
        // Smooth bass-synchronized movement - no jitter, just smooth pulsing with bass
        const bassPulse = bass * 2 + beat * 1.5;
        
        // ALL - smooth float, stays normal size when music off, subtle reaction when on
        const allFloat = Math.sin(floatTime * 1.5) * (1 + bass * 0.5);
        const allScale = 1 + (isDropping ? dropBoost * 0.05 : 0) + (bass > 0.5 ? bass * 0.02 : 0);
        const allTranslateY = allFloat;
        
        spans[0].style.transform = `scale(${allScale}) translateY(${allTranslateY}px)`;
        spans[0].style.textShadow = isDropping ? `0 0 30px var(--primary), 0 0 60px var(--primary)` : '0 0 15px var(--primary), 0 0 30px var(--primary)';
        spans[0].style.filter = isDropping ? `brightness(${1 + dropBoost * 0.3})` : `brightness(${1 + bass * 0.1})`;
        spans[0].style.color = isDropping ? `hsl(15, 90%, ${60 + dropBoost * 10}%)` : '';
        
        // HUSTLE - biggest but still subtle
        const hustleFloat = Math.sin(floatTime * 1.8 + 1) * (1 + bass * 0.6);
        const hustleScale = 1 + (isDropping ? dropBoost * 0.08 : 0) + (bass > 0.5 ? bass * 0.03 : 0);
        const hustleTranslateY = hustleFloat;
        
        spans[1].style.transform = `scale(${hustleScale}) translateY(${hustleTranslateY}px)`;
        spans[1].style.textShadow = isDropping ? `0 0 40px var(--primary), 0 0 80px var(--primary)` : '0 0 15px var(--primary), 0 0 30px var(--primary)';
        spans[1].style.filter = isDropping ? `brightness(${1 + dropBoost * 0.5}) saturate(${1 + dropBoost * 0.3})` : `brightness(${1 + bass * 0.15})`;
        spans[1].style.letterSpacing = isDropping ? `${0.06 + dropBoost * 0.05}em` : '0.06em';
        spans[1].style.color = isDropping ? `hsl(15, 100%, ${65 + dropBoost * 10}%)` : '';
        
        // NO - very minimal
        const noFloat = Math.sin(floatTime * 1.2 + 2) * (1 + bass * 0.3);
        const noScale = 1 + (isDropping ? dropBoost * 0.03 : 0);
        const noTranslateY = noFloat;
        
        spans[2].style.transform = `scale(${noScale}) translateY(${noTranslateY}px)`;
        spans[2].style.textShadow = isDropping ? `0 0 15px var(--bone)` : 'none';
        spans[2].style.filter = isDropping ? `brightness(${1 + dropBoost * 0.1})` : `brightness(${1 + bass * 0.05})`;
        
        // LUCK
        const luckFloat = Math.sin(floatTime * 2 + 3) * (1 + bass * 0.5);
        const luckScale = 1 + (isDropping ? dropBoost * 0.06 : 0) + (bass > 0.5 ? bass * 0.025 : 0);
        const luckTranslateY = luckFloat;
        
        spans[3].style.transform = `scale(${luckScale}) translateY(${luckTranslateY}px)`;
        spans[3].style.textShadow = isDropping ? `0 0 40px var(--primary), 0 0 80px var(--primary)` : '0 0 15px var(--primary), 0 0 30px var(--primary)';
        spans[3].style.filter = isDropping ? `brightness(${1 + dropBoost * 0.4}) saturate(${1 + dropBoost * 0.3})` : `brightness(${1 + bass * 0.1})`;
        spans[3].style.letterSpacing = isDropping ? `${0.06 + dropBoost * 0.04}em` : '0.06em';
        spans[3].style.color = isDropping ? `hsl(15, 100%, ${60 + dropBoost * 10}%)` : '';
      }
    }
    
    // Update drip elements directly
    const drip1 = document.querySelector('.drip-1') as HTMLElement;
    const drip2 = document.querySelector('.drip-2') as HTMLElement;
    if (drip1) {
      drip1.style.height = `${140 + bass * 250 + subBass * 150}px`;
      drip1.style.opacity = `${0.5 + bass * 0.5 + beat * 0.3}`;
    }
    if (drip2) {
      drip2.style.height = `${100 + bass * 200 + subBass * 120}px`;
      drip2.style.opacity = `${0.4 + bass * 0.5 + beat * 0.3}`;
    }
    
    animationRef.current = requestAnimationFrame(updateAudioData);
  }, []);

  useEffect(() => {
    isPlayingRef.current = musicPlaying;
  }, [musicPlaying]);

  useEffect(() => {
    if (!musicPlaying && visualizerBarsRef.current) {
      // Reset visualizer bars to idle state
      visualizerBarsRef.current.forEach(bar => {
        if (bar) {
          bar.style.height = '4px';
          bar.style.backgroundColor = 'rgba(122, 57, 25, 0.4)';
          bar.style.boxShadow = 'none';
        }
      });
      // Reset title transforms
      if (mainTitleRef.current) {
        const spans = mainTitleRef.current.querySelectorAll('span');
        spans.forEach(span => {
          span.style.transform = 'scale(1) translateY(0) rotate(0deg)';
          span.style.textShadow = span.classList.contains('neon') ? '0 0 20px var(--primary), 0 0 40px var(--primary)' : 'none';
          span.style.filter = 'brightness(1)';
          span.style.letterSpacing = '0.06em';
        });
      }
      // Reset drips
      if (drip1Ref.current) { drip1Ref.current.style.height = '140px'; drip1Ref.current.style.opacity = '0.5'; }
      if (drip2Ref.current) { drip2Ref.current.style.height = '100px'; drip2Ref.current.style.opacity = '0.4'; }
      // Reset build-up state
      buildUpRef.current.intensity = 0;
      barBuildUpRef.current.forEach(bar => { if (bar) bar.buildup = 0; });        // Reset knuckles title with blackout reset
      if (knucklesTitleRef.current) {
        knucklesTitleRef.current.style.transform = 'scale(1)';
        knucklesTitleRef.current.style.textShadow = 'none';
        knucklesTitleRef.current.style.filter = 'brightness(1)';
        knucklesTitleRef.current.style.color = '';
      }
      if (knucklesSubRef.current) {
        knucklesSubRef.current.style.transform = 'scale(1)';
        knucklesSubRef.current.style.textShadow = '0 0 30px var(--primary), 0 0 60px var(--primary)';
        knucklesSubRef.current.style.filter = 'brightness(1)';
        knucklesSubRef.current.style.color = '';
      }
    }
  }, [musicPlaying]);

  useEffect(() => {
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (audioContextRef.current) audioContextRef.current.close();
    };
  }, []);
  const toggleMusic = () => {
    if (audioRef.current) {
      if (musicPlaying) {
        audioRef.current.pause();
        isPlayingRef.current = false;
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
          animationRef.current = null;
        }
      } else {
        if (!audioContextRef.current) {
          const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
          if (AudioContextClass) {
            audioContextRef.current = new AudioContextClass();
          }
        }
        if (audioContextRef.current?.state === 'suspended') {
          audioContextRef.current.resume();
        }
        isPlayingRef.current = true;
        audioRef.current.play().then(() => {
          if (!analyserRef.current && audioContextRef.current) {
            setupAudioAnalyzer();
          }
          if (animationRef.current) cancelAnimationFrame(animationRef.current);
          animationRef.current = requestAnimationFrame(updateAudioData);
        }).catch((e) => {
          isPlayingRef.current = false;
          console.log('Play failed:', e);
        });
      }
      setMusicPlaying(!musicPlaying);
    }
  };

  const handleTrackChange = (index: number) => {
    setCurrentTrack(index);
  };

  return (
    <div className="grain scanlines min-h-screen bg-background text-foreground relative">
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[101] bg-border">
        <div className="h-full bg-primary transition-all duration-100" style={{ width: `${Math.min(100, (scroll / maxScroll) * 100)}%` }} />
      </div>

      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-20 border-r border-border z-40 flex-col items-center justify-between py-8 bg-background/80 backdrop-blur">
        <a href="#top" className="font-stencil text-xs text-bone [writing-mode:vertical-rl] rotate-180 tracking-[0.4em]">
          ALL HUSTLE · NO LUCK
        </a>
        <div className="flex flex-col gap-6">
          {nav.map((n, i) => (
            <a key={n.href} href={n.href} className="group relative">
              <span className="block w-px h-10 bg-border group-hover:bg-primary transition-colors" />
              <span className="absolute left-6 top-0 font-mono-grit text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {String(i + 1).padStart(2, "0")} — {n.label.split(" / ")[1]}
              </span>
            </a>
          ))}
        </div>
        <div className="font-mono-grit text-[9px] text-muted-foreground [writing-mode:vertical-rl] rotate-180">
          EST · BROWNSBORO TX · MMXXVI
        </div>
      </aside>

      <header className="fixed top-0 inset-x-0 z-40 lg:pl-20">
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-border bg-background/70 backdrop-blur-md">
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleMusic}
              className="flex items-center gap-1.5 sm:gap-2 font-mono-grit text-bone hover:text-primary transition-colors group"
              aria-label={musicPlaying ? "Pause music" : "Play music"}
            >
              <div 
                className="relative flex items-end gap-[2px] h-6 w-10 sm:h-8 sm:w-12 px-1 py-1 rounded transition-all duration-100"
                style={{
                  backgroundColor: musicPlaying 
                    ? `rgba(122, 57, 25, 0.35)` 
                    : 'rgba(255,255,255,0.08)',
                  boxShadow: musicPlaying 
                    ? `0 0 15px rgba(122, 57, 25, 0.6)`
                    : '0 0 8px rgba(122, 57, 25, 0.2)',
                }}
              >
                {[...Array(16)].map((_, i) => (
                  <div
                    key={i}
                    ref={el => { visualizerBarsRef.current[i] = el; }}
                    className="w-1 sm:w-1.5 rounded-full"
                    style={{
                      height: '4px',
                      backgroundColor: 'rgba(122, 57, 25, 0.4)',
                    }}
                  />
                ))}
              </div>
              <span 
                className="font-stencil text-xs sm:text-sm tracking-wider transition-all duration-100 whitespace-nowrap"
                style={{
                  color: musicPlaying 
                    ? '#e85d26' 
                    : 'rgba(200, 180, 160, 0.8)',
                }}
              >
                {musicPlaying ? "MUSIC ON" : "MUSIC OFF"}
              </span>
            </button>
            <button
              onClick={() => setMusicPanelOpen(true)}
              className="p-1.5 sm:p-2 rounded-full border border-border text-bone hover:text-primary hover:border-primary transition-colors"
              aria-label="Open music settings"
            >
              <Settings className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
          
          <div className="lg:hidden font-stencil text-xs text-bone">A.H.N.L</div>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <a href="tel:9032582259" className="hidden md:block font-mono-grit text-[10px] text-bone hover:text-primary">+1 (903) 258-2259</a>
            <a href="#summon" className="font-stencil text-xs px-3 py-2 sm:px-4 sm:py-2 bg-primary text-primary-foreground hover:brightness-110 transition-colors">
              BOOK
            </a>
            <button className="lg:hidden text-bone p-1" onClick={() => setOpen(!open)} aria-label="Menu">
              <span className="text-lg">{open ? "✕" : "≡"}</span>
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden bg-background border-b border-border">
            <div className="px-4 py-6 flex flex-col gap-4">
              {nav.map(n => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="font-stencil text-base text-bone hover:text-primary">
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <audio ref={audioRef} loop>
        <source src={defaultTracks[currentTrack].src} type="audio/mpeg" />
      </audio>

      <MusicSettingsPanel
        isOpen={musicPanelOpen}
        onClose={() => setMusicPanelOpen(false)}
        audioRef={audioRef}
        currentTrack={currentTrack}
        onTrackChange={handleTrackChange}
        tracks={defaultTracks}
        isPlaying={musicPlaying}
        onPlayPause={toggleMusic}
      />

      <main className="lg:pl-20 relative">
        <section id="top" className="relative min-h-screen flex items-stretch overflow-hidden">
          <div className="relative w-full lg:w-1/2 flex flex-col justify-center px-5 sm:px-6 lg:px-16 py-24 sm:py-32 z-10 pr-0 lg:pr-0">
            <div className="splatter absolute inset-0 pointer-events-none" />
            <p className="font-mono-grit text-[9px] sm:text-[10px] text-primary mb-6 sm:mb-8 tracking-[0.3em] sm:tracking-[0.4em]">— EST. MMXXVI · BROWNSBORO TX —</p>
            <h1 ref={mainTitleRef} className="fade-up" style={{ overflow: 'visible' }}>
              <span className="block font-stencil text-[14vw] sm:text-[12vw] lg:text-[6vw] leading-[0.85] text-bone tracking-wider">ALL</span>
              <span className="block font-stencil text-[14vw] sm:text-[12vw] lg:text-[6vw] leading-[0.85] tracking-wider text-primary neon">HUSTLE</span>
              <span className="block font-stencil text-[14vw] sm:text-[12vw] lg:text-[6vw] leading-[0.85] text-bone tracking-wider">NO</span>
              <span className="block font-stencil text-[14vw] sm:text-[12vw] lg:text-[6vw] leading-[0.85] tracking-wider text-primary neon">LUCK</span>
              <span className="block mt-3 sm:mt-4 font-mono-grit text-[10px] sm:text-xs text-primary tracking-[0.4em] sm:tracking-[0.5em]">✦ BROWNSBORO TX ✦</span>
            </h1>
            <p className="mt-8 sm:mt-10 max-w-md text-xs sm:text-sm text-muted-foreground leading-relaxed font-mono-grit">
              [ A TATTOO STUDIO BUILT ON INK AND OBSESSION.
              NO FLASH WALLS. NO SHORTCUTS. EVERY PIECE — CUSTOM, EARNED, PERMANENT. ]
            </p>
            <div className="mt-8 sm:mt-12 flex flex-wrap gap-3">
              <a href="#summon" className="group relative font-stencil text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground overflow-hidden">
                <span className="relative z-10">SUMMON THE ARTIST →</span>
                <span className="absolute inset-0 bg-bone -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <span className="absolute inset-0 flex items-center justify-center text-background font-stencil text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity z-20">BOOK NOW ✦</span>
              </a>
              <a href="#works" className="font-stencil text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-4 border border-border text-bone hover:border-primary hover:text-primary transition-colors glitch">
                THE PORTFOLIO
              </a>
            </div>
            <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-3 sm:gap-4 max-w-md border-t border-border pt-4 sm:pt-6">
              {[{ n: "500+", l: "PIECES" }, { n: "10YR", l: "ON THE GUN" }, { n: "100%", l: "CUSTOM" }].map(s => (
                <div key={s.l}>
                  <div className="font-stencil text-2xl sm:text-3xl text-primary">{s.n}</div>
                  <div className="font-mono-grit text-[8px] sm:text-[9px] text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative w-1/2 vignette overflow-hidden">
            <img src={heroImg} alt="Tattoo artist hands with machine" width={1920} height={1280} className="absolute inset-0 w-full h-full object-cover" style={{ transform: `translateY(${scroll * 0.2}px) scale(1.1)` }} />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/70" />
            <div className="absolute inset-8 crt-corners pointer-events-none">
              <span /><span /><span /><span />
            </div>
            <div className="absolute top-12 right-12 font-mono-grit text-[10px] text-bone/60 text-right">
              <div>32.2929° N</div>
              <div>95.6225° W</div>
              <div className="mt-2 text-primary">REC ●</div>
            </div>
            <div className="absolute bottom-12 left-12 font-mono-grit text-[10px] text-bone/60">
              FRAME 001 / 666
            </div>
            <div 
              ref={el => { drip1Ref.current = el; }}
              className="drip-1 absolute top-0 left-1/3 w-[2px] bg-gradient-to-b from-primary to-transparent drip transition-all duration-75"
              style={{ 
                height: '140px',
                opacity: 0.5,
              }}
            />
            <div 
              ref={el => { drip2Ref.current = el; }}
              className="drip-2 absolute top-0 left-2/3 w-[2px] bg-gradient-to-b from-primary to-transparent drip transition-all duration-75"
              style={{ 
                height: '100px',
                opacity: 0.4,
                animationDelay: "1.5s",
              }}
            />
          </div>

          {/* Mobile hero image - visible on right side next to title */}
          <div className="lg:hidden absolute right-0 top-0 bottom-0 w-2/5 min-w-[160px] z-[5] overflow-hidden">
            <img src={heroImg} alt="Tattoo artist hands at work" className="w-full h-full object-cover opacity-70 sepia-[0.05] contrast-110" />
            <div className="absolute inset-0 bg-gradient-to-l from-background/50 via-background/20 to-transparent" />
          </div>
          {/* Subtle background still visible */}
          <div className="lg:hidden absolute inset-0 -z-10">
            <img src={heroImg} alt="" className="w-full h-full object-cover opacity-15" />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono-grit text-[10px] text-muted-foreground flex flex-col items-center gap-2">
            <span>SCROLL TO ENTER</span>
            <span className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
          </div>
        </section>

        <section className="relative border-y border-border bg-primary/10 overflow-hidden py-4 sm:py-6 skew-bar">
          <div className="flex marquee-track gap-8 sm:gap-12 whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, j) => (
              <div key={j} className="flex gap-8 sm:gap-12 items-center">
                {["NO LUCK", "✦", "ONLY HUSTLE", "✦", "INK · OBSESSION", "✦", "BROWNSBORO TX", "✦", "EST. MMXXVI", "✦", "CUSTOM WORK ONLY", "✦", "WALK-INS BY APPT", "✦"].map((t, i) => (
                  <span key={i} className="font-stencil text-xl sm:text-2xl md:text-4xl lg:text-5xl text-bone hover:text-primary transition-colors">{t}</span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <Manifesto />

        <section className="relative h-[30vh] sm:h-[40vh] md:h-[50vh] overflow-hidden border-y border-border">
          <img src={knucklesImg} alt="HUSTLE LUCK knuckles tattoo" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-70" style={{ transform: `translateY(${(scroll - 1200) * 0.15}px)` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/80" />
          <div className="relative h-full flex items-center justify-center">
            <h2 
              ref={el => { knucklesTitleRef.current = el; }}
              className="font-grit text-2xl sm:text-4xl md:text-6xl lg:text-8xl text-bone text-center px-4 sm:px-6 flicker leading-none tracking-wide"
            >
              BUILT ON KNUCKLES<br /><span ref={el => { knucklesSubRef.current = el; }} className="text-primary">NOT PRAYERS</span>
            </h2>
          </div>
        </section>

        <Services />
        <Works />
        <Rituals />
        <FAQ />
        <ArtistBio />
        <Testimonials />

        <section className="relative h-[50vh] sm:h-[70vh] overflow-hidden border-y border-border">
          <img src={studioImg} alt="Studio interior at night" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute bottom-8 sm:bottom-12 left-4 sm:left-12 right-4 sm:right-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6">
            <div>
              <p className="font-mono-grit text-[10px] text-primary tracking-[0.4em] mb-2 sm:mb-4">— THE CHAPEL —</p>
              <h2 className="font-grit text-2xl sm:text-3xl md:text-5xl text-bone tracking-wide">WHERE THE INK<br />MEETS THE FLESH</h2>
            </div>
            <p className="font-mono-grit text-xs text-muted-foreground max-w-xs">
              11946 FM 314 NORTH<br />
              BROWNSBORO, TX 75756<br />
              <span className="text-primary">↳ OPEN MON–SAT · 9AM–2AM</span>
            </p>
          </div>
        </section>

        <Summon />
        <Footer />
      </main>
    </div>
  );
}

function Manifesto() {
  const { ref, seen } = useReveal();
  return (
    <section id="manifesto" ref={ref} className="relative py-20 sm:py-32 px-5 sm:px-6 lg:px-16 overflow-hidden">
      <div className="splatter absolute inset-0 pointer-events-none opacity-50" />
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        <div className="lg:col-span-2 lg:sticky lg:top-32">
          <p className="font-mono-grit text-[10px] text-primary tracking-[0.4em]">01</p>
          <p className="font-mono-grit text-[10px] text-muted-foreground mt-2">MANIFESTO</p>
        </div>
        <div className={`lg:col-span-7 ${seen ? "fade-up" : "opacity-0"}`}>
          <h2 className="font-grit text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-bone leading-[0.9] tracking-wide">
            WE DON'T<br /><span className="text-primary">BELIEVE</span><br />IN LUCK.
          </h2>
          <div className="mt-8 sm:mt-12 space-y-4 sm:space-y-6 text-bone/80 leading-relaxed text-base sm:text-lg max-w-xl">
            <p>
              Every line is a decision. Every shadow, a thousand small commitments. We do not chase trends. We do not run flash. We do not promise quick.
            </p>
            <p className="text-muted-foreground">
              What we promise is this — sit in the chair, and walk out wearing something earned. Drawn by hand, burned by needle, sealed by sweat. The mark stays. The reason stays with it.
            </p>
          </div>
          <div className="mt-8 sm:mt-12 font-hand text-xl sm:text-2xl text-primary tracking-widest">— THOMAS, RESIDENT —</div>
        </div>
        <div className="lg:col-span-3 relative">
          <div className="tape p-2 sm:p-3 rotate-[3deg]">
            <img src={needleImg} alt="Tattoo needle close-up" loading="lazy" width={1280} height={1280} className="w-full aspect-square object-cover reveal" />
            <p className="font-mono-grit text-[10px] text-muted-foreground mt-2 text-center">— EXHIBIT A · THE NEEDLE —</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="ink" className="relative py-20 sm:py-32 px-5 sm:px-6 lg:px-16 border-t border-border bg-card/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 sm:mb-16 flex-wrap gap-4">
          <div>
            <p className="font-mono-grit text-[10px] text-primary tracking-[0.4em] mb-4">02 / THE INK</p>
            <h2 className="font-stencil text-4xl sm:text-5xl md:text-7xl text-bone">WHAT WE BURN</h2>
          </div>
          <p className="font-mono-grit text-xs text-muted-foreground max-w-xs">
            // SIX DISCIPLINES · ONE OBSESSION
          </p>
        </div>
        <ul className="divide-y divide-border border-y border-border">
          {services.map((s) => (
            <li key={s.title} className="group grid grid-cols-12 gap-3 sm:gap-4 py-6 sm:py-8 hover:bg-primary/10 transition-colors cursor-pointer relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
              <div className="col-span-2 md:col-span-1 pl-4 font-display text-2xl sm:text-3xl text-primary/60 group-hover:text-primary transition-colors">{s.n}</div>
              <div className="col-span-10 md:col-span-5 font-stencil text-xl sm:text-2xl md:text-4xl text-bone group-hover:translate-x-2 sm:group-hover:translate-x-4 transition-transform duration-500">
                {s.title}
              </div>
              <div className="col-span-12 md:col-span-5 pl-6 md:pl-0 font-mono-grit text-xs text-muted-foreground self-center max-w-md">
                {s.desc}
              </div>
              <div className="hidden md:flex col-span-1 items-center justify-end pr-4 text-primary text-2xl opacity-0 group-hover:opacity-100 transition-opacity">→</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Works() {
  const [showAll, setShowAll] = useState(false);
  const VISIBLE_COUNT = 4;
  const visibleWorks = showAll ? works : works.slice(0, VISIBLE_COUNT);
  const hiddenCount = works.length - VISIBLE_COUNT;

  return (
    <section id="works" className="relative py-20 sm:py-32 px-5 sm:px-6 lg:px-16 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-16 flex flex-col sm:flex-row items-start sm:items-end justify-between flex-wrap gap-4">
          <div>
            <p className="font-mono-grit text-[10px] text-primary tracking-[0.4em] mb-4">03 / WORKS</p>
            <h2 className="font-stencil text-4xl sm:text-5xl md:text-7xl text-bone">FRESH<br />WOUNDS</h2>
          </div>
          <a href="https://www.facebook.com/p/All-Hustle-No-Luck-Tattoo-61558435770253/" target="_blank" rel="noopener noreferrer" className="font-mono-grit text-xs text-primary border-b border-primary pb-1 hover:text-bone hover:border-bone">VIEW ARCHIVE ON FACEBOOK →</a>
        </div>

        {/* Gallery grid with tattoo photos - styled as polaroid cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {visibleWorks.map((work, i) => (
            <figure 
              key={i} 
              className={`relative group ${i === 0 && !showAll ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              {/* Polaroid-style frame */}
              <div className={`relative bg-card p-2 sm:p-3 shadow-lg gallery-card ${i === 0 && !showAll ? 'featured' : ''}`}>
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Image container */}
                <div className="relative overflow-hidden">
                  <img 
                    src={work.src} 
                    alt={work.title} 
                    loading="lazy" 
                    className={`w-full object-cover gallery-img ${i === 0 && !showAll ? 'aspect-[4/5] max-h-[500px]' : 'aspect-[3/4]'}`}
                  />
                  {/* Subtle top glow line */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Caption bar - styled like photo sticker */}
                <div className="mt-2 sm:mt-3 px-1">
                  <p className="font-mono-grit text-[9px] sm:text-[10px] text-primary/70 tracking-[0.2em]">— {work.meta} —</p>
                  <h3 className="font-stencil text-bone text-sm sm:text-base leading-tight mt-1">{work.title}</h3>
                </div>
              </div>
              
              {/* Decorative elements - ink splatter dots */}
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute -bottom-1 -left-1 w-1 h-1 rounded-full bg-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100" />
            </figure>
          ))}
          
          {/* Show more card - styled as mystery polaroid */}
          {!showAll && hiddenCount > 0 && (
            <figure 
              className="relative group cursor-pointer"
              onClick={() => setShowAll(true)}
            >
              <div className="relative bg-card p-2 sm:p-3 shadow-lg gallery-card aspect-[3/4] flex flex-col">
                {/* Corner accents - same as regular cards */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/30 group-hover:border-primary transition-all duration-300" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-all duration-300" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/30 group-hover:border-primary transition-all duration-300" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/30 group-hover:border-primary transition-all duration-300" />
                
                {/* Blurred preview collage as background */}
                <div className="absolute inset-2 grid grid-cols-2 grid-rows-2 gap-[3px] overflow-hidden opacity-25 rounded-sm">
                  {works.slice(VISIBLE_COUNT, VISIBLE_COUNT + 4).map((work, i) => (
                    <img 
                      key={i}
                      src={work.src} 
                      alt=""
                      className="w-full h-full object-cover blur-sm scale-110" 
                      loading="lazy"
                    />
                  ))}
                </div>
                
                {/* Dark overlay */}
                <div className="absolute inset-2 bg-gradient-to-b from-background/90 via-background/70 to-background/90 backdrop-blur-sm rounded-sm" />
                
                {/* Content */}
                <div className="relative flex flex-col items-center justify-center h-full text-center z-10 px-2">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-primary/50 flex items-center justify-center mb-2 sm:mb-3 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500">
                    <span className="font-stencil text-2xl sm:text-3xl text-primary">+{hiddenCount}</span>
                  </div>
                  <span className="font-stencil text-bone text-base sm:text-lg tracking-wider">MORE WOUNDS</span>
                  <div className="mt-2 sm:mt-3 flex items-center gap-2">
                    <span className="w-3 h-[1px] bg-primary/50" />
                    <span className="font-mono-grit text-[9px] sm:text-[10px] text-primary tracking-[0.3em] animate-pulse">UNVEIL ALL</span>
                    <span className="w-3 h-[1px] bg-primary/50" />
                  </div>
                </div>
                
                {/* Ink splatter dots - same as regular cards */}
                <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute -bottom-1 -left-1 w-1 h-1 rounded-full bg-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100" />
              </div>
            </figure>
          )}
        </div>

        {/* Show less button when all are visible */}
        {showAll && (
          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => { setShowAll(false); document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="group relative font-stencil text-sm px-8 py-4 border-2 border-border text-bone hover:border-primary hover:text-primary transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary group-hover:bg-bone transition-colors duration-500" />
                SHOW LESS
                <span className="w-2 h-2 rounded-full bg-primary group-hover:bg-bone transition-colors duration-500" />
              </span>
              <span className="absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <span className="absolute inset-0 flex items-center justify-center text-background font-stencil text-sm opacity-0 group-hover:opacity-100 transition-opacity z-20">COLLAPSE</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function Caption({ title, meta, large }: { title: string; meta: string; large?: boolean }) {
  return (
    <figcaption className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-background via-background/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
      <p className="font-mono-grit text-[10px] text-primary tracking-[0.3em] mb-2">— {meta} —</p>
      <h3 className={`font-stencil text-bone ${large ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"}`}>{title}</h3>
    </figcaption>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section id="faq" className="relative py-20 sm:py-32 px-5 sm:px-6 lg:px-16 border-t border-border bg-card/30">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono-grit text-[10px] text-primary tracking-[0.4em] mb-4">05 / FAQ</p>
        <h2 className="font-stencil text-4xl sm:text-5xl md:text-7xl text-bone mb-8 sm:mb-16">QUESTIONS<br /><span className="text-primary">ANSWERED</span></h2>
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-primary/5 transition-colors"
              >
                <span className="font-stencil text-sm sm:text-lg text-bone">{faq.q}</span>
                <span className={cn(
                  "font-mono-grit text-xl sm:text-2xl text-primary transition-transform",
                  openIndex === i && "rotate-45"
                )}>+</span>
              </button>
              {openIndex === i && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="font-mono-grit text-xs sm:text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArtistBio() {
  return (
    <section className="relative py-20 sm:py-32 px-5 sm:px-6 lg:px-16 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 sm:gap-16 items-center">
        <div className="lg:col-span-5 relative">
          <div className="aspect-[3/4] relative">
            <img src={thomasImg} alt="Thomas - Artist" className="w-full h-full object-cover reveal" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
          {/* Decorative frame */}
          <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-16 sm:w-24 h-16 sm:h-24 border-t-2 border-l-2 border-primary" />
          <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-16 sm:w-24 h-16 sm:h-24 border-b-2 border-r-2 border-primary" />
        </div>
        <div className="lg:col-span-7">
          <p className="font-mono-grit text-[10px] text-primary tracking-[0.4em] mb-4">06 / THE ARTIST</p>
          <h2 className="font-stencil text-4xl sm:text-5xl md:text-7xl text-bone mb-6 sm:mb-8">THOMAS</h2>
          <div className="space-y-4 sm:space-y-6 text-bone/80 leading-relaxed">
            <p className="text-sm sm:text-base">
              Ten years behind the machine. Started in a garage, built through persistence. No family connections, no lucky breaks — just the grind.
            </p>
            <p className="text-sm sm:text-base">
              Every piece I do is drawn custom. I don't trace, I don't flash, I don't cut corners. If you want something that looks like everyone else's, you came to the wrong place.
            </p>
            <p className="text-sm sm:text-base">
              Based in Brownsboro, Texas. Working out of the chapel — a space built for one purpose: making marks that last.
            </p>
          </div>
          <div className="mt-8 sm:mt-12 flex flex-wrap gap-4 sm:gap-6">
            {[
              { label: "YEARS", value: "10+" },
              { label: "PIECES", value: "500+" },
              { label: "STYLE", value: "CUSTOM" },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="font-stencil text-3xl sm:text-4xl text-primary">{stat.value}</div>
                <div className="font-mono-grit text-[10px] text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative py-20 sm:py-32 px-5 sm:px-6 lg:px-16 border-t border-border bg-card/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono-grit text-[10px] text-primary tracking-[0.4em] mb-4">07 / WORD</p>
        <h2 className="font-stencil text-4xl sm:text-5xl md:text-7xl text-bone mb-8 sm:mb-16">FROM THE<br /><span className="text-primary">CHAIR</span></h2>
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="relative bg-background border border-border p-6 sm:p-8 group hover:border-primary transition-colors">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-stencil text-primary text-sm sm:text-base">{t.name[0]}</span>
                </div>
                <div>
                  <p className="font-stencil text-bone text-sm sm:text-base">{t.name}</p>
                  <p className="font-mono-grit text-[10px] text-muted-foreground">{t.service}</p>
                </div>
              </div>
              <p className="font-mono-grit text-xs sm:text-sm text-bone/80 leading-relaxed italic">"{t.text}"</p>
              <div className="mt-4 sm:mt-6 flex gap-1">
                {[1,2,3,4,5].map(s => (
                  <span key={s} className="text-primary text-sm sm:text-base">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Facebook social proof */}
        <div className="mt-10 sm:mt-16 flex items-center justify-center gap-4">
          <a 
            href="https://www.facebook.com/p/All-Hustle-No-Luck-Tattoo-61558435770253/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 border border-border hover:border-primary transition-colors group"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77,7.46H14.5v-1.9c0-1.44,1-2.26,2.26-2.26h.93V2.05c-.49,0-.88-.28-.88-.05V0h-2c0,1.42-.25,1.45-1.27,1.45H8.04V7.46H5.94v12.08h2.1V10.27h2.93l.58-2.81Z"/></svg>
            <span className="font-stencil text-xs sm:text-sm text-bone group-hover:text-primary transition-colors">Follow us on Facebook</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Rituals() {
  const steps = [
    { n: "i", title: "Consult", desc: "Bring the idea. Or the chaos. We'll find the shape together." },
    { n: "ii", title: "Sketch", desc: "Custom drawn. Revised until it's yours, not ours." },
    { n: "iii", title: "Burn", desc: "Hours in the chair. Patience meets needle meets skin." },
    { n: "iv", title: "Heal", desc: "Aftercare protocol. Touch-ups free within 60 days." },
  ];
  return (
    <section id="rituals" className="relative py-20 sm:py-32 border-t border-border overflow-hidden">
      <div className="px-5 sm:px-6 lg:px-16 mb-8 sm:mb-16 text-center">
        <p className="font-mono-grit text-[10px] text-primary tracking-[0.4em] mb-4">04 / RITUALS</p>
        <h2 className="font-stencil text-4xl sm:text-5xl md:text-7xl text-bone text-center">THE FOUR<br /><span className="text-primary">SACRAMENTS</span></h2>
      </div>
      <div className="overflow-x-auto pb-6 sm:pb-8 scrollbar-none">
        <div className="flex gap-4 sm:gap-6 px-5 sm:px-6 lg:px-16 min-w-max">
          {steps.map((s, i) => (
            <div key={s.title} className="w-[280px] sm:w-[300px] md:w-[420px] relative bg-card border border-border p-6 sm:p-8 group hover:border-primary transition-colors">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
              <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
                <span className="font-display text-4xl sm:text-5xl md:text-6xl text-primary">{s.n}</span>
                <span className="font-mono-grit text-[10px] text-muted-foreground mt-2">STEP {i + 1} / 4</span>
              </div>
              <h3 className="font-stencil text-xl sm:text-2xl md:text-3xl text-bone mb-3 sm:mb-4 tracking-wider text-center">{s.title.toUpperCase()}</h3>
              <p className="font-mono-grit text-xs text-muted-foreground leading-relaxed text-center">{s.desc}</p>
              <div className="mt-8 sm:mt-12 h-px bg-border">
                <div className="h-full bg-primary" style={{ width: `${((i + 1) / 4) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Summon() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    discipline: '',
    message: ''
  });
  const [saveStatus, setSaveStatus] = useState<'saved' | 'saving' | null>(null);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Auto-save form data to localStorage
  useEffect(() => {
    const saved = localStorage.getItem('ahnl-contact-form');
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage on form changes
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (formData.name || formData.email || formData.message) {
        setSaveStatus('saving');
        localStorage.setItem('ahnl-contact-form', JSON.stringify(formData));
        setSaveStatus('saved');
        setTimeout(() => setSaveStatus(null), 2000);
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitStatus('submitting');
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        localStorage.removeItem('ahnl-contact-form');
        // State is already cleared, form will re-render with empty values
        setFormData({ name: '', email: '', phone: '', discipline: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
    
    // Reset status after a few seconds
    setTimeout(() => setSubmitStatus('idle'), 4000);
  };

  return (
    <section id="summon" className="relative py-20 sm:py-32 px-5 sm:px-6 lg:px-16 border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-16">
        <div>
          <p className="font-mono-grit text-[10px] text-primary tracking-[0.4em] mb-4">05 / SUMMON</p>
          <h2 className="font-stencil text-4xl sm:text-5xl md:text-7xl text-bone leading-[0.9]">SIT IN<br />THE <span className="text-primary">CHAIR</span>.</h2>
          
          <div className="mt-8 sm:mt-10 space-y-4 sm:space-y-6">
            {[
              { l: "DIAL", v: "(903) 258-2259" },
              { l: "WIRE", v: "allhustlenolucktattoo@gmail.com" },
              { l: "VISIT", v: "11946 FM 314 N · Brownsboro, TX" },
              { l: "HOURS", v: "MON–SAT · 9AM – 2AM" },
            ].map(item => (
              <div key={item.l} className="group flex flex-col sm:flex-row items-start sm:items-baseline gap-2 sm:gap-6 border-b border-border pb-3 sm:pb-4 hover:border-primary transition-colors">
                <span className="font-mono-grit text-[10px] text-primary w-full sm:w-16 tracking-[0.3em]">{item.l}</span>
                <span className="font-stencil text-base sm:text-lg md:text-xl text-bone group-hover:text-primary transition-colors slice">{item.v}</span>
              </div>
            ))}
          </div>

        </div>

        <form action="https://formspree.io/f/xzdwydye" method="POST" onSubmit={handleSubmit} className="relative bg-background border border-border p-6 sm:p-8 md:p-10">
          {submitStatus === 'success' && (
            <div className="absolute inset-0 bg-background/95 flex items-center justify-center z-10">
              <div className="text-center">
                <div className="font-stencil text-3xl text-primary mb-2">✓ TRANSMITTED</div>
                <p className="font-mono-grit text-xs text-muted-foreground">We'll respond within 24–48 hours</p>
              </div>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="absolute inset-0 bg-destructive/20 flex items-center justify-center z-10">
              <div className="text-center">
                <div className="font-stencil text-xl text-destructive mb-2">TRANSMISSION FAILED</div>
                <p className="font-mono-grit text-xs text-muted-foreground">Try again or email directly</p>
              </div>
            </div>
          )}
          <input type="hidden" name="_subject" value="New Booking Request - All Hustle No Luck" />
          <div className="absolute inset-2 crt-corners pointer-events-none">
            <span /><span /><span /><span />
          </div>
          <div className="flex items-center justify-between mb-2">
            <p className="font-mono-grit text-[10px] text-primary tracking-[0.4em]">// TRANSMISSION FORM</p>
            {saveStatus && (
              <span className={cn(
                "font-mono-grit text-[10px] text-primary animate-pulse",
                saveStatus === 'saved' && "text-green-500"
              )}>
                {saveStatus === 'saving' ? "● SAVING..." : "✓ SAVED"}
              </span>
            )}
          </div>
          <h3 className="font-stencil text-xl sm:text-2xl text-bone mb-6 sm:mb-8">REQUEST A SESSION</h3>
          <div className="space-y-4 sm:space-y-5">
            <div>
              <label className="font-mono-grit text-[10px] text-primary block mb-2 tracking-[0.3em]">NAME</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="What do they call you" required className="w-full bg-input border border-border px-4 py-3 text-bone placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none font-mono-grit text-xs" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="font-mono-grit text-[10px] text-primary block mb-2 tracking-[0.3em]">EMAIL</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@inbox.dead" required className="w-full bg-input border border-border px-4 py-3 text-bone placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none font-mono-grit text-xs" />
              </div>
              <div>
                <label className="font-mono-grit text-[10px] text-primary block mb-2 tracking-[0.3em]">PHONE</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(555) 000-0000" className="w-full bg-input border border-border px-4 py-3 text-bone placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none font-mono-grit text-xs" />
              </div>
            </div>
            <div>
              <label className="font-mono-grit text-[10px] text-primary block mb-2 tracking-[0.3em]">DISCIPLINE</label>
              <select name="discipline" value={formData.discipline} onChange={handleChange} className="w-full bg-input border border-border px-4 py-3 text-bone focus:border-primary focus:outline-none font-mono-grit text-xs">
                <option>— Select —</option>
                {services.map(s => <option key={s.title}>{s.title}</option>)}
              </select>
            </div>
            <div>
              <label className="font-mono-grit text-[10px] text-primary block mb-2 tracking-[0.3em]">THE IDEA</label>
              <textarea required name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Subject. Size. Placement. References. Bleed it all out." className="w-full bg-input border border-border px-4 py-3 text-bone placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none resize-none font-mono-grit text-xs" />
            </div>
            <button type="submit" disabled={submitStatus === 'submitting'} className="w-full group relative bg-primary text-primary-foreground py-3 sm:py-4 font-stencil text-xs sm:text-sm overflow-hidden disabled:opacity-50">
              <span className="relative z-10">
                {submitStatus === 'submitting' ? 'TRANSMITTING...' : 'SEND THE SIGNAL ✦'}
              </span>
              <span className="absolute inset-0 bg-bone -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <span className="absolute inset-0 flex items-center justify-center text-background font-stencil text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity z-20">TRANSMITTING...</span>
            </button>
            <p className="font-mono-grit text-[10px] text-muted-foreground text-center">RESPONSE WITHIN 24–48 HOURS · NO BOTS</p>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-border py-16 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="font-stencil text-[15vw] leading-none text-primary/10 select-none pointer-events-none whitespace-nowrap overflow-hidden">
          NO LUCK
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-8 items-end">
          <div>
            <p className="font-display text-3xl text-bone">All Hustle</p>
            <p className="font-mono-grit text-xs text-muted-foreground mt-2">Custom tattoo studio · est. MMXXVI</p>
          </div>
          <div className="flex flex-col items-end gap-4">
            <p className="font-mono-grit text-xs text-muted-foreground">© 2026 All Rights Reserved · Brownsboro, Texas</p>
            <a 
              href="https://www.facebook.com/p/All-Hustle-No-Luck-Tattoo-61558435770253/?locale=nn_NO" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-stencil text-lg text-bone hover:text-primary transition-colors"
            >
              FOLLOW ON FB ✦
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="font-mono-grit text-[10px] text-primary block mb-2 tracking-[0.3em]">{label}</label>
      <input type={type} name={name} placeholder={placeholder} required={required} className="w-full bg-input border border-border px-4 py-3 text-bone placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none font-mono-grit text-xs" />
    </div>
  );
}
