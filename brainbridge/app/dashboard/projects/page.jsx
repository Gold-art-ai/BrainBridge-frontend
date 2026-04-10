"use client";
import React, { useState, useEffect, useMemo } from 'react';
import ProjectFilters from '../../components/projects/ProjectFilters';
import ProjectTable from '../../components/projects/ProjectTable';
import { useGetMyProjectsQuery, useRemoveProjectMutation } from '../../redux/api/ProjectsApiSlice';

export default function ProjectsWorkspace() {
  const { data: projects = [], isLoading } = useGetMyProjectsQuery();
  const [removeProject] = useRemoveProjectMutation();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeStatus, setActiveStatus] = useState('All');
  const [sortBy, setSortBy] = useState('newest');

  // Function to handle delete
  const handleDelete = async (id) => {
    const projectToDelete = projects.find(p => p.id === id);
    if (projectToDelete) {
      await removeProject(projectToDelete.id); // Backend expects ID for deletion now
    }
  };

  const filteredAndSorted = useMemo(() => {
    let result = projects.filter(p => {
      const matchesSearch = (p.title || "").toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = activeStatus === 'All' || p.projectStatus === activeStatus;
      return matchesSearch && matchesStatus;
    });

    if (sortBy === 'alpha') {
      result.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
    } else {
      // Logic for "Last Updated" (or by ID)
      result.sort((a, b) => b.id - a.id);
    }

    return result;
  }, [projects, searchQuery, activeStatus, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <header className="mb-10 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-extrabold text-[var(--text)] tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>Projects</h1>
          <p className="text-[var(--text-muted)] text-sm mt-1">
            Manage all your workspace projects
          </p>
        </div>
        {/* You can trigger your NewProjectModal here too */}
      </header>

      <ProjectFilters 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
        activeStatus={activeStatus}
        setActiveStatus={setActiveStatus}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {/* ✅ Pass handleDelete to ProjectTable */}
      <ProjectTable projects={filteredAndSorted} onDelete={handleDelete} />
    </div>
  );
}
