import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, ChevronDown, ChevronUp } from 'lucide-react';

type Event = {
  date: string;
  title: string;
  time: string;
  type: string;
};

type MonthlyActivity = {
  id: string;
  title: string;
  schedule: string;
  time: string;
  description: string;
  location: string;
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

const monthlyActivities: MonthlyActivity[] = [
  {
    id: 'hsNoNatos',
    title: 'Hora Santa por los no nacidos',
    schedule: 'Día 25 de cada mes',
    time: '5:30 PM - 6:30 PM',
    description: 'Un Hora Santa por los no nacidos es amar a Dios sobre todas las cosas y amar al prójimo, acompañemos a reparar por este pecado sumergiéndonos en la misericordia de Dios.\n"La amenaza más grande que sufre la paz hoy es el aborto." ~ Santa Teresa de Calcuta.',
    location: 'Capilla de la Resurrección'
  },
  {
    id: 'rosario',
    title: 'Rosario de la Aurora',
    schedule: 'Primer sábado de cada mes',
    time: '6:00 AM',
    description: 'Rezo del Santo Rosario al amanecer, seguido de la Santa Misa.',
    location: 'Templo principal'
  },
  {
    id: 'matrimonios',
    title: 'Encuentro de Matrimonios',
    schedule: 'Segundo y cuarto martes',
    time: '7:30 PM',
    description: 'Reunión de formación y apoyo para matrimonios de la comunidad. Incluye temas de espiritualidad conyugal y familiar.',
    location: 'Salón parroquial'
  },
  {
    id: 'jovenes',
    title: 'Pastoral Juvenil',
    schedule: 'Todos los sábados',
    time: '5:00 PM',
    description: 'Encuentro semanal de jóvenes para formación, oración y actividades recreativas.',
    location: 'Salón juvenil'
  }
];

export default function Calendar() {
  const [expandedActivity, setExpandedActivity] = useState<string | null>(null);

  const toggleActivity = (id: string) => {
    setExpandedActivity(expandedActivity === id ? null : id);
  };

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center gap-2 mb-6">
          <Clock className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">Actividad Mensual</h2>
        </div>

        <div className="space-y-4">
          {monthlyActivities.map((activity) => (
            <div
              key={activity.id}
              className="border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleActivity(activity.id)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{activity.title}</h3>
                  <div className="text-sm text-gray-600 mt-1">
                    <span className="font-medium">{activity.schedule}</span> • {activity.time}
                  </div>
                </div>
                {expandedActivity === activity.id ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>

              {expandedActivity === activity.id && (
                <div className="p-4 bg-gray-50 border-t">
                  <div className="text-gray-700 mb-2">
                    {activity.description.split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Lugar:</span> {activity.location}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

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
    </div>
  );
}
