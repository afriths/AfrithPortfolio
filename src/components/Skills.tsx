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
      color: 'from-blue-500 to-indigo-500',
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
      color: 'from-pink-500 to-rose-500',
      skills: ['Figma', 'UI/UX Design', 'Prototyping']
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A diverse toolkit for building modern, scalable applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="group bg-slate-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-transparent relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                       style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>

                  <div className="relative z-10">
                    <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      {category.title}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-slate-700 border border-slate-200 hover:border-cyan-500 hover:text-cyan-600 transition-colors duration-200"
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
