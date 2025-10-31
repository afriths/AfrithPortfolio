import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'afriths874@gmail.com',
      href: 'mailto:afriths874@gmail.com',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6374882260',
      href: 'tel:+916374882260',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hosur, Tamil Nadu',
      href: null,
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4 md:mb-6"></div>
            <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto px-4">
              Let's collaborate on your next project. Open to discussing new opportunities and ideas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = (
                <div className="bg-slate-700/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:bg-slate-700/50 transition-all duration-300 border border-slate-600 hover:border-cyan-500/50 hover:-translate-y-2 group">
                  <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-white mb-2 text-center">
                    {info.label}
                  </h3>
                  <p className="text-slate-300 text-center break-words text-sm md:text-base px-2">
                    {info.value}
                  </p>
                </div>
              );

              return info.href ? (
                <a key={index} href={info.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={index}>
                  {content}
                </div>
              );
            })}
          </div>

          <div className="bg-slate-900/50 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-700 backdrop-blur-sm">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Ready to start a conversation?
                </h3>
              </div>

              <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6 md:mb-8">
                <a
                  href="https://github.com/afriths"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 transform hover:-translate-y-1 group border border-slate-700 hover:border-cyan-500"
                >
                  <Github className="w-4 h-4 md:w-5 md:h-5 text-slate-300 group-hover:text-cyan-400" />
                  <span className="text-slate-300 group-hover:text-white font-medium text-sm md:text-base">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/afrith-s-1343b2228/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 transform hover:-translate-y-1 group border border-slate-700 hover:border-cyan-500"
                >
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-slate-300 group-hover:text-cyan-400" />
                  <span className="text-slate-300 group-hover:text-white font-medium text-sm md:text-base">LinkedIn</span>
                </a>
                <a
                  href="mailto:afriths874@gmail.com"
                  className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/50"
                >
                  <Send className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  <span className="text-white font-medium text-sm md:text-base">Send Email</span>
                </a>
              </div>

              <div className="text-center">
                <p className="text-slate-400 text-xs md:text-sm px-4">
                  Available for freelance opportunities and full-time positions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
