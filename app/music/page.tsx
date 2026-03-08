import Hero from "@/src/components/Hero"
import TriangleReveal from "@/src/components/TriangleReveal"
import TrackList from "@/src/components/Tracklist"
import YearsTimeline from "@/src/components/music/YearsTimeline"
import CatalogGrid from "@/src/components/music/CatalogGrid"


export default function MusicPage() {
  return (
    <>
      <Hero image="/hero-music.png" title="MUSIC" />
      <TriangleReveal />
      <TrackList />

      <section className="section">
      </section>

      <YearsTimeline />
      <CatalogGrid />

      
    </>
  )
}