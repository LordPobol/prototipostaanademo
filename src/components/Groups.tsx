import React, { useState } from 'react';
import { Users, ChevronDown, ChevronUp, Phone } from 'lucide-react';
import { PhotoProvider, PhotoView } from "react-photo-view";
import imgMin1 from '../resources/imgMinis1.jpeg';
import imgMin2 from '../resources/imgMinis2.jpeg';;
import imgMin3 from '../resources/imgMinis3.jpeg';;
import imgMin4 from '../resources/imgMinis4.jpeg';;
import "react-photo-view/dist/react-photo-view.css";

type BulletPoint = {
  header: string;
  content: string;
};

type Section = {
  id: string;
  title: string;
  bulletPoints: BulletPoint[];
};

type Group = {
  id: string;
  name: string;
  description: string;
  contact: string;
  images: string[];
  sections: Section[];
};

const groups: Group[] = [
  {
    id: 'ministrosComunion',
    name: 'Ministros Extraordinarios de la Comunión',
    description: 'Los Ministros Extraordinarios de la Comunión son laicos a quienes se les delega el servicio de manera especial de llevar la Eucaristía a los fieles que no pueden asistir a la celebración litúrgica, especialmente a los enfermos y ancianos.\n\nEl servicio de los Ministros Extraordinarios de la Comunión responde al llamado de la Iglesia de atender las necesidades espirituales de sus fieles, especialmente de los más frágiles. Con humildad y dedicación, los ministros testimonian el amor de Cristo, haciendo presente la Eucaristía a quienes no pueden acceder a ella por limitaciones de salud o distancia, y colaboran con el sacerdote en la misión pastoral de la Iglesia.\n\nAyudar al Sacerdote en la distribución de la Comunión durante la Santa Misa cuando las circunstancias así lo exigen.',
    contact: '(55) 3661-1945',
    images: [
      imgMin1,
      imgMin2,
      imgMin3,
      imgMin4
    ],
    sections: [
      {
        id: 'origin',
        title: 'Origen e historia',
        bulletPoints: [
          {
            header: 'Concilio Vaticano II (1962-1965)',
            content: 'Tras la renovación promovida por el Concilio, la Iglesia procuró una participación más activa de los laicos en la vida litúrgica.'
          },
          {
            header: 'Documentos Magisteriales',
            content: 'Con la Instrucción Immensae Caritatis (1973) y otras normas posteriores, se reguló la posibilidad de que laicos debidamente preparados y autorizados pudieran distribuir la Comunión cuando fuera necesario (por ejemplo, en las celebraciones litúrgicas en donde la asistencia es numerosa, en ausencia de suficientes ministros ordenados y para atención de enfermos y ancianos). Ministeria Quaedam (1972): Aunque se centró más en la reforma de las órdenes menores, reflejó el espíritu de un laicado más comprometido y de la apertura de la Iglesia a su colaboración.'
          },
          {
            header: 'Ministeria Quaedam (1972)',
            content: 'Aunque se centró más en la reforma de las órdenes menores, reflejó el espíritu de un laicado más comprometido y de la apertura de la Iglesia a su colaboración.'
          }
        ]
      },
      {
        id: 'mission',
        title: 'Carisma y misión',
        bulletPoints: [
          {
            header: 'Servicio y humildad',
            content: 'El carisma principal de este ministerio radica en el servicio. No se busca prestigio personal sino responder a la necesidad de la comunidad cristiana.'
          },
          {
            header: 'Caridad y acompañamiento',
            content: 'Los Ministros Extraordinarios de la Comunión viven un carisma de cercanía, atención y consuelo, especialmente para con los fieles más vulnerables (enfermos, ancianos o personas con movilidad reducida).'
          },
          {
            header: 'Formación y discernimiento',
            content: 'Normalmente el Párroco convoca a los candidatos a una formación doctrinal y litúrgica adecuada, así como a un proceso de discernimiento espiritual que culmine con un mandato oficial.'
          }
        ]
      },
      {
        id: 'service',
        title: 'Atención a los enfermos y necesitados',
        bulletPoints: [
          {
            header: 'Llevar la Eucaristía',
            content: 'El ministro extraordinario se desplaza para llevar el Cuerpo de Cristo a quienes no pueden salir de casa. Esta visita no se limita a la distribución del sacramento; también incluye oraciones, escucha y acompañamiento pastoral.'
          },
          {
            header: 'Atención en hospitales y asilos',
            content: 'Los ministros desempeñan su servicio en hospitales, clínicas, asilos o centros de cuidados, donde participan en la atención espiritual.'
          },
          {
            header: 'Consuelo y esperanza',
            content: 'El encuentro con el enfermo va más allá de un acto litúrgico; busca llevar consuelo, compañía y la presencia amorosa de la Iglesia'
          }
        ]
      },
      {
        id: 'rules',
        title: 'Normas y requisitos',
        bulletPoints: [
          {
            header: 'Mandato eclesiástico',
            content: 'El Obispo y/o el Párroco designado por él, concede un mandato temporal (normalmente renovable), y el ministro ejerce esta función solo durante el periodo autorizado y dentro de su territorio parroquial.'
          },
          {
            header: 'Requisito de vida cristiana',
            content: ' Se pide que el candidato tenga una práctica sacramental coherente (confesión frecuente, participación en la Eucaristía) y un compromiso de testimonio cristiano.'
          },
          {
            header: 'Respeto al rito y a la dignidad del sacramento',
            content: 'Se indica que el ministro debe observar las disposiciones litúrgicas al distribuir la Comunión, tanto en la Misa como en las visitas a los enfermos.'
          }
        ]
      },
      {
        id: 'importance',
        title: 'Importancia y valor pastoral',
        bulletPoints: [
          {
            header: 'Facilitar el acceso a la Eucaristía',
            content: 'En comunidades grandes o en zonas rurales con pocos sacerdotes, los ministros extraordinarios facilitan que más fieles reciban el Cuerpo de Cristo.'
          },
          {
            header: 'Compromiso laical',
            content: 'Fomenta la conciencia de que todos los bautizados están llamados a participar de la misión de la Iglesia, mostrando la comunión y la corresponsabilidad eclesial.'
          },
          {
            header: 'Continua vivencia de la fe',
            content: 'Para los enfermos y ancianos, recibir la Sagrada Comunión en casa refuerza su unión con la comunidad parroquial y con la Iglesia universal '
          }
        ]
      }
    ]
  },
  // ... other groups with similar structure
];

