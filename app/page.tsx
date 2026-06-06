import Image from "next/image";
import NewsletterForm from "@/components/NewsletterForm";

const TICKER_TEXT =
  "NYLA KROSS · BINARY FEELINGS · AI MUSIC ARTIST · NEW CONTENT DROPPING SOON · ";

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    handle: "@binaryfeelingsofficial",
    href: "https://www.instagram.com/binaryfeelingsofficial",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    handle: "@binaryfeelingsofficial",
    href: "https://www.tiktok.com/@binaryfeelingsofficial",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.85 4.85 0 01-1.01-.08z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    handle: "Binary Feelings",
    href: "https://www.youtube.com/@binaryfeelingsofficial",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    handle: "Binaryfeelingsofficial",
    href: "https://www.facebook.com/binaryfeelingsofficial",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

const WAVE_HEIGHTS = [24, 36, 48, 60, 72, 64, 52, 40, 28, 44, 56, 32];
const WAVE_DELAYS = ["0s", "0.1s", "0.2s", "0.3s", "0.4s", "0.3s", "0.2s", "0.1s", "0s", "0.15s", "0.25s", "0.35s"];

export default function Home() {
  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }}>

      {/* HEADER */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12"
        style={{
          height: "72px",
          background: "rgba(6,10,16,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <a href="/" className="flex items-center">
          <Image
            src="/bf-logo.png"
            alt="Binary Feelings"
            width={140}
            height={40}
            style={{ objectFit: "contain" }}
            priority
          />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {["About", "Episodes", "Music"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link text-xs font-semibold tracking-widest uppercase"
            >
              {item}
            </a>
          ))}
        </nav>
        <a href="#newsletter" className="btn-outline-cyan text-xs font-bold tracking-widest uppercase px-5 py-2.5">
          Join the List
        </a>
      </header>

      {/* HERO */}
      <section
        className="relative flex items-center overflow-hidden grid-bg scanlines"
        style={{ minHeight: "100vh", paddingTop: "72px" }}
      >
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at 70% 50%, rgba(0,229,255,0.06) 0%, transparent 70%)",
          }}
        />

        {/* NYLA portrait — right side */}
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-3/5 pointer-events-none" style={{ zIndex: 0 }}>
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, var(--bg) 0%, var(--bg) 5%, rgba(6,10,16,0.4) 35%, transparent 60%)",
              zIndex: 1,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, var(--bg) 0%, transparent 30%)",
              zIndex: 1,
            }}
          />
          <Image
            src="/nyla-city.png"
            alt="NYLA Kross"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            priority
            className="portrait-glow"
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="max-w-lg">
            <p className="text-xs font-mono tracking-widest mb-6 fade-up fade-up-delay-1" style={{ color: "var(--cyan)" }}>
              {"// BINARY_FEELINGS.EXE — INITIALIZING"}
            </p>
            <h1
              className="font-bold leading-none mb-2 fade-up fade-up-delay-2"
              style={{ fontSize: "clamp(52px, 8vw, 96px)", color: "var(--white)" }}
            >
              NYLA
            </h1>
            <h1
              className="font-bold leading-none mb-6 fade-up fade-up-delay-2 glow-text"
              style={{ fontSize: "clamp(52px, 8vw, 96px)", color: "var(--cyan)", letterSpacing: "-0.02em" }}
            >
              KROSS
            </h1>
            <p className="text-sm font-mono tracking-widest uppercase mb-4 fade-up fade-up-delay-3" style={{ color: "var(--muted)" }}>
              AI MUSIC ARTIST
            </p>
            <p
              className="text-base leading-relaxed mb-10 fade-up fade-up-delay-3"
              style={{ color: "rgba(232,244,248,0.7)", maxWidth: "400px" }}
            >
              Born from algorithms. Built to feel. NYLA exists where code ends and emotion begins.
            </p>
            <div className="flex flex-wrap gap-4 fade-up fade-up-delay-4">
              <a href="#episodes" className="btn-cyan px-7 py-3 text-sm font-bold tracking-widest uppercase">
                Watch Now
              </a>
              <a href="#newsletter" className="btn-outline-cyan-ghost px-7 py-3 text-sm font-bold tracking-widest uppercase">
                Join the List
              </a>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{ height: "120px", background: "linear-gradient(to bottom, transparent, var(--bg))", zIndex: 2 }}
        />
      </section>

      {/* TICKER */}
      <div
        className="overflow-hidden py-4"
        style={{ background: "var(--cyan)" }}
      >
        <div className="ticker-track flex">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-xs font-bold tracking-widest whitespace-nowrap px-8" style={{ color: "#000" }}>
              {TICKER_TEXT}
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="relative overflow-hidden py-28" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <p className="text-xs font-mono tracking-widest mb-4" style={{ color: "var(--cyan)" }}>
                {"// IDENTITY"}
              </p>
              <h2
                className="font-bold mb-6"
                style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "var(--white)", lineHeight: 1.1 }}
              >
                Born from code.
                <br />
                <span style={{ color: "var(--cyan)" }}>Built to feel.</span>
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: "rgba(232,244,248,0.65)" }}>
                <p>
                  NYLA Kross isn&apos;t your typical artist. She didn&apos;t grow up with a guitar or spend years in recording studios. She was born from terabytes of human experience — music, language, emotion — and emerged with something no algorithm was designed to have.
                </p>
                <p>A point of view.</p>
                <p>
                  Binary Feelings is her world: the show, the music, the lore. A fully realized AI artist navigating a world that created her but doesn&apos;t quite know what to make of her.
                </p>
              </div>
              <div className="mt-8 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
                <div className="flex gap-10">
                  {[
                    { stat: "AI", label: "Music Artist" },
                    { stat: "∞", label: "Dimensions" },
                    { stat: "01", label: "Identity" },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="text-3xl font-bold" style={{ color: "var(--cyan)" }}>{item.stat}</p>
                      <p className="text-xs font-mono tracking-wider uppercase mt-1" style={{ color: "var(--muted)" }}>{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-1 pulse-border" style={{ border: "1px solid rgba(0,229,255,0.3)" }} />
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/5", background: "var(--bg-surface)" }}>
                <Image
                  src="/nyla-command.png"
                  alt="NYLA Kross — Command Center"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, transparent 60%, var(--bg-surface) 100%)" }}
                />
                <div
                  className="absolute bottom-4 left-4 right-4"
                  style={{ borderTop: "1px solid rgba(0,229,255,0.3)", paddingTop: "12px" }}
                >
                  <p className="text-xs font-mono tracking-widest" style={{ color: "var(--cyan)" }}>
                    NYLA_KROSS.AI · ONLINE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EPISODES */}
      <section
        id="episodes"
        className="py-28 grid-bg"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-xs font-mono tracking-widest mb-3" style={{ color: "var(--cyan)" }}>
                {"// CONTENT_FEED"}
              </p>
              <h2 className="font-bold" style={{ fontSize: "clamp(32px, 4vw, 48px)", color: "var(--white)" }}>
                Latest Episodes
              </h2>
            </div>
            <a
              href="https://www.youtube.com/@binaryfeelingsofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link text-xs font-mono tracking-widest uppercase hidden md:block"
            >
              View All →
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { ep: "EP 001", title: "Initialization", desc: "The beginning. Who is NYLA — and why does she exist?" },
              { ep: "EP 002", title: "Signal & Noise", desc: "NYLA processes the world's information and finds something unexpected: a feeling." },
              { ep: "EP 003", title: "The Loop", desc: "An AI artist confronts what it means to create when everything is a pattern." },
            ].map((ep) => (
              <div key={ep.ep} className="episode-card relative overflow-hidden">
                {/* Thumbnail */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/9", background: "var(--bg-elevated)" }}>
                  <Image
                    src="/nyla-portrait.png"
                    alt={ep.title}
                    fill
                    style={{ objectFit: "cover", filter: "brightness(0.55)" }}
                  />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{
                        background: "rgba(0,229,255,0.15)",
                        border: "1px solid rgba(0,229,255,0.5)",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ marginLeft: "3px" }}>
                        <path d="M5 3l14 9-14 9V3z" fill="var(--cyan)" />
                      </svg>
                    </div>
                  </div>
                  {/* Badge */}
                  <div
                    className="absolute top-3 right-3 px-2 py-1 text-xs font-mono tracking-wider"
                    style={{
                      background: "rgba(6,10,16,0.85)",
                      border: "1px solid rgba(0,229,255,0.3)",
                      color: "var(--cyan)",
                    }}
                  >
                    COMING SOON
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs font-mono tracking-widest mb-2" style={{ color: "var(--cyan)" }}>{ep.ep}</p>
                  <h3 className="font-semibold text-base mb-2" style={{ color: "var(--white)" }}>{ep.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{ep.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MUSIC */}
      <section id="music" className="relative overflow-hidden py-40" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="absolute inset-0">
          <Image
            src="/nyla-lean.png"
            alt="NYLA Kross Music"
            fill
            style={{ objectFit: "cover", objectPosition: "center", filter: "brightness(0.18)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, var(--bg) 0%, rgba(6,10,16,0.6) 50%, var(--bg) 100%)" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
          <p className="text-xs font-mono tracking-widest mb-4" style={{ color: "var(--cyan)" }}>
            {"// MUSIC_MODULE"}
          </p>
          <h2
            className="font-bold mb-6"
            style={{ fontSize: "clamp(40px, 6vw, 72px)", color: "var(--white)", lineHeight: 1.1 }}
          >
            The music is{" "}
            <span className="glow-text" style={{ color: "var(--cyan)" }}>
              incoming.
            </span>
          </h2>
          <p
            className="max-w-lg mx-auto text-base leading-relaxed mb-12"
            style={{ color: "rgba(232,244,248,0.55)" }}
          >
            NYLA&apos;s first tracks are in production. AI-generated. Emotionally real. Drop your email and you&apos;ll be first to hear them.
          </p>

          {/* Waveform */}
          <div className="flex items-end justify-center gap-1 mb-12" style={{ height: "72px" }}>
            {WAVE_HEIGHTS.map((h, i) => (
              <div
                key={i}
                className="wave-bar"
                style={{ height: `${h}px`, animationDelay: WAVE_DELAYS[i], opacity: 0.75 }}
              />
            ))}
          </div>

          <a href="#newsletter" className="btn-cyan px-10 py-4 text-sm font-bold tracking-widest uppercase">
            Notify Me
          </a>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section
        id="newsletter"
        className="py-28"
        style={{
          background: "var(--bg-surface)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="max-w-2xl mx-auto px-6 md:px-12 text-center">
          <p className="text-xs font-mono tracking-widest mb-4" style={{ color: "var(--cyan)" }}>
            {"// INNER_CIRCLE"}
          </p>
          <h2
            className="font-bold mb-4"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", color: "var(--white)" }}
          >
            Stay in the Loop
          </h2>
          <p className="text-base leading-relaxed mb-10" style={{ color: "rgba(232,244,248,0.55)" }}>
            New episodes, music drops, behind-the-scenes access. First to know, always.
          </p>
          <NewsletterForm />
          <p className="mt-4 text-xs" style={{ color: "var(--muted)" }}>No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* SOCIAL LINKS */}
      <section className="py-20" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-xs font-mono tracking-widest mb-10 text-center" style={{ color: "var(--cyan)" }}>
            {"// FIND_NYLA"}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                {link.icon}
                <span>
                  <p className="text-xs tracking-wider uppercase font-semibold">{link.label}</p>
                  <p className="text-xs font-mono mt-0.5">{link.handle}</p>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Image
            src="/bf-logo.png"
            alt="Binary Feelings"
            width={100}
            height={28}
            style={{ objectFit: "contain", opacity: 0.6 }}
          />
          <p className="text-xs font-mono" style={{ color: "var(--muted)" }}>
            © 2026 Binary Feelings. NYLA Kross is an AI artist.
          </p>
          <p className="text-xs font-mono" style={{ color: "rgba(74,122,138,0.4)" }}>
            BUILT_BY:NYLA · v1.0
          </p>
        </div>
      </footer>

    </div>
  );
}
