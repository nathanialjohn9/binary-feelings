"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage("You're in. Welcome to the inner circle.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Connection failed. Try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-4">
        <p className="text-lg font-semibold" style={{ color: "var(--cyan)" }}>
          {message}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          disabled={status === "loading"}
          className="flex-1 px-5 py-3 text-sm rounded-none outline-none transition-all disabled:opacity-50"
          style={{
            background: "rgba(0,229,255,0.05)",
            border: "1px solid rgba(0,229,255,0.25)",
            color: "var(--text)",
            fontFamily: "var(--font-geist-mono)",
          }}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-7 py-3 text-sm font-bold tracking-widest uppercase transition-all disabled:opacity-50"
          style={{
            background: "var(--cyan)",
            color: "#000",
            border: "none",
            cursor: status === "loading" ? "wait" : "pointer",
          }}
        >
          {status === "loading" ? "..." : "JOIN"}
        </button>
      </div>
      {status === "error" && (
        <p className="mt-2 text-xs text-red-400 text-center">{message}</p>
      )}
    </form>
  );
}
