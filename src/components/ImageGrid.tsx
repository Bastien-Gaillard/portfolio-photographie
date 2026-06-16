'use client';

import { useEffect, useState } from 'react';

interface ImageGridProps {
  images: string[];
  variant?: 'series' | 'grid';
  seriesTitle?: string;
}

export default function ImageGrid({ images, variant = 'grid', seriesTitle = 'series' }: ImageGridProps) {
  const seriesColumns =
    images.length <= 1
      ? 'columns-1'
      : images.length <= 4
        ? 'columns-1 md:columns-2 lg:columns-2'
        : 'columns-1 md:columns-2 lg:columns-3';
  const columnClasses = variant === 'series' ? seriesColumns : 'columns-1 md:columns-2';
  const [activeSrc, setActiveSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!activeSrc) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveSrc(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSrc]);

  return (
    <>
      <div className={`${columnClasses} gap-8 lg:gap-12 [column-fill:_balance]`}>
        {images.map((src) => (
          <div key={src} className="group cursor-pointer overflow-hidden break-inside-avoid mb-8 lg:mb-12">
            <button
              type="button"
              className="w-full text-left cursor-zoom-in"
              onClick={() => setActiveSrc(src)}
              aria-label="View image"
            >
              <div className="relative w-full bg-gray-200 rounded-sm overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-lg">
                <img
                  src={src}
                  alt={`Photography - ${seriesTitle} series`}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-500 group-hover:bg-black/18 group-hover:opacity-100">
                  <div className="flex items-center gap-2 rounded-full border border-white/70 bg-black/25 px-4 py-2 text-white backdrop-blur-sm">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M9.5 4.5a5 5 0 1 0 3.06 8.95l4.47 4.47 1.41-1.41-4.47-4.47A5 5 0 0 0 9.5 4.5Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9.5 7.25v4.5M7.25 9.5h4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-xs uppercase tracking-[0.2em]">Cliquer pour ouvrir</span>
                  </div>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>

      {activeSrc ? (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveSrc(null)}
        >
          <img
            src={activeSrc}
            alt={`Photography - ${seriesTitle} large view`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </>
  );
}
