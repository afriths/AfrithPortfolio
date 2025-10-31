import { Code2, Zap, Lightbulb, BookOpen, Users, Target } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const scrollPosRef = useRef(0);
  const isUserScrollingRef = useRef(false);

  const traits = [
    { icon: Code2, title: 'Full Stack Developer', description: 'Experienced in developing responsive web and mobile applications, integrating APIs, and building scalable digital ecosystems.' },
    { icon: Zap, title: 'Performance Focused', description: 'Committed to delivering fast, optimized, and high-performance solutions with attention to efficiency and scalability.' },
    { icon: Lightbulb, title: 'Problem Solver', description: 'Driven by curiosity and creativity to craft smart, user-centered solutions for complex technical challenges.' },
    { icon: BookOpen, title: 'Continuous Learner', description: 'Dedicated to staying ahead in the evolving tech landscape through constant learning and experimentation.' },
    { icon: Users, title: 'Collaborative Mindset', description: 'Thrives in team-driven environments, valuing communication, adaptability, and shared success.' },
    { icon: Target, title: 'Detail Oriented', description: 'Focused on precision and quality, ensuring each product delivers an intuitive and seamless user experience.' },
  ];

  // Duplicate traits multiple times for seamless looping
  const duplicatedTraits = [...traits, ...traits, ...traits, ...traits];

  // Auto-scroll effect
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId: number;
    const scrollSpeed = 0.7;

    const animateScroll = () => {
      if (!isPaused && container && !isUserScrollingRef.current) {
        scrollPosRef.current += scrollSpeed;
        
        // Reset scroll position when we reach the duplicated content boundary
        if (scrollPosRef.current >= container.scrollWidth / 2) {
          scrollPosRef.current = 0;
        }
        
        container.scrollLeft = scrollPosRef.current;
      }
      animationId = requestAnimationFrame(animateScroll);
    };

    animationId = requestAnimationFrame(animateScroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Sync scroll position when user scrolls manually
  const handleScroll = () => {
    if (containerRef.current && isUserScrollingRef.current) {
      scrollPosRef.current = containerRef.current.scrollLeft;
    }
    setShowHint(false);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
    isUserScrollingRef.current = true;
    
    // Store current position when user starts interacting
    if (containerRef.current) {
      scrollPosRef.current = containerRef.current.scrollLeft;
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    isUserScrollingRef.current = false;
    
    // Continue from the stored position
    // No need to reset scrollPosRef.current since it's already updated by handleScroll
  };

  // Hide hint after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-700/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-700/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
            About{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Associate Software Engineer at{' '}
            <span className="text-cyan-400 font-semibold">iELEKTRON Technologies</span>, contributing to
            data-driven solutions and workflow automation. Experienced in building robust web and mobile
            applications with API integrations, and passionate about crafting efficient, user-friendly digital
            experiences.
          </p>
        </div>

        {/* SCROLLABLE SECTION */}
        <div className="relative py-0 md:py-0">
          {/* Fade overlays */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none -mx-8" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none -mx-8" />

          {/* Scroll hint */}
          {showHint && (
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-30">
              <div className="flex items-center space-x-2 bg-slate-800/90 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-600">
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce" />
                  <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}} />
                  <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
                </div>
                <span className="text-cyan-400 text-xs font-medium">Hover to pause and scroll</span>
              </div>
            </div>
          )}

          <div
            ref={containerRef}
            className="overflow-x-scroll hide-scrollbar flex space-x-6 cursor-grab active:cursor-grabbing -mx-8"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onScroll={handleScroll}
          >
            {duplicatedTraits.map((trait, index) => {
              const Icon = trait.icon;
              return (
                <div key={index} className="flex-shrink-0 w-72 md:w-80 p-3">
                  <div
                    className="relative p-5 md:p-6 h-full 
                      rounded-xl border border-slate-700 
                      bg-slate-900/80 backdrop-blur-sm 
                      shadow-lg shadow-cyan-500/5 
                      transition-all duration-300 hover:scale-[1.02]
                      hover:border-cyan-500/50 hover:shadow-cyan-500/20
                      cursor-pointer group"
                  >
                    <div className="flex flex-col gap-3">
                      <div
                        className="flex-shrink-0 w-12 h-12 
                          rounded-xl flex items-center justify-center
                          bg-gradient-to-br from-cyan-500 to-blue-600 
                          shadow-md shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300"
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-white mb-2">{trait.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{trait.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}