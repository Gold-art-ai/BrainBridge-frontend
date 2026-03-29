import React from 'react';
import { Sparkles } from 'lucide-react';

export default function RecommendationBadge({ reason }) {
  if (!reason) return null;

  return (
    <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 animate-in slide-in-from-top-2 duration-500 border border-white/50">
      <Sparkles size={14} className="text-[#3A38DE]" />
      <span className="text-[10px] font-bold uppercase tracking-widest text-[#08075C]">
        {reason}
      </span>
    </div>
  );
}
