import Link from 'next/link';
import { notFound } from 'next/navigation';
import ImageGrid from '@/components/ImageGrid';
import { readdirSync } from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

type SeriesPageProps = {
  params: { series: string } | Promise<{ series: string }>;
};

function formatTitleFromSlug(slug: string) {
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function getImagesForSeries(seriesId: string) {
  const seriesPath = path.join(process.cwd(), 'public', 'images', seriesId);
  const files = readdirSync(seriesPath)
    .filter((file) => /\.(jpe?g|png|webp|avif)$/i.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  return files.map((file) => `/images/${seriesId}/${file}`);
}

export default async function SeriesDetail({ params }: SeriesPageProps) {
  const resolvedParams = await params;
  const seriesId = resolvedParams?.series;

  if (!seriesId) {
    notFound();
  }
  let images: string[] = [];

  try {
    images = getImagesForSeries(seriesId);
  } catch {
    notFound();
  }

  if (!images.length) {
    notFound();
  }

  const title = formatTitleFromSlug(seriesId);

  return (
    <main className="w-full pt-32">
      {/* Series Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <Link href="/portfolio" className="font-inter text-xs uppercase tracking-widest text-gray-600 hover:text-black transition-colors mb-8 inline-block">
          ← Back to Portfolio
        </Link>
        <h1 className="font-playfair text-5xl lg:text-6xl font-light tracking-tight mb-4">
          {title}
        </h1>
        <div className="h-px bg-black w-16 mb-8"></div>
        <p className="font-inter text-lg text-gray-600 max-w-2xl">
          {images.length} photographs
        </p>
      </section>

      {/* Image Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <ImageGrid images={images} variant="series" seriesTitle={title} />
      </section>
    </main>
  );
}
