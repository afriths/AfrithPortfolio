import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
    setActiveSection(id);
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' }
  ];

  const getGliderPosition = () => {
    const positions = [0, 58, 114, 170, 226, 282];
    const index = navItems.findIndex(item => item.id === activeSection);
    return positions[index] || 5;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all duration-300"
            >
              Portfolio
            </button>

            {/* Desktop Navigation - Original */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors duration-300 z-50"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer - Only for small screens */}
      <div className={`md:hidden fixed top-20 right-0 w-1/2 h-[calc(100vh-80px)] bg-gray-900/95 backdrop-blur-md z-40 transition-transform duration-300 ease-out ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="radio-container h-full pt-4">
          {navItems.map((item, index) => (
            <div key={item.id} className="relative">
              <input
                type="radio"
                id={`mobile-nav-${item.id}`}
                name="mobile-nav"
                checked={activeSection === item.id}
                onChange={() => {}}
                className="absolute opacity-0 cursor-pointer"
              />
              <label
                htmlFor={`mobile-nav-${item.id}`}
                onClick={() => scrollToSection(item.id)}
                className={`cursor-pointer px-6 py-4 relative text-gray-400 transition-all duration-300 flex items-center gap-3 ${
                  activeSection === item.id ? 'text-yellow-400 font-medium' : ''
                }`}
              >
                <span className="w-6 text-center">{index + 1}.</span>
                {item.label}
              </label>
            </div>
          ))}

          {/* Glider Container */}
          <div className="glider-container absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent">
            <div 
              className="glider absolute w-full bg-gradient-to-b from-transparent via-yellow-400 to-transparent transition-transform duration-500 ease-out"
              style={{ 
                height: '50px',
                transform: `translateY(${getGliderPosition()}px)`
              }}
            >
              <div className="absolute inset-0 bg-yellow-400 opacity-20 blur-lg"></div>
              <div className="absolute left-0 h-full w-32 bg-gradient-to-r from-yellow-400/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div 
        className={`md:hidden fixed inset-0 top-20 bg-black z-30 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-60 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <style jsx>{`
        .radio-container {
          --main-color: #f7e479;
          --main-color-opacity: #f7e4791c;
          padding: 0px 0 20px 0;
          display: flex;
          flex-direction: column;
          position: relative;
          height: 100%;
        }

        .glider-container {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(27, 27, 27, 1) 50%,
            rgba(0, 0, 0, 0) 100%
          );
          width: 1px;
        }

        .glider {
          position: relative;
          height: 50px;
          width: 100%;
          background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0) 0%,
            var(--main-color) 50%,
            rgba(0, 0, 0, 0) 100%
          );
          transition: transform 0.5s cubic-bezier(0.37, 1.95, 0.66, 0.56);
        }

        .glider::before {
          content: "";
          position: absolute;
          height: 100%;
          width: 300%;
          left: 0;
          background: var(--main-color);
          filter: blur(20px);
          opacity: 0.2;
        }

        .glider::after {
          content: "";
          position: absolute;
          left: 0;
          height: 100%;
          width: 150px;
          background: linear-gradient(
            90deg,
            var(--main-color-opacity) 0%,
            rgba(0, 0, 0, 0) 100%
          );
        }
      `}</style>
    </>
  );
}