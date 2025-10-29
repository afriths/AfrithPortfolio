export default function Skills() {
  const skillCategories = [
    {
      category: 'Programming',
      skills: ['Python', 'C', 'JavaScript', 'Dart']
    },
    {
      category: 'Web Development',
      skills: ['HTML & CSS', 'Django', 'REST APIs', 'React']
    },
    {
      category: 'App Development',
      skills: ['Flutter', 'Mobile UI/UX', 'Cross-platform Development']
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MS SQL', 'ORM']
    },
    {
      category: 'Design',
      skills: ['Figma', 'UI/UX Design', 'Prototyping']
    },
    {
      category: 'Other',
      skills: ['Git', 'API Integration', 'Problem Solving', 'Team Collaboration']
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
              Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:bg-slate-800 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-4 border-b border-slate-700 pb-3">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="flex items-center gap-3 text-slate-300 text-sm md:text-base"
                    >
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full flex-shrink-0"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
