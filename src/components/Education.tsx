import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
            <div className="md:flex">
              <div className="md:w-2/5 bg-gradient-to-br from-cyan-500 via-blue-500 to-emerald-500 p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white/30">
                    <GraduationCap className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">B.Tech</h3>
                  <p className="text-cyan-100 text-lg">Electronics and Communication Engineering</p>
                </div>
              </div>

              <div className="md:w-3/5 p-12">
                <div className="space-y-8">
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">
                      Indian Institute of Information Technology, Tiruchirappalli
                    </h4>
                    <div className="flex items-center gap-2 text-slate-600 mb-6">
                      <Calendar className="w-4 h-4" />
                      <span>2021 - 2025</span>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-200">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                          <Award className="w-5 h-5 text-white" />
                        </div>
                        <h5 className="font-semibold text-slate-900">CGPA</h5>
                      </div>
                      <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">
                        9.0
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl p-6 border border-blue-200">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-white" />
                        </div>
                        <h5 className="font-semibold text-slate-900">Focus</h5>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        Software Engineering
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                          <GraduationCap className="w-5 h-5 text-white" />
                        </div>
                        <h5 className="font-semibold text-slate-900">Degree</h5>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        Bachelor of Technology
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <h5 className="font-semibold text-slate-900 mb-3">Key Achievements</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3 text-slate-700">
                        <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Maintained excellent academic performance with 9.0 CGPA</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-700">
                        <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Specialized in full-stack development and mobile applications</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-700">
                        <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Completed multiple industry internships during academic tenure</span>
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
