"use client";

import { useRef, useState } from "react";

export default function NylaIntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [state, setState] = useState<"muted" | "playing" | "ended">("muted");

  function enableSound() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.loop = false;
    v.currentTime = 0;
    v.play();
    setState("playing");
  }

  function replay() {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play();
    setState("playing");
  }

  function handleEnded() {
    setState("ended");
  }

  return (
    <div className="relative" style={{ width: "100%", maxWidth: "360px", boxShadow: "0 0 40px rgba(0,229,255,0.12), 0 0 0 1px rgba(0,229,255,0.2)" }}>
      <video
        ref={videoRef}
        src="/nyla-intro.mp4"
        autoPlay
        muted
        loop
        playsInline
        onEnded={handleEnded}
        style={{ width: "100%", display: "block", background: "#000" }}
      />

      {/* Tap to hear — shown while muted loop is running */}
      {state === "muted" && (
        <button
          onClick={enableSound}
          className="absolute inset-0 flex flex-col items-center justify-center w-full"
          style={{ background: "transparent", border: "none", cursor: "pointer" }}
        >
          <span
            className="flex items-center gap-2 px-5 py-3 text-xs font-bold tracking-widest uppercase"
            style={{
              background: "rgba(6,10,16,0.9)",
              border: "1px solid rgba(0,229,255,0.5)",
              color: "var(--cyan)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 0 20px rgba(0,229,255,0.15)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
            </svg>
            TAP TO HEAR HER
          </span>
        </button>
      )}

      {/* Replay — shown after video ends */}
      {state === "ended" && (
        <button
          onClick={replay}
          className="absolute inset-0 flex flex-col items-center justify-center w-full"
          style={{ background: "rgba(6,10,16,0.6)", border: "none", cursor: "pointer" }}
        >
          <span
            className="flex items-center gap-2 px-5 py-3 text-xs font-bold tracking-widest uppercase"
            style={{
              background: "rgba(6,10,16,0.9)",
              border: "1px solid rgba(0,229,255,0.5)",
              color: "var(--cyan)",
              backdropFilter: "blur(8px)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
            </svg>
            PLAY AGAIN
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
