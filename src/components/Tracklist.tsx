export default function TrackList() {
  const tracks = [
    "Psychopath",
    "Scarlet Dreams",
    "Falling",
    "Cold Nights",
    "Between Us",
    "Echoes",
    "Running Away",
  ];

  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* LEFT SIDE */}
      <div className="min-w-0">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold akony tracking-wide mb-6 break-words">
          TRACKLIST
        </h2>

        <p className="text-base sm:text-lg opacity-70 max-w-lg">
          Scarlet explores loneliness, memories, and the chaos of falling in love.
        </p>
      </div>

      {/* RIGHT SIDE CARD */}
      <div className="bg-gradient-to-br from-[#2b0000] to-[#520000] rounded-2xl lg:rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_0_60px_rgba(150,0,0,0.4)] w-full">

        <ul className="space-y-4 sm:space-y-6 text-lg sm:text-xl akony">
          {tracks.map((track, i) => (
            <li
              key={i}
              className="border-b border-red-900 pb-3 hover:text-red-400 transition duration-300"
            >
              {i + 1}. {track}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}