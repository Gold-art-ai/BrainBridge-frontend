"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import {
  ExternalLink,
  Trash2,
  AlertCircle,
  X,
  Check
} from 'lucide-react';

export default function ArticleTable({ articles, onDelete }) {
  const [deletingId, setDeletingId] = useState(null);

  const handleDeleteClick = (id) => {
    setDeletingId(id);
  };

  const cancelDelete = () => {
    setDeletingId(null);
  };

  const confirmDelete = (id) => {
    onDelete(id);
    setDeletingId(null);
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-50 bg-[#F8F9FF]/50">
            <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Article</th>
            <th className="px-6 py-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Field</th>
            <th className="px-6 py-5 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Visibility</th>
            <th className="px-8 py-5 text-right text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {articles.map((a) => {
            const isConfirming = deletingId === a.id;

            return (
              <tr
                key={a.id}
                className={`transition-all duration-300 ${
                  isConfirming ? 'bg-red-50/50' : 'hover:bg-[var(--primary)]/5 group'
                }`}
              >
                <td className="px-8 py-6">
                  <p className="text-sm font-bold text-[var(--text)]" style={{ fontFamily: 'var(--font-heading)' }}>{a.title}</p>
                  <p className="text-[10px] text-gray-400 font-medium uppercase tracking-tight mt-0.5 line-clamp-1">
                    {(a.content || '').slice(0, 80)}{(a.content || '').length > 80 ? '...' : ''}
                  </p>
                </td>

                <td className="px-6 py-6">
                  <span className="text-[10px] text-gray-500 font-black uppercase tracking-wider">
                    {a.field || '—'}
                  </span>
                </td>

                <td className="px-6 py-6">
                  <span className="px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-wider border bg-white text-gray-500 border-gray-200">
                    {a.visibility || 'PUBLIC'}
                  </span>
                </td>

                <td className="px-8 py-6 text-right">
                  {!isConfirming ? (
                    <div className="flex items-center justify-end gap-4">
                      <Link
                        href={`/articles/${a.id}`}
                        className="flex items-center gap-1.5 text-[var(--primary)] hover:text-[var(--primary-dark)] text-[10px] font-black uppercase transition-colors"
                      >
                        Open <ExternalLink size={12} />
                      </Link>
                      <button
                        onClick={() => handleDeleteClick(a.id)}
                        className="flex items-center gap-1.5 text-gray-300 hover:text-red-500 text-[10px] font-black uppercase transition-all"
                      >
                        Archive <Trash2 size={12} />
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-end gap-2 animate-in fade-in slide-in-from-right-2 duration-300">
                      <span className="text-[9px] font-black text-red-500 uppercase mr-2 flex items-center gap-1">
                        <AlertCircle size={10} /> Confirm?
                      </span>
                      <button
                        onClick={() => confirmDelete(a.id)}
                        className="p-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow-sm shadow-red-200"
                      >
                        <Check size={14} strokeWidth={3} />
                      </button>
                      <button
                        onClick={cancelDelete}
                        className="p-1.5 bg-white border border-gray-200 text-gray-400 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <X size={14} strokeWidth={3} />
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
