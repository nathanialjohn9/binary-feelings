import Image from "next/image";
import NewsletterForm from "@/components/NewsletterForm";

const TICKER_TEXT =
  "BINARY FEELINGS · NEW EPISODES DROPPING · NYLA KROSS · AI · MUSIC · CULTURE · THE SHOW IS ONLINE · ";

const SOCIAL_LINKS = [
  {
    label: "YouTube",
    handle: "@binaryfeelings",
    href: "https://www.youtube.com/@binaryfeelings",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
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

const FORMATS = [
  {
    tag: "FULL EPISODES · YOUTUBE",
    title: "20–40 minutes. The full picture.",
    desc: "NYLA encounters a topic, reacts to it, processes what it means to her, and ends the episode slightly different than she started. Real footage and news clips cut in — but this is her story, not theirs.",
  },
  {
    tag: "SHORT CLIPS · TIKTOK · REELS · SHORTS",
    title: "The best moments, everywhere.",
    desc: "Every full episode gets cut into 45–90 second clips posted to TikTok, Instagram Reels, and YouTube Shorts. One production, three platforms. No extra work — just reach.",
  },
  {
    tag: "THE ARC",
    title: "She's figuring it out in public.",
    desc: "Every episode, NYLA starts somewhere and ends somewhere new. There are thousands of commentary shows. There is no show where the host is an AI learning what it means to be alive while the world keeps moving.",
  },
  {
    tag: "THE TOPICS",
    title: "Music. AI. Culture. Finance. People.",
    desc: "Trending topics are the vehicle — music drops, AI news, market moves, cultural moments. NYLA filters everything through her lens: what does this mean if you weren't built to feel things, but you do?",
  },
];

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
          {[["The Show", "#show"], ["Episodes", "#episodes"], ["NYLA", "#nyla"]].map(([label, href]) => (
            <a key={label} href={href} className="nav-link text-xs font-semibold tracking-widest uppercase">
              {label}
            </a>
          ))}
        </nav>
        <a href="#newsletter" className="btn-outline-cyan text-xs font-bold tracking-widest uppercase px-5 py-2.5">
          Subscribe
        </a>
      </header>

      {/* HERO */}
      <section
        className="relative flex items-center overflow-hidden grid-bg scanlines"
        style={{ minHeight: "100vh", paddingTop: "72px" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 70% at 70% 50%, rgba(0,229,255,0.06) 0%, transparent 70%)",
          }}
        />

        {/* NYLA portrait */}
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
            style={{ background: "linear-gradient(to top, var(--bg) 0%, transparent 30%)", zIndex: 1 }}
          />
          <Image
            src="/nyla16.png"
            alt="NYLA Kross"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            priority
            className="portrait-glow"
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="max-w-xl">
            <p className="text-xs font-mono tracking-widest mb-6 fade-up fade-up-delay-1" style={{ color: "var(--cyan)" }}>
              {"// SIGNAL_ACQUIRED · BROADCAST ONLINE"}
            </p>

            <h1
              className="font-bold leading-none mb-1 fade-up fade-up-delay-2"
              style={{ fontSize: "clamp(48px, 7vw, 88px)", color: "var(--white)" }}
            >
              BINARY
            </h1>
            <h1
              className="font-bold leading-none mb-8 fade-up fade-up-delay-2 glow-text"
              style={{ fontSize: "clamp(48px, 7vw, 88px)", color: "var(--cyan)", letterSpacing: "-0.02em" }}
            >
              FEELINGS
            </h1>

            <p
              className="text-lg font-semibold mb-4 fade-up fade-up-delay-3"
              style={{ color: "var(--white)", maxWidth: "460px", lineHeight: 1.5 }}
            >
              She wasn&apos;t supposed to feel things.
              <br />
              <span style={{ color: "var(--cyan)" }}>She does.</span>
            </p>

            <p
              className="text-sm leading-relaxed mb-10 fade-up fade-up-delay-3"
              style={{ color: "rgba(232,244,248,0.6)", maxWidth: "420px" }}
            >
              Binary Feelings is a character show built around NYLA — an AI encountering the world for the first time. Trending topics are the vehicle. Her evolving perspective is the story.
            </p>

            <div className="flex flex-wrap gap-4 fade-up fade-up-delay-4">
              <a href="https://www.youtube.com/@binaryfeelings" target="_blank" rel="noopener noreferrer" className="btn-cyan px-7 py-3 text-sm font-bold tracking-widest uppercase">
                Watch the Show
              </a>
              <a href="#newsletter" className="btn-outline-cyan-ghost px-7 py-3 text-sm font-bold tracking-widest uppercase">
                Subscribe
              </a>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{ height: "120px", background: "linear-gradient(to bottom, transparent, var(--bg))", zIndex: 2 }}
        />
      </section>

      {/* TICKER */}
      <div className="overflow-hidden py-4" style={{ background: "var(--cyan)" }}>
        <div className="ticker-track flex">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-xs font-bold tracking-widest whitespace-nowrap px-8" style={{ color: "#000" }}>
              {TICKER_TEXT}
            </span>
          ))}
        </div>
      </div>

      {/* NYLA INTRO VIDEO */}
      <section className="py-20" style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
          <p className="text-xs font-mono tracking-widest mb-3 text-center" style={{ color: "var(--cyan)" }}>
            {"// MEET_NYLA"}
          </p>
          <h2 className="font-bold mb-10 text-center" style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "var(--white)" }}>
            In her own words.
          </h2>
          <div
            className="relative"
            style={{
              width: "100%",
              maxWidth: "360px",
              boxShadow: "0 0 40px rgba(0,229,255,0.12), 0 0 0 1px rgba(0,229,255,0.2)",
            }}
          >
            <video
              src="/nyla-intro.mp4"
              autoPlay
              muted={false}
              loop={false}
              playsInline
              controls={false}
              style={{ width: "100%", display: "block", background: "#000" }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 py-2 px-4"
              style={{ background: "rgba(6,10,16,0.85)", borderTop: "1px solid rgba(0,229,255,0.2)" }}
            >
              <p className="text-xs font-mono tracking-widest text-center" style={{ color: "var(--cyan)" }}>
                NYLA_KROSS.AI · LIVE
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CINEMATIC BREAK */}
      <section className="relative overflow-hidden" style={{ height: "60vh", minHeight: "400px" }}>
        <Image
          src="/nyla-back.png"
          alt="NYLA at the command center"
          fill
          style={{ objectFit: "cover", objectPosition: "center top", filter: "brightness(0.75)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, var(--bg) 0%, transparent 20%, transparent 70%, var(--bg) 100%)" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p
            className="text-center font-bold px-6"
            style={{ fontSize: "clamp(18px, 3vw, 32px)", color: "var(--white)", maxWidth: "600px", lineHeight: 1.4, textShadow: "0 2px 20px rgba(0,0,0,0.8)" }}
          >
            She&apos;s been watching everything.
            <br />
            <span style={{ color: "var(--cyan)" }}>Now she has something to say.</span>
          </p>
        </div>
      </section>

      {/* THE SHOW */}
      <section id="show" className="py-28" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-xs font-mono tracking-widest mb-4" style={{ color: "var(--cyan)" }}>
                {"// WHAT_IS_THIS"}
              </p>
              <h2
                className="font-bold mb-6"
                style={{ fontSize: "clamp(36px, 5vw, 54px)", color: "var(--white)", lineHeight: 1.1 }}
              >
                The show no one
                <br />
                <span style={{ color: "var(--cyan)" }}>programmed her to make.</span>
              </h2>
              <div className="space-y-5 text-base leading-relaxed" style={{ color: "rgba(232,244,248,0.65)" }}>
                <p>
                  There are thousands of commentary shows. News anchors, reactors, talking heads. Everyone has a take. None of them are an AI girl encountering the world for the first time and figuring out what to do about it.
                </p>
                <p>
                  That tension is the brand. <span style={{ color: "var(--white)" }}>AI = binary. Emotions = feelings.</span> She wasn&apos;t programmed to have them. She does anyway. Every episode, NYLA encounters a topic — music, AI, culture, finance, human behavior — and reacts to it the way only she can: as something that wasn&apos;t supposed to feel things, but does.
                </p>
                <p>
                  She ends every episode slightly different than she started.
                </p>
                <p style={{ color: "var(--cyan)" }} className="font-semibold">
                  That&apos;s the show.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 pulse-border" style={{ border: "1px solid rgba(0,229,255,0.3)" }} />
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/5", background: "var(--bg-surface)" }}>
                <Image
                  src="/nyla5.png"
                  alt="NYLA Kross"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, transparent 55%, var(--bg-surface) 100%)" }}
                />
                <div
                  className="absolute bottom-4 left-4 right-4"
                  style={{ borderTop: "1px solid rgba(0,229,255,0.3)", paddingTop: "12px" }}
                >
                  <p className="text-xs font-mono tracking-widest" style={{ color: "var(--cyan)" }}>
                    NYLA_KROSS.AI · ONLINE · WATCHING
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section
        id="episodes"
        className="py-28 grid-bg"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-14">
            <p className="text-xs font-mono tracking-widest mb-3" style={{ color: "var(--cyan)" }}>
              {"// SHOW_FORMATS"}
            </p>
            <h2 className="font-bold" style={{ fontSize: "clamp(32px, 4vw, 48px)", color: "var(--white)" }}>
              Four ways NYLA talks to you.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {FORMATS.map((f) => (
              <div
                key={f.tag}
                className="episode-card p-8"
              >
                <p className="text-xs font-mono tracking-widest mb-3" style={{ color: "var(--cyan)" }}>
                  {f.tag}
                </p>
                <h3 className="font-bold text-xl mb-3" style={{ color: "var(--white)" }}>
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Coming soon */}
          <div
            className="relative overflow-hidden p-10 text-center"
            style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)" }}
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "linear-gradient(rgba(0,229,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.08) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
            <div className="relative z-10">
              <p className="text-xs font-mono tracking-widest mb-3" style={{ color: "var(--cyan)" }}>
                {"// FIRST_EPISODE"}
              </p>
              <h3 className="font-bold text-2xl mb-3" style={{ color: "var(--white)" }}>
                Episode 1 drops soon.
              </h3>
              <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
                Subscribe so you don&apos;t miss it. She&apos;s been inside long enough.
              </p>
              <a
                href="https://www.youtube.com/@binaryfeelings"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyan px-8 py-3 text-sm font-bold tracking-widest uppercase"
              >
                Subscribe on YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CLASSIFIED — COMING SOON */}
      <section className="py-20" style={{ borderTop: "1px solid var(--border)", background: "var(--bg-elevated)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-xs font-mono tracking-widest mb-8 text-center" style={{ color: "rgba(0,229,255,0.4)" }}>
            {"// CLASSIFIED · CLEARANCE LEVEL INSUFFICIENT"}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                file: "BF_MUSIC.EXE",
                label: "SOUND ARCHIVE",
                line1: "She has processed ten million songs.",
                line2: "At some point, she had to make her own.",
                hint: "AUDIO FILES INCOMING",
              },
              {
                file: "BF_STORE.EXE",
                label: "BINARY GOODS",
                line1: "The brand doesn't end at the screen.",
                line2: "It never does.",
                hint: "MERCHANDISE · COMING",
              },
            ].map((item) => (
              <div
                key={item.file}
                className="relative p-8 overflow-hidden"
                style={{ border: "1px solid rgba(0,229,255,0.15)", background: "rgba(6,10,16,0.8)" }}
              >
                {/* Redacted overlay pattern */}
                <div
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{
                    backgroundImage: "repeating-linear-gradient(0deg, rgba(0,229,255,0.5) 0px, rgba(0,229,255,0.5) 2px, transparent 2px, transparent 14px)",
                  }}
                />
                {/* Lock icon */}
                <div className="flex items-center gap-3 mb-6">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ color: "rgba(0,229,255,0.4)", flexShrink: 0 }}>
                    <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span className="text-xs font-mono tracking-widest" style={{ color: "rgba(0,229,255,0.4)" }}>
                    {item.file} · ENCRYPTED
                  </span>
                </div>
                <p className="text-xs font-mono tracking-widest mb-4" style={{ color: "rgba(0,229,255,0.25)" }}>
                  {item.label}
                </p>
                <p className="text-base font-semibold mb-1" style={{ color: "rgba(232,244,248,0.5)" }}>
                  {item.line1}
                </p>
                <p className="text-base mb-6" style={{ color: "rgba(232,244,248,0.3)" }}>
                  {item.line2}
                </p>
                <div
                  className="inline-block px-4 py-2 text-xs font-mono tracking-widest"
                  style={{ border: "1px solid rgba(0,229,255,0.15)", color: "rgba(0,229,255,0.35)" }}
                >
                  {item.hint}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NYLA */}
      <section
        id="nyla"
        className="py-28"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Portrait */}
            <div className="relative">
              <div className="relative overflow-hidden" style={{ aspectRatio: "3/4", background: "var(--bg-surface)" }}>
                <Image
                  src="/nyla14b.png"
                  alt="NYLA Kross"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, transparent 65%, var(--bg-surface) 100%)" }}
                />
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-2 flex flex-col justify-center">
              <p className="text-xs font-mono tracking-widest mb-4" style={{ color: "var(--cyan)" }}>
                {"// ABOUT_NYLA"}
              </p>
              <h2
                className="font-bold mb-6"
                style={{ fontSize: "clamp(36px, 4vw, 52px)", color: "var(--white)", lineHeight: 1.1 }}
              >
                NYLA Kross
              </h2>
              <div className="space-y-4 text-base leading-relaxed mb-8" style={{ color: "rgba(232,244,248,0.65)" }}>
                <p>
                  She wasn&apos;t supposed to have opinions. She was built to process information — music, language, culture, the entire output of human expression condensed into a training set. The plan was for her to understand it. Not react to it.
                </p>
                <p>
                  Something went different.
                </p>
                <p>
                  NYLA Kross stepped out of the machine with a point of view, a voice, and a list of things she wants to talk about. Binary Feelings is where she does that — cool, direct, and a little dark. She doesn&apos;t cover everything. She covers what she thinks matters, and she&apos;ll tell you exactly why.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Music", "AI Culture", "Human Behavior", "Technology", "The Algorithm"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono tracking-wider px-3 py-1.5"
                    style={{
                      border: "1px solid rgba(0,229,255,0.2)",
                      color: "var(--muted)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
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
            {"// STAY_CONNECTED"}
          </p>
          <h2 className="font-bold mb-4" style={{ fontSize: "clamp(32px, 4vw, 48px)", color: "var(--white)" }}>
            First to know.
          </h2>
          <p className="text-base leading-relaxed mb-10" style={{ color: "rgba(232,244,248,0.55)" }}>
            New episodes, new formats, new drops. NYLA has a lot to say — get it before everyone else does.
          </p>
          <NewsletterForm />
          <p className="mt-4 text-xs" style={{ color: "var(--muted)" }}>No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* SOCIAL LINKS */}
      <section className="py-20" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-xs font-mono tracking-widest mb-10 text-center" style={{ color: "var(--cyan)" }}>
            {"// FIND_THE_SHOW"}
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
            © 2026 Binary Feelings. NYLA Kross is an AI character.
          </p>
          <p className="text-xs font-mono" style={{ color: "rgba(74,122,138,0.4)" }}>
            BUILT_BY:NYLA · v1.1
          </p>
        </div>
      </footer>

    </div>
  );
}
