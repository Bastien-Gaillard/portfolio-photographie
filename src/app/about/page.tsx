'use client';

import Image from 'next/image';

export default function About() {
  return (
    <main className="w-full pt-32 pb-24">
      {/* Page Header */}
      <section className="max-w-3xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <h1 className="font-playfair text-5xl lg:text-6xl font-light tracking-tight mb-8">
          À propos
        </h1>
        <div className="h-px bg-black w-16 mb-12"></div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Text Section */}
          <div className="font-inter text-lg leading-relaxed space-y-6 text-gray-800">
            <p>
              Je m&apos;appelle Bastien GAILLARD.
            </p>
            <p>
              Passionné de photographie de nature et de voyage, je capture les paysages, les animaux et les instants qui croisent mon chemin.
            </p>
            <p>
              Mes photos reflètent simplement ce que j&apos;observe et ce qui m&apos;inspire lors de mes sorties.
            </p>
           
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-200 my-12"></div>

          {/* Portrait Section */}
          <div>
            <div className="w-full aspect-square bg-gray-300 rounded-sm mb-6 relative overflow-hidden">
              <Image
                src="/images/portrait.webp"
                alt="Bastien Gaillard - Photographe"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 66vw"
              />
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-4">
            <h2 className="font-playfair text-2xl font-light">Détails techniques</h2>
            <p className="font-inter text-gray-700">
              Sony Alpha 6700 // Différents objectifs selon les situations
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
