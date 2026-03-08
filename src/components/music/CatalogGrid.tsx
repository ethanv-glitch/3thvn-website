"use client"

import { useState, useRef } from "react"
import releasesData from "@/src/data/releases.json"
import { Release } from "@/types/releases"
import ReleaseCard from "./ReleaseCard"
import ReleaseOverlay from "./ReleaseOverlay"

const releases = releasesData as Release[]

export default function CatalogGrid() {

  const [active, setActive] = useState<Release | null>(null)
  const clickedCard = useRef<HTMLDivElement | null>(null)

  const handleOpen = (
    release: Release,
    element: HTMLDivElement
  ) => {
    clickedCard.current = element
    setActive(release)
  }

  return (
    <section className="catalog-section">

      <div className="catalog-grid">

        {releases.map((release) => (
          <ReleaseCard
            key={release.id}
            release={release}
            onOpen={handleOpen}
          />
        ))}

      </div>

      {active && (
        <ReleaseOverlay
          release={active}
          origin={clickedCard}
          close={() => setActive(null)}
        />
      )}

    </section>
  )
}