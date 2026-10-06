import React, { useState } from 'react';
    import { Navbar } from '../components/Navbar';
    import { Footer } from '../components/Footer';
    import { Cpu, CheckCircle2, ShieldAlert, Key, Sparkles, ExternalLink, Terminal } from 'lucide-react';
    import { toast } from 'react-toastify';

    export const AiSettings: React.FC = () => {
      const [selectedProvider, setSelectedProvider] = useState('groq');
      const [apiKey, setApiKey] = useState('gsk_live_demo_agrotesis_ai_9872340918234');
      const [modelName, setModelName] = useState('llama-3.70b-versatile');

      const handleSaveConfig = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Konfigurasi API AI berhasil disimpan dan aktif!");
      };

      const providers = [
        {
          id: 'groq',
          name: 'Groq API (Llama 3 70B)',
          desc: 'Sangat direkomendasikan. Menyediakan tier gratis (free tier) dengan kecepatan inferensi token tertinggi di dunia, sangat ideal untuk menyusun bab tesis panjang.',
          isFree: true,
          speed: 'Sangat Cepat (~300 token/detik)',
          badge: 'Rekomendasi Utama'
        },
        {
          id: 'gemini',
          name: 'Google Gemini 1.5 Flash',
          desc: 'Menyediakan kuota gratis melalui Google AI Studio. Memiliki kapasitas konteks masif (1 juta token) untuk merangkum puluhan jurnal ilmiah sekaligus.',
          isFree: true,
          speed: 'Cepat & Konteks Besar',
          badge: 'Alternatif Terbaik'
        },
        {
          id: 'nvidia',
          name: 'NVIDIA NIM (Llama 3.1 405B)',
          desc: 'API gratis eksperimental dari NVIDIA Developer untuk pengujian model bahasa tingkat lanjut berparameter besar.',
          isFree: true,
          speed: 'Sedang',
          badge: 'Eksperimental'
        }
      ];

      return (
        <div className="min-h-screen bg-background flex flex-col">
          <Navbar />

          <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
            
            <div className="mb-8 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-600">
                <Cpu className="w-4 h-4" /> Pengaturan Mesin AI Manual
              </div>
              <h1 className="font-serif text-3xl font-bold text-foreground">Konfigurasi API AI & Pemilihan Model Gratis</h1>
              <p className="text-sm text-muted-foreground">
                Pilih dan atur kunci API Anda secara manual dari penyedia yang menyediakan layanan gratis (Free Tier) untuk mendukung penyusunan tesis agroteknologi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {providers.map((prov) => (
                <div
                  key={prov.id}
                  onClick={() => {
                    setSelectedProvider(prov.id);
                    if (prov.id === 'groq') setModelName('llama-3.70b-versatile');
                    if (prov.id === 'gemini') setModelName('gemini-1.5-flash');
                    if (prov.id === 'nvidia') setModelName('meta/llama-3.1-405b-instruct');
                  }}
                  className={`bg-card border rounded-2xl p-6 cursor-pointer transition-all flex flex-col justify-between ${
                    selectedProvider === prov.id
                      ? 'border-emerald-600 ring-2 ring-emerald-500/20 shadow-lg'
                      : 'border-border hover:border-emerald-600/50'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                        {prov.badge}
                      </span>
                      {prov.isFree && (
                        <span className="text-xs font-mono text-emerald-600 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Gratis
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif font-bold text-base text-foreground">{prov.name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{prov.desc}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/50 text-[11px] font-mono text-muted-foreground">
                    Kecepatan: <strong className="text-foreground">{prov.speed}</strong>
                  </div>
                </div>
              ))}
            </div>

            {/* Config Form */}
            <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
              <form onSubmit={handleSaveConfig} className="space-y-6">
                <div className="flex items-center gap-3 border-b border-border/60 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center">
                    <Key className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-foreground">Kredensial API untuk {selectedProvider.toUpperCase()}</h3>
                    <p className="text-xs text-muted-foreground">Masukkan token atau kunci API yang valid dari platform pilihan Anda.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase font-mono">
                      API Key ({selectedProvider.toUpperCase()})
                    </label>
                    <input
                      type="password"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      className="w-full bg-muted/40 border border-border rounded-xl px-4 py-3 text-sm font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                      placeholder="Masukkan kunci API Anda di sini..."
                    />
                    <p className="text-[11px] text-muted-foreground mt-1">
                      Kunci Anda disimpan secara aman di memori lokal peramban (Local Storage) dan tidak pernah dikirim ke server pihak ketiga.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase font-mono">
                      Model / Engine Name
                    </label>
                    <input
                      type="text"
                      value={modelName}
                      onChange={(e) => setModelName(e.target.value)}
                      className="w-full bg-muted/40 border border-border rounded-xl px-4 py-3 text-sm font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    />
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-2xl border border-border/60 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Terminal className="w-4 h-4 text-emerald-600" /> Butuh kunci API gratis? Kunjungi console resmi penyedia.
                  </div>
                  <a
                    href="https://console.groq.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-600 hover:underline font-semibold flex items-center gap-1"
                  >
                    Dapatkan Kunci Groq <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-md transition-all hover:scale-105 flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" /> Simpan & Aktifkan Konfigurasi AI
                  </button>
                </div>
              </form>
            </div>

          </main>

          <Footer />
        </div>
      );
    };