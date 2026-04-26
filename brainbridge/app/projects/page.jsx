"use client";
import React, { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import PublicHero from '../components/projects/PublicHero';
import CategoryFilter from '../components/projects/CategoryFilter';
import TechTrends from '../components/projects/TechTrends';
import NewArticleModal from "../components/articles/NewArticleModal";
import { Search, Plus } from "lucide-react";
import { useGetAllArticlesQuery, useAddArticleMutation } from '../redux/api/ArticlesApiSlice';

export default function PublicDiscoveryPage() {
  const [articles, setArticles] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: fetched } = useGetAllArticlesQuery();
  const [addArticleMutation] = useAddArticleMutation();

  useEffect(() => { setArticles(fetched || []); }, [fetched]);

  const addArticle = async (newArticle) => {
    const payload = {
      title: newArticle.title,
      content: newArticle.content,
      visibility: newArticle.visibility,
      coverImageUrl: newArticle.coverImageUrl || "",
      relatedUrls: newArticle.relatedUrls,
      additionalMediaUrls: newArticle.additionalMediaUrls,
    };

    try { await addArticleMutation(payload).unwrap(); } catch (e) { console.error(e); }
    setIsModalOpen(false);
  };

  const filteredArticles = useMemo(() => {
    return articles.filter(a => {
      const matchesSearch = (a.title || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
                            (a.content || "").toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCat = activeCategory === 'All' || a.field === activeCategory;
      return matchesSearch && matchesCat;
    });
  }, [searchQuery, activeCategory, articles]);

  const ArticleCard = ({ article }) => {
    return (
      <div className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden hover:shadow-lg hover:shadow-gray-100 transition-all group">
        <div className="relative h-48 bg-[var(--bg)] overflow-hidden">
          {article.coverImageUrl ? (
            <img src={article.coverImageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[var(--text-muted)]">
              <span className="text-xs font-semibold uppercase">Article</span>
            </div>
          )}
        </div>

        <div className="p-5">
          <h3 className="text-base font-bold text-[var(--text)] mb-1.5 group-hover:text-[var(--primary)] transition-colors line-clamp-1" style={{ fontFamily: 'var(--font-heading)' }}>
            {article.title}
          </h3>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed line-clamp-3 mb-4">{article.content}</p>

          {!!(article.relatedUrls || []).length && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {(article.relatedUrls || []).slice(0, 2).map((url) => (
                <span key={url} className="text-[10px] font-semibold text-[var(--primary)] bg-[var(--primary)]/6 px-2 py-0.5 rounded-md">Link</span>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between pt-3 border-t border-[var(--border)]">
            <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
              {(article.visibility || 'PUBLIC').toString()}
            </div>
            <span className="text-xs font-semibold text-[var(--primary)] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              Read
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <PublicHero projects={[]} />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <p className="text-sm font-semibold text-[var(--primary)] mb-1 uppercase tracking-wider">Discovery</p>
            <h2 className="text-3xl font-extrabold tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>All Articles</h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={16} />
              <input type="text" placeholder="Search articles..." value={searchQuery}
                className="input-field w-full rounded-lg py-2.5 pl-10 pr-4 text-sm"
                onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
            <button onClick={() => setIsModalOpen(true)} className="btn-primary p-2.5 rounded-lg">
              <Plus size={18} />
            </button>
          </div>
        </div>

        <div className="mb-8">
          <CategoryFilter active={activeCategory} setActive={setActiveCategory} />
        </div>

        <TechTrends />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {filteredArticles.map(article => (
            <div key={article.id} className="block group">
              <ArticleCard article={article} />
            </div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg font-bold text-[var(--text)] mb-1" style={{ fontFamily: 'var(--font-heading)' }}>No articles found</p>
            <p className="text-sm text-[var(--text-muted)]">Try adjusting your search or filters.</p>
          </div> 
        )}
      </div>

      <NewArticleModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAddArticle={addArticle} />
    </div>
  );
}