"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import releases from "@/src/data/releases.json"
import TimelineItem from "./TimelineItem"

gsap.registerPlugin(ScrollTrigger)

export default function YearsTimeline() {

  const svgRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    const length = svgRef.current.getTotalLength()

    gsap.set(svgRef.current, {
      strokeDasharray: length,
      strokeDashoffset: length
    })

    gsap.to(svgRef.current, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: svgRef.current,
        start: "top center",
        end: "bottom bottom",
        scrub: true
      }
    })

  }, [])

  // newest first
  const sorted = [...releases].sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  )

  return (
    <section className="relative py-40 w-full overflow-hidden">

      {/* Huge heading */}
      <h2 className="akony text-[12vw] leading-[0.9] text-center mb-48 tracking-tight">
        OVER THE YEARS
      </h2>

      {/* Curved timeline */}
      <svg
  className="absolute left-0 top-0 w-full h-full pointer-events-none"
  viewBox="0 0 1440 3000"
  preserveAspectRatio="none"
>
  <path
    ref={svgRef}
    d="
      M320 500
      C720 650 720 750 1120 900
      S720 1150 320 1350
      S720 1650 1120 1850
      S720 2150 320 2350
      S720 2650 1120 2850
    "
    stroke="white"
    strokeWidth="3"
    fill="none"
    opacity="0.35"
  />
</svg>

      {/* albums */}
      <div className="relative flex flex-col gap-[320px] pb-[400px]">

        {sorted.map((release, i) => (
          <TimelineItem
            key={release.id}
            release={release}
            year={new Date(release.date).getFullYear()}
            align={i % 2 === 0 ? "left" : "right"}
          />
        ))}

      </div>

    </section>
  )
}