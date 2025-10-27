import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in-up">
            <div className="inline-block p-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6">
              <div className="bg-slate-900 rounded-full px-6 py-2">
                <span className="text-cyan-400 text-sm font-medium">Full Stack Developer</span>
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up animation-delay-200">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400">
              Afrith.S
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Crafting elegant solutions through code. Specialized in web and mobile application development with a passion for creating exceptional user experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animation-delay-600">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1 transition-all duration-300"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('experience');
              }}
              className="px-8 py-4 bg-slate-800 text-white rounded-full font-semibold border-2 border-slate-700 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/30 transform hover:-translate-y-1 transition-all duration-300"
            >
              View Work
            </a>
          </div>

          <div className="flex justify-center gap-6 animate-fade-in-up animation-delay-800">
            <a
              href="https://github.com/afriths"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transform hover:-translate-y-1 transition-all duration-300 group"
            >
              <Github className="w-6 h-6 text-slate-300 group-hover:text-cyan-400" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transform hover:-translate-y-1 transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 text-slate-300 group-hover:text-cyan-400" />
            </a>
            <a
              href="mailto:afriths874@gmail.com"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transform hover:-translate-y-1 transition-all duration-300 group"
            >
              <Mail className="w-6 h-6 text-slate-300 group-hover:text-cyan-400" />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer bg-transparent border-none"
      >
        <ArrowDown className="w-8 h-8 text-cyan-400" />
      </button>
    </section>
  );
}
