"use client";
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Upload, Plus, Trash2 } from 'lucide-react';
import { SUB_TAGS } from '../../utils/taxonomy';

export default function NewArticleModal({ isOpen, onClose, onAddArticle }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [coverPreview, setCoverPreview] = useState(null);
  const [coverBase64, setCoverBase64] = useState(null);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [technologies, setTechnologies] = useState([]);
  const [visibility, setVisibility] = useState('PUBLIC');

  const [relatedUrls, setRelatedUrls] = useState(['']);

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

  const addRelatedUrlRow = () => {
    setRelatedUrls(prev => [...prev, '']);
  };

  const updateRelatedUrl = (index, value) => {
    setRelatedUrls(prev => prev.map((u, i) => (i === index ? value : u)));
  };

  const removeRelatedUrl = (index) => {
    setRelatedUrls(prev => prev.filter((_, i) => i !== index));
  };

  const handleClose = () => {
    setCoverPreview(null);
    setCoverBase64(null);
    setTitle('');
    setContent('');
    setTechnologies([]);
    setVisibility('PUBLIC');
    setRelatedUrls(['']);
    setAdditionalMediaPreviews([]);
    setAdditionalMediaBase64([]);
    onClose();
  };

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) {
      alert('Please provide a title and content.');
      return;
    }

    onAddArticle({
      title,
      content,
      technologies,
      visibility,
      coverImageUrl: coverBase64 || coverPreview,
      relatedUrls: relatedUrls.map(u => u.trim()).filter(Boolean),
      additionalMediaUrls: additionalMediaBase64,
    });

    handleClose();
  };

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-[var(--text)]/20 backdrop-blur-sm">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-[var(--border)] overflow-hidden flex flex-col max-h-[90vh]">
        <div className="px-8 py-5 border-b border-[var(--border)] flex justify-between items-center bg-white">
          <div>
            <h3 className="text-lg font-extrabold text-[var(--text)]" style={{ fontFamily: 'var(--font-heading)' }}>Create Article</h3>
            <p className="text-xs text-[var(--text-muted)] font-medium">Share an article with the community</p>
          </div>
          <button onClick={handleClose} className="p-2 rounded-lg hover:bg-[var(--bg)] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-8 overflow-y-auto custom-scrollbar flex-1 space-y-8">
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
                    className="input-field w-full rounded-xl py-2.5 px-4 text-sm" placeholder="Write a strong title..." />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">Content <span className="text-[var(--accent)]">*</span></label>
                  <textarea rows="6" value={content} onChange={(e) => setContent(e.target.value)}
                    className="input-field w-full rounded-xl py-2.5 px-4 text-sm resize-none" placeholder="Write your article..." />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">Technologies</label>
                <div className="p-3 bg-[var(--bg)] rounded-xl border border-[var(--border)]">
                  <div className="flex flex-wrap gap-2">
                    {Object.values(SUB_TAGS).flat().slice(0, 24).map((t) => {
                      const active = technologies.includes(t);
                      return (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTechnologies(prev => active ? prev.filter(x => x !== t) : [...prev, t])}
                          className={`px-3 py-1 rounded-md text-[11px] font-semibold transition-colors ${
                            active ? 'bg-[var(--text)] text-white' : 'bg-white border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--primary)]'
                          }`}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-[10px] text-[var(--text-muted)] mt-2">Select the technologies/frameworks this article is about.</p>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">Visibility</label>
                <select value={visibility} onChange={(e) => setVisibility(e.target.value)} className="input-field w-full rounded-xl py-2.5 px-3 text-sm">
                  <option value="PUBLIC">Public</option>
                  <option value="PRIVATE">Private</option>
                  <option value="ORG_ONLY">Org only</option>
                </select>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider border-b border-[var(--border)] pb-2">2. Related URLs</h4>

            <div className="space-y-3">
              {relatedUrls.map((u, idx) => (
                <div key={idx} className="flex gap-2">
                  <input
                    type="url"
                    value={u}
                    onChange={(e) => updateRelatedUrl(idx, e.target.value)}
                    className="input-field w-full rounded-xl py-2.5 px-4 text-sm"
                    placeholder="https://..."
                  />
                  <button
                    type="button"
                    onClick={() => removeRelatedUrl(idx)}
                    className="px-3 rounded-xl border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
                    disabled={relatedUrls.length === 1}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={addRelatedUrlRow}
                className="px-4 py-2 rounded-xl border border-[var(--border)] text-xs font-semibold text-[var(--text)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors w-fit"
              >
                Add URL
              </button>
            </div>
          </section>

          <section className="space-y-4">
            <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider border-b border-[var(--border)] pb-2">3. Media</h4>
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

        <div className="px-8 py-4 bg-[var(--bg)] border-t border-[var(--border)] flex justify-end items-center gap-3">
          <button onClick={handleClose} className="px-5 py-2.5 text-sm font-medium text-[var(--text-muted)] hover:bg-white rounded-xl transition-colors">Cancel</button>
          <button onClick={handleSubmit} className="btn-primary px-7 py-2.5 rounded-xl text-sm font-semibold">Create Article</button>
        </div>
      </div>
    </div>,
    document.body
  );
}
