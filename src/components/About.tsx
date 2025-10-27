import { Code2, Palette, Rocket, Users } from 'lucide-react';

export default function About() {
  const traits = [
    {
      icon: Code2,
      title: 'Performance-Focused',
      description: 'Optimizing every line of code for maximum efficiency and speed'
    },
    {
      icon: Rocket,
      title: 'Problem Solver',
      description: 'Turning complex challenges into elegant, scalable solutions'
    },
    {
      icon: Palette,
      title: 'Continuous Learner',
      description: 'Always exploring new technologies and best practices'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborating effectively to deliver exceptional results'
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                I'm a <span className="font-semibold text-slate-900">Full Stack Developer</span> pursuing B.Tech in Electronics and Communication Engineering at IIIT Tiruchirappalli with a stellar <span className="font-semibold text-cyan-600">9.0 CGPA</span>.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                My journey in tech combines strong academic foundations with hands-on experience in building robust web and mobile applications. From developing enterprise solutions at <span className="font-semibold text-slate-900">SUN TV Network</span> to designing cutting-edge systems at <span className="font-semibold text-slate-900">LRDE-DRDO</span>, I bring a unique blend of creativity and technical excellence.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Based in <span className="font-semibold text-slate-900">Hosur, Tamil Nadu</span>, I'm passionate about creating seamless digital experiences that make a real impact.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-emerald-500 p-1">
                <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
                      9.0
                    </div>
                    <div className="text-slate-300 text-xl font-semibold">CGPA</div>
                    <div className="text-slate-400 mt-2">IIIT Tiruchirappalli</div>
                    <div className="text-slate-500 text-sm mt-1">2021-2025</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {traits.map((trait, index) => {
              const Icon = trait.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-200"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{trait.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{trait.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
