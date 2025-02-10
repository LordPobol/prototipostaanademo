import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MassSchedule from './components/MassSchedule';
import Groups from './components/Groups';
import Calendar from './components/Calendar';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <MassSchedule />
      <Groups />
      <section id="events" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Avisos</h2>
          <Calendar />
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  );
}