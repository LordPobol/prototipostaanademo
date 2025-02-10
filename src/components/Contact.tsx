import React from 'react';
import { MapPin, Phone, Mail, Youtube, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contáctanos</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold">Dirección</h3>
                <p className="text-gray-600">Avenida Adolfo López Mateos y Cipreses<br />Jardines de San Mateo, Naucalpan De Juárez</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold">Teléfono</h3>
                <p className="text-gray-600">(55) 5363-1633</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">info@correo.org</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Youtube className="w-6 h-6 text-blue-600" />
              <div>
                <a 
                  href="https://www.youtube.com/@parroquiasantaananaucalpan4446" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Canal de Youtube
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Facebook className="w-6 h-6 text-blue-600" />
              <div>
                <a 
                  href="https://www.facebook.com/ParroquiadeSantaAnaNaucalpan/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Página de Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}