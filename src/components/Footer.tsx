import React from 'react';
import { Church } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Church className="h-6 w-6" />
          <span className="text-lg font-semibold">Santa Ana</span>
        </div>
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Parroquia Santa Ana. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}