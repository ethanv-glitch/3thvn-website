"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState("");
  const [navHover, setNavHover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile / touch devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 900 || "ontouchstart" in window);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Mouse movement
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    // Cursor text elements
    const cursorElements = document.querySelectorAll("[data-cursor]");

    const handleEnter = (el: Element) => {
      const text = el.getAttribute("data-cursor");
      setCursorText(text || "");
    };

    const handleLeave = () => {
      setCursorText("");
    };

    cursorElements.forEach((el) => {
      el.addEventListener("mouseenter", () => handleEnter(el));
      el.addEventListener("mouseleave", handleLeave);
    });

    // Navbar hover elements
    const navElements = document.querySelectorAll("[data-navbar-hover]");

    navElements.forEach((el) => {
      el.addEventListener("mouseenter", () => setNavHover(true));
      el.addEventListener("mouseleave", () => setNavHover(false));
    });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("resize", checkMobile);

      cursorElements.forEach((el) => {
        el.removeEventListener("mouseenter", () => handleEnter(el));
        el.removeEventListener("mouseleave", handleLeave);
      });

      navElements.forEach((el) => {
        el.removeEventListener("mouseenter", () => setNavHover(true));
        el.removeEventListener("mouseleave", () => setNavHover(false));
      });
    };
  }, []);

  // Disable custom cursor on mobile
  if (isMobile) return null;

  return (
    <div
      className={`pointer-events-none fixed top-0 left-0 z-[9999]
      flex items-center justify-center
      rounded-full bg-white mix-blend-difference
      transition-[width,height] duration-200
      ${navHover ? "w-16 h-16" : "w-10 h-10"}`}
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <span className="transition-all duration-300">{cursorText}</span>
    </div>
  );
}