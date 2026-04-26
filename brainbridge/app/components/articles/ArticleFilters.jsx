import React from 'react';

export default function ArticleFilters({
  searchQuery,
  setSearchQuery,
  activeVisibility,
  setActiveVisibility,
  sortBy,
  setSortBy,
}) {
  const visibilities = ['All', 'PUBLIC', 'ORG_ONLY', 'PRIVATE'];

  return (
    <div className="flex flex-col gap-6 mb-8">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96 group">
          <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 text-xs group-focus-within:text-[var(--primary)] transition-colors"></i>
          <input
            type="text"
            placeholder="Search Article Title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-gray-100 rounded-2xl py-3.5 pl-12 pr-4 text-xs font-bold text-[var(--text)] shadow-sm outline-none focus:ring-2 focus:ring-[var(--primary)]/10 transition-all"
          />
        </div>

        <div className="flex items-center gap-3 self-end md:self-auto">
          <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Sort By:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white border border-gray-100 rounded-xl px-4 py-2 text-[10px] font-bold text-[var(--text)] outline-none cursor-pointer hover:border-[var(--primary)]/20 transition-all"
          >
            <option value="newest">Last Updated</option>
            <option value="alpha">Title (A-Z)</option>
          </select>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
        {visibilities.map((v) => (
          <button
            key={v}
            onClick={() => setActiveVisibility(v)}
            className={`px-5 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all whitespace-nowrap border ${
              activeVisibility === v
                ? 'bg-[var(--primary)] text-white border-[var(--primary)] shadow-lg shadow-[var(--primary)]/10'
                : 'bg-white text-gray-400 border-gray-100 hover:text-[var(--primary)] hover:border-gray-200'
            }`}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  );
}
