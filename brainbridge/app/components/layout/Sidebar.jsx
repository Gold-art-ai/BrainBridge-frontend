"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Layers, 
  Heart, 
  Compass, 
  Mail, 
  LogOut,
  X,
  Menu
} from 'lucide-react';

const workspaceLinks = [
  { name: 'Dashboard', icon: <LayoutDashboard size={18} />, path: '/dashboard' },
  { name: 'My Projects', icon: <Layers size={18} />, path: '/dashboard/projects' },
  { name: 'Favorites', icon: <Heart size={18} />, path: '/dashboard/favorites' },
];

const discoveryLinks = [
  { name: 'Explore Hub', icon: <Compass size={18} />, path: '/projects' },
  { name: 'Inbox', icon: <Mail size={18} />, path: '/dashboard/inbox' },
];

export default function Sidebar({ isOpen, onClose }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close sidebar when route changes on mobile
  useEffect(() => {
    if (isOpen && window.innerWidth < 1024) {
      onClose();
    }
  }, [pathname]);

  const NavItem = ({ item }) => {
    const isActive = mounted && (pathname === item.path || (item.path !== '/dashboard' && pathname.startsWith(item.path)));
    
    return (
      <Link 
        href={item.path}
        onClick={() => {
          // Close sidebar on mobile when clicking a link
          if (window.innerWidth < 1024) {
            onClose();
          }
        }}
        className={`group relative flex items-center gap-4 px-4 py-3 rounded-xl font-bold transition-all duration-300 ${
          isActive 
          ? 'bg-[#3A38DE]/5 text-[#3A38DE]' 
          : 'text-[#667085] hover:text-[#08075C] hover:bg-gray-50'
        }`}
      >
        {/* Active Indicator Pillar */}
        {isActive && (
          <div className="absolute left-0 w-1 h-5 bg-[#3A38DE] rounded-r-full shadow-[0_0_8px_rgba(58,56,222,0.4)]" />
        )}

        <div className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
          {item.icon}
        </div>

        <span className="text-[13px] tracking-tight">{item.name}</span>
      </Link>
    );
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        w-64 min-h-screen bg-white border-r border-gray-100 flex flex-col fixed left-0 top-0 z-50
        transform transition-transform duration-300 ease-in-out
        lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Brand Section with Logo */}
        <div className="p-6 flex items-center justify-between border-b border-gray-100">
          <Link href="/dashboard" className="flex items-center gap-3">
            <Image 
              src="/logo.png" 
              alt="BrainBridge Logo" 
              width={40} 
              height={40}
              className="object-contain"
            />
            <h1 className="text-xl font-bold bg-clip-text text-transparent hidden sm:block"
              style={{ 
                fontFamily: "'Playpen Sans', cursive", 
                backgroundImage: "linear-gradient(90deg, #08075C, #3A38DE)" 
              }}>
              BrainBridge
            </h1>
          </Link>
          
          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-600"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-8 overflow-y-auto py-6">
          {/* Workspace Section */}
          <div>
            <p className="px-4 text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] mb-4">Core Workspace</p>
            <div className="space-y-1">
              {workspaceLinks.map(item => <NavItem key={item.path} item={item} />)}
            </div>
          </div>

          {/* Discovery Section */}
          <div>
            <p className="px-4 text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] mb-4">Discovery</p>
            <div className="space-y-1">
              {discoveryLinks.map(item => <NavItem key={item.path} item={item} />)}
            </div>
          </div>
        </nav>

        {/* Logout Footer */}
        <div className="p-6 border-t border-gray-50">
          <button className="flex items-center gap-4 px-4 py-3 w-full text-[#667085] font-bold hover:text-red-500 hover:bg-red-50 rounded-xl transition-all group">
            <LogOut size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[13px] tracking-tight">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}