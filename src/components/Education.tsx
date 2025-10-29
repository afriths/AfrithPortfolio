import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'B.Tech in Electronics and Communication Engineering',
      institution: 'Indian Institute of Information Technology, Tiruchirappalli',
      duration: '2021 - 2025',
      performance: 'CGPA 9.0'
    },
    {
      degree: 'XII (Senior Secondary)',
      institution: 'Asian Christian High School, Hosur',
      duration: '2020 - 2021',
      performance: '95.4%'
    },
    {
      degree: 'X (Secondary)',
      institution: 'Asian Christian High School, Hosur',
      duration: '2018 - 2019',
      performance: '95.6%'
    }
  ];

  return (
    <section id="education" className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 md:p-8 hover:bg-slate-800 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-cyan-400 mb-2">
                      <GraduationCap className="w-4 h-4 flex-shrink-0" />
                      <p className="text-sm md:text-base">{edu.institution}</p>
                    </div>
                    <p className="text-slate-400 text-sm md:text-base">{edu.duration}</p>
                  </div>
                  <div className="flex items-center gap-2 md:flex-col md:items-end">
                    <Award className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-2xl md:text-3xl font-bold text-white">{edu.performance}</span>
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
