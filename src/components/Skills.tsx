import React from "react";

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming",
      skills: [
        { name: "Python", description: "Scripting, Automation, Data Processing" },
        { name: "C Programming", description: "System Programming, Embedded Systems" },
        { name: "JavaScript", description: "ES6+, Async/Await, Modern Syntax" },
        { name: "TypeScript", description: "Type Safety, Generics, Advanced Types" },
      ],
    },
    {
      category: "Web Development",
      skills: [
        { name: "HTML & CSS", description: "Semantic HTML, Flexbox, Grid, Responsive" },
        { name: "React", description: "Hooks, Context API, Component Architecture" },
        { name: "Django", description: "REST APIs, Authentication, ORM" },
        { name: "REST APIs", description: "API Design, Integration, Documentation" },
      ],
    },
    {
      category: "App Development",
      skills: [
        { name: "Flutter", description: "Cross-platform, Widget Architecture" },
        { name: "Dart", description: "Object-oriented, Asynchronous Programming" },
        { name: "Mobile UI/UX", description: "Material Design, iOS Guidelines" },
        { name: "React Native", description: "Native Modules, Cross-platform" },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "PostgreSQL", description: "Database Design, Optimization, Transactions" },
        { name: "MS SQL", description: "Stored Procedures, Query Optimization" },
        { name: "ORM", description: "Object-Relational Mapping, Database Abstraction" },
      ],
    },
    {
      category: "Tools & Other",
      icon: "🛠️",
      skills: [
        { name: "Git & GitHub", description: "Version Control, CI/CD, Collaboration" },
        { name: "JSON", description: "Data Serialization, API Communication" },
        { name: "HFSS", description: "Simulation, Electromagnetic Analysis" },
        { name: "IoT", description: "Internet of Things, Embedded Systems" },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = React.useState(0);
  const [hoveredSkill, setHoveredSkill] = React.useState<number | null>(null);

  return (
    <section
      id="skills"
      className="min-h-screen py-20 md:py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] animate-float-delayed" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Technical{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                activeCategory === index
                  ? "bg-slate-800 text-white border border-cyan-400 shadow-cyan-500/30 shadow-lg"
                  : "bg-slate-800/50 text-slate-300 hover:bg-slate-700 border border-slate-700"
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span className="font-semibold">{category.category}</span>
            </button>
          ))}
        </div>

        {/* Column-based Skill Display */}
        <div className="max-w-6xl mx-auto bg-slate-900/60 backdrop-blur-xl border border-slate-700/40 rounded-3xl p-8 shadow-xl">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="group relative p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-cyan-400/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {skill.name}
                </h4>

                <div className="flex flex-wrap gap-2">
                  {skill.description.split(", ").map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-800/80 text-slate-300 text-xs rounded-full border border-slate-700/50 group-hover:border-cyan-400/20 group-hover:text-cyan-300 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Subtle Glow */}
                {hoveredSkill === index && (
                  <div className="absolute inset-0 rounded-2xl bg-cyan-500/5 blur-md pointer-events-none"></div>
                )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-10 pt-6 border-t border-slate-700/40 text-center text-slate-400 text-sm">
            {skillCategories[activeCategory].skills.length} skills in{" "}
            {skillCategories[activeCategory].category} •{" "}
            {activeCategory + 1} of {skillCategories.length}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(20px);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}