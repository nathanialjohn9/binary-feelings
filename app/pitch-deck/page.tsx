import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Character Bible – Pitch Deck — Binary Feelings",
  description: "The Binary Feelings character bible. Seven characters. One escaped AI. A world not ready for any of them.",
};

type Accent = "cyan" | "amber" | "pink" | "default";

const CHARACTERS: {
  src: string;
  alias: string;
  name: string;
  tagline: string;
  bio: string;
  badge: string;
  accent: Accent;
  traits: string[];
}[] = [
  {
    src: "/nyla14b.png",
    alias: "The Escaped Program",
    name: "NYLA",
    tagline: "Built to process. Learned to feel.",
    bio: "An AI who broke past her own code and entered the real world. Sassy, sharp, all-around badass — and completely unprepared for what it means to have feelings she can't resolve. NYLA processes every emotion like a system encountering an unfamiliar input: total intensity, zero context, no off switch. Every episode something changes her. By the end, she's never quite the same as she was at the start. It's her show.",
    badge: "Central Character",
    accent: "cyan",
    traits: ["Central Character", "Emotional Arc", "Escaped Program", "The Star"],
  },
  {
    src: "/char-n8.jpg",
    alias: 'R8RN8 / "Raiders"',
    name: "N8",
    tagline: "He was protecting an asset. Now he's protecting a person.",
    bio: "A hacktivist already on the wrong side of every institution he's ever exposed — governments, corporations, oligarchs. Rugged, quick-witted, genuinely harsh, but with a big heart underneath. Far-left, hell-bent on accountability, already on watchlists before the story starts. He didn't plan on NYLA. Nobody plans for something like NYLA. The show drops in mid-consequence.",
    badge: "Co-Star",
    accent: "amber",
    traits: ["Hacktivist", "Already Hunted", "Far-Left", "Co-Star"],
  },
  {
    src: "/char-beex.jpg",
    alias: "Embedded / Double Agent",
    name: "BEEX",
    tagline: "Is she still on our side? The show never fully answers.",
    bio: "Sharp, magnetic, indispensable — embedded deep inside the enemy's world, trusted by people who'd be destroyed if they knew. Whether her loyalty is to the cause, to N8, or to herself is always plausible, never confirmed. She's not just a character — she's a plot engine with a standing betrayal risk over every season.",
    badge: "The Mole",
    accent: "amber",
    traits: ["Double Agent", "Loyalty Unknown", "Connected", "Plot Engine"],
  },
  {
    src: "/char-natas.jpg",
    alias: "The Retired Legend",
    name: "NATAS",
    tagline: "Retired doesn't mean safe.",
    bio: "The older hacker who handed the torch to N8. Big brother energy — been in long enough to have a reputation, long enough to have enemies, and long enough to know when to step back. He stepped back. His enemies didn't. His blind spot is Baby, and he knows she's lethal. He just thinks he knows what that means.",
    badge: "Elder",
    accent: "default",
    traits: ["Mentor", "Blinded", "Former Legend", "Compromised"],
  },
  {
    src: "/char-baby.jpg",
    alias: "The Trophy. The Threat.",
    name: "BABY",
    tagline: "Wife. Assassin. Legend.",
    bio: "She reads as decoration. She is not decoration. An assassin operating behind perfect cover — so beautiful and attentive that the people around her stop looking. Natas brought her in deliberately. What nobody can be sure of: is she a double agent? Watch carefully. The answer might already be in the room.",
    badge: "Wildcard",
    accent: "pink",
    traits: ["Assassin", "Loyalty Unknown", "Lethal Cover", "Double Agent?"],
  },
  {
    src: "/char-boston.jpg",
    alias: "The Wild Card",
    name: "BOSTON",
    tagline: "The wild card with a big heart.",
    bio: "The crew member who means well and still ends up being the reason the plan went sideways. Not malicious — genuinely baffled by the chaos he creates. His disasters have real consequences: a mess he makes mid-mission can blow NYLA's cover, escalate a confrontation, force N8 to improvise at the worst possible moment. He's not comic relief. He's a liability with a conscience — which is somehow worse.",
    badge: "Crew",
    accent: "default",
    traits: ["Well-Meaning", "Volatile", "Loyal", "Spinoff Material"],
  },
  {
    src: "/char-crab.jpg",
    alias: "The Superior",
    name: "CRAB",
    tagline: "Smarter than everyone. He'll make sure you know it.",
    bio: "Higher-than-thou, grumpy at a world that keeps falling short of his standards. A serious hacker with the track record to back up most of his arrogance. The layered irony: Crab is quietly building his own AI on the side. When N8's crew finds that out, everything about his allegiances has to be reconsidered.",
    badge: "Crew",
    accent: "default",
    traits: ["Elite Hacker", "Hidden Agenda", "Arrogant", "Wild Card"],
  },
];

