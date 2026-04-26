"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, Layers, Heart, Compass, Mail, LogOut, X, Menu, Activity, Settings
} from 'lucide-react';

const workspaceLinks = [
  { name: 'Dashboard', icon: <LayoutDashboard size={18} />, path: '/dashboard' },
  { name: 'My Projects', icon: <Layers size={18} />, path: '/dashboard/projects' },
  { name: 'Favorites', icon: <Heart size={18} />, path: '/dashboard/favorites' },
];

const discoveryLinks = [
  { name: 'Feed', icon: <Activity size={18} />, path: '/dashboard/feed' },
  { name: 'Articles', icon: <Compass size={18} />, path: '/projects' },
  { name: 'Inbox', icon: <Mail size={18} />, path: '/dashboard/inbox' },
];

export default function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (isOpen && window.innerWidth < 1024) onClose();
  }, [pathname]);

  const NavItem = ({ item }) => {
    const isActive = mounted && (pathname === item.path || (item.path !== '/dashboard' && pathname.startsWith(item.path)));
    
    return (
      <Link 
        href={item.path}
        onClick={() => { if (window.innerWidth < 1024) onClose(); }}
        className={`group relative flex items-center gap-3.5 px-4 py-2.5 rounded-xl font-medium text-[13px] transition-all ${
          isActive 
          ? 'bg-[var(--primary)]/8 text-[var(--primary)]' 
          : 'text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg)]'
        }`}
      >
        {isActive && (
          <div className="absolute left-0 w-[3px] h-5 bg-[var(--primary)] rounded-r-full" />
        )}
        <div className={`transition-colors ${isActive ? 'text-[var(--primary)]' : 'group-hover:text-[var(--text)]'}`}>
          {item.icon}
        </div>
        <span>{item.name}</span>
      </Link>
    );
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 z-40 lg:hidden" onClick={onClose} />
      )}

      <aside className={`
        w-64 min-h-screen bg-white border-r border-[var(--border)] flex flex-col fixed left-0 top-0 z-50
        transform transition-transform duration-300 ease-in-out
        lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6 flex items-center justify-between border-b border-[var(--border)]">
          <Link href="/dashboard" className="text-lg font-extrabold text-[var(--primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
            BrainBridge
          </Link>
          <button onClick={onClose} className="lg:hidden p-2 rounded-lg hover:bg-[var(--bg)] text-[var(--text-muted)]">
            <X size={18} />
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-7 overflow-y-auto py-6">
          <div>
            <p className="px-4 text-[10px] font-semibold text-[var(--text-muted)] uppercase tracking-[0.15em] mb-3">Workspace</p>
            <div className="space-y-1">
              {workspaceLinks.map(item => <NavItem key={item.path} item={item} />)}
            </div>
          </div>

          <div>
            <p className="px-4 text-[10px] font-semibold text-[var(--text-muted)] uppercase tracking-[0.15em] mb-3">Discovery</p>
            <div className="space-y-1">
              {discoveryLinks.map(item => <NavItem key={item.path} item={item} />)}
            </div>
          </div>
        </nav>

        <div className="p-4 border-t border-[var(--border)] flex flex-col gap-0.5">
          <Link href="/dashboard/profile" className="flex items-center gap-3.5 px-4 py-2.5 w-full text-[var(--text-muted)] font-medium text-[13px] hover:text-[var(--text)] hover:bg-[var(--bg)] rounded-xl transition-all group">
            <Settings size={18} />
            <span>Settings</span>
          </Link>
          <Link href="/auth/login" className="flex items-center gap-3.5 px-4 py-2.5 w-full text-[var(--text-muted)] font-medium text-[13px] hover:text-[var(--accent)] hover:bg-red-50 rounded-xl transition-all group">
            <LogOut size={18} />
            <span>Logout</span>
          </Link>
        </div>
      </aside>
    </>
  );
}