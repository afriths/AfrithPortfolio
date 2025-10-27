import { Briefcase, MapPin, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'SUN TV Network',
      role: 'App Developer Intern',
      period: 'Recent',
      location: 'India',
      description: 'Developed On-Duty App using Flutter and Django',
      highlights: [
        'Built comprehensive mobile application with Flutter framework',
        'Implemented route planning and destination search functionality',
        'Integrated Django REST APIs for seamless backend communication',
        'Delivered production-ready solution for enterprise use'
      ],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      company: 'LRDE-DRDO',
      role: 'Research Intern',
      period: 'Summer Internship',
      location: 'India',
      description: 'Designed Waveguides & Power Dividers using HFSS',
      highlights: [
        'Specialized in X-band coaxial groove gap divider design',
        'Utilized HFSS for electromagnetic simulation and analysis',
        'Contributed to defense research projects',
        'Applied advanced RF engineering principles'
      ],
      color: 'from-blue-500 to-emerald-500'
    },
    {
      company: 'EMERTXE',
      role: 'IoT Development Intern',
      period: 'Project Internship',
      location: 'India',
      description: 'Developed IoT-based Home Automation Project',
      highlights: [
        'Created intelligent home automation system',
        'Implemented lighting, temperature, and water tank control logic',
        'Simulated real-world IoT scenarios',
        'Integrated sensors and actuators for smart home functionality'
      ],
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Real-world impact through innovative projects and collaborations
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-px h-full bg-gradient-to-b from-cyan-500 to-blue-500 opacity-20"></div>

                <div className={`relative ${index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12'} md:w-1/2 ml-8`}>
                  <div className="absolute left-0 md:left-auto md:right-auto top-8 transform -translate-x-1/2 md:translate-x-0 w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-4 border-slate-900 group-hover:scale-150 transition-transform duration-300"></div>

                  <div className="bg-slate-800 rounded-2xl p-8 hover:bg-slate-750 transition-all duration-300 border border-slate-700 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20 transform hover:-translate-y-1">
                    <div className={`inline-block px-4 py-1 bg-gradient-to-r ${exp.color} rounded-full text-white text-sm font-semibold mb-4`}>
                      {exp.period}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">
                      {exp.role}
                    </h3>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 text-cyan-400">
                        <Briefcase className="w-4 h-4" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-slate-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-3 text-slate-400">
                          <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-sm leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
