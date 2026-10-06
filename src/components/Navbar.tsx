import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Sprout, 
  LayoutDashboard, 
  FileText, 
  Settings, 
  BookOpen, 
  Menu, 
  X, 
  UserCheck,
  ChevronDown,
  Headphones
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Editor Tesis AI', path: '/thesis', icon: FileText },
    { name: 'NotebookLM', path: '/notebooklm', icon: Headphones },
    { name: 'Pustaka & Sitasi', path: '/library', icon: BookOpen },
    { name: 'Pengaturan AI', path: '/settings', icon: Settings },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
            <Sprout className="w-5 h-5" />
          </div>
          <div>
            <span className="font-serif font-bold text-lg text-foreground tracking-tight">AgroTesis AI</span>
            <span className="block text-[10px] text-emerald-600 font-mono font-medium tracking-wider uppercase">S2 Agroteknologi</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                  isActive 
                    ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 font-semibold' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-600 dark:text-emerald-400' : 'text-muted-foreground'}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* User Profile & Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              className="flex items-center gap-3 p-1.5 rounded-xl border border-border/60 hover:bg-muted/55 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-semibold text-xs">
                Dr
              </div>
              <div className="text-left hidden lg:block">
                <div className="text-xs font-semibold">Dian Rahmat, S.P.</div>
                <div className="text-[10px] text-muted-foreground">NIM: 220610042</div>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-muted-foreground mr-1" />
            </button>

            {userDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-xl bg-card border border-border shadow-xl py-2 z-50">
                <div className="px-4 py-2 border-b border-border/50">
                  <p className="text-xs font-medium text-foreground">Program Studi Magister Agroteknologi</p>
                  <p className="text-[10px] text-muted-foreground">Fakultas Pertanian</p>
                </div>
                <Link to="/settings" className="w-full text-left px-4 py-2 text-xs text-foreground hover:bg-muted/60 flex items-center gap-2">
                  <Settings className="w-3.5 h-3.5" /> Konfigurasi API AI
                </Link>
                <div className="border-t border-border/50 my-1"></div>
                <div className="px-4 py-1 text-[10px] text-emerald-600 font-medium flex items-center gap-1">
                  <UserCheck className="w-3 h-3" /> Aktif (Groq Llama 3 Free)
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-foreground hover:bg-muted"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-b border-border px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium ${
                  isActive ? 'bg-emerald-50 text-emerald-700 font-semibold' : 'text-foreground hover:bg-muted'
                }`}
              >
                <Icon className="w-5 h-5 text-emerald-600" />
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};