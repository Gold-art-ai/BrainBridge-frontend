"use client";
import { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import TopBar from '../components/layout/TopBar';

export default function ProjectsLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Blueprint Grid Background */}
      <div className="fixed inset-0 pointer-events-none opacity-40 z-0" 
        style={{
          backgroundImage: `linear-gradient(rgba(58, 56, 222, 0.05) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(58, 56, 222, 0.05) 1px, transparent 1px)`,
          backgroundSize: '45px 45px'
        }}>
      </div>

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Main Content Area */}
      <div className="lg:ml-64 flex flex-col min-h-screen relative z-10">
        <TopBar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="p-4 sm:p-6 lg:p-8 flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}