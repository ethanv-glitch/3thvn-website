"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function TimelineItem({ release, align, year }: any) {

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {

    if (!ref.current) return

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 80,
        x: align === "left" ? -120 : 120
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",   // appears earlier
          toggleActions: "play none none reverse"
        }
      }
    )

  }, [align])

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 items-center w-full px-[8vw] py-32">

      {/* BIG YEAR */}
      <div
        className={`
        absolute
        top-1/2
        -translate-y-1/2
        font-bold
        akony
        text-white/25
        pointer-events-none
        select-none
        leading-none
        text-[22vw]
        md:text-[14vw]
        z-10
        ${align === "left" ? "left-[6vw]" : "right-[6vw] text-right"}
        `}
      >
        {year}
      </div>

      {align === "left" && (
        <div ref={ref} className="flex justify-start relative z-20">
          <Album release={release} />
        </div>
      )}

      <div />

      {align === "right" && (
        <div ref={ref} className="flex justify-end relative z-20">
          <Album release={release} />
        </div>
      )}

    </div>
  )
}


function Album({ release }: any) {
  return (
    <div className="group relative w-[260px] md:w-[320px]">

      <img
        src={release.cover}
        className="
        rounded-xl
        shadow-2xl
        transition
        duration-500
        group-hover:scale-105
        "
      />

      <h3 className="mt-4 text-lg font-semibold">
        {release.title}
      </h3>

    </div>
  )
}