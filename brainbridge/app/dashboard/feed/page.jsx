"use client";
import React, { useState, useEffect, useMemo } from 'react';
import FeedPost from '../../components/feed/FeedPost';
import { useGetAllProjectsQuery } from '../../redux/api/ProjectsApiSlice';
import { Loader2, Sparkles, Filter } from 'lucide-react';

export default function FeedPage() {
  const { data: projects = [], isLoading } = useGetAllProjectsQuery();
  const [activeFilter, setActiveFilter] = useState('For You');

  const filters = ['For You', 'Following', 'Trending', 'AI & Data', 'Web Dev'];

  // Mock Recommendation Logic
  const feedItems = useMemo(() => {
    // Clone and shuffle array slightly to represent a dynamic feed
    let sorted = [...projects].sort(() => 0.5 - Math.random());
    
    // Process filters
    if (activeFilter !== 'For You' && activeFilter !== 'Following' && activeFilter !== 'Trending') {
      const matchKey = activeFilter === 'Web Dev' ? 'Web App' : 'AI/ML';
      sorted = sorted.filter(p => p.category === matchKey || (p.tech && p.tech.includes(matchKey)));
    }

    // Attach mock recommendation reasons for 'For You'
    return sorted.map((proj, idx) => {
      let reason = null;
      if (activeFilter === 'For You') {
        if (idx === 0) reason = "Highly Rated in Web App";
        else if (idx === 3) reason = "Based on your tech stack";
        else if (idx === 7) reason = "Trending right now";
      } else if (activeFilter === 'Trending') {
        reason = `Rank #${idx + 1} Trending`;
      }
      return { project: proj, reason };
    });
  }, [projects, activeFilter]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="animate-spin text-[#3A38DE]" size={40} />
      </div>
    );
  }

  return (
    <div className="max-w-[700px] mx-auto px-4 sm:px-6 pb-32 pt-4">
      
      {/* Feed Header */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-3xl pt-2 pb-4 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
        <h2 className="text-2xl font-black text-[#08075C] mb-4 flex items-center gap-2">
          Discover Feed <Sparkles size={20} className="text-[#3A38DE]" />
        </h2>
        
        {/* Feed Filters / Tabs */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar py-1 rounded-2xl">
          {filters.map(f => (
            <button 
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${
                activeFilter === f 
                  ? 'bg-[#08075C] text-white shadow-lg shadow-blue-900/20' 
                  : 'bg-gray-50/50 text-gray-500 border border-gray-100 hover:bg-gray-100/80 hover:text-[#08075C]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Main Feed */}
      <div className="flex flex-col gap-2">
        {feedItems.length > 0 ? (
          feedItems.map(({ project, reason }, i) => (
            <FeedPost 
              key={`${project.id}-${i}`} 
              project={project} 
              recommendationReason={reason} 
            />
          ))
        ) : (
          <div className="text-center py-20 bg-gray-50/50 rounded-[40px] border border-gray-100 border-dashed mt-4">
            <h3 className="text-[#08075C] font-bold mb-2">No projects found</h3>
            <p className="text-xs text-gray-400 font-medium tracking-wide uppercase">Try switching your feed filter.</p>
          </div>
        )}
      </div>

      {/* End of feed marker */}
      {feedItems.length > 0 && (
        <div className="text-center mt-12 mb-20 flex flex-col items-center">
          <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mb-2" />
          <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mb-2 opacity-70" />
          <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mb-4 opacity-40" />
          <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em]">You've caught up</p>
        </div>
      )}
    </div>
  );
}
