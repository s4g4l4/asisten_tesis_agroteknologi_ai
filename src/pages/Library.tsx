import React, { useState } from 'react';
    import { Navbar } from '../components/Navbar';
    import { Footer } from '../components/Footer';
    import { BookOpen, Plus, Search, Bookmark, ExternalLink, CheckCircle } from 'lucide-react';
    import { toast } from 'react-toastify';

    export const Library: React.FC = () => {
      const [searchTerm, setSearchTerm] = useState('');
      const [references, setReferences] = useState([
        {
          id: 1,
          author: 'Ahadiyat, Y., Subardja, D., & Hidayat, A.',
          year: '2015',
          title: 'Karakteristik dan Pengelolaan Lahan Kering di Indonesia',
          source: 'Jurnal Tanah dan Iklim, 39(2), 85-94.',
          type: 'Jurnal Ilmiah'
        },
        {
          id: 2,
          author: 'Arsyad, S.',
          year: '2012',
          title: 'Konservasi Tanah dan Air',
          source: 'IPB Press, Bogor.',
          type: 'Buku Teks'
        },
        {
          id: 3,
          author: 'Asdak, C.',
          year: '2010',
          title: 'Hydrology and Management of Watersheds',
          source: 'Gadjah Mada University Press, Yogyakarta.',
          type: 'Buku Teks'
        },
        {
          id: 4,
          author: 'Wischmeier, W.H., & Smith, D.D.',
          year: '1978',
          title: 'Predicting Rainfall Erosion Losses: A Guide to Conservation Planning',
          source: 'Agriculture Handbook No. 537. USDA, Washington D.C.',
          type: 'Monograf / Manual'
        },
        {
          id: 5,
          author: 'Utomo, W.H.',
          year: '2012',
          title: 'Erosion and Soil Conservation in Tropical Plantations',
          source: 'Alfabeta, Bandung.',
          type: 'Buku Teks'
        }
      ]);

      const [newRef, setNewRef] = useState({ author: '', year: '', title: '', source: '', type: 'Jurnal Ilmiah' });
      const [showAddModal, setShowAddModal] = useState(false);

      const handleAddReference = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newRef.author || !newRef.title) {
          toast.error("Mohon lengkapi penulis dan judul referensi.");
          return;
        }
        setReferences([{ id: Date.now(), ...newRef }, ...references]);
        setNewRef({ author: '', year: '', title: '', source: '', type: 'Jurnal Ilmiah' });
        setShowAddModal(false);
        toast.success("Referensi baru berhasil ditambahkan ke format Harvard!");
      };

      const filteredRefs = references.filter(ref => 
        ref.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ref.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ref.year.includes(searchTerm)
      );

      return (
        <div className="min-h-screen bg-background flex flex-col">
          <Navbar />

          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-600">
                  <BookOpen className="w-4 h-4" /> Manajemen Pustaka & Sitasi Harvard
                </div>
                <h1 className="font-serif text-3xl font-bold text-foreground">Daftar Pustaka & Literatur Agroteknologi</h1>
                <p className="text-sm text-muted-foreground">Kelola sumber referensi primer dan sekunder sesuai format penulisan Nama-Tahun.</p>
              </div>

              <button
                onClick={() => setShowAddModal(true)}
                className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-2 shadow-md transition-all hover:scale-105"
              >
                <Plus className="w-4 h-4" /> Tambah Pustaka Baru
              </button>
            </div>

            {/* Search Filter Bar */}
            <div className="bg-card border border-border rounded-2xl p-4 mb-8 shadow-sm flex items-center gap-3">
              <Search className="w-5 h-5 text-muted-foreground ml-2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Cari berdasarkan penulis, judul, atau tahun (mis. Ahadiyat, 2015)..."
                className="w-full bg-transparent text-sm focus:outline-none text-foreground placeholder:text-muted-foreground"
              />
            </div>

            {/* Add Reference Modal */}
            {showAddModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in p-4">
                <div className="bg-card border border-border rounded-2xl w-full max-w-lg p-6 shadow-2xl relative">
                  <h3 className="font-serif font-bold text-lg text-foreground mb-4">Tambah Referensi Pustaka Baru</h3>
                  <form onSubmit={handleAddReference} className="space-y-4 text-xs">
                    <div>
                      <label className="block font-semibold mb-1 uppercase font-mono">Penulis (Author)</label>
                      <input
                        type="text"
                        value={newRef.author}
                        onChange={(e) => setNewRef({...newRef, author: e.target.value})}
                        placeholder="Contoh: Rahmat, D., & Effendi, I."
                        className="w-full bg-muted/40 border border-border rounded-xl px-3.5 py-2.5 text-foreground"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block font-semibold mb-1 uppercase font-mono">Tahun</label>
                        <input
                          type="text"
                          value={newRef.year}
                          onChange={(e) => setNewRef({...newRef, year: e.target.value})}
                          placeholder="2026"
                          className="w-full bg-muted/40 border border-border rounded-xl px-3.5 py-2.5 text-foreground"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-1 uppercase font-mono">Jenis Pustaka</label>
                        <select
                          value={newRef.type}
                          onChange={(e) => setNewRef({...newRef, type: e.target.value})}
                          className="w-full bg-muted/40 border border-border rounded-xl px-3.5 py-2.5 text-foreground"
                        >
                          <option>Jurnal Ilmiah</option>
                          <option>Buku Teks</option>
                          <option>Prosiding Seminar</option>
                          <option>Tesis / Disertasi</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block font-semibold mb-1 uppercase font-mono">Judul Karya</label>
                      <input
                        type="text"
                        value={newRef.title}
                        onChange={(e) => setNewRef({...newRef, title: e.target.value})}
                        placeholder="Judul lengkap penelitian atau buku..."
                        className="w-full bg-muted/40 border border-border rounded-xl px-3.5 py-2.5 text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-1 uppercase font-mono">Penerbit / Institusi / Jurnal</label>
                      <input
                        type="text"
                        value={newRef.source}
                        onChange={(e) => setNewRef({...newRef, source: e.target.value})}
                        placeholder="Contoh: IPB Press, Bogor atau Jurnal Agronomi, 10(2)..."
                        className="w-full bg-muted/40 border border-border rounded-xl px-3.5 py-2.5 text-foreground"
                      />
                    </div>
                    <div className="flex justify-end gap-3 pt-4">
                      <button
                        type="button"
                        onClick={() => setShowAddModal(false)}
                        className="px-4 py-2 rounded-xl bg-muted text-foreground font-semibold"
                      >
                        Batal
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2 rounded-xl bg-emerald-600 text-white font-semibold"
                      >
                        Simpan Pustaka
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* References List */}
            <div className="space-y-4">
              {filteredRefs.map((ref) => (
                <div key={ref.id} className="bg-card border border-border/80 rounded-2xl p-6 shadow-sm hover:border-emerald-600/50 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-semibold">
                        {ref.type}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground">({ref.year})</span>
                    </div>
                    <div className="font-serif font-bold text-foreground text-sm sm:text-base">
                      {ref.author}. {ref.year}. <span className="italic">{ref.title}</span>. {ref.source}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-mono text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1.5 rounded-xl border border-emerald-500/20">
                      Sitasi: ({ref.author.split(',')[0]} et al., {ref.year})
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </main>

          <Footer />
        </div>
      );
    };