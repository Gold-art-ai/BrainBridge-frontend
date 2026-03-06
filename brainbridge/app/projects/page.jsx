"use client";
import React, { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import PublicHero from '../components/projects/PublicHero';
import CategoryFilter from '../components/projects/CategoryFilter';
import PublicProjectCard from '../components/projects/PublicProjectCard';
import TechTrends from '../components/projects/TechTrends';
import NewProjectModal from "../components/projects/NewProjectModal";
import { Search, Loader2, Plus } from "lucide-react";
import { useGetAllProjectsQuery, useAddProjectMutation } from '../redux/api/ProjectsApiSlice'

export default function PublicDiscoveryPage() {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const observerTarget = useRef(null);

  const { data: fetched, isLoading: projectsLoading } = useGetAllProjectsQuery();
  const [addProjectMutation] = useAddProjectMutation();

  useEffect(() => {
    setProjects(fetched || []);
  }, [fetched]);

  // Logic to add project and persist it for both Dashboard and Public Feed
  const addProject = async (newProj) => {
    let ownerId = 201; // Default fallback
    try {
      const userStr = localStorage.getItem('user');
      if (userStr) {
        const userObj = JSON.parse(userStr);
        if (userObj.id) ownerId = userObj.id;
      }
    } catch (e) {
      console.error("Failed to get user from localStorage", e);
    }

    // Explicitly pick fields the backend DTO expects
    const payload = {
      title: newProj.title,
      description: newProj.description,
      projectStatus: newProj.projectStatus,
      projectVisibility: newProj.projectVisibility,
      ownerId: ownerId,
      teamId: 20, // Fallback for testing
      sourceIdeaId: 2002, // Fallback for testing
      coverImageUrl: newProj.coverImageUrl || "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop",
      repoUrl: newProj.repoUrl || "",
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date().toISOString().split('T')[0]
    };

    // try to persist to backend
    try {
      await addProjectMutation(payload).unwrap();
    } catch (e) {
      console.error('Add project failed', e);
    }

    setIsModalOpen(false);
  };

  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const matchesSearch = (p.title || "").toLowerCase().includes(searchQuery.toLowerCase()) || 
                            (p.creator || "").toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCat = activeCategory === 'All' || p.category === activeCategory;
      return matchesSearch && matchesCat;
    });
  }, [searchQuery, activeCategory, projects]);

  return (
    <div className="bg-white min-h-screen text-[#101828]">
      {/* Editorial Style Hero using the first/latest project */}
      <PublicHero projects={projects.slice(0, 5)} />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
          <div>
            <h2 className="text-sm font-semibold text-[#6941C6] mb-2 uppercase tracking-wider">Discovery Feed</h2>
            <h3 className="text-4xl font-bold tracking-tight">Recent Project Nodes</h3>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative group w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search resources..."
                value={searchQuery}
                className="w-full bg-white border border-gray-200 rounded-lg py-3 pl-12 pr-4 text-sm focus:border-[#7F56D9] focus:ring-4 focus:ring-[#7F56D9]/5 transition-all outline-none"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button 
              onClick={() => setIsModalOpen(true)} 
              className="bg-[#7F56D9] text-white p-3 rounded-lg hover:bg-[#6941C6] transition-all active:scale-95 shadow-lg shadow-[#7F56D9]/20"
            >
              <Plus size={20} />
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-4 border-b border-gray-100 pb-6 mb-10 overflow-x-auto no-scrollbar">
          <CategoryFilter active={activeCategory} setActive={setActiveCategory} />
        </div>

        {/* Dynamic Tech Trends Section */}
        <TechTrends />

        {/* Project Grid with Link Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-16">
          {filteredProjects.map(proj => (
            <Link 
              href={`/projects/${proj.id}`} 
              key={proj.id} 
              className="block group transition-all duration-300 hover:-translate-y-2"
            >
              <PublicProjectCard project={proj} />
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-gray-400 font-medium">No nodes found in this sector.</p>
          </div>
        )}
      </div>

      <NewProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onAddProject={addProject} 
      />
    </div>
  );
}