import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero.jpg";
import studioImg from "@/assets/studio.jpg";
import needleImg from "@/assets/needle.jpg";
import knucklesImg from "@/assets/knuckles.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";

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
  { src: g1, title: "Skull & Roses Sleeve", meta: "Black & Grey · 14hrs" },
  { src: g2, title: "Reaper Back Piece", meta: "Black & Grey · 32hrs" },
  { src: g3, title: "Serpent Mandala", meta: "Linework · 6hrs" },
  { src: g4, title: "Dagger Chest", meta: "Traditional · 9hrs" },
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

  return (
    <div className="grain scanlines min-h-screen bg-background text-foreground relative">
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[101] bg-border">
        <div className="h-full bg-primary transition-all duration-100" style={{ width: `${Math.min(100, (scroll / maxScroll) * 100)}%` }} />
      </div>

      {/* Vertical side rail nav (desktop) */}
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

      {/* Top bar */}
      <header className="fixed top-0 inset-x-0 z-40 lg:pl-20">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-background/70 backdrop-blur-md">
          <div className="font-mono-grit text-[10px] text-muted-foreground hidden sm:block">
            <span className="text-primary">●</span> OPEN · MON–SAT · 9AM–2AM
          </div>
          <div className="lg:hidden font-stencil text-sm text-bone">A.H.N.L</div>
          <div className="flex items-center gap-4">
            <a href="tel:9032582259" className="hidden sm:block font-mono-grit text-[10px] text-bone hover:text-primary">+1 (903) 258-2259</a>
            <a href="#summon" className="font-stencil text-xs px-4 py-2 bg-primary text-primary-foreground hover:bg-blood transition-colors">
              BOOK
            </a>
            <button className="lg:hidden text-bone" onClick={() => setOpen(!open)} aria-label="Menu">
              <span className="text-xl">{open ? "✕" : "≡"}</span>
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden bg-background border-b border-border">
            <div className="px-6 py-6 flex flex-col gap-4">
              {nav.map(n => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="font-stencil text-lg text-bone hover:text-primary">
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="lg:pl-20">
        {/* HERO — asymmetric split */}
        <section id="top" className="relative min-h-screen flex items-stretch overflow-hidden">
          {/* Left text panel */}
          <div className="relative w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-16 py-32 z-10 bg-gradient-to-br from-background via-background to-background/80">
            <div className="splatter absolute inset-0 pointer-events-none" />
            <p className="font-mono-grit text-[10px] text-primary mb-8 tracking-[0.4em]">— EST. MMXXVI · BROWNSBORO TX —</p>
            <h1 className="fade-up">
              <span className="block font-stencil text-[12vw] lg:text-[6vw] leading-[0.85] text-bone tracking-wider">ALL</span>
              <span className="block font-stencil text-[12vw] lg:text-[6vw] leading-[0.85] tracking-wider text-primary neon">HUSTLE</span>
              <span className="block font-stencil text-[12vw] lg:text-[6vw] leading-[0.85] text-bone tracking-wider">NO</span>
              <span className="block font-stencil text-[12vw] lg:text-[6vw] leading-[0.85] tracking-wider text-primary neon">LUCK</span>
              <span className="block mt-4 font-mono-grit text-xs text-primary tracking-[0.5em]">✦ BROWNSBORO TX ✦</span>
            </h1>
            <p className="mt-10 max-w-md text-sm text-muted-foreground leading-relaxed font-mono-grit">
              [ A TATTOO STUDIO BUILT ON BLOOD, INK, AND OBSESSION.
              NO FLASH WALLS. NO SHORTCUTS. EVERY PIECE — CUSTOM, EARNED, PERMANENT. ]
            </p>
            <div className="mt-12 flex flex-wrap gap-3">
              <a href="#summon" className="group relative font-stencil text-xs px-8 py-4 bg-primary text-primary-foreground overflow-hidden">
                <span className="relative z-10">SUMMON THE ARTIST →</span>
                <span className="absolute inset-0 bg-bone -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <span className="absolute inset-0 flex items-center justify-center text-background font-stencil text-xs opacity-0 group-hover:opacity-100 transition-opacity z-20">BOOK NOW ✦</span>
              </a>
              <a href="#works" className="font-stencil text-xs px-8 py-4 border border-border text-bone hover:border-primary hover:text-primary transition-colors glitch">
                THE PORTFOLIO
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-4 max-w-md border-t border-border pt-6">
              {[{ n: "500+", l: "PIECES" }, { n: "10YR", l: "ON THE GUN" }, { n: "100%", l: "CUSTOM" }].map(s => (
                <div key={s.l}>
                  <div className="font-stencil text-3xl text-primary">{s.n}</div>
                  <div className="font-mono-grit text-[9px] text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right image panel */}
          <div className="hidden lg:block relative w-1/2 vignette overflow-hidden">
            <img src={heroImg} alt="Tattoo artist hands with machine" width={1920} height={1280} className="absolute inset-0 w-full h-full object-cover" style={{ transform: `translateY(${scroll * 0.2}px) scale(1.1)` }} />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/70" />
            {/* Corner markers */}
            <div className="absolute inset-8 crt-corners pointer-events-none">
              <span /><span /><span /><span />
            </div>
            {/* Floating coordinates */}
            <div className="absolute top-12 right-12 font-mono-grit text-[10px] text-bone/60 text-right">
              <div>32.2929° N</div>
              <div>95.6225° W</div>
              <div className="mt-2 text-primary">REC ●</div>
            </div>
            <div className="absolute bottom-12 left-12 font-mono-grit text-[10px] text-bone/60">
              FRAME 001 / 666
            </div>
            {/* Blood drip */}
            <div className="absolute top-0 left-1/3 w-[2px] h-32 bg-gradient-to-b from-blood to-transparent drip" />
            <div className="absolute top-0 left-2/3 w-[2px] h-24 bg-gradient-to-b from-blood to-transparent drip" style={{ animationDelay: "1.5s" }} />
          </div>

          {/* Mobile hero image */}
          <div className="lg:hidden absolute inset-0 -z-10">
            <img src={heroImg} alt="" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-background/40" />
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono-grit text-[10px] text-muted-foreground flex flex-col items-center gap-2">
            <span>SCROLL TO ENTER</span>
            <span className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
          </div>
        </section>

        {/* Marquee bar */}
        <section className="relative border-y border-border bg-blood/10 overflow-hidden py-6 skew-bar">
          <div className="flex marquee-track gap-12 whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, j) => (
              <div key={j} className="flex gap-12 items-center">
                {["NO LUCK", "✦", "ONLY HUSTLE", "✦", "INK · BLOOD · OBSESSION", "✦", "BROWNSBORO TX", "✦", "EST. MMXXVI", "✦", "CUSTOM WORK ONLY", "✦", "WALK-INS BY APPT", "✦"].map((t, i) => (
                  <span key={i} className="font-stencil text-3xl md:text-5xl text-bone hover:text-primary transition-colors">{t}</span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* MANIFESTO — broken grid */}
        <Manifesto />

        {/* Knuckles band */}
        <section className="relative h-[40vh] md:h-[60vh] overflow-hidden border-y border-border">
          <img src={knucklesImg} alt="HUSTLE LUCK knuckles tattoo" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-70" style={{ transform: `translateY(${(scroll - 1200) * 0.15}px)` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/80" />
          <div className="relative h-full flex items-center justify-center">
            <h2 className="font-grit text-7xl md:text-[9rem] text-bone text-center px-6 flicker leading-none tracking-wide">
              BUILT ON KNUCKLES<br /><span className="text-primary">NOT PRAYERS</span>
            </h2>
          </div>
        </section>

        {/* INK / SERVICES — vertical list */}
        <Services />

        {/* WORKS gallery — asymmetric */}
        <Works />

        {/* Process / Rituals — horizontal scroll */}
        <Rituals />

        {/* Studio image full bleed */}
        <section className="relative h-[80vh] overflow-hidden border-y border-border">
          <img src={studioImg} alt="Studio interior at night" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="font-mono-grit text-[10px] text-primary tracking-[0.4em] mb-4">— THE CHAPEL —</p>
              <h2 className="font-grit text-4xl md:text-6xl text-bone tracking-wide">WHERE THE INK<br />MEETS THE FLESH</h2>
            </div>
            <p className="font-mono-grit text-xs text-muted-foreground max-w-xs">
              11946 FM 314 NORTH<br />
              BROWNSBORO, TX 75756<br />
              <span className="text-primary">↳ OPEN MON–SAT · 9AM–2AM</span>
            </p>
          </div>
        </section>

        {/* SUMMON / contact */}
        <Summon />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}

function Manifesto() {
  const { ref, seen } = useReveal();
  return (
    <section id="manifesto" ref={ref} className="relative py-32 px-6 lg:px-16 overflow-hidden">
      <div className="splatter absolute inset-0 pointer-events-none opacity-50" />
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-2 lg:sticky lg:top-32">
          <p className="font-mono-grit text-[10px] text-primary tracking-[0.4em]">01</p>
          <p className="font-mono-grit text-[10px] text-muted-foreground mt-2">MANIFESTO</p>
        </div>
        <div className={`lg:col-span-7 ${seen ? "fade-up" : "opacity-0"}`}>
          <h2 className="font-grit text-6xl md:text-8xl text-bone leading-[0.9] tracking-wide">
            WE DON'T<br /><span className="text-primary">BELIEVE</span><br />IN LUCK.
          </h2>
          <div className="mt-12 space-y-6 text-bone/80 leading-relaxed text-lg max-w-xl">
            <p>
              Every line is a decision. Every shadow, a thousand small commitments. We do not chase trends. We do not run flash. We do not promise quick.
            </p>
            <p className="text-muted-foreground">
              What we promise is this — sit in the chair, and walk out wearing something earned. Drawn by hand, burned by needle, sealed by sweat. The mark stays. The reason stays with it.
            </p>
          </div>
          <div className="mt-12 font-hand text-2xl text-primary tracking-widest">— T. BROWER, RESIDENT —</div>
        </div>
        <div className="lg:col-span-3 relative">
          <div className="tape p-3 rotate-[3deg]">
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
    <section id="ink" className="relative py-32 px-6 lg:px-16 border-t border-border bg-card/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
          <div>
            <p className="font-mono-grit text-[10px] text-primary tracking-[0.4em] mb-4">02 / THE INK</p>
            <h2 className="font-stencil text-5xl md:text-7xl text-bone">WHAT WE BURN</h2>
          </div>
          <p className="font-mono-grit text-xs text-muted-foreground max-w-xs">
            // SIX DISCIPLINES · ONE OBSESSION
          </p>
        </div>
        <ul className="divide-y divide-border border-y border-border">
          {services.map((s) => (
            <li key={s.title} className="group grid grid-cols-12 gap-4 py-8 hover:bg-blood/10 transition-colors cursor-pointer relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
              <div className="col-span-2 md:col-span-1 pl-4 font-display text-3xl text-primary/60 group-hover:text-primary transition-colors">{s.n}</div>
              <div className="col-span-10 md:col-span-5 font-stencil text-2xl md:text-4xl text-bone group-hover:translate-x-4 transition-transform duration-500">
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
  return (
    <section id="works" className="relative py-32 px-6 lg:px-16 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="font-mono-grit text-[10px] text-primary tracking-[0.4em] mb-4">03 / WORKS</p>
            <h2 className="font-stencil text-5xl md:text-7xl text-bone">FRESH<br />WOUNDS</h2>
          </div>
          <a href="#" className="font-mono-grit text-xs text-primary border-b border-primary pb-1 hover:text-bone hover:border-bone">VIEW ARCHIVE ON IG →</a>
        </div>

        {/* Asymmetric broken grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <figure className="col-span-12 md:col-span-7 relative group overflow-hidden">
            <img src={works[0].src} alt={works[0].title} loading="lazy" className="w-full h-[60vh] object-cover reveal" />
            <Caption {...works[0]} large />
          </figure>
          <figure className="col-span-12 md:col-span-5 relative group overflow-hidden md:translate-y-12">
            <img src={works[1].src} alt={works[1].title} loading="lazy" className="w-full h-[60vh] object-cover reveal" />
            <Caption {...works[1]} />
          </figure>
          <figure className="col-span-12 md:col-span-4 relative group overflow-hidden md:-translate-y-8">
            <img src={works[2].src} alt={works[2].title} loading="lazy" className="w-full h-[50vh] object-cover reveal" />
            <Caption {...works[2]} />
          </figure>
          <figure className="col-span-12 md:col-span-8 relative group overflow-hidden">
            <img src={works[3].src} alt={works[3].title} loading="lazy" className="w-full h-[50vh] object-cover reveal" />
            <Caption {...works[3]} large />
          </figure>
        </div>
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

function Rituals() {
  const steps = [
    { n: "i", title: "Consult", desc: "Bring the idea. Or the chaos. We'll find the shape together." },
    { n: "ii", title: "Sketch", desc: "Custom drawn. Revised until it's yours, not ours." },
    { n: "iii", title: "Burn", desc: "Hours in the chair. Patience meets needle meets skin." },
    { n: "iv", title: "Heal", desc: "Aftercare protocol. Touch-ups free within 60 days." },
  ];
  return (
    <section id="rituals" className="relative py-32 border-t border-border overflow-hidden">
      <div className="px-6 lg:px-16 mb-16">
        <p className="font-mono-grit text-[10px] text-primary tracking-[0.4em] mb-4">04 / RITUALS</p>
        <h2 className="font-stencil text-5xl md:text-7xl text-bone max-w-3xl">THE FOUR<br /><span className="text-primary">SACRAMENTS</span></h2>
      </div>
      <div className="overflow-x-auto pb-8 scrollbar-none">
        <div className="flex gap-6 px-6 lg:px-16 min-w-max">
          {steps.map((s, i) => (
            <div key={s.title} className="w-[300px] md:w-[420px] relative bg-card border border-border p-8 group hover:border-primary transition-colors">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
              <div className="flex items-baseline justify-between mb-8">
                <span className="font-display text-6xl text-primary">{s.n}</span>
                <span className="font-mono-grit text-[10px] text-muted-foreground">STEP {i + 1} / 4</span>
              </div>
              <h3 className="font-stencil text-2xl md:text-3xl text-bone mb-4 tracking-wider">{s.title.toUpperCase()}</h3>
              <p className="font-mono-grit text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-12 h-px bg-border">
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
  return (
    <section id="summon" className="relative py-32 px-6 lg:px-16 border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <p className="font-mono-grit text-[10px] text-primary tracking-[0.4em] mb-4">05 / SUMMON</p>
          <h2 className="font-stencil text-5xl md:text-7xl text-bone leading-[0.9]">SIT IN<br />THE <span className="text-primary">CHAIR</span>.</h2>
          <div className="mt-10 space-y-6">
            {[
              { l: "DIAL", v: "(903) 258-2259" },
              { l: "WIRE", v: "tbrower661@gmail.com" },
              { l: "VISIT", v: "11946 FM 314 N · Brownsboro, TX" },
              { l: "HOURS", v: "MON–SAT · 9AM – 2AM" },
            ].map(item => (
              <div key={item.l} className="group flex items-baseline gap-6 border-b border-border pb-4 hover:border-primary transition-colors">
                <span className="font-mono-grit text-[10px] text-primary w-16 tracking-[0.3em]">{item.l}</span>
                <span className="font-stencil text-lg md:text-xl text-bone group-hover:text-primary transition-colors slice">{item.v}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 flex gap-4">
            {["IG", "FB", "GOOG"].map(s => (
              <a key={s} href="#" className="font-stencil text-xs border border-border px-5 py-3 text-bone hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>

        <form action="https://formspree.io/f/xzdwydye" method="POST" className="relative bg-background border border-border p-8 md:p-10">
          <input type="hidden" name="_subject" value="New Booking Request - All Hustle No Luck" />
          <div className="absolute inset-2 crt-corners pointer-events-none">
            <span /><span /><span /><span />
          </div>
          <p className="font-mono-grit text-[10px] text-primary tracking-[0.4em] mb-2">// TRANSMISSION FORM</p>
          <h3 className="font-stencil text-2xl text-bone mb-8">REQUEST A SESSION</h3>
          <div className="space-y-5">
            <Field label="NAME" name="name" placeholder="What do they call you" required />
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="EMAIL" name="email" type="email" placeholder="you@inbox.dead" required />
              <Field label="PHONE" name="phone" placeholder="(555) 000-0000" />
            </div>
            <div>
              <label className="font-mono-grit text-[10px] text-primary block mb-2 tracking-[0.3em]">DISCIPLINE</label>
              <select name="discipline" className="w-full bg-input border border-border px-4 py-3 text-bone focus:border-primary focus:outline-none font-mono-grit text-xs">
                <option>— Select —</option>
                {services.map(s => <option key={s.title}>{s.title}</option>)}
              </select>
            </div>
            <div>
              <label className="font-mono-grit text-[10px] text-primary block mb-2 tracking-[0.3em]">THE IDEA</label>
              <textarea required name="message" rows={5} placeholder="Subject. Size. Placement. References. Bleed it all out." className="w-full bg-input border border-border px-4 py-3 text-bone placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none resize-none font-mono-grit text-xs" />
            </div>
            <button type="submit" className="w-full group relative bg-primary text-primary-foreground py-4 font-stencil text-sm overflow-hidden">
              <span className="relative z-10">SEND THE SIGNAL ✦</span>
              <span className="absolute inset-0 bg-bone -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <span className="absolute inset-0 flex items-center justify-center text-background font-stencil text-sm opacity-0 group-hover:opacity-100 transition-opacity z-20">TRANSMITTING...</span>
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
        <div className="mt-12 grid md:grid-cols-3 gap-8 items-end">
          <div>
            <p className="font-display text-3xl text-bone">All Hustle</p>
            <p className="font-mono-grit text-xs text-muted-foreground mt-2">Custom tattoo studio · est. MMXXVI</p>
          </div>
          <div className="font-mono-grit text-xs text-muted-foreground space-y-1">
            <p>© 2026 All Rights Reserved</p>
            <p>Brownsboro, Texas</p>
          </div>
          <p className="font-stencil text-2xl md:text-3xl text-primary flicker text-right tracking-widest">ALL HUSTLE · NO LUCK ✦</p>
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
