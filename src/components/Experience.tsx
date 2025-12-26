import { useRef, useEffect, useState } from 'react';
import { Eye } from 'lucide-react';
import sunTvLogo from '../assets/suntv-logo.png';
import drdoLogo from '../assets/drdo-logo.png';
import emertxeLogo from '../assets/e-logo.png';
import ietLogo from '../assets/iet-logo.png';
import ExperienceCardsPopup from './ExperienceCardsPopup';
import { experienceDetails, ExperienceDetail } from '../data/experienceDetails';

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceDetail | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const experiences = [
    {
      id: 'ielektron',
      company: 'iELEKTRON Technologies',
      role: 'Associate Software Engineer',
      duration: 'Aug 2025 – Current',
      highlights: [
        'Engineered core modules for an employee database and skill-mapping platform',
        'Dynamic system with project tracking, resource allocation, and competency assessment'
      ],
      logo: ietLogo
    },
    {
      id: 'suntv',
      company: 'SUN TV Network',
      role: 'App Developer Intern',
      duration: 'Jan 2025 – May 2025',
      highlights: [
        'Developed an On-Duty HRMS mobile application using Flutter and Django',
        'Workforce monitoring by geo-tagging employee activities with location and timestamps.',
        'Inuilt map feature for route plan and destination search'
      ],
      logo: sunTvLogo
    },
    {
      id: 'lrde',
      company: 'LRDE-DRDO',
      role: 'Intern',
      duration: 'May 2024 – July 2024',
      highlights: [
        'Designed Waveguides & Power Dividers using HFSS',
        'Specialized in X‑band coaxial groove gap divider',
        'Focused on the design, simulation, and optimization of high-frequency waveguide components'
      ],
      logo: drdoLogo
    },
    {
      id: 'emertxe',
      company: 'EMERTXE',
      role: 'Intern',
      duration: 'March 2023 – May 2023',
      highlights: [
        'Built a simulated IoT home automation system using Arduino UNO, PICSimLab, and Blynk IoT',
        'Implemented control of LEDs, sensors, and water tanks, replicating garden lights, heaters, and coolers.'
      ],
      logo: emertxeLogo
    }
  ];

  const handleViewDetails = (experienceId: string) => {
    console.log('Clicked experience ID:', experienceId);
    const experience = experienceDetails.find(exp => exp.id === experienceId);
    console.log('Found experience:', experience);
    if (experience) {
      setSelectedExperience(experience);
      setIsPopupOpen(true);
      console.log('Popup should open now');
    } else {
      console.log('Experience not found!');
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedExperience(null);
  };

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollThumbRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Scroll indicator functionality
  useEffect(() => {
  const container = scrollContainerRef.current;
  const thumb = scrollThumbRef.current;

  if (!container || !thumb) return;

  const thumbWidth = 40;

  const updateScrollThumb = () => {
    const scrollLeft = container.scrollLeft;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    // Get track width dynamically
    const track = thumb.parentElement;
    const trackWidth = track?.clientWidth || 300;
    const availableWidth = trackWidth - thumbWidth;

    const thumbPosition = maxScrollLeft > 0
      ? Math.min(availableWidth, (scrollLeft / maxScrollLeft) * availableWidth)
      : 0;

    thumb.style.transform = `translateX(${thumbPosition}px)`;
  };

  const handleMouseDown = (e: MouseEvent) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    const track = thumb.parentElement;
    if (!track) return;

    const trackRect = track.getBoundingClientRect();
    const clickX = e.clientX - trackRect.left;
    const scrollPercentage = Math.max(
      0,
      Math.min(1, clickX / trackRect.width)
    );

    container.scrollLeft =
      scrollPercentage * (container.scrollWidth - container.clientWidth);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  container.addEventListener("scroll", updateScrollThumb);
  thumb.addEventListener("mousedown", handleMouseDown as EventListener);
  document.addEventListener("mousemove", handleMouseMove as EventListener);
  document.addEventListener("mouseup", handleMouseUp as EventListener);

  updateScrollThumb();

  return () => {
    container.removeEventListener("scroll", updateScrollThumb);
    thumb.removeEventListener("mousedown", handleMouseDown as EventListener);
    document.removeEventListener("mousemove", handleMouseMove as EventListener);
    document.removeEventListener("mouseup", handleMouseUp as EventListener);
  };
}, [isDragging]);


  return (
    <section id="experience" className="experience-section">
      <div className="text-center mb-12 md:mb-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
        </div>
      
      <div className="experience-scroll-wrapper" ref={scrollContainerRef}>
        <div className="experience-container">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="experience-card"
            >
              {/* Front Card */}
              <div className="card-front">
                <div className="card-logo">
                  <img src={exp.logo} alt={`${exp.company} Logo`} />
                </div>
                <div className="card-company">{exp.company}</div>
                <div className="card-role">{exp.role}</div>
                <div className="card-duration">{exp.duration}</div>
              </div>
              
              {/* Back Card */}
              <div className="card-back">
                <div className="card-role-back">{exp.role}</div>
                <div className="card-description">
                  <ul>
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                <button 
                  className="card-button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Button clicked!', exp.id);
                    handleViewDetails(exp.id);
                  }}
                  type="button"
                >
                  <span>View Details</span>
                  <Eye className="icon" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator-container">
        <div className="scroll-track">
          <div className="scroll-thumb" ref={scrollThumbRef}></div>
        </div>
      </div>

      {/* Experience Cards Popup */}
      <ExperienceCardsPopup 
        experience={selectedExperience}
        isOpen={isPopupOpen}
        onClose={closePopup}
      />

      <style>{`
        .experience-section {
          padding: 80px 20px;
          background: #0f0f23;
          color: #333;
        }

        .section-title {
          text-align: center;
          margin-bottom: 50px;
          font-size: 2rem;
          color: #333;
        }

        .experience-scroll-wrapper {
          overflow-x: auto;
          scrollbar-width: none;
          padding: 20px 0;
        }

        .experience-scroll-wrapper::-webkit-scrollbar {
          display: none;
        }

        .experience-container {
          display: flex;
          gap: 30px;
          padding: 0 50px;
          min-width: max-content;
          justify-content: center;
        }

        /* Card Styles */
        .experience-card {
          position: relative;
          width: 300px;
          height: 400px;
          background: linear-gradient(135deg, #302b63 0%, #07051a 90%);
          border: 3px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
          transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
          flex-shrink: 0;
          --transition: 550ms;
        }

        .experience-card:hover {
          box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
        }

        /* Front Card Content */
        .card-front {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 30px;
          box-sizing: border-box;
          transition: opacity var(--transition) ease;
          z-index: 2;
        }

        .experience-card:hover .card-front {
          opacity: 0;
        }

        /* Card Logo Styles */
        .card-logo {
          width: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 30px;
          transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), filter 0.4s ease;
          filter: blur(0px);
        }

        .experience-card:hover .card-logo {
          transform: scale(1.3);
          filter: blur(4px);
        }

        .experience-card:hover .card-front,
        .experience-card:not(:hover) .card-front {
          transition: 
            opacity 0.3s ease 0.1s,
            filter 0.3s ease 0.1s;
        }

        .experience-card:not(:hover) .card-logo {
          filter: blur(0px);
          transition-delay: 0.3s;
        }

        .logo-placeholder {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 2rem;
          font-weight: bold;
        }

        .card-company {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 10px;
          text-align: center;
          color: #fff;
        }

        .card-role {
          font-size: 1.1rem;
          font-weight: 500;
          margin-bottom: 15px;
          text-align: center;
          color: #e6e6e6;
        }

        .card-duration {
          font-size: 0.9rem;
          color: #aaa;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Back Card Content */
        .card-back {
          position: absolute;
          top: 0;
          left: 100%;
          width: 100%;
          height: 100%;
          padding: 30px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          background: linear-gradient(135deg, #0f0c29 0%, #302b63 100%);
          transition: left var(--transition) cubic-bezier(0.85,0,0,1); 
          z-index: 3;
          pointer-events: none;
        }

        .experience-card:hover .card-back {
          left: 0;
          pointer-events: auto;
        }

        .card-role-back {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 20px;
          color: #fff;
        }

        .card-description {
          flex-grow: 1;
        }

        .card-description p {
          color: #e6e6e6;
          margin-bottom: 2px;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .card-description ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .card-description li {
          position: relative;
          padding-left: 20px;
          margin-bottom: 15px;
          color: #e6e6e6;
          font-size: 0.95rem;
          line-height: 1.5;
          text-align: justify;
        }

        .card-description li::before {
          content: '›';
          position: absolute;
          left: 0;
          color: #fff;
          font-weight: bold;
        }

        .card-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          text-decoration: none;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          margin-top: auto;
          align-self: flex-end;
          gap: 6px;
          position: relative;
          z-index: 10;
          pointer-events: auto;
          overflow: hidden;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        .card-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s ease;
        }

        .card-button:hover::before {
          left: 100%;
        }

        .card-button:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-3px);
          box-shadow: 
            0 10px 30px rgba(0, 0, 0, 0.3),
            0 0 20px rgba(255, 255, 255, 0.1);
          color: #ffffff;
        }

        .card-button:active {
          transform: translateY(-1px);
          box-shadow: 
            0 5px 15px rgba(0, 0, 0, 0.2),
            0 0 10px rgba(255, 255, 255, 0.05);
        }

        .card-button .icon {
          transition: transform 0.3s ease;
        }

        .card-button:hover .icon {
          transform: translateX(3px);
        }

        /* Scroll Indicator */
        .scroll-indicator-container {
          position: relative;
          width: 100%;
          max-width: 300px;
          margin: 20px auto 0;
          padding: 0 20px;
        }

        .scroll-track {
          width: 100%;
          height: 6px;
          background: rgba(44, 115, 223, 0.2);
          border-radius: 3px;
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden; /* Add this to contain the thumb */
        }

        .scroll-track:hover {
          height: 8px;
        }

        .scroll-thumb {
          position: absolute;
          width: 40px;
          height: 10px;
          background: #2c73df;
          border-radius: 5px;
          top: -2px;
          left: 0;
          cursor: grab;
          transition: width 0.2s ease, height 0.2s ease;
          box-shadow: 0 2px 5px rgba(44, 115, 223, 0.3);
          max-width: calc(100% - 40px); /* Add this to prevent overflow */
        }

        .scroll-thumb:active {
          cursor: grabbing;
          height: 12px;
          width: 50px;
          background: #1a5bc7;
        }

        .scroll-thumb::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60%;
          height: 2px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 1px;
        }

        .scroll-track:hover .scroll-thumb {
          height: 12px;
          width: 50px;
        }

        /* Hide on desktop */
        @media (min-width: 992px) {
          .scroll-indicator-container {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}