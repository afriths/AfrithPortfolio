import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="bg-slate-800/50 rounded-3xl shadow-2xl overflow-hidden border border-slate-700 backdrop-blur-sm">
            <div className="md:flex">
              <div className="md:w-2/5 bg-gradient-to-br from-cyan-500 via-blue-500 to-emerald-500 p-8 md:p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 border-4 border-white/30">
                    <GraduationCap className="w-10 h-10 md:w-12 md:h-12 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">B.Tech</h3>
                  <p className="text-cyan-100 text-base md:text-lg px-4">Electronics and Communication Engineering</p>
                </div>
              </div>

              <div className="md:w-3/5 p-6 md:p-12">
                <div className="space-y-6 md:space-y-8">
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                      Indian Institute of Information Technology, Tiruchirappalli
                    </h4>
                    <div className="flex items-center gap-2 text-slate-400 mb-4 md:mb-6">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm md:text-base">2021 - 2025</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                    <div className="bg-slate-700/50 rounded-xl p-4 md:p-6 border border-slate-600">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Award className="w-5 h-5 text-white" />
                        </div>
                        <h5 className="font-semibold text-white text-sm md:text-base">CGPA</h5>
                      </div>
                      <p className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                        9.0
                      </p>
                    </div>

                    <div className="bg-slate-700/50 rounded-xl p-4 md:p-6 border border-slate-600">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <BookOpen className="w-5 h-5 text-white" />
                        </div>
                        <h5 className="font-semibold text-white text-sm md:text-base">Focus</h5>
                      </div>
                      <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                        Software Engineering
                      </p>
                    </div>

                    <div className="bg-slate-700/50 rounded-xl p-4 md:p-6 border border-slate-600">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <GraduationCap className="w-5 h-5 text-white" />
                        </div>
                        <h5 className="font-semibold text-white text-sm md:text-base">Degree</h5>
                      </div>
                      <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                        Bachelor of Technology
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-700/30 rounded-xl p-4 md:p-6 border border-slate-600">
                    <h5 className="font-semibold text-white mb-3 text-sm md:text-base">Key Achievements</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3 text-slate-300">
                        <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-xs md:text-sm">Maintained excellent academic performance with 9.0 CGPA</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-300">
                        <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-xs md:text-sm">Specialized in full-stack development and mobile applications</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-300">
                        <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-xs md:text-sm">Completed multiple industry internships during academic tenure</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
