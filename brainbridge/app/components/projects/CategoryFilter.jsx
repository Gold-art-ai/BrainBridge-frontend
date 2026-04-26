"use client";
import React from 'react';
import { SUB_TAGS } from '../../utils/taxonomy';

export default function CategoryFilter({ active, setActive }) {
  const categories = ['All', ...Object.values(SUB_TAGS).flat().slice(0, 24)];

  return (
    <div className="flex gap-2 overflow-x-auto no-scrollbar">
      {categories.map(cat => {
        const isActive = active === cat;
        return (
          <button key={cat} onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              isActive ? 'text-white' : 'bg-white text-[var(--text-muted)] border border-[var(--border)] hover:text-[var(--text)]'
            }`}
            style={isActive ? { background: 'var(--primary)' } : {}}>
            {cat}
          </button>
        );
      })}

    </div>
  );
}