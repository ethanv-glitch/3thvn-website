"use client"

import { useLayoutEffect, useRef } from "react"
import { Release } from "@/types/releases"
import gsap from "gsap"

interface Props {
  release: Release
  origin: React.RefObject<HTMLDivElement | null>
  close: () => void
}

export default function ReleaseOverlay({
  release,
  origin,
  close
}: Props) {

  const overlayRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {

    if (!origin.current || !overlayRef.current) return

    const start = origin.current.getBoundingClientRect()
    const end = overlayRef.current.getBoundingClientRect()

    const dx = start.left - end.left
    const dy = start.top - end.top
    const scaleX = start.width / end.width
    const scaleY = start.height / end.height

    gsap.fromTo(
      overlayRef.current,
      {
        x: dx,
        y: dy,
        scaleX,
        scaleY
      },
      {
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1,
        duration: 0.7,
        ease: "power3.out"
      }
    )

  }, [])

  return (
    <div className="overlay-bg">

      <div ref={overlayRef} className="overlay-card">

        <button className="close-btn" onClick={close}>
          ✕
        </button>

        <img src={release.cover} className="overlay-cover" />

        <div className="overlay-info">

          <h2 className="akony overlay-title">
            {release.title}
          </h2>

          {release.type === "album" && release.tracks && (
            <>
              <p className="track-count">
                {release.tracks.length} Songs
              </p>

              <ul className="track-list">
                {release.tracks.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </>
          )}

          <a
            href={release.spotify}
            target="_blank"
            className="play-btn"
          >
            Play on Spotify
          </a>

        </div>

      </div>

    </div>
  )
}