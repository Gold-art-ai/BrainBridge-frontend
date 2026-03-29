"use client";
import React, { useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FIELDS, MAIN_TAGS, SUB_TAGS, SDG_GOALS, NST2_GOALS } from '../../utils/taxonomy';
import { X, Upload, Plus, Trash2, CheckCircle2 } from 'lucide-react';

export default function NewProjectModal({ isOpen, onClose, onAddProject }) {
  // SSR Mounting Check for Portal
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // --- Form State ---
  const [coverPreview, setCoverPreview] = useState(null);
  const [coverBase64, setCoverBase64] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('DRAFT');
  const [repoUrl, setRepoUrl] = useState('');
  const [projectVisibility, setProjectVisibility] = useState('PUBLIC');

  // --- Taxonomy State ---
  const [field, setField] = useState('');
  const [selectedMainTags, setSelectedMainTags] = useState([]);
  const [selectedSubTags, setSelectedSubTags] = useState([]);
  const [selectedSdgGoals, setSelectedSdgGoals] = useState([]);
  const [selectedNst2Goals, setSelectedNst2Goals] = useState([]);

  // --- Additional Media State ---
  const [additionalMediaPreviews, setAdditionalMediaPreviews] = useState([]);
  const [additionalMediaBase64, setAdditionalMediaBase64] = useState([]);

  // --- Handlers ---
  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverPreview(URL.createObjectURL(file));
      const reader = new FileReader();
      reader.onloadend = () => setCoverBase64(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleAdditionalMediaChange = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const previewUrl = URL.createObjectURL(file);
      setAdditionalMediaPreviews(prev => [...prev, previewUrl]);
      
      const reader = new FileReader();
      reader.onloadend = () => setAdditionalMediaBase64(prev => [...prev, reader.result]);
      reader.readAsDataURL(file);
    });
  };

  const removeAdditionalMedia = (index) => {
    setAdditionalMediaPreviews(prev => prev.filter((_, i) => i !== index));
    setAdditionalMediaBase64(prev => prev.filter((_, i) => i !== index));
  };

  // Toggle helpers
  const toggleItem = (item, list, setList) => {
    if (list.includes(item)) setList(list.filter(i => i !== item));
    else setList([...list, item]);
  };

  // When a main tag is removed, also remove any associated sub tags to keep state clean
  const toggleMainTag = (tag) => {
    if (selectedMainTags.includes(tag)) {
      setSelectedMainTags(prev => prev.filter(t => t !== tag));
      // Remove orphaned sub tags
      const orphanedSubs = SUB_TAGS[tag] || [];
      setSelectedSubTags(prev => prev.filter(sub => !orphanedSubs.includes(sub)));
    } else {
      setSelectedMainTags(prev => [...prev, tag]);
    }
  };

  // Available Sub Tags based on Selected Main Tags
  const availableSubTags = useMemo(() => {
    let subs = [];
    selectedMainTags.forEach(main => {
      if (SUB_TAGS[main]) subs = [...subs, ...SUB_TAGS[main]];
    });
    return subs;
  }, [selectedMainTags]);

  const handleClose = () => {
    // Reset Everything
    setCoverPreview(null); setCoverBase64(null); setTitle(''); setDescription(''); setStatus('DRAFT');
    setRepoUrl(''); setProjectVisibility('PUBLIC'); setField(''); setSelectedMainTags([]);
    setSelectedSubTags([]); setSelectedSdgGoals([]); setSelectedNst2Goals([]);
    setAdditionalMediaPreviews([]); setAdditionalMediaBase64([]);
    onClose();
  };

  const handleSubmit = () => {
    if (!title.trim() || !description.trim() || !field) {
      alert("Please provide a title, description, and select a main Field.");
      return;
    }

    onAddProject({
      title, 
      description, 
      projectStatus: status, 
      projectVisibility, 
      repoUrl,
      coverImageUrl: coverBase64 || coverPreview,
      field,
      mainTags: selectedMainTags,
      subTags: selectedSubTags,
      sdgGoals: selectedSdgGoals,
      nst2Goals: selectedNst2Goals,
      additionalMediaUrls: additionalMediaBase64,
      createdAt: new Date().toISOString()
    });
    handleClose();
  };

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-[#08075C]/20 backdrop-blur-sm">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-8 py-5 border-b border-gray-100 flex justify-between items-center bg-white z-10">
          <div>
            <h3 className="text-lg font-black text-[#08075C]">Create Project</h3>
            <p className="text-xs text-gray-500 font-medium">Define your innovation framework and taxonomy</p>
          </div>
          <button onClick={handleClose} className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-red-500 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="p-8 overflow-y-auto custom-scrollbar flex-1 space-y-10">
          
          {/* Section 1: Basic Information */}
          <section className="space-y-6">
            <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest border-b pb-2">1. Core Details</h4>
            
            <div className="flex gap-6">
              {/* Cover Image Upload */}
              <div className="w-32 h-32 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 flex-shrink-0 overflow-hidden relative group cursor-pointer hover:border-[#3A38DE] transition-colors">
                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer z-10" accept="image/*" onChange={handleCoverChange} />
                {coverPreview ? (
                  <>
                    <img src={coverPreview} alt="Cover" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center pointer-events-none transition-opacity">
                      <span className="text-white text-xs font-bold">Change</span>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                    <Upload size={24} className="mb-2 group-hover:text-[#3A38DE] transition-colors" />
                    <span className="text-[9px] font-bold uppercase">Cover Image</span>
                  </div>
                )}
              </div>

              {/* Title & Desc */}
              <div className="flex-1 space-y-4">
                <div>
                  <label className="block text-[11px] font-bold text-[#08075C] mb-1.5">Project Title <span className="text-red-500">*</span></label>
                  <input 
                    type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-4 text-sm font-semibold outline-none focus:border-[#3A38DE] focus:ring-2 focus:ring-[#3A38DE]/10 transition-all text-blue-700" 
                    placeholder="AgriSmart IoT Sensor"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#08075C] mb-1.5">Description <span className="text-red-500">*</span></label>
                  <textarea 
                    rows="3" value={description} onChange={(e) => setDescription(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-4 text-sm text-blue-700 outline-none focus:border-[#3A38DE] focus:ring-2 focus:ring-[#3A38DE]/10 transition-all resize-none"
                    placeholder="Briefly describe the problem and your solution..."
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-[11px] font-bold text-[#08075C] mb-2">Primary Field <span className="text-red-500">*</span></label>
                <select 
                  value={field} onChange={(e) => setField(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-sm text-blue-700 font-semibold outline-none focus:border-[#3A38DE]"
                >
                  <option value="" disabled>Select Sector...</option>
                  {FIELDS.map(f => <option key={f} value={f}>{f}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div>
                  <label className="block text-[11px] font-bold text-[#08075C] mb-2">Status</label>
                  <select 
                    value={status} onChange={(e) => setStatus(e.target.value)}
                    className="w-full bg-white border border-gray-200 rounded-xl py-3 px-3 text-xs text-blue-700 font-semibold outline-none"
                  >
                    <option value="DRAFT">Draft</option>
                    <option value="ONGOING">Ongoing</option>
                    <option value="COMPLETED">Completed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#08075C] mb-2">Visibility</label>
                  <select 
                    value={projectVisibility} onChange={(e) => setProjectVisibility(e.target.value)}
                    className="w-full bg-white border border-gray-200 rounded-xl py-3 px-3 text-xs text-blue-700 font-semibold outline-none"
                  >
                    <option value="PUBLIC">Public</option>
                    <option value="PRIVATE">Private</option>
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Tech Stack */}
          <section className="space-y-4">
            <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest border-b pb-2">2. Technology Stack</h4>
            
            {/* Main Tags */}
            <div>
              <p className="text-[11px] font-bold text-[#08075C] mb-2">Main Domains</p>
              <div className="flex flex-wrap gap-2">
                {MAIN_TAGS.map(tag => {
                  const isActive = selectedMainTags.includes(tag);
                  return (
                    <button
                      key={tag}
                      onClick={() => toggleMainTag(tag)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all flex items-center gap-1.5 ${
                        isActive ? 'bg-[#3A38DE] border-[#3A38DE] text-white' : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {isActive && <CheckCircle2 size={12} />} {tag}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sub Tags (Only render if Main Tags are selected and have subs available) */}
            {availableSubTags.length > 0 && (
              <div className="p-4 bg-[#F8F9FB] rounded-2xl border border-gray-100 animate-in slide-in-from-top-2">
                <p className="text-[11px] font-bold text-[#3A38DE] mb-3">Specific Technologies (Sub-tags)</p>
                <div className="flex flex-wrap gap-2">
                  {availableSubTags.map(sub => {
                    const isActive = selectedSubTags.includes(sub);
                    return (
                      <button
                        key={sub}
                        onClick={() => toggleItem(sub, selectedSubTags, setSelectedSubTags)}
                        className={`px-3 py-1 rounded-md text-[11px] font-bold transition-all ${
                          isActive ? 'bg-[#08075C] text-white shadow-sm' : 'bg-white border border-gray-200 text-gray-500 hover:border-[#3A38DE]'
                        }`}
                      >
                        {sub}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </section>

          {/* Section 3: Goals & Impact */}
          <section className="space-y-5">
            <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest border-b pb-2">3. Impact & Alignment</h4>
            
            <div>
               <p className="text-[11px] font-bold text-[#08075C] mb-2">SDG Goals</p>
               <div className="flex flex-wrap gap-2">
                {SDG_GOALS.map(goal => {
                  const isActive = selectedSdgGoals.includes(goal);
                  return (
                    <button
                      key={goal}
                      onClick={() => toggleItem(goal, selectedSdgGoals, setSelectedSdgGoals)}
                      className={`px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-wide font-black border transition-all ${
                        isActive ? 'bg-green-600 border-green-600 text-white' : 'bg-gray-50 border-gray-200 text-gray-500 hover:border-green-600 hover:text-green-700'
                      }`}
                    >
                      {goal}
                    </button>
                  );
                })}
               </div>
            </div>

            <div>
               <p className="text-[11px] font-bold text-[#08075C] mb-2">NST2 Goals</p>
               <div className="flex flex-wrap gap-2">
                {NST2_GOALS.map(goal => {
                  const isActive = selectedNst2Goals.includes(goal);
                  return (
                    <button
                      key={goal}
                      onClick={() => toggleItem(goal, selectedNst2Goals, setSelectedNst2Goals)}
                      className={`px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-wide font-black border transition-all ${
                        isActive ? 'bg-yellow-500 border-yellow-500 text-black' : 'bg-gray-50 border-gray-200 text-gray-500 hover:border-yellow-500 hover:text-yellow-700'
                      }`}
                    >
                      {goal}
                    </button>
                  );
                })}
               </div>
            </div>
          </section>

          {/* Section 4: Repository & Media */}
          <section className="space-y-4">
            <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest border-b pb-2">4. Repository & Media</h4>

             <div>
                <label className="block text-[11px] font-bold text-[#08075C] mb-1.5">Source Repository URL</label>
                <input 
                  type="url" value={repoUrl} onChange={(e) => setRepoUrl(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-4 text-sm outline-none focus:border-[#3A38DE] transition-all" 
                  placeholder="https://github.com/user/repo"
                />
             </div>

             <div>
                <label className="block text-[11px] font-bold text-[#08075C] mb-1.5">Additional Media Showcase</label>
                <div className="flex flex-wrap gap-4 items-start pb-4">
                  
                  {/* Media Upload Button */}
                  <div className="relative w-24 h-24 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-50 hover:border-[#3A38DE] transition-all group overflow-hidden">
                    <input type="file" multiple className="absolute inset-0 opacity-0 cursor-pointer z-10" accept="image/*,video/*" onChange={handleAdditionalMediaChange} />
                    <Plus size={24} className="text-gray-400 group-hover:text-[#3A38DE] transition-colors" />
                  </div>

                  {/* Media Previews */}
                  {additionalMediaPreviews.map((src, i) => (
                    <div key={i} className="relative w-24 h-24 rounded-xl border border-gray-200 overflow-hidden group">
                      <img src={src} className="w-full h-full object-cover" alt="Preview" />
                      <button 
                         onClick={() => removeAdditionalMedia(i)}
                         className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                         <Trash2 size={12} />
                      </button>
                    </div>
                  ))}
                </div>
             </div>
          </section>

        </div>

        {/* Footer Actions */}
        <div className="px-8 py-5 bg-gray-50 border-t border-gray-100 flex justify-end items-center gap-4 z-10">
          <button onClick={handleClose} className="px-5 py-2.5 text-xs font-bold text-gray-500 hover:bg-gray-200 rounded-xl transition-colors uppercase tracking-wider">
            Cancel
          </button>
          <button 
            onClick={handleSubmit}
            className="flex items-center gap-2 bg-[#3A38DE] text-white px-8 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Create Project
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}