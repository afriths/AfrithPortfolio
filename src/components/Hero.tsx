import { Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 md:mb-12">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-4xl md:text-5xl font-bold text-white shadow-2xl shadow-cyan-500/30">
              AS
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white tracking-tight">
            AFRITH.S
          </h1>

          <p className="text-xl md:text-2xl text-cyan-400 font-semibold mb-6">
            Full Stack Developer
          </p>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Passionate about creating innovative web and mobile applications. Specialized in building scalable solutions with modern technologies.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8 md:mb-12">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 hover:shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1 transition-all duration-300 text-sm md:text-base"
            >
              Get In Touch
            </button>
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-slate-800 text-white rounded-lg font-semibold border-2 border-slate-700 hover:border-cyan-500 hover:bg-slate-700 hover:shadow-lg hover:shadow-cyan-500/30 transform hover:-translate-y-1 transition-all duration-300 text-sm md:text-base"
            >
              <Download className="w-4 h-4 md:w-5 md:h-5" />
              Download Resume
            </a>
          </div>

          <div className="flex justify-center gap-4 md:gap-6">
            <a
              href="https://github.com/afriths"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-slate-800 rounded-full hover:bg-slate-700 hover:scale-110 transition-all duration-300 border-2 border-slate-700 hover:border-cyan-500"
            >
              <Github className="w-5 h-5 md:w-6 md:h-6 text-slate-300 hover:text-cyan-400" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-slate-800 rounded-full hover:bg-slate-700 hover:scale-110 transition-all duration-300 border-2 border-slate-700 hover:border-cyan-500"
            >
              <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-slate-300 hover:text-cyan-400" />
            </a>
            <a
              href="mailto:afriths874@gmail.com"
              className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-slate-800 rounded-full hover:bg-slate-700 hover:scale-110 transition-all duration-300 border-2 border-slate-700 hover:border-cyan-500"
            >
              <Mail className="w-5 h-5 md:w-6 md:h-6 text-slate-300 hover:text-cyan-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
