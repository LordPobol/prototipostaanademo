import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';

type Event = {
  date: string;
  title: string;
  time: string;
  type: string;
};

const events: Event[] = [
  {
    date: '2024-03-24',
    title: 'Concierto Mariana Granillo',
    time: '10:00 AM',
    type: 'Concierto',
  },
  {
    date: '2024-03-24',
    title: 'Misa de Unción de los Enfermos',
    time: '4:00 PM',
    type: 'Unción',
  },
  {
    date: '2024-03-27',
    title: 'Peregrinación a la Basílica de Guadalupe',
    time: '7:00 PM',
    type: 'Peregrinación',
  },
  {
    date: '2024-03-31',
    title: 'Kermesse Fiesta Patronal',
    time: '10:00 AM',
    type: 'Kermesse',
  },
];

export default function Calendar() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <CalendarIcon className="h-6 w-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-900">Próximos Eventos</h2>
      </div>
      
      <div className="space-y-4">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="min-w-24 text-center">
              <div className="font-semibold text-blue-600">
                {new Date(event.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })}
              </div>
              <div className="text-sm text-gray-500">{event.time}</div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{event.title}</h3>
              <span className="inline-block px-2 py-1 mt-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                {event.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}