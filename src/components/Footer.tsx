'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="font-playfair text-lg mb-4">À propos</h3>
            <p className="font-inter text-sm text-gray-600 leading-relaxed">
              Photographe de rue et voyage focalisé sur les moments urbains cinématographiques et la lumière atmosphérique.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-playfair text-lg mb-4">Navigation</h3>
            <ul className="space-y-2 font-inter text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-black transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-600 hover:text-black transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-black transition-colors">
                  À propos
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-playfair text-lg mb-4">Réseaux sociaux</h3>
            <div className="space-y-2 font-inter text-sm">
              <div>
                <a
                  href="https://www.instagram.com/bastien.gaillard.756/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Instagram
                </a>
              </div>
              <div>
                <a
                  href="https://twitter.com/bastiengaillard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Twitter / X
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-xs font-inter text-gray-600">
            <p>© {currentYear} Bastien Gaillard. Tous droits réservés.</p>
            <p className="mt-4 md:mt-0">Portfolio photographique</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
