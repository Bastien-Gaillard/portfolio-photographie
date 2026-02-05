'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center">
      {/* Hero Image */}
      <div className="w-full h-screen bg-black flex items-center justify-center overflow-hidden relative">
        <Image
          src="/images/hero.jpg"
          alt="Hero photograph - Street and urban photography"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center text-white px-4">
          {/* Optional content overlay */}
        </div>
      </div>

      {/* Content Section */}
      <section className="w-full max-w-4xl px-6 lg:px-12 py-24 lg:py-32">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-5xl lg:text-6xl font-light tracking-tight mb-4">
            Bastien Gaillard
          </h1>
          <div className="h-px bg-black w-16 mx-auto mb-6"></div>
          <p className="font-inter text-lg lg:text-xl text-gray-700 leading-relaxed">
            Street & Travel Photography<br />
            <span className="text-gray-600">Cinematic urban moments</span>
          </p>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <a
            href="/portfolio"
            className="font-inter text-sm uppercase tracking-widest text-black hover:text-gray-600 transition-colors duration-300"
          >
            View Portfolio →
          </a>
        </div>
      </section>
    </main>
  );
}
