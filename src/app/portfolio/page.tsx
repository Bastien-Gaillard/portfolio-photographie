import Link from 'next/link';
import { readdirSync, statSync } from 'fs';
import path from 'path';

type SeriesItem = {
  id: string;
  title: string;
  imageCount: number;
  coverSrc?: string;
};

function formatTitleFromSlug(slug: string) {
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function getSeriesFromPublic(): SeriesItem[] {
  const imagesRoot = path.join(process.cwd(), 'public', 'images');
  const entries = readdirSync(imagesRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  return entries.map((dirName) => {
    const dirPath = path.join(imagesRoot, dirName);
    const files = readdirSync(dirPath)
      .filter((file) => /\.(jpe?g|png|webp|avif)$/i.test(file))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
    const mainFile = files.find((file) => /^main\.(jpe?g|png|webp|avif)$/i.test(file));
    const coverFile = mainFile ?? files[0];
    const coverVersion = coverFile ? Math.floor(statSync(path.join(dirPath, coverFile)).mtimeMs) : null;

    return {
      id: dirName,
      title: formatTitleFromSlug(dirName),
      imageCount: files.length,
      coverSrc: coverFile && coverVersion ? `/images/${dirName}/${coverFile}?v=${coverVersion}` : undefined,
    };
  });
}

export default function Portfolio() {
  const series = getSeriesFromPublic();

  return (
    <main className="w-full pt-32">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <h1 className="font-playfair text-5xl lg:text-6xl font-light tracking-tight mb-4">
          Portfolio
        </h1>
        <div className="h-px bg-black w-16 mb-8"></div>
        <p className="font-inter text-lg text-gray-600 max-w-2xl">
          Découvrez mes séries de photographies, capturant des moments uniques et des paysages inspirants à travers le monde.
        </p>
      </section>

      {/* Series Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {series.map((s) => (
            <Link key={s.id} href={`/portfolio/${s.id}`}>
              <div className="group cursor-pointer">
                {/* Cover Image */}
                <div
                  className="relative w-full aspect-square bg-gradient-to-br from-gray-300 to-gray-400 rounded-sm mb-6 overflow-hidden bg-center bg-cover shadow-sm transition-all duration-500 group-hover:shadow-lg group-hover:scale-[1.02]"
                  style={s.coverSrc ? { backgroundImage: `url(${s.coverSrc})` } : undefined}
                  aria-label={`Cover - ${s.title}`}
                >
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-500 group-hover:bg-black/18 group-hover:opacity-100">
                    <div className="flex items-center gap-2 rounded-full border border-white/70 bg-black/25 px-4 py-2 text-white backdrop-blur-sm">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M9.5 4.5a5 5 0 1 0 3.06 8.95l4.47 4.47 1.41-1.41-4.47-4.47A5 5 0 0 0 9.5 4.5Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.5 7.25v4.5M7.25 9.5h4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-xs uppercase tracking-[0.2em]">Ouvrir</span>
                    </div>
                  </div>
                </div>

                {/* Series Info */}
                <div className="space-y-2">
                  <h2 className="font-playfair text-3xl font-light group-hover:text-gray-600 transition-colors duration-300">
                    {s.title}
                  </h2>
                  <p className="font-inter text-xs uppercase tracking-widest text-gray-500">
                    {s.imageCount} photographies
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