export default function Groups() {
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

  const toggleGroup = (groupId: string) => {
    setExpandedGroup(expandedGroup === groupId ? null : groupId);
    setExpandedSections({});
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <section id="groups" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Grupos Parroquiales</h2>
        <div className="grid gap-6 max-w-4xl mx-auto">
          {groups.map((group) => (
            <div key={group.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleGroup(group.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Users className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">{group.name}</h3>
                </div>
                {expandedGroup === group.id ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {expandedGroup === group.id && (
                <div className="px-6 pb-6 space-y-4">
                  <div className="text-gray-700 mb-6">
                    {group.description.split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </div>

                  {group.images && group.images.length > 0 && (
                    <PhotoProvider>
                      <div className="grid grid-cols-2 gap-4">
                        {group.images.map((image, index) => (
                          <PhotoView key={index} src={image}>
                            <img
                              src={image}
                              alt={`Group ${group.name} ${index + 1}`}
                              className="w-full h-40 object-cover rounded-lg cursor-pointer"
                            />
                          </PhotoView>
                        ))}
                      </div>
                    </PhotoProvider>
                  )}
                  
                  {group.sections.map((section) => (
                    <div key={section.id} className="border rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleSection(`${group.id}-${section.id}`)}
                        className="w-full flex items-center justify-between p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <span className="font-semibold text-gray-900">{section.title}</span>
                        {expandedSections[`${group.id}-${section.id}`] ? (
                          <ChevronUp className="w-4 h-4 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-gray-500" />
                        )}
                      </button>
                      
                      {expandedSections[`${group.id}-${section.id}`] && (
                        <div className="p-4 bg-white">
                          <ul className="space-y-4">
                            {section.bulletPoints.map((point, index) => (
                              <li key={index} className="flex flex-col">
                                <span className="font-bold text-gray-900 mb-1">• {point.header}</span>
                                <span className="text-gray-700 ml-4">{point.content}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                  
                  <div className="mt-6 pt-4 border-t">
                    <div className="flex items-center gap-2 text-gray-700">
                      <span className="font-semibold text-gray-900">Mayor información y contacto:</span>
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span>{group.contact}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}