import React from 'react';
    import { Link } from 'react-router-dom';
    import { Sprout, ArrowLeft } from 'lucide-react';

    const NotFound: React.FC = () => {
      return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center mb-6 shadow-md">
            <Sprout className="w-8 h-8" />
          </div>
          <h1 className="font-serif text-4xl font-bold text-foreground mb-2">404 - Halaman Tidak Ditemukan</h1>
          <p className="text-muted-foreground text-sm max-w-md mb-8">
            Halaman yang Anda tuju pada sistem Asisten Tesis Agroteknologi AI tidak tersedia atau telah dipindahkan.
          </p>
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center gap-2 shadow-md transition-all hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda Utama
          </Link>
        </div>
      );
    };

    export default NotFound;