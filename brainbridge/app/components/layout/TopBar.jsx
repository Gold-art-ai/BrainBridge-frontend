"use client";
import React from 'react';
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
  return (
    <header className="h-16 lg:h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-4 sm:px-6 lg:px-8 sticky top-0 z-40 lg:ml-64">
      {/* Left Side: Mobile Menu + Logo + Search */}
      <div className="flex items-center gap-3 sm:gap-4 flex-1 lg:flex-none">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>

        {/* Mobile Logo - Only visible on mobile */}
        <Link href="/dashboard" className="lg:hidden flex items-center">
          <Image 
            src="/logo.png" 
            alt="BrainBridge" 
            width={32} 
            height={32}
            className="object-contain"
          />
        </Link>

        {/* Search Input - Responsive Width */}
        <div className="relative flex-1 lg:w-96 max-w-lg">
          <Search 
            className="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 text-gray-400" 
            size={16} 
          />
          <input 
            type="text" 
            placeholder="Search projects, stack..." 
            className="w-full bg-gray-100/50 border border-gray-100 rounded-xl py-2 lg:py-2.5 pl-9 lg:pl-11 pr-4 outline-none focus:border-[#3A38DE] focus:ring-2 lg:focus:ring-4 focus:ring-[#3A38DE]/5 transition-all text-sm text-[#08075C] font-medium placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
        {/* Language & Notifications */}
        <div className="flex items-center gap-2 sm:gap-3 border-r border-gray-100 pr-3 sm:pr-6">
          <button className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
            <Languages size={14} className="text-[#3A38DE]" />
            <span className="text-xs font-bold text-[#08075C] hidden md:inline">EN</span>
          </button>
          
          <button className="relative p-2 sm:p-2.5 rounded-xl hover:bg-gray-50 transition-all text-gray-400 hover:text-[#3A38DE]">
            <Bell size={18} className="sm:w-5 sm:h-5" />
            {/* Notification Dot */}
            <span className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 w-2 h-2 bg-[#3A38DE] rounded-full border-2 border-white"></span>
          </button>
        </div>

        {/* User Profile Summary */}
        <div className="flex items-center gap-2 sm:gap-3 cursor-pointer group p-1 rounded-xl hover:bg-gray-50 transition-all">
          <div className="text-right hidden md:block">
            <p className="text-sm font-bold text-[#08075C]">Gold Developer</p>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Admin Node</p>
          </div>
          
          {/* Avatar with Brand Gradient */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-[#08075C] to-[#3A38DE] rounded-xl flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/10 transition-transform group-hover:scale-105">
            JD
          </div>
          
          <ChevronDown 
            size={14} 
            className="text-gray-400 group-hover:text-[#3A38DE] transition-colors hidden sm:block" 
          />
        </div>
      </div>
    </header>
  );
}