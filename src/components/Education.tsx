import { GraduationCap, Award } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Education() {
  const education = [
    {
      degree: 'B.Tech in Electronics and Communication Engineering',
      institution: 'Indian Institute of Information Technology, Tiruchirappalli',
      duration: '2021 - 2025',
      performance: 'CGPA: 9.0'
    },
    {
      degree: 'XII (Senior Secondary)',
      institution: 'Asian Christian High School, Hosur',
      duration: '2020 - 2021',
      performance: 'Percentage: 95.4%'
    },
    {
      degree: 'X (Secondary)',
      institution: 'Asian Christian High School, Hosur',
      duration: '2018 - 2019',
      performance: 'Percentage: 95.6%'
    }
  ];

  const educationItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0', 'visible');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    educationItemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="py-16 md:py-24 bg-gray-900 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line: Fixed to left on small screens, centered on md and up */}
          <div className="absolute left-3.5 md:left-1/2 md:transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent z-0"></div>

          <div className="space-y-10">
            {education.map((edu, index) => (
              <div
                key={index}
                ref={(el) => (educationItemsRef.current[index] = el)}
                className="group relative opacity-0 translate-y-8 transition-all duration-600 ease-[cubic-bezier(0.215,0.61,0.355,1)]"
              >
                {/* Timeline dot: Fixed to left on small screens, centered on md and up */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-cyan-500 border-4 border-gray-900 shadow-lg shadow-cyan-500/30 z-10 transition-all duration-900 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-125 group-hover:shadow-cyan-500/50 group-hover:shadow-xl "></div>

                {/* Pulsating ring effect: Fixed to left on small screens, centered on md and up */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-2 border-cyan-400 z-5 opacity-0 group-hover:opacity-100 group-hover:scale-150 group-hover:border-cyan-300 transition-all duration-900 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></div>

                {/* Education content: Full width (minus offset) on small, two-sided on md and up */}
                <div className={`
                  bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 
                  shadow-2xl border border-gray-700/50 transition-all duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] 
                  group-hover:-translate-y-2 group-hover:shadow-3xl group-hover:border-cyan-500/30 group-hover:shadow-cyan-500/10
                  cursor-pointer
                  
                  // Mobile-specific classes (default)
                  w-[calc(100%-52px)] ml-[48px] 
                  
                  // MD and up (two-sided timeline)
                  md:w-[calc(50%-50px)] 
                  ${index % 2 === 0 ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'}
                `}>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-cyan-400 mb-2">
                    <GraduationCap className="w-4 h-4 flex-shrink-0" />
                    <p className="text-base font-medium">{edu.institution}</p>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{edu.duration}</p>
                  <div className="flex items-center gap-2">
                    {/* <Award className="w-4 h-4 text-emerald-400 flex-shrink-0" /> */}
                    <span className="text-base font-semibold text-white bg-emerald-900/30 px-3 py-1 rounded-full border border-emerald-500/20">
                      {edu.performance}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}