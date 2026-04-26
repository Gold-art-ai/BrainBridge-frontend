"use client";
import React, { useMemo, useState } from 'react';
import ArticleFilters from '../../components/articles/ArticleFilters';
import ArticleTable from '../../components/articles/ArticleTable';
import { useGetMyArticlesQuery, useRemoveArticleMutation } from '../../redux/api/ArticlesApiSlice';

export default function ArticlesWorkspace() {
  const { data: articles = [] } = useGetMyArticlesQuery();
  const [removeArticle] = useRemoveArticleMutation();

  const [searchQuery, setSearchQuery] = useState('');
  const [activeVisibility, setActiveVisibility] = useState('All');
  const [sortBy, setSortBy] = useState('newest');

  const handleDelete = async (id) => {
    const articleToDelete = articles.find(a => a.id === id);
    if (articleToDelete) {
      await removeArticle(articleToDelete.id);
    }
  };

  const filteredAndSorted = useMemo(() => {
    let result = articles.filter(a => {
      const matchesSearch = (a.title || '').toLowerCase().includes(searchQuery.toLowerCase());
      const matchesVis = activeVisibility === 'All' || (a.visibility || 'PUBLIC') === activeVisibility;
      return matchesSearch && matchesVis;
    });

    if (sortBy === 'alpha') {
      result.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
    } else {
      result.sort((a, b) => (b.id || 0) - (a.id || 0));
    }

    return result;
  }, [articles, searchQuery, activeVisibility, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <header className="mb-10 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-extrabold text-[var(--text)] tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>Articles</h1>
          <p className="text-[var(--text-muted)] text-sm mt-1">
            Manage all your articles
          </p>
        </div>
      </header>

      <ArticleFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeVisibility={activeVisibility}
        setActiveVisibility={setActiveVisibility}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <ArticleTable articles={filteredAndSorted} onDelete={handleDelete} />
    </div>
  );
}
