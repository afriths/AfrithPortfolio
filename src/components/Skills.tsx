import { Code, Globe, Smartphone, Database, Palette } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      color: 'from-cyan-500 to-blue-500',
      skills: ['Python', 'JavaScript', 'C', 'Dart']
    },
    {
      icon: Globe,
      title: 'Web Development',
      color: 'from-blue-500 to-cyan-600',
      skills: ['HTML & CSS', 'Django', 'REST APIs', 'React']
    },
    {
      icon: Smartphone,
      title: 'App Development',
      color: 'from-emerald-500 to-teal-500',
      skills: ['Flutter', 'Mobile UI/UX', 'Cross-platform']
    },
    {
      icon: Database,
      title: 'Databases',
      color: 'from-teal-500 to-cyan-500',
      skills: ['PostgreSQL', 'MS SQL', 'ORM']
    },
    {
      icon: Palette,
      title: 'Design Tools',
      color: 'from-blue-600 to-cyan-600',
      skills: ['Figma', 'UI/UX Design', 'Prototyping']
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto px-4">
              A diverse toolkit for building modern, scalable applications
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="group bg-slate-800/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:bg-slate-800 transition-all duration-300 border border-slate-700 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">
                      {category.title}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1.5 md:px-4 md:py-2 bg-slate-700/50 rounded-lg text-xs md:text-sm font-medium text-slate-200 border border-slate-600 hover:border-cyan-500 hover:text-cyan-400 transition-colors duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
