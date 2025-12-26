import { useEffect } from 'react';
import { X, Target, Zap, Code, Star } from 'lucide-react';
import { ExperienceDetail } from '../data/experienceDetails';

interface ExperienceCardsPopupProps {
  experience: ExperienceDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ExperienceCardsPopup({ experience, isOpen, onClose }: ExperienceCardsPopupProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !experience) return null;

  return (
    <div className="cards-overlay" onClick={onClose}>
      <div className="cards-container" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="popup-header">
          <div className="company-info">
            <img src={experience.logo} alt={`${experience.company} Logo`} className="company-logo" />
            <div>
              <h2 className="company-name">{experience.company}</h2>
              <div>
                <h3 className="role-title">{experience.role}</h3>
                <span className="duration">{experience.duration}</span>
              </div>
            </div>
          </div>
          <button className="close-button" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* 2x2 Cards Grid */}
        <div className="cards-grid">
          {/* Overview Card */}
          <div className="detail-card overview-card">
            <div className="card-header">
              <Target size={24} />
              <h4>Overview</h4>
            </div>
            <div className="card-content">
              <p>{experience.detailedDescription}</p>
            </div>
          </div>

          {/* Key Achievements Card */}
          <div className="detail-card achievements-card">
            <div className="card-header">
              <Zap size={24} />
              <h4>Key Achievements</h4>
            </div>
            <div className="card-content">
              <ul className="achievements-list">
                {experience.keyAchievements.slice(0, 4).map((achievement, index) => (
                  <li key={index}>
                    <span className="achievement-number">{index + 1}</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technologies Card */}
          <div className="detail-card technologies-card">
            <div className="card-header">
              <Code size={24} />
              <h4>Technologies</h4>
            </div>
            <div className="card-content">
              <div className="tech-grid">
                {experience.technologiesUsed.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Key Features Card */}
          <div className="detail-card features-card">
            <div className="card-header">
              <Star size={24} />
              <h4>Key Features</h4>
            </div>
            <div className="card-content">
              {experience.projectDetails ? (
                <ul className="features-list">
                  {experience.projectDetails.features.slice(0, 5).map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              ) : (
                <ul className="features-list">
                  {experience.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cards-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 2vh;
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .cards-container {
          width: 100%;
          max-width: 1200px;
          max-height: 90vh;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
          animation: slideUp 0.4s ease-out;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(50px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .popup-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          flex-shrink: 0;
        }

        .company-info {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .company-logo {
          width: 50px;
          height: 50px;
          border-radius: 10px;
          object-fit: contain;
        }

        .company-name {
          font-size: 1.4rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 5px 0;
          background: linear-gradient(135deg, #60a5fa, #34d399);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .role-title {
          font-size: 1rem;
          font-weight: 600;
          color: #e5e7eb;
          margin: 0;
          display: inline;
        }

        .duration {
          font-size: 1rem;
          color: #9ca3af;
          margin: 0;
          display: inline;
          margin-left: 8px;
        }

        .close-button {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .close-button:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
        }

        .cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 20px;
          flex: 1;
          min-height: 0;
          overflow-y: auto;
          padding-right: 10px;
        }

        .detail-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          animation: cardPop 0.6s ease-out;
          animation-fill-mode: both;
          backdrop-filter: blur(10px);
          min-height: 300px;
          height: fit-content;
        }

        .detail-card:nth-child(1) { animation-delay: 0.1s; }
        .detail-card:nth-child(2) { animation-delay: 0.2s; }
        .detail-card:nth-child(3) { animation-delay: 0.3s; }
        .detail-card:nth-child(4) { animation-delay: 0.4s; }

        @keyframes cardPop {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .detail-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .card-header svg {
          color: #60a5fa;
        }

        .card-header h4 {
          font-size: 1.3rem;
          font-weight: 600;
          color: #ffffff;
          margin: 0;
        }

        .card-content {
          flex: 1;
          overflow-y: auto;
        }

        .card-content p {
          color: #d1d5db;
          line-height: 1.6;
          font-size: 0.95rem;
          margin: 0;
          text-align: justify;
        }

        .achievements-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .achievements-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: #d1d5db;
          font-size: 0.9rem;
          line-height: 1.5;
          text-align: justify;
        }

        .achievement-number {
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #60a5fa, #34d399);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 0.8rem;
          flex-shrink: 0;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 12px;
          align-items: center;
        }

        .tech-tag {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 8px 12px;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 500;
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .features-list li {
          color: #d1d5db;
          padding-left: 20px;
          position: relative;
          font-size: 0.9rem;
          line-height: 1.5;
          text-align: justify;
        }

        .features-list li::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: #34d399;
          font-weight: bold;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .cards-overlay {
            padding: 1vh;
          }

          .cards-container {
            padding: 20px;
          }

          .cards-grid {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(4, auto);
            height: auto;
            max-height: 80vh;
            overflow-y: auto;
          }

          .detail-card {
            min-height: 200px;
          }

          .company-info {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }

          .popup-header {
            flex-direction: column;
            gap: 20px;
          }

          .close-button {
            align-self: flex-end;
          }
        }

        /* Scrollbar Styling for Cards Grid */
        .cards-grid::-webkit-scrollbar {
          width: 8px;
        }

        .cards-grid::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }

        .cards-grid::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
        }

        .cards-grid::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }

        /* Scrollbar Styling for Card Content */
        .card-content::-webkit-scrollbar {
          width: 4px;
        }

        .card-content::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }

        .card-content::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
        }

        .card-content::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
}