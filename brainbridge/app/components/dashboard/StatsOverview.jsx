import React from 'react';
import { Layers, Eye, TrendingUp, Zap } from 'lucide-react';

const STAT_CARDS = [
  { label: 'Total Projects', icon: <Layers size={20} />, color: 'var(--primary)', bgKey: 'primary' },
  { label: 'Total Views', icon: <Eye size={20} />, color: 'var(--secondary)', bgKey: 'secondary' },
  { label: 'Enterprise Requests', icon: <TrendingUp size={20} />, color: 'var(--accent)', bgKey: 'accent' },
  { label: 'Active Projects', icon: <Zap size={20} />, color: '#FFA726', bgKey: 'amber' },
];

export default function StatsOverview({ projects = [] }) {
  const totalViews = projects.reduce((sum, p) => sum + (p.viewCount || 0), 0);
  const totalRequests = projects.reduce((sum, p) => sum + (p.enterpriseRequests || 0), 0);
  const activeCount = projects.filter(p => p.projectStatus === 'ONGOING').length;

  const values = [projects.length, totalViews, totalRequests, activeCount];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {STAT_CARDS.map((stat, i) => (
        <div key={stat.label} className="bg-white rounded-2xl border border-[var(--border)] p-5 hover:shadow-md hover:shadow-gray-100 transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: stat.color + '12', color: stat.color }}>
              {stat.icon}
            </div>
          </div>
          <p className="text-2xl font-extrabold text-[var(--text)]" style={{ fontFamily: 'var(--font-heading)' }}>{values[i]}</p>
          <p className="text-xs text-[var(--text-muted)] font-medium mt-0.5">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}