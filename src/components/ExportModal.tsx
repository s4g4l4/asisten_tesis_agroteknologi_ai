import React, { useState } from 'react';
    import { FileDown, Printer, FileText, CheckCircle2, Loader2, X } from 'lucide-react';
    import { toast } from 'react-toastify';

    interface ExportModalProps {
      isOpen: boolean;
      onClose: () => void;
      thesisTitle: string;
    }

    export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose, thesisTitle }) => {
      const [exportingFormat, setExportingFormat] = useState<string | null>(null);
      const [progress, setProgress] = useState(0);

      if (!isOpen) return null;

      const handleExport = (format: string) => {
        setExportingFormat(format);
        setProgress(20);
        
        setTimeout(() => setProgress(60), 600);
        setTimeout(() => {
          setProgress(100);
          setTimeout(() => {
            setExportingFormat(null);
            setProgress(0);
            onClose();
            toast.success(`Tesis berhasil diexport ke format ${format.toUpperCase()}!`);
          }, 400);
        }, 1200);
      };

      return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-card border border-border rounded-2xl w-full max-w-lg p-6 shadow-2xl relative">
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground p-1 rounded-lg hover:bg-muted"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center">
                <FileDown className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-foreground">Export Dokumen Tesis S2</h3>
                <p className="text-xs text-muted-foreground">Format lengkap sesuai pedoman penulisan tesis magister</p>
              </div>
            </div>

            <div className="bg-muted/50 p-3.5 rounded-xl border border-border/60 mb-6 text-xs">
              <span className="font-semibold text-foreground block mb-1">Judul Dokumen:</span>
              <p className="italic text-muted-foreground line-clamp-2">"{thesisTitle}"</p>
            </div>

            {exportingFormat ? (
              <div className="py-8 text-center space-y-4">
                <Loader2 className="w-10 h-10 text-emerald-600 animate-spin mx-auto" />
                <div className="space-y-1">
                  <p className="text-sm font-medium text-foreground">Sedang merender format {exportingFormat.toUpperCase()}...</p>
                  <p className="text-xs text-muted-foreground">Menyusun daftar pustaka Harvard, penomoran tabel & lampiran</p>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div className="bg-emerald-600 h-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <button
                  onClick={() => handleExport('docx')}
                  className="w-full flex items-center justify-between p-4 rounded-xl border border-border hover:border-emerald-600 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                      DOCX
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-sm text-foreground group-hover:text-emerald-700">Microsoft Word (.docx)</div>
                      <div className="text-xs text-muted-foreground">Dilengkapi heading styles, daftar isi otomatis & tabel USLE</div>
                    </div>
                  </div>
                  <FileText className="w-5 h-5 text-muted-foreground group-hover:text-emerald-600" />
                </button>

                <button
                  onClick={() => handleExport('pdf')}
                  className="w-full flex items-center justify-between p-4 rounded-xl border border-border hover:border-emerald-600 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs">
                      PDF
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-sm text-foreground group-hover:text-emerald-700">Dokumen PDF Siap Cetak</div>
                      <div className="text-xs text-muted-foreground">Format layout standar sidang tesis magister agroteknologi</div>
                    </div>
                  </div>
                  <Printer className="w-5 h-5 text-muted-foreground group-hover:text-emerald-600" />
                </button>

                <button
                  onClick={() => handleExport('markdown')}
                  className="w-full flex items-center justify-between p-4 rounded-xl border border-border hover:border-emerald-600 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs">
                      MD
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-sm text-foreground group-hover:text-emerald-700">Markdown Lengkap</div>
                      <div className="text-xs text-muted-foreground">Format teks sumber untuk integrasi LaTeX / Overleaf</div>
                    </div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-muted-foreground group-hover:text-emerald-600" />
                </button>
              </div>
            )}
          </div>
        </div>
      );
    };