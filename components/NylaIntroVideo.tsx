"use client";

import { useRef, useState } from "react";

export default function NylaIntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasSound, setHasSound] = useState(false);

  function enableSound() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.currentTime = 0;
    v.play();
    setHasSound(true);
  }

  return (
    <div className="relative" style={{ width: "100%", maxWidth: "360px", boxShadow: "0 0 40px rgba(0,229,255,0.12), 0 0 0 1px rgba(0,229,255,0.2)" }}>
      <video
        ref={videoRef}
        src="/nyla-intro.mp4"
        autoPlay
        muted
        playsInline
        style={{ width: "100%", display: "block", background: "#000" }}
      />

      {!hasSound && (
        <button
          onClick={enableSound}
          className="absolute inset-0 flex flex-col items-center justify-end pb-16 w-full"
          style={{ background: "transparent", border: "none", cursor: "pointer" }}
        >
          <span
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-widest uppercase"
            style={{
              background: "rgba(6,10,16,0.85)",
              border: "1px solid rgba(0,229,255,0.4)",
              color: "var(--cyan)",
              backdropFilter: "blur(8px)",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
            </svg>
            TAP TO HEAR HER
          </span>
        </button>
      )}

      <div
        className="absolute bottom-0 left-0 right-0 py-2 px-4"
        style={{ background: "rgba(6,10,16,0.85)", borderTop: "1px solid rgba(0,229,255,0.2)" }}
      >
        <p className="text-xs font-mono tracking-widest text-center" style={{ color: "var(--cyan)" }}>
          NYLA_KROSS.AI · LIVE
        </p>
      </div>
    </div>
  );
}
