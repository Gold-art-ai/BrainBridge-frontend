"use client";
import React from 'react';
import { TrendingUp } from 'lucide-react';

const TRENDING = [
  { name: 'React', count: 34 },
  { name: 'Spring Boot', count: 28 },
  { name: 'TensorFlow', count: 22 },
  { name: 'Flutter', count: 19 },
  { name: 'Docker', count: 16 },
  { name: 'Next.js', count: 14 },
];

export default function TechTrends() {
  return (
    <div className="bg-white rounded-2xl border border-[var(--border)] p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp size={16} className="text-[var(--primary)]" />
        <h3 className="text-sm font-bold text-[var(--text)]" style={{ fontFamily: 'var(--font-heading)' }}>Trending Technologies</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {TRENDING.map(t => (
          <span key={t.name} className="badge bg-[var(--bg)] text-[var(--text)] border border-[var(--border)]">
            {t.name} <span className="text-[var(--text-muted)] ml-1">{t.count}</span>
          </span>
        ))}
      </div>
    </div>
  );
}