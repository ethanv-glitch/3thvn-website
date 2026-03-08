export default function AlbumCard({ release, year }: any) {
  return (
    <div className="relative group w-64">

      <img
        src={release.cover}
        className="rounded-xl shadow-2xl"
      />

      <div className="absolute bottom-3 left-3 text-left">
        <p className="text-xs text-zinc-400">{year}</p>
        <h3 className="text-lg font-semibold">{release.title}</h3>
      </div>

    </div>
  )
}