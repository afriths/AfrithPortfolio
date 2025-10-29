import { Github, Linkedin, Mail, Download, MapPin, Calendar } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import photo from '../assets/cropped.jpg';
import resume from '../assets/Afrith_Resume.pdf';

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typewriterRef = useRef<NodeJS.Timeout>();

  const roles = [
    'Full Stack Developer',
    'App Developer',
  ];

  // const stats = [
  //   { icon: Calendar, label: 'Experience', value: '2+ Years' },
  //   { icon: MapPin, label: 'Location', value: 'India' },
  // ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Fixed Typewriter effect
  useEffect(() => {
    const type = () => {
      const currentRole = roles[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(currentRole.substring(0, currentText.length - 1));
      } else {
        setCurrentText(currentRole.substring(0, currentText.length + 1));
      }

      let typeSpeed = 500;

      if (!isDeleting && currentText === currentRole) {
        typeSpeed = 1000; // Pause at end
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % roles.length);
        typeSpeed = 200; // Pause before starting next word
      } else if (isDeleting) {
        typeSpeed = 500; // Faster deleting
      }

      typewriterRef.current = setTimeout(type, typeSpeed);
    };

    typewriterRef.current = setTimeout(type, 200);

    return () => {
      if (typewriterRef.current) {
        clearTimeout(typewriterRef.current);
      }
    };
  }, [currentText, currentTextIndex, isDeleting, roles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-emerald-500 rounded-full filter blur-3xl animate-pulse-medium"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
              {/* Changed gap to gap-y-12 for mobile vertical separation */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-y-0 lg:gap-x-16">
                  {/* Left Column - Photo & Effects */}
                  <div className="flex-1 flex justify-center lg:justify-start mt-12 lg:mt-0 ">
                      <div className="relative group">
                          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-emerald-500 p-2 shadow-2xl shadow-cyan-500/30 animate-float mt-4">
                              <div className="w-full h-full rounded-full bg-slate-800 p-2">
                                  <img 
                                    src={photo}
                                    alt="Afrith S"
                                    className="w-full h-full rounded-full object-cover"
                                  />
                              </div>
                          </div>
                          
                          {/* Floating Elements (Unchanged) */}
                          <div className="absolute -top-6 -right-6 w-12 h-12 bg-cyan-500 rounded-full animate-bounce-slow opacity-80"></div>
                          <div className="absolute -bottom-4 -left-6 w-8 h-8 bg-blue-500 rounded-full animate-bounce-medium opacity-80"></div>
                          <div className="absolute top-1/2 -right-10 w-6 h-6 bg-emerald-500 rounded-full animate-bounce-fast opacity-80"></div>
                          <div className="absolute bottom-8 -left-10 w-5 h-5 bg-cyan-400 rounded-full animate-bounce-slow opacity-70"></div>
                      </div>
                  </div>

                  {/* Right Column - Content */}
                  <div className="flex-1 text-center lg:text-left">
                      {/* Badge (Unchanged) */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 mb-6">
                          {/* Content */}
                      </div>

                      {/* Name with Beautiful Styling */}
                      {/* Reduced margin-bottom from mb-8 to mb-4 on mobile */}
                      <div className="mb-4 md:mb-8"> 
                          {/* Reduced mb-4 to mb-2 on mobile */}
                          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-2">
                              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                                  AFRITH
                              </span>
                              <span className="text-cyan-400 mx-2">.</span>
                              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                  S
                              </span>
                          </h1>
                          
                          {/* Dynamic Typing Text - Reduced height from h-16 to h-12 on mobile */}
                          <div className="h-12 md:h-20 flex items-center justify-center lg:justify-start"> 
                              <p className="text-xl md:text-2xl lg:text-3xl text-cyan-400 font-semibold">
                                  {currentText}
                                  <span className="ml-1 animate-blink">|</span>
                              </p>
                          </div>
                      </div>

                      {/* Description */}
                      {/* Reduced margin-bottom from mb-8 to mb-4 on mobile */}
                      <p className="text-lg md:text-xl text-slate-300 mb-4 md:mb-12 leading-relaxed max-w-2xl lg:max-w-none">
                          Crafting digital experiences with cutting-edge technologies. 
                          Passionate about building scalable applications that solve real-world problems.
                      </p>

                      {/* CTA Buttons */}
                      {/* Reduced margin-bottom from mb-8 to mb-4 on mobile */}
                      <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-4 md:mb-12">
                          <button
                              onClick={() => scrollToSection('contact')}
                              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                          >
                              <span className="relative z-10">Get In Touch</span>
                              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </button>
                          
                          <a
                              href={resume}
                              download
                              className="group flex items-center gap-3 px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white rounded-xl font-semibold border-2 border-slate-700 hover:border-cyan-500 hover:bg-slate-700/50 hover:shadow-2xl hover:shadow-cyan-500/30 transform hover:-translate-y-1 transition-all duration-300"
                          >
                              <Download className="w-5 h-5 group-hover:animate-bounce" />
                              Download Resume
                          </a>
                      </div>

                      {/* Social Links - Removed as requested */}
                  </div>
              </div>
          </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="w-9 h-12 border-2 border-slate-600 rounded-full flex justify-center hover:border-cyan-400 transition-colors duration-300"
        >
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </button>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        @keyframes pulse-medium {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.3; }
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.25; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounce-medium {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes bounce-fast {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-pulse-medium {
          animation: pulse-medium 3s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slower 5s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
        .animate-bounce-medium {
          animation: bounce-medium 2s infinite;
        }
        .animate-bounce-fast {
          animation: bounce-fast 1.5s infinite;
        }
      `}</style>
    </section>
  );
}