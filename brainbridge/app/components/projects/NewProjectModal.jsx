"use client";
import React, { useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FIELDS, MAIN_TAGS, SUB_TAGS, SDG_GOALS, NST2_GOALS } from '../../utils/taxonomy';
import { X, Upload, Plus, Trash2, CheckCircle2 } from 'lucide-react';

export default function NewProjectModal({ isOpen, onClose, onAddProject }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [coverPreview, setCoverPreview] = useState(null);
  const [coverBase64, setCoverBase64] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('DRAFT');
  const [repoUrl, setRepoUrl] = useState('');
  const [projectVisibility, setProjectVisibility] = useState('PUBLIC');
  const [field, setField] = useState('');
  const [selectedMainTags, setSelectedMainTags] = useState([]);
  const [selectedSubTags, setSelectedSubTags] = useState([]);
  const [selectedSdgGoals, setSelectedSdgGoals] = useState([]);
  const [selectedNst2Goals, setSelectedNst2Goals] = useState([]);
  const [additionalMediaPreviews, setAdditionalMediaPreviews] = useState([]);
  const [additionalMediaBase64, setAdditionalMediaBase64] = useState([]);

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
    Array.from(e.target.files).forEach(file => {
      setAdditionalMediaPreviews(prev => [...prev, URL.createObjectURL(file)]);
      const reader = new FileReader();
      reader.onloadend = () => setAdditionalMediaBase64(prev => [...prev, reader.result]);
      reader.readAsDataURL(file);
    });
  };

  const removeMedia = (i) => {
    setAdditionalMediaPreviews(prev => prev.filter((_, idx) => idx !== i));
    setAdditionalMediaBase64(prev => prev.filter((_, idx) => idx !== i));
  };

  const toggleItem = (item, list, setList) => {
    list.includes(item) ? setList(list.filter(i => i !== item)) : setList([...list, item]);
  };

  const toggleMainTag = (tag) => {
    if (selectedMainTags.includes(tag)) {
      setSelectedMainTags(prev => prev.filter(t => t !== tag));
      setSelectedSubTags(prev => prev.filter(sub => !(SUB_TAGS[tag] || []).includes(sub)));
    } else {
      setSelectedMainTags(prev => [...prev, tag]);
    }
  };

  const availableSubTags = useMemo(() => {
    let subs = [];
    selectedMainTags.forEach(main => { if (SUB_TAGS[main]) subs = [...subs, ...SUB_TAGS[main]]; });
    return subs;
  }, [selectedMainTags]);

  const handleClose = () => {
    setCoverPreview(null); setCoverBase64(null); setTitle(''); setDescription(''); setStatus('DRAFT');
    setRepoUrl(''); setProjectVisibility('PUBLIC'); setField(''); setSelectedMainTags([]);
    setSelectedSubTags([]); setSelectedSdgGoals([]); setSelectedNst2Goals([]);
    setAdditionalMediaPreviews([]); setAdditionalMediaBase64([]);
    onClose();
  };

  const handleSubmit = () => {
    if (!title.trim() || !description.trim() || !field) {
      alert("Please provide a title, description, and field.");
      return;
    }
    onAddProject({
      title, description, projectStatus: status, projectVisibility, repoUrl,
      coverImageUrl: coverBase64 || coverPreview, field,
      mainTags: selectedMainTags, subTags: selectedSubTags,
      sdgGoals: selectedSdgGoals, nst2Goals: selectedNst2Goals,
      additionalMediaUrls: additionalMediaBase64,
      createdAt: new Date().toISOString()
    });
    handleClose();
  };

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-[var(--text)]/20 backdrop-blur-sm">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-[var(--border)] overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-8 py-5 border-b border-[var(--border)] flex justify-between items-center bg-white">
          <div>
            <h3 className="text-lg font-extrabold text-[var(--text)]" style={{ fontFamily: 'var(--font-heading)' }}>Create Project</h3>
            <p className="text-xs text-[var(--text-muted)] font-medium">Define your project details and taxonomy</p>
          </div>
          <button onClick={handleClose} className="p-2 rounded-lg hover:bg-[var(--bg)] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-8 overflow-y-auto custom-scrollbar flex-1 space-y-8">
          
          {/* Section 1 */}
          <section className="space-y-5">
            <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider border-b border-[var(--border)] pb-2">1. Core Details</h4>
            <div className="flex gap-6">
              <div className="w-28 h-28 rounded-2xl border-2 border-dashed border-[var(--border)] bg-[var(--bg)] flex-shrink-0 overflow-hidden relative group cursor-pointer hover:border-[var(--primary)] transition-colors">
                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer z-10" accept="image/*" onChange={handleCoverChange} />
                {coverPreview ? (
                  <><img src={coverPreview} alt="Cover" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"><span className="text-white text-xs font-semibold">Change</span></div></>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-[var(--text-muted)]">
                    <Upload size={20} className="mb-1.5 group-hover:text-[var(--primary)] transition-colors" />
                    <span className="text-[9px] font-semibold uppercase">Cover</span>
                  </div>
                )}
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">Title <span className="text-[var(--accent)]">*</span></label>
                  <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                    className="input-field w-full rounded-xl py-2.5 px-4 text-sm" placeholder="AgriSmart IoT Sensor" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">Description <span className="text-[var(--accent)]">*</span></label>
                  <textarea rows="3" value={description} onChange={(e) => setDescription(e.target.value)}
                    className="input-field w-full rounded-xl py-2.5 px-4 text-sm resize-none" placeholder="Briefly describe the problem and your solution..." />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="col-span-2">
                <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">Field <span className="text-[var(--accent)]">*</span></label>
                <select value={field} onChange={(e) => setField(e.target.value)} className="input-field w-full rounded-xl py-2.5 px-4 text-sm">
                  <option value="" disabled>Select Sector...</option>
                  {FIELDS.map(f => <option key={f} value={f}>{f}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">Status</label>
                <select value={status} onChange={(e) => setStatus(e.target.value)} className="input-field w-full rounded-xl py-2.5 px-3 text-sm">
                  <option value="DRAFT">Draft</option><option value="ONGOING">Ongoing</option><option value="COMPLETED">Completed</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">Visibility</label>
                <select value={projectVisibility} onChange={(e) => setProjectVisibility(e.target.value)} className="input-field w-full rounded-xl py-2.5 px-3 text-sm">
                  <option value="PUBLIC">Public</option><option value="PRIVATE">Private</option>
                </select>
              </div>
            </div>
          </section>

          {/* Section 2: Tags */}
          <section className="space-y-4">
            <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider border-b border-[var(--border)] pb-2">2. Technology Stack</h4>
            <div>
              <p className="text-xs font-semibold text-[var(--text)] mb-2">Main Domains</p>
              <div className="flex flex-wrap gap-2">
                {MAIN_TAGS.map(tag => {
                  const active = selectedMainTags.includes(tag);
                  return (
                    <button key={tag} onClick={() => toggleMainTag(tag)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors flex items-center gap-1.5 ${
                        active ? 'bg-[var(--primary)] border-[var(--primary)] text-white' : 'bg-white border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--primary)]'
                      }`}>
                      {active && <CheckCircle2 size={12} />} {tag}
                    </button>
                  );
                })}
              </div>
            </div>
            {availableSubTags.length > 0 && (
              <div className="p-4 bg-[var(--bg)] rounded-xl border border-[var(--border)]">
                <p className="text-xs font-semibold text-[var(--primary)] mb-2">Sub-tags</p>
                <div className="flex flex-wrap gap-2">
                  {availableSubTags.map(sub => {
                    const active = selectedSubTags.includes(sub);
                    return (
                      <button key={sub} onClick={() => toggleItem(sub, selectedSubTags, setSelectedSubTags)}
                        className={`px-3 py-1 rounded-md text-[11px] font-semibold transition-colors ${
                          active ? 'bg-[var(--text)] text-white' : 'bg-white border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--primary)]'
                        }`}>{sub}</button>
                    );
                  })}
                </div>
              </div>
            )}
          </section>

          {/* Section 3: Goals */}
          <section className="space-y-4">
            <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider border-b border-[var(--border)] pb-2">3. Impact Alignment</h4>
            <div>
              <p className="text-xs font-semibold text-[var(--text)] mb-2">SDG Goals</p>
              <div className="flex flex-wrap gap-2">
                {SDG_GOALS.map(goal => {
                  const active = selectedSdgGoals.includes(goal);
                  return (
                    <button key={goal} onClick={() => toggleItem(goal, selectedSdgGoals, setSelectedSdgGoals)}
                      className={`px-3 py-1.5 rounded-lg text-[10px] font-semibold border transition-colors ${
                        active ? 'bg-[var(--secondary)] border-[var(--secondary)] text-white' : 'bg-white border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--secondary)]'
                      }`}>{goal}</button>
                  );
                })}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-[var(--text)] mb-2">NST2 Goals</p>
              <div className="flex flex-wrap gap-2">
                {NST2_GOALS.map(goal => {
                  const active = selectedNst2Goals.includes(goal);
                  return (
                    <button key={goal} onClick={() => toggleItem(goal, selectedNst2Goals, setSelectedNst2Goals)}
                      className={`px-3 py-1.5 rounded-lg text-[10px] font-semibold border transition-colors ${
                        active ? 'bg-[#FFA726] border-[#FFA726] text-white' : 'bg-white border-[var(--border)] text-[var(--text-muted)] hover:border-[#FFA726]'
                      }`}>{goal}</button>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Section 4: Repo & Media */}
          <section className="space-y-4">
            <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider border-b border-[var(--border)] pb-2">4. Repository & Media</h4>
            <div>
              <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">Repository URL</label>
              <input type="url" value={repoUrl} onChange={(e) => setRepoUrl(e.target.value)}
                className="input-field w-full rounded-xl py-2.5 px-4 text-sm" placeholder="https://github.com/user/repo" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">Additional Media</label>
              <div className="flex flex-wrap gap-3 items-start">
                <div className="relative w-20 h-20 rounded-xl border-2 border-dashed border-[var(--border)] flex items-center justify-center cursor-pointer hover:border-[var(--primary)] transition-colors group overflow-hidden">
                  <input type="file" multiple className="absolute inset-0 opacity-0 cursor-pointer z-10" accept="image/*,video/*" onChange={handleAdditionalMediaChange} />
                  <Plus size={20} className="text-[var(--text-muted)] group-hover:text-[var(--primary)]" />
                </div>
                {additionalMediaPreviews.map((src, i) => (
                  <div key={i} className="relative w-20 h-20 rounded-xl border border-[var(--border)] overflow-hidden group">
                    <img src={src} className="w-full h-full object-cover" alt="" />
                    <button onClick={() => removeMedia(i)} className="absolute top-1 right-1 bg-[var(--accent)] text-white p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                      <Trash2 size={10} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="px-8 py-4 bg-[var(--bg)] border-t border-[var(--border)] flex justify-end items-center gap-3">
          <button onClick={handleClose} className="px-5 py-2.5 text-sm font-medium text-[var(--text-muted)] hover:bg-white rounded-xl transition-colors">Cancel</button>
          <button onClick={handleSubmit} className="btn-primary px-7 py-2.5 rounded-xl text-sm font-semibold">Create Project</button>
        </div>
      </div>
    </div>,
    document.body
  );
}