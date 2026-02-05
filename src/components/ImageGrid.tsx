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
              className="w-full text-left"
              onClick={() => setActiveSrc(src)}
              aria-label="View image"
            >
              <div className="w-full bg-gray-200 rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src={src}
                  alt={`Photography - ${seriesTitle} series`}
                  className="w-full h-auto"
                  loading="lazy"
                />
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
