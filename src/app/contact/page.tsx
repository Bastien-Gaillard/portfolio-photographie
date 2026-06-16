'use client';

import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formState);
    // Reset form
    setFormState({ name: '', email: '', message: '' });
    alert('Merci pour votre message. Je vous recontacterai bientôt.');
  };

  return (
    <main className="w-full pt-32 pb-24">
      {/* Page Header */}
      <section className="max-w-3xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <h1 className="font-playfair text-5xl lg:text-6xl font-light tracking-tight mb-8">
          Me Contacter
        </h1>
        <div className="h-px bg-black w-16 mb-12"></div>

        {/* Contact Methods */}
        <div className="space-y-12 mb-16">
          {/* Email */}
          <div>
            <p className="font-inter text-sm uppercase tracking-widest text-gray-600 mb-2">
              Email
            </p>
            <a
              href="mailto:contact@bastiengaillard.com"
              className="font-inter text-lg text-black hover:text-gray-600 transition-colors"
            >
              contact@bastiengaillard.com
            </a>
          </div>

          {/* Social */}
          <div>
            <p className="font-inter text-sm uppercase tracking-widest text-gray-600 mb-3">
              Réseaux sociaux
            </p>
            <div className="flex items-center gap-8">
              <a
                href="https://www.instagram.com/bastien.gaillard.756/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-sm text-black hover:text-gray-600 transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com/bastiengaillard"
                target="_blank"
                rel="noopener noreferrer"
                className="font-inter text-sm text-black hover:text-gray-600 transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-200 my-12"></div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="name" className="block font-inter text-sm uppercase tracking-widest text-gray-600 mb-3">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full font-inter text-lg border-b border-black pb-2 focus:outline-none focus:border-gray-600 transition-colors"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-inter text-sm uppercase tracking-widest text-gray-600 mb-3">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full font-inter text-lg border-b border-black pb-2 focus:outline-none focus:border-gray-600 transition-colors"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-inter text-sm uppercase tracking-widest text-gray-600 mb-3">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full font-inter text-lg border-b border-black pb-2 focus:outline-none focus:border-gray-600 transition-colors resize-none"
                placeholder="Votre message"
              />
            </div>

            <button
              type="submit"
              className="font-inter text-sm uppercase tracking-widest text-black hover:text-gray-600 transition-colors mt-8"
            >
              Envoyer →
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
