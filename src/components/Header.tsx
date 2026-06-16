'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { href: '/', label: 'Accueil' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'À propos' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-playfair text-2xl font-light tracking-tight hover:text-gray-600 transition-colors">
          BG
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`font-inter text-sm uppercase tracking-widest transition-colors duration-300 ${
                  isActive(item.href)
                    ? 'text-black font-medium'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-black"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href} className="border-b border-gray-200 last:border-b-0">
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-4 font-inter text-sm uppercase tracking-widest transition-colors ${
                    isActive(item.href)
                      ? 'text-black font-medium'
                      : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
