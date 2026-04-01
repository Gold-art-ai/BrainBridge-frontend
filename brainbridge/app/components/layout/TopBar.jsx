"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Bell, ChevronDown, Menu } from 'lucide-react';

export default function TopBar({ onMenuClick }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try { setUser(JSON.parse(userStr)); } catch (e) {}
    }
  }, []);

  const fullName = user ? `${user.firstName || ''} ${user.lastName || ''}`.trim() || user.username : "Guest";
  const userRole = user ? 'Student' : 'Guest';
  const avatarUrl = user?.profilePicture || `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=6C63FF&color=fff&bold=true`;

  return (
    <header className="h-16 bg-white/80 backdrop-blur-xl border-b border-[var(--border)] flex items-center justify-between px-4 sm:px-8 sticky top-0 z-40">
      <div className="flex items-center gap-4 flex-1">
        <button onClick={onMenuClick} className="lg:hidden p-2 rounded-lg hover:bg-[var(--bg)] text-[var(--text-muted)]" aria-label="Open menu">
          <Menu size={20} />
        </button>

        <div className="relative flex-1 max-w-md hidden sm:block">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)] pointer-events-none" size={16} />
          <input type="text" placeholder="Search projects, tags, people..."
            className="input-field w-full rounded-lg py-2 pl-10 pr-4 text-sm" />
        </div>

        <button className="sm:hidden p-2 rounded-lg hover:bg-[var(--bg)] text-[var(--text-muted)]">
          <Search size={20} />
        </button>
      </div>

      <div className="flex items-center gap-3 sm:gap-4 ml-4">
        <button className="relative p-2 rounded-lg hover:bg-[var(--bg)] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[var(--accent)] rounded-full ring-2 ring-white"></span>
        </button>

        <div className="h-6 w-px bg-[var(--border)] hidden sm:block"></div>

        <Link href="/dashboard/profile" className="flex items-center gap-3 cursor-pointer group py-1 px-2 rounded-lg hover:bg-[var(--bg)] transition-colors">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-[var(--text)] leading-none mb-0.5">{fullName}</p>
            <p className="text-[10px] text-[var(--text-muted)] font-medium">{userRole}</p>
          </div>
          <img src={avatarUrl} alt={fullName} className="w-8 h-8 rounded-full object-cover border border-[var(--border)]" />
          <ChevronDown size={14} className="text-[var(--text-muted)] hidden sm:block" />
        </Link>
      </div>
    </header>
  );
}