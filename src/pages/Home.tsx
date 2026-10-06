import React from 'react';
    import { Navbar } from '../components/Navbar';
    import { Footer } from '../components/Footer';
    import { 
      Sprout, 
      FileText, 
      Sparkles, 
      BookOpen, 
      ArrowRight, 
      CheckCircle, 
      Cpu, 
      TrendingUp, 
      Database,
      Layers
    } from 'lucide-react';
    import { Link } from 'react-router-dom';

    export const Home: React.FC = () => {
      const stats = [
        { label: 'Estimasi Panjang Tesis', value: '78 Halaman', desc: 'Proporsi Ideal S2' },
        { label: 'Model Pemodelan Erosi', value: 'USLE & SIG', desc: 'Metode Kuantitatif' },
        { label: 'Mesin AI Aktif', value: 'Groq Llama 3', desc: 'Free Tier Tercepat' },
        { label: 'Format Sitasi', value: 'Harvard Style', desc: 'Nama-Tahun Otomatis' },
      ];

      const chaptersPreview = [
        { num: 'Ringkasan / Summary', title: 'Abstraksi dwibahasa (Indonesia & Inggris) lengkap dengan kata kunci.' },
        { num: 'Bab 1', title: 'Pendahuluan: Latar belakang perkebunan rakyat & gap riset erosi tanah.' },
        { num: 'Bab 2', title: 'Tinjauan Pustaka: Konsep USLE (R, K, LS, C, P) dan TBE.' },
        { num: 'Bab 3', title: 'Metodologi Penelitian: Prosedur lab, pengambilan sampel, & analisis spasial.' },
        { num: 'Bab 4', title: 'Hasil dan Pembahasan: Prediksi laju erosi dan arahan konservasi.' },
        { num: 'Bab 5', title: 'Kesimpulan & Saran: Sintesis jawaban tujuan penelitian.' },
      ];

      return (
        <div className="min-h-screen bg-background flex flex-col">
          <Navbar />

          {/* Hero Section */}
          <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-emerald-950/10 via-transparent to-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-medium font-mono animate-fade-in">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Asisten Tesis Magister Agroteknologi Berbasis AI
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
                  Penyusunan Tesis S2 Agroteknologi <span className="text-emerald-600 dark:text-emerald-400">Utuh & Komprehensif</span>
                </h1>

                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Platform AI cerdas untuk menyusun tesis lengkap dari Ringkasan hingga Lampiran. Fokus pada pemodelan erosi tanah metode USLE pada perkebunan kelapa sawit rakyat dengan sitasi Harvard otomatis.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Link
                    to="/thesis"
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all hover:scale-105"
                  >
                    Mulai Tulis Tesis Sekarang <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/settings"
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-card border border-border hover:bg-muted/60 text-foreground font-semibold flex items-center justify-center gap-2 transition-all"
                  >
                    <Cpu className="w-4 h-4 text-emerald-600" /> Konfigurasi AI Gratis (Groq/Gemini)
                  </Link>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 max-w-5xl mx-auto">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-card border border-border/80 rounded-2xl p-6 shadow-sm hover:border-emerald-600/50 transition-colors">
                    <div className="text-2xl font-serif font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-1">{stat.label}</div>
                    <div className="text-[11px] text-muted-foreground">{stat.desc}</div>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* Core Thesis Format Architecture */}
          <section className="py-20 bg-muted/30 border-y border-border/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                <h2 className="font-serif text-3xl font-bold text-foreground">Struktur Tesis S2 Agroteknologi</h2>
                <p className="text-sm text-muted-foreground">
                  Dibangun dengan standar akademis pascasarjana, mengikuti proporsi 60–100 halaman dengan pembahasan mendalam mengenai parameter USLE ($R, K, LS, C, P$).
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {chaptersPreview.map((chap, idx) => (
                  <div key={idx} className="bg-card p-6 rounded-2xl border border-border hover:shadow-lg transition-all flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-mono font-bold text-xs flex items-center justify-center mb-4">
                        0{idx + 1}
                      </div>
                      <h3 className="font-serif font-bold text-base text-foreground mb-2">{chap.num}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{chap.title}</p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-[11px] text-emerald-600 font-mono">
                      <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5" /> Generasi AI Aktif</span>
                      <span>Ready</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* AI Providers Feature */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 text-xs font-mono">
                    <Cpu className="w-3.5 h-3.5" /> Pilihan Model AI Gratis
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-foreground">
                    Gunakan API Gratis Tercepat untuk Riset Pertanian
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Sistem mendukung pengaturan API manual untuk penyusunan tesis. Rekomendasi utama kami adalah <strong className="text-foreground">Groq API (Llama 3 70B Versatile)</strong> dan <strong className="text-foreground">Google Gemini 1.5 Flash</strong> yang menyediakan akses tier gratis dengan kecepatan tinggi dan kapasitas token besar untuk analisis literatur agroteknologi.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mt-0.5 shrink-0 text-xs font-bold">✓</div>
                      <div>
                        <strong className="text-xs font-semibold text-foreground">Groq API (Llama 3 70B):</strong> 
                        <p className="text-xs text-muted-foreground">Paling direkomendasikan untuk generasi bab panjang secara instan dan stabil.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mt-0.5 shrink-0 text-xs font-bold">✓</div>
                      <div>
                        <strong className="text-xs font-semibold text-foreground">Google Gemini 1.5 Flash:</strong>
                        <p className="text-xs text-muted-foreground">Kapasitas konteks masif, sangat baik untuk merangkum jurnal internasional sitasi Harvard.</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/settings"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-700 transition-colors shadow-md"
                    >
                      Konfigurasi Kunci API Sekarang <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-3xl p-8 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center justify-between border-b border-border/60 pb-4">
                      <div className="flex items-center gap-2.5">
                        <Database className="w-5 h-5 text-emerald-600" />
                        <span className="font-serif font-bold text-sm text-foreground">Parameter USLE Aktif</span>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">Terintegrasi</span>
                    </div>

                    <div className="space-y-4 text-xs">
                      <div className="flex justify-between items-center p-3 rounded-xl bg-muted/50">
                        <span className="font-medium">Faktor $R$ (Erosivitas Hujan)</span>
                        <span className="font-mono text-emerald-600 font-semibold">2.450 mm/tahun</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-xl bg-muted/50">
                        <span className="font-medium">Faktor $K$ (Erodibilitas Tanah)</span>
                        <span className="font-mono text-emerald-600 font-semibold">0.32 (Sedang)</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-xl bg-muted/50">
                        <span className="font-medium">Faktor $LS$ (Panjang & Kemiringan)</span>
                        <span className="font-mono text-emerald-600 font-semibold">4.85 (Lereng 12%)</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-xl bg-muted/50">
                        <span className="font-medium">Faktor $C$ & $P$ (Pengelolaan)</span>
                        <span className="font-mono text-emerald-600 font-semibold">$C=0.2$, $P=0.5$</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="text-[11px] text-muted-foreground flex items-center justify-between">
                        <span>Laju Erosi Prediksi ($A$):</span>
                        <span className="font-bold text-foreground font-mono">76.4 ton/ha/tahun (Berat)</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <Footer />
        </div>
      );
    };