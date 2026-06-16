'use client';

export default function Home() {
  return (
    <main className="w-full pt-32 pb-24 min-h-screen flex items-center justify-center">
      <section className="w-full max-w-4xl px-6 lg:px-12 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-5xl lg:text-6xl font-light tracking-tight mb-4">
            Bastien Gaillard
          </h1>
          <div className="h-px bg-black w-16 mx-auto mb-6"></div>
          <p className="font-inter text-lg lg:text-xl text-gray-700 leading-relaxed">
            Photographie de rue et voyage<br />
          </p>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <a
            href="/portfolio"
            className="font-inter text-sm uppercase tracking-widest text-black hover:text-gray-600 transition-colors duration-300"
          >
            Voir mon portfolio →
          </a>
        </div>
      </section>
    </main>
  );
}
