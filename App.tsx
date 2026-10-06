import React, { lazy, Suspense } from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Menggunakan HashRouter agar kompatibel penuh dengan GitHub Pages
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './src/pages/Home';
import NotFound from './src/pages/NotFound.tsx';

// Melakukan impor komponen secara lazy loading
const ThesisEditor = lazy(() => import('./src/pages/ThesisEditor').then(m => ({ default: m.ThesisEditor })));
const AiSettings = lazy(() => import('./src/pages/AiSettings').then(m => ({ default: m.AiSettings })));
const Library = lazy(() => import('./src/pages/Library').then(m => ({ default: m.Library })));
const NotebookLmHub = lazy(() => import('./src/pages/NotebookLmHub').then(m => ({ default: m.NotebookLmHub })));

const App: React.FC = () => {
  return (
    <Theme appearance="inherit" radius="large" scaling="100%">
      <Router>
        <main className="min-h-screen font-sans">
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-background">
              <div className="w-8 h-8 rounded-full border-2 border-emerald-600 border-t-transparent animate-spin"></div>
            </div>
          }>
            <Routes>
              {/* HALAMAN UTAMA DIUBAH: Langsung mengarah ke ThesisEditor agar kolom input judul langsung muncul */}
              <Route path="/" element={<ThesisEditor />} />
              
              {/* Rute halaman lainnya */}
              <Route path="/home" element={<Home />} />
              <Route path="/thesis" element={<ThesisEditor />} />
              <Route path="/notebooklm" element={<NotebookLmHub />} />
              <Route path="/settings" element={<AiSettings />} />
              <Route path="/library" element={<Library />} />
              
              {/* Rute jika halaman tidak ditemukan */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            newestOnTop
            closeOnClick
            pauseOnHover
          />
        </main>
      </Router>
    </Theme>
  );
}

export default App;
