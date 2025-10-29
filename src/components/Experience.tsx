import { useRef, useEffect, useState } from 'react';
import sunTvLogo from '../assets/suntv-logo.png';
import drdoLogo from '../assets/drdo-logo.png';
import emertxeLogo from '../assets/e-logo.png';
import ietLogo from '../assets/iet-logo.png';

export default function Experience() {
  const experiences = [
    {
      company: 'iELEKTRON Technologies',
      role: 'Associate Software Engineer',
      duration: 'Aug 2025 – Current',
      description: 'Implementing an employee management system with project tracking capability',
      highlights: [
        'React based frontend with TypeScript',
        'Project tracking and management features'
      ],
      logo: ietLogo
    },
    {
      company: 'SUN TV Network',
      role: 'App Developer Intern',
      duration: 'Jan 2025 – May 2025',
      description: 'Developed On‑Duty App using Flutter and Django',
      highlights: [
        'Tracked approvals, time & attendance',
        'Built route planning & destination search'
      ],
      logo: sunTvLogo
    },
    {
      company: 'LRDE-DRDO',
      role: 'Intern',
      duration: 'May 2024 – July 2024',
      description: 'Designed Waveguides & Power Dividers using HFSS',
      highlights: [
        'Specialized in X‑band coaxial groove gap divider'
      ],
      logo: drdoLogo
    },
    {
      company: 'EMERTXE',
      role: 'Intern',
      duration: 'March 2023 – May 2023',
      description: 'IoT‑based Home Automation Project',
      highlights: [
        'Simulated lighting, temperature & water tank logic'
      ],
      logo: emertxeLogo
    }
  ];

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
      <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
        </div>
      
      <div className="experience-scroll-wrapper" ref={scrollContainerRef}>
        <div className="experience-container">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
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
                  <p>{exp.description}</p>
                  <ul>
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                <a href="#" className="card-button">
                  <span>View Details</span>
                  <span className="icon">→</span>
                </a>
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

      <style jsx>{`
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
          background: linear-gradient(135deg, #302b63 0%, #07051a 100%);
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
          z-index: 1;
        }

        .experience-card:hover .card-back {
          left: 0;
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
          margin-bottom: 15px;
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
          justify-content: space-between;
          padding: 10px 20px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          text-decoration: none;
          border-radius: 30px;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          margin-top: auto;
          align-self: flex-end;
        }

        .card-button:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
          padding-right: 18px;
        }

        .card-button .icon {
          margin-left: 12px;
          font-weight: bold;
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