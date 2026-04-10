"use client";
import React from 'react';
import Link from 'next/link';
import { MoreVertical, ArrowUpRight, Users, Image as ImageIcon } from "lucide-react";

const FIELD_COLORS = {
  'Agriculture': '#4CAF50', 'Healthcare': '#FF5C8D', 'Education': '#FFA726', 'AI': '#6C63FF',
  'Mining': '#8D6E63', 'Tourism': '#29B6F6', 'Sustainability': '#66BB6A', 'Water': '#26C6DA',
  'Cybersecurity': '#EF5350', 'Finance': '#AB47BC', 'Food & Nutrition': '#FF7043',
  'Energy': '#FFD54F', 'Smart Cities': '#5C6BC0', 'Environment': '#81C784', 'Transport': '#42A5F5',
};

export default function ProjectCard({ project }) {
  const viewPath = `/dashboard/projects/${project.id}`;
  const fieldColor = FIELD_COLORS[project.field] || 'var(--primary)';

  return (
    <div className="bg-white rounded-2xl border border-[var(--border)] hover:border-[var(--primary)]/20 transition-all group flex flex-col overflow-hidden h-full hover:-translate-y-0.5" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }} onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(108,99,255,0.25)'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)'; }}>
      
      {/* Cover */}
      <div className="relative h-40 w-full bg-[var(--bg)] overflow-hidden">
        {project.coverImageUrl ? (
          <img src={project.coverImageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out" />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-[var(--primary)]/20">
            <ImageIcon size={28} strokeWidth={1.5} />
            <span className="text-[10px] font-semibold mt-2 text-[var(--text-muted)]">No Preview</span>
          </div>
        )}

        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/60 text-[10px] font-semibold text-[var(--text)]">
            <span className={`w-1.5 h-1.5 rounded-full ${
              project.projectStatus === 'COMPLETED' ? 'bg-[var(--secondary)]' : project.projectStatus === 'ONGOING' ? 'bg-[var(--primary)]' : 'bg-[var(--text-muted)]'
            }`}></span>
            {project.projectStatus}
          </span>
        </div>

        {project.field && (
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold" style={{ background: fieldColor + '18', color: fieldColor }}>
              {project.field}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <Link href={viewPath}>
            <h4 className="text-sm font-bold text-[var(--text)] leading-tight truncate group-hover:text-[var(--primary)] transition-colors cursor-pointer" style={{ fontFamily: 'var(--font-heading)' }}>
              {project.title}
            </h4>
          </Link>
          <button className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors p-1 -mr-1 opacity-0 group-hover:opacity-100">
            <MoreVertical size={16} />
          </button>
        </div>
        
        <p className="text-[var(--text-muted)] text-xs leading-relaxed line-clamp-2 mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {(project.mainTags || []).slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] font-semibold text-[var(--primary)] bg-[var(--primary)]/6 px-2 py-0.5 rounded-md">
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-3 border-t border-[var(--border)] flex justify-between items-center">
          <div className="flex items-center gap-1.5">
            <Users size={12} className="text-[var(--text-muted)]" />
            <span className="text-[10px] text-[var(--text-muted)] font-medium">Collaborators</span>
          </div>
          
          <Link href={viewPath}
            className="group/btn flex items-center gap-1 text-[10px] font-semibold text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white px-3 py-1.5 rounded-lg transition-all uppercase tracking-wide">
            View <ArrowUpRight size={12} />
          </Link>
        </div>
      </div>
    </div>
  );
}