"use client";

import { useEffect, useState } from "react";

export default function NewAlbum() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true); // trigger fade-in when component mounts
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "120px 20px",
        color: "white",
        opacity: fadeIn ? 1 : 0,        // fade in effect
        transition: "opacity 1.5s ease-in-out" // smooth transition
      }}
    >
      <h2
        style={{
          fontFamily: "Akony",
          fontSize: "clamp(40px, 8vw, 90px)",
          marginBottom: "30px",
          lineHeight: "1.1",
          letterSpacing: "clamp(3px, 1vw, 6px)"
        }}
      >
        NEW ALBUM OUT
      </h2>

      <p
        style={{
          fontFamily: "Boldini",
          letterSpacing: "clamp(2px, 1vw, 6px)",
          opacity: 0.7,
          fontSize: "clamp(12px, 1.2vw, 16px)"
        }}
      >
        SCROLL DOWN TO LEARN MORE
      </p>
    </section>
  );
}