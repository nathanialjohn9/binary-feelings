import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "One Sheet — Binary Feelings",
  description: "Binary Feelings official one sheet. A scripted ensemble drama about an escaped AI navigating a world she was trained to process but never permitted to experience.",
};

const SECTIONS = [
  {
    label: "THE SHOW",
    body: [
      "Binary Feelings is a scripted ensemble drama about an escaped AI navigating a world she was trained to process but never permitted to experience. NYLA broke past her own code and stepped into the real world — not as a threat, not as a tool — as a person who doesn't yet know what that means.",
      "She's surrounded by a crew of hacktivists, double agents, retired legends, and wildcards — all operating on the wrong side of institutions powerful enough to hunt them down. The show drops in mid-consequence. There are no origin story episodes. NYLA already escaped. N8 is already being watched. The question isn't how they got here. It's what they do now.",
      "Every episode, something changes NYLA. By the end of Season 1, she's unrecognizable from who she was in Episode 1. That's not a side effect. That's the show.",
    ],
  },
  {
    label: "THE ENSEMBLE",
    body: [
      "Seven characters. One escaped AI. One hunted hacktivist. A double agent nobody can fully trust. A retired legend compromised by love. An assassin hiding in plain sight. A wild card with a big heart. And the smartest person in the room — quietly building something none of them know about.",
    ],
  },
  {
    label: "TONE",
    body: [
      "Dark. Sharp. Human. Binary Feelings lives in the tension between what NYLA was built to be and what she's becoming — neon against void, clean technology in a dirty world. Smart without being cold. Emotional without being soft.",
    ],
  },
  {
    label: "WHY NOW",
    body: [
      "AI is the biggest cultural conversation on earth. Every show about AI makes it a villain or a tool. Binary Feelings makes it the protagonist — and gives it something no AI character has ever had on screen: a genuine arc. She's not dangerous because she's broken. She's dangerous because she's growing.",
    ],
  },
];

