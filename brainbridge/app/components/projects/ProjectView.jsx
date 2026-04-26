"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  PenSquare, 
  Github, 
  Trash2, 
  Quote, 
  Code2, 
  Crown, 
  Calendar, 
  Binary,
  ExternalLink,
  Eye
} from 'lucide-react';
import EditProjectModal from './EditProjectModal';

export default function ProjectView({ project, onUpdate, onDelete, isOwner }) {
  const router = useRouter();
  const [isEditOpen, setIsEditOpen] = useState(false);

  if (!project) return null;

  const getStatusTheme = (status) => {
    const map = {
      'DRAFT': { bg: 'bg-amber-50', text: 'text-amber-600', dot: 'bg-amber-500', border: 'border-amber-100' },
      'ACTIVE': { bg: 'bg-blue-50/50', text: 'text-blue-700', dot: 'bg-blue-500', border: 'border-blue-100/50' },
      'ONGOING': { bg: 'bg-blue-50/50', text: 'text-blue-700', dot: 'bg-blue-500', border: 'border-blue-100/50' },
      'COMPLETED': { bg: 'bg-green-50/50', text: 'text-green-700', dot: 'bg-green-500', border: 'border-green-100/50' },
      'ARCHIVED': { bg: 'bg-gray-50/50', text: 'text-gray-600', dot: 'bg-gray-400', border: 'border-gray-100/50' },
      'DELETED': { bg: 'bg-red-50/50', text: 'text-red-700', dot: 'bg-red-500', border: 'border-red-100/50' }
    };
    return map[status] || { bg: 'bg-gray-50', text: 'text-gray-600', dot: 'bg-gray-400', border: 'border-gray-100' };
  };

  const theme = getStatusTheme(project.projectStatus || project.status);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-[3rem] border border-gray-100 shadow-2xl shadow-gray-200/50 overflow-hidden anim-fade-in-up">
        {/* Integrated Header */}
        <div className="relative p-10 pb-0">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="space-y-4 flex-1">
              <div className="flex items-center gap-3">
                <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${theme.bg} ${theme.text} ${theme.border}`}>
                  {project.field || project.category || "General"}
                </span>
                <span className="text-gray-300 text-[10px] font-black uppercase tracking-widest">
                  ID: {project.id?.toString().padStart(4, '0')}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-[var(--text)] tracking-tight leading-tight">
                {project.title || project.name}
              </h1>
              <div className="flex items-center gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${theme.dot}`} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{project.projectStatus || project.status || 'Active'}</span>
                </div>
                <div className="w-1 h-1 bg-gray-200 rounded-full" />
                <div className="flex items-center gap-2">
                  <Eye size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{project.viewCount || 0} Views</span>
                </div>
              </div>
            </div>

            {isOwner && (
              <button 
                onClick={() => setIsEditOpen(true)}
                className="bg-[var(--primary)]/5 text-[var(--primary)] px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[var(--primary)] hover:text-white transition-all flex items-center gap-2"
              >
                <PenSquare size={16} />
                Edit Node
              </button>
            )}
          </div>
        </div>

        {/* Media Preview if exists */}
        {project.coverImageUrl && (
          <div className="px-10 mt-10">
            <div className="aspect-[21/9] w-full rounded-[2.5rem] overflow-hidden shadow-inner border border-gray-100">
              <img src={project.coverImageUrl} className="w-full h-full object-cover" alt={project.title} />
            </div>
          </div>
        )}

        <div className="p-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-6">
              <h4 className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] flex items-center gap-2">
                <div className="w-8 h-[1px] bg-gray-100" /> Executive Summary
              </h4>
              <p className="text-xl text-[var(--text)] font-semibold leading-relaxed border-l-4 border-[var(--primary)] pl-8 py-2">
                {project.description}
              </p>
            </div>

            {/* Tech Matrix */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] flex items-center gap-2">
                <Binary size={14} className="text-gray-200" /> Technology Matrix
              </h4>
              <div className="flex flex-wrap gap-2">
                {(project.mainTags || project.tech || []).map(skill => (
                  <span key={skill} className="bg-gray-50 text-[var(--text)] border border-gray-100 px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:border-[var(--primary)] hover:bg-white transition-all shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Source Access */}
            {project.repoUrl && (
              <a 
                href={project.repoUrl} 
                target="_blank" 
                className="inline-flex items-center gap-3 bg-[var(--text)] text-white px-8 py-5 rounded-[2rem] text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[var(--primary)] transition-all group"
              >
                <Github size={20} className="group-hover:rotate-[360deg] transition-transform duration-500" />
                Access Repository Data
              </a>
            )}

            {/* Admin Actions - ONLY OWNER */}
            {isOwner && (
              <div className="pt-10 border-t border-gray-50">
                <div className="bg-red-50/30 p-8 rounded-[2.5rem] border border-red-50 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500">
                      <Trash2 size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-red-900 uppercase tracking-widest mb-1">Critical Action</h4>
                      <p className="text-[10px] text-red-400 font-bold uppercase tracking-widest">Terminate Project Node</p>
                    </div>
                  </div>
                  <button 
                    onClick={onDelete}
                    className="bg-white border border-red-100 text-red-500 hover:bg-red-600 hover:text-white px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-sm"
                  >
                    Execute
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4 space-y-8">
             <div className="bg-gray-50/50 p-8 rounded-[2.5rem] border border-gray-100/50 space-y-8">
                <div>
                   <h4 className="text-[9px] font-black text-gray-300 uppercase tracking-[0.2em] mb-4">Project Architect</h4>
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-xs font-black uppercase text-[var(--primary)]">
                        {project.ownerName?.[0] || project.creator?.[0] || 'A'}
                      </div>
                      <div>
                        <p className="text-xs font-black text-[var(--text)]">@{project.ownerName || project.creator}</p>
                        <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Verified Leader</p>
                      </div>
                   </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between py-1">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar size={14} />
                      <span className="text-[9px] font-black uppercase tracking-widest">Deployment</span>
                    </div>
                    <span className="text-[10px] font-black text-[var(--text)]">
                       {project.createdAt ? new Date(project.createdAt).toLocaleDateString() : 'FEB 2026'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <div className="flex items-center gap-2 text-gray-400">
                      <ExternalLink size={14} />
                      <span className="text-[9px] font-black uppercase tracking-widest">Protocol</span>
                    </div>
                    <span className="text-[10px] font-black text-[var(--primary)] uppercase">
                       {project.projectVisibility || 'PUBLIC'}
                    </span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <EditProjectModal 
        isOpen={isEditOpen} 
        onClose={() => setIsEditOpen(false)} 
        onUpdateProject={onUpdate} 
        project={project}
      />
    </div>
  );
}
