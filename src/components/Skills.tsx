import React from "react";
import { Code, Globe, Smartphone, Database, Wrench as ToolIcon, LucideIcon } from 'lucide-react';

// --- Type Definitions ---
interface Skill {
  name: string;
  description: string;
}

interface SkillCategory {
  category: string;
  Icon: LucideIcon;
  skills: Skill[];
}

// --- Data Refactor for Icons and Categories ---
const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    Icon: Code,
    skills: [
      { name: "Python", description: "Scripting, Automation, Data Processing" },
      { name: "C Programming", description: "System Programming, Embedded Systems" },
      { name: "JavaScript", description: "ES6+, Async/Await, Modern Syntax" },
      { name: "TypeScript", description: "Type Safety, Generics, Advanced Types" },
    ],
  },
  {
    category: "Web Development",
    Icon: Globe,
    skills: [
      { name: "HTML & CSS", description: "Semantic HTML, Flexbox, Grid, Responsive" },
      { name: "React", description: "Hooks, Context API, Component Architecture" },
      { name: "Django", description: "REST APIs, Authentication, ORM" },
      { name: "REST APIs", description: "API Design, Integration, Documentation" },
    ],
  },
  {
    category: "App Development",
    Icon: Smartphone,
    skills: [
      { name: "Flutter", description: "Cross-platform, Widget Architecture" },
      { name: "Dart", description: "Object-oriented, Asynchronous Programming" },
      { name: "Mobile UI/UX", description: "Material Design, iOS Guidelines" },
    ],
  },
  {
    category: "Databases",
    Icon: Database,
    skills: [
      { name: "PostgreSQL", description: "Database Design, Optimization, Transactions" },
      { name: "MongoDB", description: "Database Design, Optimization, Transactions" },
      { name: "MS SQL", description: "Stored Procedures, Query Optimization" },
      { name: "ORM", description: "Object-Relational Mapping, Database Abstraction" },
    ],
  },
  {
    category: "Tools & Other",
    Icon: ToolIcon, 
    skills: [
      { name: "Git & GitHub", description: "Version Control, CI/CD, Collaboration" },
      { name: "Azure App Service", description: "Data Serialization, API Communication" },
      { name: "Node.js", description: "Simulation, Electromagnetic Analysis" },
      { name: "IoT", description: "Internet of Things, Embedded Systems" },
    ],
  },
];

// Main Component
export default function Skills(): JSX.Element {
  return (
    <section
      id="skills"
      className="min-h-screen py-16 md:py-24 bg-slate-950 relative overflow-hidden font-sans flex items-center"
    >
      {/* Dynamic Background Glows */}
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[160px] animate-float-delayed" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Header */}
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
        </header>

        {/* 5 Categories in Single Row - Compact Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((categoryData: SkillCategory, index: number) => (
            <div
              key={index}
              className="group p-6 bg-slate-900/80 rounded-2xl border border-slate-700/60 shadow-xl transition-all duration-300 hover:border-cyan-500/50 hover:shadow-cyan-500/20 backdrop-blur-sm flex flex-col h-full hover:scale-105"
            >
              {/* Category Header - More Compact */}
              <div className="flex flex-col items-center text-center mb-4 pb-4 border-b border-slate-700/50">
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 mb-3 group-hover:from-cyan-500/30 group-hover:to-indigo-500/30 transition-all">
                  <categoryData.Icon className="h-6 w-6 text-cyan-300" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {categoryData.category}
                </h3>
              </div>

              {/* Skills List - Vertical Stack */}
              <div className="flex flex-col gap-2 flex-1 justify-center">
                {categoryData.skills.map((skill: Skill, skillIndex: number) => (
                  <div
                    key={skillIndex}
                    className="px-3 py-2 bg-slate-800/50 text-slate-200 text-sm font-medium rounded-lg border border-slate-700/50 hover:bg-cyan-900/20 hover:border-cyan-400/30 hover:text-cyan-300 transition-all duration-200 group-hover:scale-105 group-hover:translate-x-1"
                    style={{ transitionDelay: `${skillIndex * 50}ms` }}
                  >
                    <div className="flex items-center justify-center">
                      <span>{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
      </div>

      {/* Style for custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(30px) translateX(-20px); }
        }
        .animate-float { animation: float 10s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 12s ease-in-out infinite; }
      `}</style>
    </section>
  );
}