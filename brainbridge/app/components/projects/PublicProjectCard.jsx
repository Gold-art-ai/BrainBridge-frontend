"use client";
import React from 'react';
import Link from 'next/link';
import { Eye, ArrowUpRight, Image as ImageIcon } from 'lucide-react';

const FIELD_COLORS = {
  'Agriculture': '#4CAF50', 'Healthcare': '#FF5C8D', 'Education': '#FFA726', 'AI': '#6C63FF',
  'Mining': '#8D6E63', 'Tourism': '#29B6F6', 'Sustainability': '#66BB6A', 'Water': '#26C6DA',
  'Cybersecurity': '#EF5350', 'Finance': '#AB47BC', 'Food & Nutrition': '#FF7043',
  'Energy': '#FFD54F', 'Smart Cities': '#5C6BC0', 'Environment': '#81C784', 'Transport': '#42A5F5',
};

export default function PublicProjectCard({ project }) {
  const fieldColor = FIELD_COLORS[project.field] || 'var(--primary)';

  return (
    <div className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden hover:shadow-lg hover:shadow-gray-100 transition-all group">
      <div className="relative h-48 bg-[var(--bg)] overflow-hidden">
        {project.coverImageUrl ? (
          <img src={project.coverImageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[var(--text-muted)]">
            <ImageIcon size={32} strokeWidth={1.5} />
          </div>
        )}
        {project.field && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold backdrop-blur-md bg-white/80" style={{ color: fieldColor }}>
            <span className="w-1.5 h-1.5 rounded-full inline-block mr-1.5" style={{ background: fieldColor }}></span>
            {project.field}
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-base font-bold text-[var(--text)] mb-1.5 group-hover:text-[var(--primary)] transition-colors line-clamp-1" style={{ fontFamily: 'var(--font-heading)' }}>
          {project.title}
        </h3>
        <p className="text-xs text-[var(--text-muted)] leading-relaxed line-clamp-2 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {(project.mainTags || []).slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] font-semibold text-[var(--primary)] bg-[var(--primary)]/6 px-2 py-0.5 rounded-md">{tag}</span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-[var(--border)]">
          <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
            <Eye size={14} /> {project.viewCount || 0} views
          </div>
          <span className="text-xs font-semibold text-[var(--primary)] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            View <ArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </div>
  );
}