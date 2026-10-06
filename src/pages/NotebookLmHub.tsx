import React, { useState } from 'react';
    import { Navbar } from '../components/Navbar';
    import { Footer } from '../components/Footer';
    import { 
      Headphones, 
      Sparkles, 
      BookOpen, 
      Upload, 
      Play, 
      Pause, 
      FileText, 
      CheckCircle, 
      MessageSquare, 
      Send, 
      Volume2,
      Layers,
      Cpu
    } from 'lucide-react';
    import { toast } from 'react-toastify';

    export const NotebookLmHub: React.FC = () => {
      const [sources, setSources] = useState([
        { id: 1, name: 'Wischmeier & Smith (1978) - USLE Manual USDA.pdf', type: 'PDF Monograf', status: 'Terindeks AI' },
        { id: 2, name: 'Data Laboratorium Sifat Fisik Tanah Sub-DAS Sekampung.xlsx', type: 'Dataset Tabular', status: 'Terindeks AI' },
        { id: 3, name: 'Jurnal Ahadiyat et al. (2015) - Pengelolaan Lahan Kering.pdf', type: 'Jurnal Ilmiah', status: 'Terindeks AI' },
        { id: 4, name: 'Peta DEM SRTM & Batas DAS Sekampung Hulu.shp/tif', type: 'Spasial GIS', status: 'Terindeks AI' }
      ]);

      const [isPlayingAudio, setIsPlayingAudio] = useState(false);
      const [chatQuery, setChatQuery] = useState('');
      const [chatMessages, setChatMessages] = useState([
        { role: 'assistant', text: 'Halo Peneliti! Saya NotebookLM Agroteknologi AI. Saya telah mempelajari 4 sumber pustaka dan data USLE Anda. Ada yang ingin ditanyakan atau diringkas menjadi podcast audio?' }
      ]);
      const [isGeneratingPodcast, setIsGeneratingPodcast] = useState(false);

      const handleAddSource = () => {
        const newSrc = {
          id: Date.now(),
          name: 'Jurnal Pendukung Konservasi Tanah Terbaru (2025).pdf',
          type: 'PDF Jurnal',
          status: 'Terindeks AI'
        };
        setSources([newSrc, ...sources]);
        toast.success("Sumber dokumen baru berhasil diunggah dan diindeks ke NotebookLM!");
      };

      const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!chatQuery.trim()) return;

        const userMsg = chatQuery;
        setChatMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setChatQuery('');

        setTimeout(() => {
          let reply = "Berdasarkan sumber Wischmeier & Smith (1978) dan data tanah Anda, faktor erodibilitas K (0.32) sangat dipengaruhi oleh proporsi debu halus di lapisan topsoil.";
          if (userMsg.toLowerCase().includes('audio') || userMsg.toLowerCase().includes('podcast')) {
            reply = "Audio Overview telah disiapkan! Anda dapat mendengarkan ringkasan diskusi podcast dua pakar agroteknologi di panel sebelah.";
          }
          setChatMessages(prev => [...prev, { role: 'assistant', text: reply }]);
        }, 1000);
      };

      const handleGenerateAudio = () => {
        setIsGeneratingPodcast(true);
        setTimeout(() => {
          setIsGeneratingPodcast(false);
          setIsPlayingAudio(true);
          toast.success("Audio Overview (Podcast Tesis) berhasil dibuat!");
        }, 2000);
      };

      return (
        <div className="min-h-screen bg-background flex flex-col">
          <Navbar />

          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
            
            {/* Header Banner */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 bg-card border border-border/80 rounded-3xl p-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="space-y-2 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 text-xs font-mono">
                  <Headphones className="w-3.5 h-3.5" /> NotebookLM Research Hub
                </div>
                <h1 className="font-serif text-3xl font-bold text-foreground">
                  Asisten Sumber Tesis & Audio Overview AI
                </h1>
                <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
                  Unggah jurnal, buku panduan USLE, dan dataset lapang Anda. NotebookLM akan merangkum, menjawab pertanyaan mendalam, dan menghasilkan diskusi podcast audio otomatis untuk persiapan sidang tesis Anda.
                </p>
              </div>

              <button
                onClick={handleAddSource}
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-2 shadow-md transition-all hover:scale-105 shrink-0"
              >
                <Upload className="w-4 h-4" /> Tambah Sumber Dokumen
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column: Sources & Audio Overview */}
              <div className="lg:col-span-1 space-y-6">
                
                {/* Audio Overview Card */}
                <div className="bg-card border border-border rounded-2xl p-6 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Volume2 className="w-5 h-5 text-emerald-600" />
                      <h3 className="font-serif font-bold text-base text-foreground">Audio Overview</h3>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                      Podcast S2
                    </span>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Dengarkan ringkasan diskusi audio dua pakar AI yang membahas temuan laju erosi 76.4 ton/ha/tahun di Sub-DAS Sekampung Hulu.
                  </p>

                  <div className="bg-muted/50 p-4 rounded-xl border border-border/60 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-xs text-foreground">Diskusi Tesis USLE & Konservasi</div>
                      <div className="text-[10px] text-muted-foreground">Durasi: 08:45 Menit • 2 Pembicara AI</div>
                    </div>
                    
                    <button
                      onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                      className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center hover:scale-105 transition-all shadow-md"
                    >
                      {isPlayingAudio ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                    </button>
                  </div>

                  {!isPlayingAudio && (
                    <button
                      onClick={handleGenerateAudio}
                      disabled={isGeneratingPodcast}
                      className="w-full py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                    >
                      <Sparkles className="w-4 h-4 text-emerald-600" /> {isGeneratingPodcast ? 'Membuat Audio Podcast...' : 'Generate Ulang Podcast Audio'}
                    </button>
                  )}
                </div>

                {/* Sources List */}
                <div className="bg-card border border-border rounded-2xl p-6 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <BookOpen className="w-5 h-5 text-emerald-600" />
                      <h3 className="font-serif font-bold text-base text-foreground">Sumber Pustaka ({sources.length})</h3>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {sources.map((src) => (
                      <div key={src.id} className="p-3 rounded-xl bg-muted/40 border border-border/60 flex items-start justify-between gap-2">
                        <div className="space-y-1">
                          <div className="font-semibold text-xs text-foreground line-clamp-1">{src.name}</div>
                          <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                            <span className="font-mono text-emerald-600">{src.type}</span>
                            <span>•</span>
                            <span className="text-emerald-700 dark:text-emerald-400 font-medium">{src.status}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: AI Chat Assistant with Sources */}
              <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col h-[600px]">
                <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <MessageSquare className="w-5 h-5 text-emerald-600" />
                    <div>
                      <h3 className="font-serif font-bold text-base text-foreground">Tanya Jawab Pintar Berbasis Sumber (NotebookLM)</h3>
                      <p className="text-[11px] text-muted-foreground">Setiap jawaban dilengkapi sitasi langsung dari dokumen yang diunggah.</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                    Grounded AI
                  </span>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto space-y-4 pr-2 mb-4">
                  {chatMessages.map((msg, idx) => (
                    <div 
                      key={idx} 
                      className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
                    >
                      <div className={`max-w-[85%] p-4 rounded-2xl text-xs leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-emerald-600 text-white rounded-br-sm'
                          : 'bg-muted/70 text-foreground border border-border/60 rounded-bl-sm'
                      }`}>
                        {msg.text}
                      </div>
                      <span className="text-[10px] text-muted-foreground mt-1 px-1">
                        {msg.role === 'user' ? 'Anda' : 'NotebookLM Agroteknologi'}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Chat Input Form */}
                <form onSubmit={handleSendMessage} className="flex items-center gap-2 pt-2 border-t border-border/60">
                  <input
                    type="text"
                    value={chatQuery}
                    onChange={(e) => setChatQuery(e.target.value)}
                    placeholder="Tanyakan analisis data tanah, rumus USLE, atau minta rangkuman literatur..."
                    className="flex-1 bg-muted/50 border border-border rounded-xl px-4 py-3 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-2 shadow-md transition-all shrink-0"
                  >
                    <Send className="w-4 h-4" /> Kirim
                  </button>
                </form>

              </div>

            </div>

          </main>

          <Footer />
        </div>
      );
    };