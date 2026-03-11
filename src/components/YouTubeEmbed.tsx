import { useState } from "react";

export function YouTubeEmbed({
  videoId,
  title,
  isShort = false,
}: {
  videoId: string;
  title: string;
  isShort?: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  const src = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`;
  const thumbnail = `https://i.ytimg.com/vi/${videoId}/${isShort ? "hqdefault" : "maxresdefault"}.jpg`;

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden shadow-xl bg-black ${isShort ? "aspect-[9/16]" : "aspect-video"}`}
    >
      {playing ? (
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          className="absolute inset-0 w-full h-full group"
          aria-label={`Play: ${title}`}
        >
          <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <div className="w-16 h-16 rounded-full bg-[#6CCFF6] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[oklch(0.20_0.07_245)] ml-1">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
            {!isShort && (
              <p className="text-white font-['Syne'] font-semibold text-sm tracking-wide text-center px-6 opacity-90 drop-shadow">
                {title}
              </p>
            )}
          </div>
          {isShort && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <p className="text-white font-['Nunito_Sans'] text-xs text-center leading-tight">{title}</p>
            </div>
          )}
        </button>
      )}
    </div>
  );
}

export function ShortsGrid() {
  const shorts = [
    { id: "8AnFwZ8uLak", title: "Camps Bay Cares — Sibeko" },
    { id: "8DBQYQyP_DQ", title: "Camps Bay Cares — Nana" },
    { id: "MM2dw4O3ba8", title: "Camps Bay Cares — Fiona" },
    { id: "lsRrKsGdlwM", title: "Camps Bay Cares — Mark" },
    { id: "TqZE5wABfR0", title: "Camps Bay Cares — Alma" },
    { id: "0ZOr-ZRv3BY", title: "Camps Bay Cares — Skippy" },
    { id: "T-UXQfPfEs0", title: "Camps Bay Cares — Louise" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {shorts.map((s) => (
        <YouTubeEmbed key={s.id} videoId={s.id} title={s.title} isShort />
      ))}
    </div>
  );
}
