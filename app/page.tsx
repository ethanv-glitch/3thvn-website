import Hero from "@/src/components/Hero";
import Navbar from "@/src/components/Navbar";
import NewAlbum from "@/src/components/NewAlbum";
import TrackList from "@/src/components/Tracklist";
import TriangleReveal from "@/src/components/TriangleReveal";

export default function Home() {
  return (
    
    <main>
      <Navbar />
      <Hero image="/Hero.png" title="" />
      <NewAlbum />
      <TriangleReveal />
      <TrackList />
    </main>
  );
}