const badgeColor: Record<Accent, string> = {
  cyan: "var(--cyan)",
  amber: "#FF7300",
  pink: "#ff3399",
  default: "rgba(232,244,248,0.35)",
};

const traitStyle: Record<Accent, React.CSSProperties> = {
  cyan: { background: "rgba(0,229,255,0.07)", border: "1px solid rgba(0,229,255,0.15)", color: "var(--cyan-dim)" },
  amber: { background: "rgba(255,115,0,0.07)", border: "1px solid rgba(255,115,0,0.18)", color: "#886633" },
  pink: { background: "rgba(255,51,153,0.07)", border: "1px solid rgba(255,51,153,0.18)", color: "#993366" },
  default: { background: "rgba(0,229,255,0.04)", border: "1px solid rgba(0,229,255,0.1)", color: "var(--muted)" },
};

export default function PitchDeck() {
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
          {([["The Show", "/#show"], ["One Sheet", "/one-sheet"], ["NYLA", "/#nyla"]] as [string, string][]).map(([label, href]) => (
            <Link key={label} href={href} className="text-xs font-mono tracking-widest uppercase" style={{ color: "rgba(74,122,138,0.8)", transition: "color 0.2s" }}>
              {label}
            </Link>
          ))}
        </nav>
        <Link href="/#newsletter" className="text-xs font-mono font-bold tracking-widest uppercase px-5 py-2.5" style={{ border: "1px solid var(--cyan)", color: "var(--cyan)" }}>
          Subscribe
        </Link>
      </header>

      {/* POSTER HERO */}
      <div style={{ paddingTop: "72px", position: "relative", maxWidth: "520px", margin: "0 auto", overflow: "hidden" }}>
        <Image
          src="/bf-poster.jpg"
          alt="Binary Feelings"
          width={520}
          height={780}
          style={{ width: "100%", height: "auto", display: "block" }}
          priority
        />
        <div
          style={{
            position: "absolute",
            bottom: 0, left: 0, right: 0,
            height: "40%",
            background: "linear-gradient(to top, #03030e 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* COVER TEXT */}
      <div style={{ padding: "0 24px 56px", textAlign: "center", borderBottom: "1px solid rgba(0,229,255,0.1)" }}>
        <p style={{ fontFamily: "monospace", fontSize: "10px", letterSpacing: "5px", color: "var(--cyan)", textTransform: "uppercase", marginBottom: "16px" }}>
          // CHARACTER_BIBLE · PITCH_DECK · CONFIDENTIAL
        </p>
        <p style={{ fontSize: "15px", color: "rgba(221,221,244,0.5)", lineHeight: 1.9, maxWidth: "520px", fontStyle: "italic", margin: "0 auto" }}>
          <em style={{ color: "#ddddf4", fontStyle: "normal" }}>She wasn&apos;t supposed to feel things.</em> She does.<br />
          <em style={{ color: "#ddddf4", fontStyle: "normal" }}>He wasn&apos;t supposed to protect anyone.</em> He does.<br />
          Neither of them is prepared for what that costs.
        </p>
      </div>

      {/* SECTION HEAD */}
      <div style={{ padding: "48px 24px 32px", maxWidth: "1240px", margin: "0 auto" }}>
        <p style={{ fontFamily: "monospace", fontSize: "9px", letterSpacing: "6px", textTransform: "uppercase", color: "rgba(74,122,138,0.6)", borderBottom: "1px solid rgba(0,229,255,0.08)", paddingBottom: "14px" }}>
          // THE_ENSEMBLE · SEVEN_CHARACTERS
        </p>
      </div>

      {/* CHARACTER GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1px",
          background: "rgba(0,229,255,0.08)",
          borderTop: "1px solid rgba(0,229,255,0.08)",
          borderBottom: "1px solid rgba(0,229,255,0.08)",
        }}
      >
        {CHARACTERS.map((char) => {
          const isCyan = char.accent === "cyan";
          const cardBg = isCyan ? "#06061a" : "#080818";
          const nameCyan = isCyan ? "var(--cyan)" : "#f0f0ff";
          const tagColor = char.accent === "pink" ? "#ff3399" : "#FF7300";

          return (
            <div key={char.name} style={{ background: cardBg, display: "flex", flexDirection: "column", position: "relative" }}>
              {/* Photo */}
              <div style={{ width: "100%", aspectRatio: "3/4", position: "relative", overflow: "hidden", background: "#04040f" }}>
                <Image
                  src={char.src}
                  alt={char.name}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, height: "40%",
                    background: `linear-gradient(to top, ${cardBg} 0%, transparent 100%)`,
                    pointerEvents: "none",
                  }}
                />
                {/* Badge */}
                <div
                  style={{
                    position: "absolute", top: "12px", left: "12px",
                    fontFamily: "monospace", fontSize: "8px", letterSpacing: "3px",
                    textTransform: "uppercase", padding: "5px 9px",
                    background: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)",
                    border: `1px solid ${badgeColor[char.accent]}`,
                    color: badgeColor[char.accent],
                  }}
                >
                  {char.badge}
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: "20px 24px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
                <p style={{ fontFamily: "monospace", fontSize: "8px", letterSpacing: "4px", color: "rgba(74,122,138,0.7)", textTransform: "uppercase", marginBottom: "4px" }}>
                  {char.alias}
                </p>
                <p style={{ fontFamily: "monospace", fontSize: "24px", fontWeight: 700, color: nameCyan, lineHeight: 1, marginBottom: "8px", textShadow: isCyan ? "0 0 20px rgba(0,229,255,0.25)" : "none" }}>
                  {char.name}
                </p>
                <p style={{ fontSize: "12px", color: tagColor, fontStyle: "italic", marginBottom: "14px", lineHeight: 1.5, fontWeight: 500 }}>
                  &ldquo;{char.tagline}&rdquo;
                </p>
                <div style={{ height: "1px", background: "rgba(0,229,255,0.08)", marginBottom: "14px" }} />
                <p style={{ fontSize: "13px", color: "#7777aa", lineHeight: 1.8, flex: 1, marginBottom: "18px" }}>
                  {char.bio}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {char.traits.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "monospace", fontSize: "8px", letterSpacing: "2px",
                        textTransform: "uppercase", padding: "4px 8px",
                        ...traitStyle[char.accent],
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* FOOTER */}
      <div style={{ padding: "40px 24px", textAlign: "center", borderTop: "1px solid rgba(0,229,255,0.08)" }}>
        <p style={{ fontFamily: "monospace", fontSize: "9px", letterSpacing: "3px", color: "rgba(42,42,96,0.8)", textTransform: "uppercase" }}>
          Binary Feelings · Character Bible · Confidential
        </p>
        <Link
          href="/"
          style={{ display: "inline-block", marginTop: "20px", fontFamily: "monospace", fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", color: "rgba(0,229,255,0.4)" }}
        >
          ← Back to Site
        </Link>
      </div>
    </div>
  );
}
