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
                  <div 
                    key={index} 
                    className="tech-tag-wrapper"
                  >
                    <span className="tech-tag">{tech}</span>
                    <span className="tech-tooltip">{tech}</span>
                  </div>
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
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 2vh;
          animation: fadeIn 0.3s ease-out;
        }

        .light .cards-overlay {
          background: rgba(0, 0, 0, 0.5);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .cards-container {
          width: 100%;
          max-width: 1400px;
          max-height: 95vh;
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

        .light .cards-container {
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%);
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
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

        .light .popup-header {
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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

        .light .company-name {
          background: linear-gradient(135deg, #0ea5e9, #10b981);
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

        .light .role-title {
          color: #1e293b;
        }

        .duration {
          font-size: 1rem;
          color: #9ca3af;
          margin: 0;
          display: inline;
          margin-left: 8px;
        }

        .light .duration {
          color: #64748b;
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

        .light .close-button {
          background: rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: #1e293b;
        }

        .close-button:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
        }

        .light .close-button:hover {
          background: rgba(0, 0, 0, 0.1);
        }

        .cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
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
        }

        .light .detail-card {
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(0, 0, 0, 0.1);
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

        .light .detail-card:hover {
          background: rgba(255, 255, 255, 1);
          border-color: rgba(0, 0, 0, 0.15);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .light .card-header {
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .card-header svg {
          color: #60a5fa;
        }

        .light .card-header svg {
          color: #0ea5e9;
        }

        .card-header h4 {
          font-size: 1.3rem;
          font-weight: 600;
          color: #ffffff;
          margin: 0;
        }

        .light .card-header h4 {
          color: #1e293b;
        }

        .card-content {
          flex: 1;
        }

        .card-content p {
          color: #d1d5db;
          line-height: 1.6;
          font-size: 0.95rem;
          margin: 0;
          text-align: justify;
        }

        .light .card-content p {
          color: #475569;
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

        .light .achievements-list li {
          color: #475569;
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

        .light .achievement-number {
          background: linear-gradient(135deg, #0ea5e9, #10b981);
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          align-items: stretch;
        }

        .tech-tag-wrapper {
          position: relative;
          display: block;
          min-width: 0;
        }

        .tech-tag {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          padding: 0 16px;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 500;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          height: 36px;
          display: block;
          line-height: 36px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
        }

        .light .tech-tag {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
        }

        .tech-tag:hover {
          transform: scale(1.05);
          z-index: 10;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .light .tech-tag:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        /* Tooltip */
        .tech-tooltip {
          position: absolute;
          bottom: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%);
          background: rgba(80, 80, 80, 0.95);
          color: white;
          padding: 10px 16px;
          border-radius: 8px;
          font-size: 0.85rem;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          z-index: 100;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .light .tech-tooltip {
          background: rgba(100, 100, 100, 0.95);
        }

        /* Tooltip arrow */
        .tech-tooltip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 10px solid rgba(80, 80, 80, 0.95);
        }

        .light .tech-tooltip::after {
          border-top-color: rgba(100, 100, 100, 0.95);
        }

        /* Show tooltip on hover */
        .tech-tag-wrapper:hover .tech-tooltip {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .tech-grid {
            grid-template-columns: repeat(2, 1fr);
          }
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

        .light .features-list li {
          color: #475569;
        }

        .features-list li::before {
          content: '▸';
          position: absolute;
          left: 0;
          color: #34d399;
          font-weight: bold;
        }

        .light .features-list li::before {
          color: #10b981;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .cards-overlay {
            padding: 1vh;
          }

          .cards-container {
            padding: 20px;
            max-height: 95vh;
          }

          .cards-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
          }

          .detail-card {
            min-height: auto;
          }

          .company-info {
            flex-direction: column;
            text-align: center;
            gap: 15px;
            width: 100%;
            align-items: center;
          }

          .popup-header {
            position: relative;
            flex-direction: column;
            gap: 10px;
            align-items: center;
          }

          .close-button {
            position: absolute;
            top: 0;
            right: 0;
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

        .light .cards-grid::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
        }

        .cards-grid::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
        }

        .light .cards-grid::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.2);
        }

        .cards-grid::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }

        .light .cards-grid::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.3);
        }

        /* Scrollbar Styling for Card Content */
        .card-content::-webkit-scrollbar {
          width: 4px;
        }

        .card-content::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }

        .light .card-content::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
        }

        .card-content::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
        }

        .light .card-content::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.2);
        }

        .card-content::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }

        .light .card-content::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}