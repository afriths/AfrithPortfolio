import { Code2, Zap, Lightbulb, BookOpen, Users, Target } from 'lucide-react';

export default function About() {
  const traits = [
    {
      icon: Code2,
      title: 'Full Stack Developer',
      description: 'Practical experience in developing web/mobile applications and integrating APIs'
    },
    {
      icon: Zap,
      title: 'Performance Focused',
      description: 'Skilled in creating scalable, high-performance solutions'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'Passionate about building efficient digital products'
    },
    {
      icon: BookOpen,
      title: 'Continuous Learner',
      description: 'Constantly learning and adapting to new technologies'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Strong collaborator who thrives in team environments'
    },
    {
      icon: Target,
      title: 'Detail Oriented',
      description: 'Focus on creating seamless user experiences across all platforms'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {traits.map((trait, index) => {
              const Icon = trait.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-700/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:bg-slate-700/50 transform hover:-translate-y-2 transition-all duration-300 border border-slate-600 hover:border-cyan-500/50"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3">{trait.title}</h3>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">{trait.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
