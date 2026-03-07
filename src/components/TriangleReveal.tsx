"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TriangleReveal() {

  const wrapperRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "+=1500",
          scrub: true,
          pin: true
        }
      });

      tl.fromTo(
        imageRef.current,
        {
          clipPath: "polygon(50% 48%, 48% 52%, 52% 52%)",
          scale: 1.2
        },
        {
          clipPath: "polygon(-100% -100%, 200% -100%, 50% 200%)",
          scale: 1,
          ease: "none"
        }
      );

      tl.set(imageRef.current, { clipPath: "none" });

    }, wrapperRef);

    return () => ctx.revert();

  }, []);

  return (
    <section ref={wrapperRef} className="triangle-section">
      <img
        ref={imageRef}
        src="/album.jpg"
        alt="Album"
        className="triangle-image"
      />
    </section>
  );
}