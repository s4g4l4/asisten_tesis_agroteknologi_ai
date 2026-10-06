import React from 'react';
    import { Sprout, ShieldCheck, Heart, Github, Terminal } from 'lucide-react';
    import { Link } from 'react-router-dom';

    export const Footer: React.FC = () => {
      return (
        <footer className="bg-card border-t border-border/60 py-12 text-muted-foreground text-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4 md:col-span-1">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                  <Sprout className="w-4 h-4" />
                </div>
                <span className="font-serif font-bold text-foreground text-lg">AgroTesis AI</span>
              </div>
              <p className="text-xs leading-relaxed">
                Asisten penulisan tesis magister agroteknologi cerdas berbasis model bahasa besar (LLM) dengan pendekatan pemodelan erosi tanah USLE dan SIG.
              </p>
              <div className="flex items-center gap-3 text-emerald-600 text-xs font-mono font-medium">
                <ShieldCheck className="w-4 h-4" /> Sitasi Harvard & Standar S2
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground text-xs uppercase tracking-wider mb-4 font-mono">Modul Tesis</h3>
              <ul className="space-y-2.5 text-xs">
                <li><Link to="/thesis" className="hover:text-emerald-600 transition-colors">Ringkasan & Abstrak</Link></li>
                <li><Link to="/thesis" className="hover:text-emerald-600 transition-colors">Bab 1: Pendahuluan</Link></li>
                <li><Link to="/thesis" className="hover:text-emerald-600 transition-colors">Bab 2: Tinjauan Pustaka (USLE)</Link></li>
                <li><Link to="/thesis" className="hover:text-emerald-600 transition-colors">Bab 3: Metodologi Penelitian</Link></li>
                <li><Link to="/thesis" className="hover:text-emerald-600 transition-colors">Bab 4: Hasil & Pembahasan</Link></li>
                <li><Link to="/thesis" className="hover:text-emerald-600 transition-colors">Bab 5: Kesimpulan & Saran</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground text-xs uppercase tracking-wider mb-4 font-mono">Fitur Utama</h3>
              <ul className="space-y-2.5 text-xs">
                <li><Link to="/settings" className="hover:text-emerald-600 transition-colors">Konfigurasi API Groq / Gemini</Link></li>
                <li><Link to="/library" className="hover:text-emerald-600 transition-colors">Manajemen Daftar Pustaka</Link></li>
                <li><Link to="/thesis" className="hover:text-emerald-600 transition-colors">Export Dokumen Word & PDF</Link></li>
                <li><Link to="/" className="hover:text-emerald-600 transition-colors">Statistik Progress Tesis</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground text-xs uppercase tracking-wider mb-4 font-mono">Rekomendasi AI Gratis</h3>
              <p className="text-xs mb-3 text-muted-foreground leading-relaxed">
                Didukung oleh <strong className="text-foreground">Groq API (Llama 3 70B)</strong> yang menyediakan kuota gratis berkecepatan tinggi untuk penyusunan akademik tingkat magister.
              </p>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                  <Terminal className="w-3 h-3" /> Groq Free Tier Active
                </span>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between text-xs gap-4">
            <p>© 2026 AgroTesis AI Engine. Seluruh hak cipta dilindungi undang-undang akademik.</p>
            <div className="flex items-center gap-1 text-muted-foreground">
              Dibuat dengan <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 mx-0.5" /> untuk Peneliti Agroteknologi Indonesia
            </div>
          </div>
        </footer>
      );
    };