"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Search, 
  Bell, 
  ChevronDown, 
  Languages,
  Menu
} from 'lucide-react';

export default function TopBar({ onMenuClick }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        setUser(JSON.parse(userStr));
      } catch (e) {
        console.error("Error parsing user from localStorage", e);
      }
    }
  }, []);

  const fullName = user ? `${user.firstName || ''} ${user.lastName || ''}`.trim() || user.username : "Guest User";
  const userType = user ? 'Developer' : 'Guest';
  const avatarUrl = user?.profilePicture || `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=08075C&color=fff&bold=true`;

  return (
    <header className="h-20 bg-white/80 backdrop-blur-xl flex items-center justify-between px-4 sm:px-8 sticky top-0 z-40 lg:ml-0">
      {/* Left Side: Mobile Menu + Search */}
      <div className="flex items-center gap-4 flex-1">
        {/* Mobile Menu Button - Leftmost */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 text-gray-600 transition-colors active:scale-95"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>

        {/* Search Input - Sleek & Responsive */}
        <div className="relative flex-1 max-w-xl hidden sm:block">
          <Search 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" 
            size={18} 
          />
          <input 
            type="text" 
            placeholder="Search for projects, tech stacks, or developers..." 
            className="w-full bg-[#F8F9FB] hover:bg-white border border-transparent hover:border-gray-200 rounded-full py-2.5 pl-12 pr-6 outline-none focus:border-[#3A38DE] focus:ring-4 focus:ring-[#3A38DE]/10 focus:bg-white transition-all text-[13px] text-[#08075C] font-semibold placeholder:text-gray-400 placeholder:font-medium shadow-sm"
          />
        </div>
        
        {/* Mobile Search Icon Only */}
        <button className="sm:hidden p-2.5 rounded-xl hover:bg-gray-100 text-gray-600 ml-auto">
          <Search size={22} />
        </button>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-2 sm:gap-5 ml-4">
        {/* Notifications and Localization */}
        <div className="flex items-center gap-1 sm:gap-2 border-r border-[#08075C]/10 pr-2 sm:pr-5">
          <button className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-[#F8F9FB] transition-colors text-gray-500 hover:text-[#08075C]">
            <Languages size={18} className="text-[#3A38DE]" />
            <span className="text-[11px] font-black uppercase tracking-widest hidden lg:inline">EN</span>
          </button>
          
          <button className="relative p-2.5 rounded-full hover:bg-[#F8F9FB] transition-all text-gray-400 hover:text-[#08075C] active:scale-95">
            <Bell size={20} className="stroke-[2.5]" />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white animate-pulse"></span>
          </button>
        </div>

        {/* User Profile Summary */}
        <div className="flex items-center gap-3 cursor-pointer group pl-1 sm:pl-2 py-1 rounded-full hover:bg-[#F8F9FB] transition-all">
          <div className="text-right hidden sm:block">
            <p className="text-[13px] font-black text-[#08075C] leading-none mb-1 group-hover:text-[#3A38DE] transition-colors">{fullName}</p>
            <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">{userType}</p>
          </div>
          
          {/* Avatar Modernized */}
          <div className="relative">
            <img 
              src={avatarUrl} 
              alt={fullName} 
              className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-lg shadow-[#3A38DE]/10 transition-transform group-hover:scale-105"
            />
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-[2.5px] border-white rounded-full"></div>
          </div>
          
          <ChevronDown 
            size={16} 
            className="text-gray-400 group-hover:text-[#08075C] transition-colors hidden sm:block mr-2" 
            strokeWidth={3}
          />
        </div>
      </div>
    </header>
  );
}