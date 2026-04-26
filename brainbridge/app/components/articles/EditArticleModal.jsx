"use client";
import React, { useEffect, useState } from 'react';
import { FIELDS } from '../../utils/taxonomy';

export default function EditArticleModal({ isOpen, onClose, onUpdateArticle, article }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [field, setField] = useState('');
  const [visibility, setVisibility] = useState('PUBLIC');
  const [coverImageUrl, setCoverImageUrl] = useState('');
  const [relatedUrlsText, setRelatedUrlsText] = useState('');

  useEffect(() => {
    if (article && isOpen) {
      setTitle(article.title || '');
      setContent(article.content || '');
      setField(article.field || '');
      setVisibility(article.visibility || 'PUBLIC');
      setCoverImageUrl(article.coverImageUrl || '');
      setRelatedUrlsText((article.relatedUrls || []).join('\n'));
    }
  }, [article, isOpen]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const relatedUrls = (relatedUrlsText || '')
      .split('\n')
      .map(s => s.trim())
      .filter(Boolean);

    onUpdateArticle({
      ...article,
      title,
      content,
      field,
      visibility,
      coverImageUrl,
      relatedUrls,
      additionalMediaUrls: article?.additionalMediaUrls || [],
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-[var(--primary)]/25 backdrop-blur-md">
      <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in zoom-in duration-200">
        <div className="p-10 space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm font-black text-[#08075C] uppercase tracking-widest">Update Article</h3>
              <p className="text-[10px] text-gray-400 font-medium italic">Modifying {article?.title}</p>
            </div>
            <button onClick={onClose} className="text-gray-300 hover:text-red-500 transition-colors">
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 rounded-lg bg-gray-200 overflow-hidden flex-shrink-0 border border-gray-200">
                {coverImageUrl ? (
                  <img src={coverImageUrl} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <i className="fa-solid fa-image text-xs"></i>
                  </div>
                )}
              </div>
              <div className="flex-1">
                <label className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Cover</label>
                <label className="text-[10px] font-bold text-[var(--primary)] cursor-pointer hover:underline">
                  Change Image
                  <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                </label>
              </div>
            </div>

            <div>
              <label className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Title</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 text-xs font-bold text-[var(--text)] outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
              />
            </div>

            <div>
              <label className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Content</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 text-xs font-medium text-[var(--text)] outline-none h-32 resize-none leading-relaxed"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Visibility</label>
                <select
                  value={visibility}
                  onChange={(e) => setVisibility(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 text-xs font-bold text-[var(--text)] outline-none cursor-pointer"
                >
                  <option value="PUBLIC">Public</option>
                  <option value="ORG_ONLY">Org only</option>
                  <option value="PRIVATE">Private</option>
                </select>
              </div>
              <div>
                <label className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Field</label>
                <select
                  value={field}
                  onChange={(e) => setField(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 text-xs font-bold text-[var(--text)] outline-none cursor-pointer"
                >
                  <option value="">Select Sector...</option>
                  {FIELDS.map(f => <option key={f} value={f}>{f}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Related URLs (one per line)</label>
              <textarea
                value={relatedUrlsText}
                onChange={(e) => setRelatedUrlsText(e.target.value)}
                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 text-xs font-medium text-[var(--text)] outline-none h-24 resize-none leading-relaxed"
                placeholder="https://..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl transition-all mt-4"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
