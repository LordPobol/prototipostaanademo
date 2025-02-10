import React from 'react';
import { Clock } from 'lucide-react';

export default function MassSchedule() {
  return (
    <section id="services" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Horarios de Misa, Adoración y Confesiones</h2>
        <div className="text-center">
          <a 
            href="https://www.youtube.com/@parroquiasantaananaucalpan4446/streams" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-semibold text-blue-600 text-2xl hover:text-blue-800 transition-colors"
          >
            Misa en Vivo (click)
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center mb-6">Lunes a Sábado</h3>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50">
              <Clock className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="text-xl font-semibold">Misa</h3>
                <h4 className="font-semibold">Lunes a Sábado</h4>
                <p className="text-gray-600">9:00 AM - Misa Matutina</p>
                <p className="text-gray-600">12:00 PM - Misa de Medio Dia</p>
                <p className="text-gray-600">7:00 PM - Misa Vespertina (Dominical en sábado)</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50">
              <Clock className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="text-xl font-semibold">Hora Santa</h3>
                <h4 className="font-semibold">Lunes a Viernes</h4>
                <p className="text-gray-600">7:00 PM - Hora Santa</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center mb-6">Domingo</h3>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50">
              <Clock className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="text-xl font-semibold">Misa</h3>
                <p className="text-gray-600">8:00 AM - Primera Misa</p>
                <p className="text-gray-600">10:00 AM - Misa de Niños</p>
                <p className="text-gray-600">11:30 AM - Misa</p>
                <p className="text-gray-600">12:45 PM - Misa</p>
                <p className="text-gray-600">2:00 PM - Misa</p>
                <p className="text-gray-600">5:30 PM - Misa</p>
                <p className="text-gray-600">7:00 PM - Misa</p>
                <p className="text-gray-600">8:30 PM - Misa</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50">
              <Clock className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="text-xl font-semibold">Confesiones</h3>
                <h4 className="font-semibold">Durante todas las misas</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}