import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Santa Ana</h1>
        <p className="text-xl md:text-2xl mb-8">Página oficial de la parroquia.</p>
        <a
          href="#about"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Ver Más
        </a>
      </div>
    </section>
  );
}