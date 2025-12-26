import { useEffect } from 'react';
import { X, Calendar, MapPin, Briefcase, CheckCircle, Code, Zap, Target } from 'lucide-react';
import { ExperienceDetail } from '../data/experienceDetails';

interface ExperienceDetailPopupProps {
  experience: ExperienceDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ExperienceDetailPopup({ experience, isOpen, onClose }: ExperienceDetailPopupProps) {
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
    <div className="exp-popup-overlay" onClick={onClose}>
      <div className="exp-popup-container" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="exp-popup-header">
          <div className="exp-header-content">
            <div className="exp-company-logo">
              <img src={experience.logo} alt={`${experience.company} Logo`} />
            </div>
            <div className="exp-header-info">
              <h2 className="exp-company-name">{experience.company}</h2>
              <h3 className="exp-role">{experience.role}</h3>
              <div className="exp-meta-info">
                <span className="exp-meta-item">
                  <Calendar size={14} />
                  {experience.duration}
                </span>
                <span className="exp-meta-item">
                  <MapPin size={14} />
                  {experience.location}
                </span>
                <span className="exp-meta-item">
                  <Briefcase size={14} />
                  {experience.type}
                </span>
              </div>
            </div>
          </div>
          <button className="exp-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="exp-popup-content">
          {/* Description */}
          <div className="exp-section">
            <h4 className="exp-section-title">
              <Target size={16} />
              Overview
            </h4>
            <p className="exp-description">{experience.detailedDescription}</p>
          </div>

          {/* Key Achievements */}
          <div className="exp-section">
            <h4 className="exp-section-title">
              <Zap size={16} />
              Key Achievements
            </h4>
            <ul className="exp-achievements-list">
              {experience.keyAchievements.map((achievement, index) => (
                <li key={index} className="exp-achievement-item">
                  <CheckCircle size={14} />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="exp-section">
            <h4 className="exp-section-title">
              <Code size={16} />
              Technologies Used
            </h4>
            <div className="exp-tech-tags">
              {experience.technologiesUsed.map((tech, index) => (
                <span key={index} className="exp-tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          {/* Project Details if available */}
          {experience.projectDetails && (
            <div className="exp-section">
              <h4 className="exp-section-title">Project: {experience.projectDetails.title}</h4>
              <p className="exp-project-overview">{experience.projectDetails.overview}</p>
              
              {experience.projectDetails.features.length > 0 && (
                <div className="exp-project-features">
                  <h5 className="exp-subtitle">Key Features</h5>
                  <ul className="exp-features-list">
                    {experience.projectDetails.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .exp-popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .exp-popup-container {
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.95) 0%,
            rgba(248, 249, 250, 0.98) 100%);
          border-radius: 20px;
          width: 100%;
          max-width: 800px;
          max-height: 90vh;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .exp-popup-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 2rem;
          position: relative;
          color: white;
        }

        .exp-header-content {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          max-width: 90%;
        }

        .exp-company-logo {
          width: 80px;
          height: 80px;
          min-width: 80px;
          background: white;
          border-radius: 16px;
          padding: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .exp-company-logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .exp-header-info {
          flex: 1;
        }

        .exp-company-name {
          font-size: 1.8rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
        }

        .exp-role {
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
          opacity: 0.9;
        }

        .exp-meta-info {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          font-size: 0.9rem;
        }

        .exp-meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          opacity: 0.9;
        }

        .exp-meta-item svg {
          opacity: 0.8;
        }

        .exp-close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .exp-close-btn:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: rotate(90deg);
        }

        .exp-popup-content {
          padding: 2.5rem;
          max-height: calc(90vh - 160px);
          overflow-y: auto;
        }

        .exp-section {
          margin-bottom: 2.5rem;
        }

        .exp-section:last-child {
          margin-bottom: 0;
        }

        .exp-section-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.3rem;
          font-weight: 600;
          color: #2d3748;
          margin: 0 0 1rem 0;
        }

        .exp-section-title svg {
          color: #667eea;
        }

        .exp-description {
          color: #4a5568;
          line-height: 1.7;
          font-size: 1rem;
          margin: 0;
        }

        .exp-achievements-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .exp-achievement-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: #4a5568;
          line-height: 1.6;
        }

        .exp-achievement-item svg {
          color: #48bb78;
          margin-top: 0.2rem;
          flex-shrink: 0;
        }

        .exp-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .exp-tech-tag {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
          color: #667eea;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 500;
          border: 1px solid rgba(102, 126, 234, 0.2);
        }

        .exp-project-overview {
          color: #4a5568;
          line-height: 1.7;
          margin: 0 0 1.5rem 0;
        }

        .exp-subtitle {
          font-size: 1.1rem;
          font-weight: 600;
          color: #2d3748;
          margin: 0 0 0.75rem 0;
        }

        .exp-features-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .exp-features-list li {
          color: #4a5568;
          padding-left: 1.25rem;
          position: relative;
          line-height: 1.6;
        }

        .exp-features-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #667eea;
          font-weight: bold;
          font-size: 1.2rem;
        }

        /* Scrollbar */
        .exp-popup-content::-webkit-scrollbar {
          width: 6px;
        }

        .exp-popup-content::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 3px;
        }

        .exp-popup-content::-webkit-scrollbar-thumb {
          background: #667eea;
          border-radius: 3px;
        }

        .exp-popup-content::-webkit-scrollbar-thumb:hover {
          background: #5a67d8;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .exp-popup-container {
            max-height: 95vh;
          }

          .exp-popup-header {
            padding: 1.5rem;
          }

          .exp-header-content {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
            max-width: 100%;
          }

          .exp-company-logo {
            width: 70px;
            height: 70px;
          }

          .exp-company-name {
            font-size: 1.5rem;
          }

          .exp-role {
            font-size: 1.1rem;
          }

          .exp-meta-info {
            justify-content: center;
            gap: 1rem;
          }

          .exp-popup-content {
            padding: 1.5rem;
            max-height: calc(95vh - 140px);
          }

          .exp-section-title {
            font-size: 1.2rem;
          }

          .exp-tech-tags {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .exp-meta-info {
            flex-direction: column;
            gap: 0.5rem;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
}