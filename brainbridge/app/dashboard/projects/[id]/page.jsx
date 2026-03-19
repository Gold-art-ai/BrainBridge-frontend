"use client";
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import ProjectView from "../../../components/projects/ProjectView"; 
import { useGetProjectByIdQuery, useUpdateProjectMutation, useRemoveProjectMutation, useIncrementViewCountMutation } from '../../../redux/api/ProjectsApiSlice';
import { useGetProjectLogQuery } from '../../../redux/api/MessagesApiSlice';

export default function ProjectPage() {
  const { id } = useParams();
  const router = useRouter();

  const { data: project, isLoading } = useGetProjectByIdQuery(id, { skip: !id });
  const [updateProject] = useUpdateProjectMutation();
  const [removeProject] = useRemoveProjectMutation();
  const [incrementViewCount] = useIncrementViewCountMutation();
  const { data: colabLog } = useGetProjectLogQuery(id, { skip: !id, pollingInterval: 10000 });

  useEffect(() => {
    if (id) {
      incrementViewCount(id);
    }
  }, [id, incrementViewCount]);

  const handleUpdate = async (updatedProj) => {
    try {
      await updateProject(updatedProj).unwrap();
    } catch (e) {
      console.error("Failed to update project", e);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("DECOMMISSION PROJECT FROM BRAINBRIDGE?")) {
      try {
        await removeProject(id).unwrap();
        router.push('/dashboard/projects');
      } catch (e) {
        console.error("Failed to delete project", e);
      }
    }
  };

  if (!project) return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
       <p className="text-[10px] font-black uppercase tracking-widest text-[#08075C] animate-pulse">Initialising Module...</p>
    </div>
  );

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      {/* A. CORE VIEW (Hero, Description, Tech Stack) */}
      <ProjectView 
        project={project} 
        onUpdate={handleUpdate} 
        onDelete={handleDelete} 
      />

      {/* B. WORKSPACE EXTENSIONS (Collaboration & Enterprise) */}
      <div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Enterprise Interest Section */}
        <section className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
          <h3 className="text-[10px] font-black text-[#08075C] uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            Enterprise Requests
          </h3>
          <div className="space-y-4">
            <div className="p-5 bg-gray-50 rounded-3xl border border-gray-100">
              <div className="flex justify-between items-start mb-3">
                <p className="text-xs font-black text-[#08075C]">Corporate Node A</p>
                <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded text-[8px] font-bold uppercase">New</span>
              </div>
              <p className="text-[11px] text-gray-500 italic mb-4">"Requesting integration documentation for {project.title}."</p>
              <div className="flex gap-2">
                <button className="flex-1 bg-[#08075C] text-white py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-[#3A38DE] transition-all">Accept</button>
                <button className="flex-1 bg-white text-gray-400 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest border border-gray-100 hover:text-red-500 transition-all">Decline</button>
              </div>
            </div>
          </div>
        </section>

        {/* System Log / Comments Section */}
        <section className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col">
          <h3 className="text-[10px] font-black text-[#08075C] uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
            <span className="w-2 h-2 bg-[#3A38DE] rounded-full"></span>
            Collaboration Log
          </h3>
          <div className="flex-1 space-y-6 mb-6 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
            {(colabLog || []).length > 0 ? colabLog.map((log) => (
              <div key={log.id} className="flex gap-4">
                <div className="w-8 h-8 rounded-xl bg-blue-50 flex-shrink-0 flex items-center justify-center text-[10px] font-black text-[#3A38DE] border border-blue-100 uppercase">
                  {log.senderUsername?.[0] || 'S'}
                </div>
                <div>
                  <p className="text-[10px] font-black text-[#08075C]">{log.senderUsername} <span className="font-normal text-gray-400 ml-2">Logged: {new Date(log.createdAt).toLocaleTimeString()}</span></p>
                  <p className="text-xs text-gray-500 mt-1">{log.content}</p>
                </div>
              </div>
            )) : (
              <div className="flex flex-col items-center justify-center h-full text-gray-300">
                <p className="text-[9px] font-black uppercase tracking-widest">No active logs yet</p>
              </div>
            )}
          </div>
          
          <div className="relative mt-auto">
            <input 
              type="text" 
              placeholder="Add log entry..." 
              className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-3 text-xs outline-none focus:ring-2 focus:ring-[#3A38DE]/10 transition-all" 
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#3A38DE] hover:scale-110 transition-transform">
              <i className="fa-solid fa-paper-plane text-sm"></i>
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}