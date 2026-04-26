"use client";
import React, { useState, useMemo, useEffect } from "react";
import StatsOverview from "../components/dashboard/StatsOverview";
import ProjectCard from "../components/dashboard/ProjectCard";
import NewProjectModal from "../components/projects/NewProjectModal";
import { useGetMyProjectsQuery, useAddProjectMutation } from '../redux/api/ProjectsApiSlice';
import { Plus, Search } from "lucide-react";
import { FIELDS } from '../utils/taxonomy';

export default function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeField, setActiveField] = useState("All");
  const [userName, setUserName] = useState("Developer");
  const { data: projects = [], isLoading } = useGetMyProjectsQuery();

  useEffect(() => {
    try {
      const userStr = localStorage.getItem('user');
      if (userStr) {
        const userObj = JSON.parse(userStr);
        setUserName(userObj.firstName || userObj.username || "Developer");
      }
    } catch {}
  }, []);

  const fieldFilters = ["All", ...FIELDS];
  const [addProjectMutation] = useAddProjectMutation();

  const filteredProjects = useMemo(() => {
    return projects.filter((proj) => {
      const matchesSearch = (proj.title || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
        (proj.mainTags && proj.mainTags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));
      const matchesField = activeField === "All" || proj.field === activeField;
      return matchesSearch && matchesField;
    });
  }, [searchQuery, activeField, projects]);

  const addProject = async (newProj) => {
    console.log('[Dashboard] addProject called with:', newProj);

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

    console.log('[Dashboard] Sending payload to API:', payload);

    try {
      const result = await addProjectMutation(payload).unwrap();
      console.log('[Dashboard] Project created successfully:', result);
    } catch (e) {
      console.error('[Dashboard] Add project failed:', e);
      console.error('[Dashboard] Error status:', e.status);
      console.error('[Dashboard] Error data:', e.data);
      alert(`Failed to create project: ${e.data?.message || e.data?.error || e.message || 'Unknown error'}`);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      {/* Welcome */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-extrabold text-[var(--text)]" style={{ fontFamily: 'var(--font-heading)' }}>
            Welcome, {userName} 👋
          </h2>
          <p className="text-[var(--text-muted)] text-sm font-medium mt-0.5">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </p>
        </div>
        <button onClick={() => setIsModalOpen(true)}
          className="btn-primary px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 w-fit">
          <Plus size={16} /> New Project
        </button>
      </div>

      <StatsOverview projects={projects} />

      {/* Filters */}
      <div className="mt-10 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={16} />
          <input type="text" placeholder="Search projects..." value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-field w-full rounded-lg py-2 pl-10 pr-4 text-sm" />
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar w-full sm:w-auto">
          {fieldFilters.slice(0, 7).map((f) => (
            <button key={f} onClick={() => setActiveField(f)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                activeField === f
                  ? "bg-[var(--primary)] text-white"
                  : "bg-white text-[var(--text-muted)] border border-[var(--border)] hover:text-[var(--text)]"
              }`}>
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <section className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((proj) => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </div>

        {filteredProjects.length === 0 && !isLoading && (
          <div className="text-center py-20">
            <p className="text-lg font-bold text-[var(--text)] mb-1" style={{ fontFamily: 'var(--font-heading)' }}>No projects yet</p>
            <p className="text-sm text-[var(--text-muted)] mb-6">Create your first project to get started.</p>
            <button onClick={() => setIsModalOpen(true)}
              className="btn-primary px-6 py-2.5 rounded-xl font-semibold text-sm inline-flex items-center gap-2">
              <Plus size={16} /> Create Project
            </button>
          </div>
        )}
      </section>

      <NewProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAddProject={addProject} />
    </div>
  );
}