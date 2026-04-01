"use client";
import React from 'react';
import { FIELDS } from '../../utils/taxonomy';

const FIELD_COLORS = {
  'Agriculture': '#4CAF50', 'Healthcare': '#FF5C8D', 'Education': '#FFA726', 'AI': '#6C63FF',
  'Mining': '#8D6E63', 'Tourism': '#29B6F6', 'Sustainability': '#66BB6A', 'Water': '#26C6DA',
  'Cybersecurity': '#EF5350', 'Finance': '#AB47BC', 'Food & Nutrition': '#FF7043',
  'Energy': '#FFD54F', 'Smart Cities': '#5C6BC0', 'Environment': '#81C784', 'Transport': '#42A5F5',
};

export default function CategoryFilter({ active, setActive }) {
  const categories = ['All', ...FIELDS];

  return (
    <div className="flex gap-2 overflow-x-auto no-scrollbar">
      {categories.map(cat => {
        const isActive = active === cat;
        const color = FIELD_COLORS[cat] || 'var(--primary)';
        return (
          <button key={cat} onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              isActive ? 'text-white' : 'bg-white text-[var(--text-muted)] border border-[var(--border)] hover:text-[var(--text)]'
            }`}
            style={isActive ? { background: color } : {}}>
            {cat}
          </button>
        );
      })}
    </div>
  );
}