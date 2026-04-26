"use client";
import React, { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import PublicHero from '../components/projects/PublicHero';
import CategoryFilter from '../components/projects/CategoryFilter';
import PublicProjectCard from '../components/projects/PublicProjectCard';
import TechTrends from '../components/projects/TechTrends';
import NewProjectModal from "../components/projects/NewProjectModal";
import { Search, Plus } from "lucide-react";
import { useGetAllProjectsQuery, useAddProjectMutation } from '../redux/api/ProjectsApiSlice';

export default function PublicDiscoveryPage() {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: fetched } = useGetAllProjectsQuery();
  const [addProjectMutation] = useAddProjectMutation();

  useEffect(() => { setProjects(fetched || []); }, [fetched]);

  const addProject = async (newProj) => {
    const payload = {
      title: newProj.title,
      description: newProj.description,
      projectStatus: newProj.projectStatus,
      projectVisibility: newProj.projectVisibility,
      coverImageUrl: newProj.coverImageUrl || "",
      repoUrl: newProj.repoUrl || "",
      field: newProj.field,
      mainTags: newProj.mainTags || [],
      subTags: newProj.subTags || [],
      sdgGoals: newProj.sdgGoals || [],
      nst2Goals: newProj.nst2Goals || [],
      additionalMediaUrls: newProj.additionalMediaUrls || [],
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date().toISOString().split('T')[0]
    };

    try {
      await addProjectMutation(payload).unwrap();
    } catch (e) {
      console.error('[Projects] addProject error:', e);
    }
    setIsModalOpen(false);
  };

  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const matchesSearch = (p.title || "").toLowerCase().includes(searchQuery.toLowerCase()) || 
                            (p.description || "").toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCat = activeCategory === 'All' || p.field === activeCategory;
      return matchesSearch && matchesCat;
    });
  }, [searchQuery, activeCategory, projects]);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <PublicHero projects={projects.slice(0, 5)} />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <p className="text-sm font-semibold text-[var(--primary)] mb-1 uppercase tracking-wider">Discovery</p>
            <h2 className="text-3xl font-extrabold tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>All Projects</h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={16} />
              <input type="text" placeholder="Search projects..." value={searchQuery}
                className="input-field w-full rounded-lg py-2.5 pl-10 pr-4 text-sm"
                onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
            <button onClick={() => setIsModalOpen(true)} className="btn-primary p-2.5 rounded-lg">
              <Plus size={18} />
            </button>
          </div>
        </div>

        <div className="mb-8">
          <CategoryFilter active={activeCategory} setActive={setActiveCategory} />
        </div>

        <TechTrends />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {filteredProjects.map(proj => (
            <Link href={`/projects/${proj.id}`} key={proj.id} className="block group">
              <PublicProjectCard project={proj} />
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg font-bold text-[var(--text)] mb-1" style={{ fontFamily: 'var(--font-heading)' }}>No projects found</p>
            <p className="text-sm text-[var(--text-muted)]">Try adjusting your search or filters.</p>
          </div> 
        )}
      </div>

      <NewProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAddProject={addProject} />
    </div>
  );
}