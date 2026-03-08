"use client"

import { Release } from "@/types/releases"
import { useRef } from "react"

interface Props {
  release: Release
  onOpen: (release: Release, el: HTMLDivElement) => void
}

export default function ReleaseCard({ release, onOpen }: Props) {

  const cardRef = useRef<HTMLDivElement>(null)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {

    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 12
    const rotateY = (centerX - x) / 12

    card.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
  }

  const resetTilt = () => {

    if (!cardRef.current) return

    cardRef.current.style.transform =
      "rotateX(0deg) rotateY(0deg) scale(1)"
  }

  return (
    <div
      ref={cardRef}
      className="release-card"
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
      onClick={() => {
        if (cardRef.current)
          onOpen(release, cardRef.current)
      }}
    >

      <img
        src={release.cover}
        className="release-cover"
      />

      <h3 className="release-title akony">
        {release.title}
      </h3>

    </div>
  )
}