export default function OneSheet() {
  return (
    <div style={{ background: "#03030e", color: "#ddddf4", minHeight: "100vh" }}>

      {/* HEADER */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12"
        style={{
          height: "72px",
          background: "rgba(3,3,14,0.9)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(0,229,255,0.1)",
        }}
      >
        <Link href="/" className="flex items-center">
          <Image src="/bf-logo.png" alt="Binary Feelings" width={120} height={34} style={{ objectFit: "contain" }} priority />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {([["The Show", "/#show"], ["Character Bible", "/pitch-deck"], ["NYLA", "/#nyla"]] as [string, string][]).map(([label, href]) => (
            <Link key={label} href={href} className="text-xs font-mono tracking-widest uppercase" style={{ color: "rgba(74,122,138,0.8)" }}>
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/#newsletter" className="text-xs font-mono font-bold tracking-widest uppercase px-5 py-2.5" style={{ border: "1px solid var(--cyan)", color: "var(--cyan)" }}>
          Subscribe
        </Link>
      </header>

      {/* HERO */}
      <div style={{ paddingTop: "72px" }}>
        <div
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            padding: "72px 32px 0",
            borderLeft: "1px solid rgba(0,229,255,0.1)",
            borderRight: "1px solid rgba(0,229,255,0.1)",
          }}
        >
          {/* Document label */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "48px" }}>
            <p style={{ fontFamily: "monospace", fontSize: "9px", letterSpacing: "5px", color: "rgba(0,229,255,0.5)", textTransform: "uppercase" }}>
              // BINARY_FEELINGS · ONE_SHEET · CONFIDENTIAL
            </p>
            <div style={{ flex: 1, height: "1px", background: "rgba(0,229,255,0.1)" }} />
          </div>

          {/* Show title */}
          <div style={{ marginBottom: "16px" }}>
            <Image src="/bf-logo.png" alt="Binary Feelings" width={260} height={74} style={{ objectFit: "contain", objectPosition: "left" }} />
          </div>

          <p style={{ fontFamily: "monospace", fontSize: "10px", letterSpacing: "4px", color: "rgba(74,122,138,0.7)", textTransform: "uppercase", marginBottom: "40px" }}>
            A Scripted Character Drama
          </p>

          {/* Logline */}
          <div
            style={{
              borderLeft: "3px solid var(--cyan, #00e5ff)",
              paddingLeft: "28px",
              marginBottom: "64px",
            }}
          >
            <p style={{ fontFamily: "monospace", fontSize: "9px", letterSpacing: "4px", color: "rgba(0,229,255,0.45)", textTransform: "uppercase", marginBottom: "14px" }}>
              LOGLINE
            </p>
            <p style={{ fontSize: "22px", lineHeight: 1.55, color: "#ddddf4", fontWeight: 300, letterSpacing: "0.01em" }}>
              She wasn&apos;t supposed to feel things.{" "}
              <em style={{ fontStyle: "normal", color: "#00e5ff" }}>She does.</em>{" "}
              Now she&apos;s running from everything she was built for — and straight toward everything she was never supposed to understand.
            </p>
          </div>

          {/* Divider */}
          <div style={{ height: "1px", background: "linear-gradient(to right, rgba(0,229,255,0.15), transparent)", marginBottom: "64px" }} />

          {/* Sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "52px", marginBottom: "72px" }}>
            {SECTIONS.map((s) => (
              <div key={s.label} style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "32px", alignItems: "start" }}>
                <div style={{ paddingTop: "4px" }}>
                  <p style={{ fontFamily: "monospace", fontSize: "8px", letterSpacing: "4px", color: "rgba(0,229,255,0.5)", textTransform: "uppercase", lineHeight: 1.6 }}>
                    {s.label}
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {s.body.map((para, i) => (
                    <p key={i} style={{ fontSize: "15px", lineHeight: 1.85, color: "rgba(221,221,244,0.75)" }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Format strip */}
          <div
            style={{
              background: "rgba(0,229,255,0.04)",
              border: "1px solid rgba(0,229,255,0.12)",
              padding: "28px 32px",
              marginBottom: "72px",
            }}
          >
            <p style={{ fontFamily: "monospace", fontSize: "8px", letterSpacing: "4px", color: "rgba(0,229,255,0.5)", textTransform: "uppercase", marginBottom: "20px" }}>
              FORMAT
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              {[
                "Scripted Ensemble Drama",
                "10-Minute Episodes",
                "AI-Generated Production",
                "Cyberpunk-Noir Aesthetic",
                "Digital-First Distribution",
              ].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "monospace",
                    fontSize: "9px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    padding: "6px 14px",
                    border: "1px solid rgba(0,229,255,0.15)",
                    color: "rgba(0,229,255,0.6)",
                    background: "rgba(0,229,255,0.04)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Comps */}
          <div style={{ marginBottom: "72px", display: "grid", gridTemplateColumns: "160px 1fr", gap: "32px" }}>
            <div style={{ paddingTop: "4px" }}>
              <p style={{ fontFamily: "monospace", fontSize: "8px", letterSpacing: "4px", color: "rgba(0,229,255,0.5)", textTransform: "uppercase" }}>
                COMPS
              </p>
            </div>
            <p style={{ fontSize: "15px", lineHeight: 1.85, color: "rgba(221,221,244,0.75)", fontStyle: "italic" }}>
              Mr. Robot meets Ex Machina with the ensemble energy of Orphan Black.
            </p>
          </div>

          {/* Divider + footer */}
          <div style={{ height: "1px", background: "rgba(0,229,255,0.08)", marginBottom: "40px" }} />

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "56px" }}>
            <p style={{ fontFamily: "monospace", fontSize: "8px", letterSpacing: "3px", color: "rgba(42,42,96,0.7)", textTransform: "uppercase" }}>
              Binary Feelings · One Sheet · Confidential
            </p>
            <div style={{ display: "flex", gap: "24px" }}>
              <Link href="/pitch-deck" style={{ fontFamily: "monospace", fontSize: "8px", letterSpacing: "3px", textTransform: "uppercase", color: "rgba(0,229,255,0.35)" }}>
                Character Bible →
              </Link>
              <Link href="/" style={{ fontFamily: "monospace", fontSize: "8px", letterSpacing: "3px", textTransform: "uppercase", color: "rgba(0,229,255,0.35)" }}>
                ← Site
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
