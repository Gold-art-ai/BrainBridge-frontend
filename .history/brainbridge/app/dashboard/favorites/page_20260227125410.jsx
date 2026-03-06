"use client";
import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import PublicProjectCard from '../../components/projects/PublicProjectCard';
import { Bookmark, LayoutGrid, Search, ArrowRight } from 'lucide-react';
import { useGetMyFavoritesQuery } from '../../redux/api/FavoritesApiSlice';
import { useGetAllProjectsQuery } from '../../redux/api/ProjectsApiSlice';

export default function FavoritesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: favoriteIds = [] } = useGetMyFavoritesQuery();
  const { data: allProjects = [] } = useGetAllProjectsQuery();

  const favoriteProjects = useMemo(() => {
    return allProjects.filter(p => favoriteIds.includes(p.id));
  }, [allProjects, favoriteIds]);

  const displayedFavorites = favoriteProjects.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-20">
      <div className="max-w-7xl mx-auto px-6 pt-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* Changed bg-red-50 to bg-blue-50 and text-red-500 to text-[#3A38DE] */}
              <div className="p-2 bg-blue-50 text-[#3A38DE] rounded-xl shadow-sm">
                <Bookmark size={20} fill="currentColor" />
              </div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#08075C]">Secure Vault</h2>
            </div>
            <h1 className="text-4xl font-black text-[#08075C] tracking-tight">Saved Nodes</h1>
            <p className="text-gray-400 text-sm mt-2 font-medium">Your curated collection of high-interest projects.</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text"
                placeholder="Search vault..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                /* Ensure text is visible with text-[#08075C] */
                className="bg-white border border-gray-100 rounded-xl py-2.5 pl-10 pr-4 text-xs font-bold text-[#08075C] outline-none focus:ring-4 focus:ring-blue-500/5 transition-all w-64 shadow-sm"
              />
            </div>
            <div className="bg-white px-4 py-2.5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2">
                <LayoutGrid size={14} className="text-gray-400" />
                <span className="text-[10px] font-black text-[#08075C] uppercase">{displayedFavorites.length} Nodes</span>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        {displayedFavorites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {displayedFavorites.map(proj => (
              <Link href={`/projects/${proj.id}`} key={proj.id}>
                <PublicProjectCard project={proj} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 bg-white rounded-[3rem] border border-dashed border-gray-200 shadow-sm">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
               <Bookmark size={32} className="text-gray-200" />
            </div>
            <h3 className="text-lg font-bold text-[#08075C] mb-2">The Vault is Empty</h3>
            <p className="text-gray-400 text-xs mb-8 max-w-xs text-center leading-relaxed">
              Explore the Discovery Hub to find and save innovative project nodes to your personal archive.
            </p>
            <Link 
                href="/projects" 
                className="flex items-center gap-2 bg-[#08075C] text-white px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#3A38DE] transition-all"
            >
              Go to Discovery <ArrowRight size={14} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}