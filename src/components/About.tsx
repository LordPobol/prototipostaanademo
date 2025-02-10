import React from 'react';
import { Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Descripción</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-blue-600">Sacerdotes</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold">Pbro. José Alfredo Cruz Servín</h4>
                <p className="text-gray-600">Párroco</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Pbro. Sergio César Cárdenas Castro</h4>
                <p className="text-gray-600">Vicario</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Pbro. Gemo González Ruiz</h4>
                <p className="text-gray-600">Vicario</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-blue-600">Parroquia Santa Ana</h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                Bienvenido a la Parroquia de Santa Ana. En esta página, se encuentra información de todo tipo, incluyendo horarios de misa, información de contacto, próximos eventos, grupos, etc., además de acceso a transmisiones en vivo de la parroquia.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <a href="https://www.iubilaeum2025.va/es.html"
                   target="_blank" 
                   rel="noopener noreferrer">
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">Jubileo 2025</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}