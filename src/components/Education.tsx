import { GraduationCap, Award, Calendar } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'B.Tech in Electronics and Communication Engineering',
      institution: 'Indian Institute of Information Technology, Tiruchirappalli',
      duration: '2021 - 2025',
      performance: 'CGPA 9.0',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      degree: 'XII (Senior Secondary)',
      institution: 'Asian Christian High School, Hosur',
      duration: '2020 - 2021',
      performance: '95.4%',
      color: 'from-blue-500 to-emerald-500'
    },
    {
      degree: 'X (Secondary)',
      institution: 'Asian Christian High School, Hosur',
      duration: '2018 - 2019',
      performance: '95.6%',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section id="education" className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-emerald-500"></div>

            <div className="space-y-8 md:space-y-12">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-12 md:pl-20">
                  <div className="absolute left-2.5 md:left-5 top-2 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-4 border-slate-900 z-10"></div>

                  <div className="bg-slate-800/50 rounded-2xl p-5 md:p-8 backdrop-blur-sm hover:bg-slate-800 transition-all duration-300 border border-slate-700 hover:border-cyan-500/50 transform hover:-translate-y-1">
                    <div className={`inline-block px-3 py-1 md:px-4 md:py-1 bg-gradient-to-r ${edu.color} rounded-full text-white text-xs md:text-sm font-semibold mb-3 md:mb-4`}>
                      {edu.duration}
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {edu.degree}
                    </h3>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3 md:mb-4">
                      <div className="flex items-center gap-2 text-cyan-400">
                        <GraduationCap className="w-4 h-4 flex-shrink-0" />
                        <span className="font-semibold text-sm md:text-base">{edu.institution}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-300 font-semibold text-base md:text-lg">{edu.performance}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
