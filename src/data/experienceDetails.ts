import sunTvLogo from '../assets/suntv-logo.png';
import drdoLogo from '../assets/drdo-logo.png';
import emertxeLogo from '../assets/e-logo.png';
import ietLogo from '../assets/iet-logo.png';

export interface ExperienceDetail {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  detailedDescription: string;
  keyAchievements: string[];
  technologiesUsed: string[];
  projectDetails?: {
    title: string;
    overview: string;
    features: string[];
    technicalSpecs: string[];
    outcomes: string[];
  };
  logo: string;
}

export const experienceDetails: ExperienceDetail[] = [
  {
    id: 'ielektron',
    company: 'iELEKTRON Technologies',
    role: 'Associate Software Engineer',
    duration: 'Aug 2025 – Current',
    location: 'Bengaluru, Karnataka, India',
    type: 'Full-time',
    description: 'Implementing an employee management system with project tracking capability',
    highlights: [
      'React based frontend with TypeScript',
      'Project tracking and management features'
    ],
    detailedDescription: 'Engineered core modules of an integrated employee database management and skill-mapping platform using React, TypeScript, Node.js, and Express, backed by Azure Cosmos DB and deployed on Azure App Service, transforming it into a dynamic system with project tracking, resource allocation, and competency assessment.',
    keyAchievements: [
      'Optimized data processing pipeline achieving 93.5% performance improvement (46s→3s)',
      'Reduced database calls by 99.5% and increased throughput',
      'Automated key workflows including bulk data uploads, conflict resolution, and billability calculations',
      'Overhauled project panels, dashboards, and financial charts for enhanced user experience'
    ],
    technologiesUsed: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'Azure Cosmos DB',
      'Azure App Service'
    ],
    projectDetails: {
      title: 'Employee Database Management & Skill-Mapping Platform',
      overview: 'A comprehensive platform for managing employee data, tracking projects, and assessing competencies with advanced analytics and reporting capabilities.',
      features: [
        'Dynamic employee database with skill mapping',
        'Project tracking and resource allocation',
        'Competency assessment system',
        'Automated workflow management',
        'Real-time dashboards and analytics',
        'Financial reporting and billability calculations'
      ],
      technicalSpecs: [
        'Frontend: React with TypeScript for type-safe development',
        'Backend: Node.js with Express framework',
        'Database: Azure Cosmos DB for scalable NoSQL storage',
        'Deployment: Azure App Service with CI/CD pipeline',
        'Performance: 93.5% improvement in data processing',
        'Optimization: 99.5% reduction in database calls'
      ],
      outcomes: [
        'Transformed static system into dynamic platform',
        'Significantly improved system performance',
        'Enhanced user experience with modern UI/UX',
        'Streamlined business processes through automation'
      ]
    },
    logo: ietLogo
  },
  {
    id: 'suntv',
    company: 'Sun TV Network Limited',
    role: 'App Developer Intern',
    duration: 'Jan 2025 – May 2025',
    location: 'Chennai, Tamil Nadu, India',
    type: 'Internship · On-site',
    description: 'Developed On‑Duty App using Flutter and Django',
    highlights: [
      'Tracked approvals, time & attendance',
      'Built route planning & destination search'
    ],
    detailedDescription: 'Developed an On-Duty HRMS mobile application using Flutter (Frontend) and Django (Backend) with advanced features for workforce management and monitoring.',
    keyAchievements: [
      'Designed QR code-based employee registration and device-based authentication',
      'Implemented on-duty workforce monitoring by geo-tagging employee activities',
      'Added precise location and timestamps at each duty/program stage',
      'Integrated inbuilt map feature for enhanced navigation',
      'Conducted rigorous testing for edge cases and implemented fallback logic'
    ],
    technologiesUsed: [
      'Flutter',
      'Django',
      'QR Code Integration',
      'GPS/Location Services',
      'Maps API',
      'SQLite/PostgreSQL'
    ],
    projectDetails: {
      title: 'On-Duty HRMS Mobile Application',
      overview: 'A comprehensive mobile application for managing on-duty workforce with real-time tracking, authentication, and monitoring capabilities.',
      features: [
        'QR code-based employee registration',
        'Device-based authentication system',
        'Real-time geo-tagging of employee activities',
        'Precise location and timestamp tracking',
        'Inbuilt map integration for navigation',
        'Time and attendance management',
        'Route planning and destination search',
        'Approval workflow system'
      ],
      technicalSpecs: [
        'Frontend: Flutter for cross-platform mobile development',
        'Backend: Django REST framework',
        'Authentication: Device-based with QR code integration',
        'Location Services: GPS tracking with geo-tagging',
        'Maps: Integrated mapping solution for route planning',
        'Database: Optimized for real-time data synchronization',
        'Testing: Comprehensive edge case testing including offline scenarios'
      ],
      outcomes: [
        'Reliable workforce monitoring system',
        'Improved attendance tracking accuracy',
        'Enhanced employee accountability',
        'Streamlined approval processes',
        'Robust offline functionality with fallback logic'
      ]
    },
    logo: sunTvLogo
  },
  {
    id: 'lrde',
    company: 'LRDE (Electronics Radar Development Establishment)',
    role: 'Summer Intern',
    duration: 'May 2024 – Jul 2024',
    location: 'Bengaluru, Karnataka, India',
    type: 'Internship · On-site',
    description: 'Designed Waveguides & Power Dividers using HFSS',
    highlights: [
      'Specialized in X‑band coaxial groove gap divider'
    ],
    detailedDescription: 'Designed and optimized X-band Coaxial Groove Gap Waveguide Power Dividers using Ansys HFSS for high-power RF applications. Focused on the design, simulation, and optimization of high-frequency waveguide components critical for radar technology.',
    keyAchievements: [
      'Conducted parametric analysis to minimize return loss',
      'Improved signal transmission efficiency significantly',
      'Leveraged Optimetrics for fine-tuning component parameters',
      'Optimized ridge width and septum dimensions',
      'Enhanced impedance matching and reduced signal reflections',
      'Achieved improved broadband performance of waveguide components'
    ],
    technologiesUsed: [
      'Ansys HFSS',
      'Optimetrics',
      'RF Design',
      'Electromagnetic Simulation',
      'Parametric Analysis',
      'Waveguide Design'
    ],
    projectDetails: {
      title: 'X-band Coaxial Groove Gap Waveguide Power Dividers',
      overview: 'Advanced RF component design for high-power radar applications with focus on signal integrity and broadband performance.',
      features: [
        'X-band frequency operation',
        'Coaxial groove gap waveguide architecture',
        'High-power RF capability',
        'Optimized power division',
        'Minimal signal loss',
        'Broadband performance'
      ],
      technicalSpecs: [
        'Frequency Band: X-band (8-12 GHz)',
        'Design Tool: Ansys HFSS electromagnetic simulation',
        'Optimization: Optimetrics parametric analysis',
        'Key Parameters: Ridge width, septum dimensions, groove geometry',
        'Performance Metrics: Return loss, insertion loss, isolation',
        'Application: High-power radar systems'
      ],
      outcomes: [
        'Minimized return loss through parametric optimization',
        'Enhanced signal transmission efficiency',
        'Improved impedance matching across frequency band',
        'Reduced signal reflections and interference',
        'Achieved superior broadband performance',
        'Contributed to radar technology advancement'
      ]
    },
    logo: drdoLogo
  },
  {
    id: 'emertxe',
    company: 'Emertxe Information Technologies',
    role: 'IoT Development Intern',
    duration: 'Mar 2023 – May 2023',
    location: 'Bengaluru, Karnataka, India',
    type: 'Internship · Remote',
    description: 'IoT‑based Home Automation Project',
    highlights: [
      'Simulated lighting, temperature & water tank logic'
    ],
    detailedDescription: 'Designed and implemented a comprehensive IoT-based Home Automation Solution using Arduino UNO, various sensors, and Blynk IoT cloud/app platform with real-time control and monitoring capabilities.',
    keyAchievements: [
      'Developed automatic brightness control system using LDR and PWM signals',
      'Implemented remote heater and cooler control with temperature monitoring',
      'Created automated threshold protection with auto cutoff above 35°C',
      'Built water tank management system with real-time level sensing',
      'Integrated cloud dashboard and mobile app for live control',
      'Implemented automatic refill logic when volume drops below 2000L'
    ],
    technologiesUsed: [
      'Arduino UNO',
      'C/C++',
      'Blynk IoT Platform',
      'LDR Sensors',
      'Temperature Sensors',
      'Serial Communication',
      'PWM Control',
      'IoT Cloud Integration'
    ],
    projectDetails: {
      title: 'IoT-Based Home Automation Solution',
      overview: 'A comprehensive smart home system with automated lighting, climate control, and water management using IoT technology and cloud connectivity.',
      features: [
        'Automatic brightness control for garden/room lights',
        'Remote heater and cooler control',
        'Temperature monitoring with automated protection',
        'Water tank management with level sensing',
        'Real-time control via mobile app',
        'Cloud-based monitoring and notifications',
        'Automated refill logic for water management',
        'Live sensor data visualization'
      ],
      technicalSpecs: [
        'Microcontroller: Arduino UNO',
        'Sensors: LDR (Light Dependent Resistor), Temperature sensor',
        'Communication: Serial communication protocols',
        'Control: PWM signals for brightness control',
        'IoT Platform: Blynk cloud and mobile app',
        'Programming: C/C++ for embedded systems',
        'Connectivity: WiFi for cloud integration',
        'Automation: Threshold-based control logic'
      ],
      outcomes: [
        'Successful implementation of multi-system automation',
        'Real-time monitoring and control capabilities',
        'Energy-efficient lighting system',
        'Automated climate control with safety features',
        'Intelligent water management system',
        'Seamless cloud and mobile app integration',
        'Robust sensor integration and data processing'
      ]
    },
    logo: emertxeLogo
  }
];