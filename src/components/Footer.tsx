import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-8 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-slate-400 flex items-center justify-center gap-2">
            <span>Designed & Built with</span>
            <Heart className="w-4 h-4 text-cyan-500 fill-cyan-500" />
            <span>by Afrith.S</span>
          </p>
          <p className="text-slate-500 text-sm mt-2">
            {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
