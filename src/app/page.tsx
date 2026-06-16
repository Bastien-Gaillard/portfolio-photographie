'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-zinc-50 via-white to-neutral-100 pt-32 pb-24">
      <div className="pointer-events-none absolute -left-24 top-24 h-64 w-64 rounded-full bg-zinc-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-12 h-72 w-72 rounded-full bg-stone-300/20 blur-3xl" />

      <section className="relative mx-auto w-full max-w-4xl px-6 lg:px-12 py-16 lg:py-24">
        <div className="text-center mb-12">
          <p className="mb-6 font-inter text-[11px] uppercase tracking-[0.32em] text-gray-500">
            Portfolio Photographique
          </p>
          <h1 className="font-playfair text-5xl lg:text-6xl font-light tracking-tight mb-4">
            Bastien Gaillard
          </h1>
          <div className="h-px bg-black w-16 mx-auto mb-6"></div>
          <p className="mx-auto max-w-2xl font-inter text-lg lg:text-xl text-gray-700 leading-relaxed">
            Photographie de rue et de voyage, entre silences urbains, lumiere brute et instants fugaces.
          </p>
        </div>

        <div className="flex justify-center mt-16">
          <Link
            href="/portfolio"
            className="font-inter text-sm uppercase tracking-widest text-black hover:text-gray-600 transition-colors duration-300"
          >
            Voir mon portfolio →
          </Link>
        </div>
      </section>
    </main>
  );
}
