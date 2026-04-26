"use client";
import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { PenSquare } from 'lucide-react';
import { useGetArticleByIdQuery, useUpdateArticleMutation } from '../../redux/api/ArticlesApiSlice';
import EditArticleModal from '../../components/articles/EditArticleModal';

export default function ArticleReadPage() {
  const params = useParams();
  const id = params?.id;

  const { data: article, isLoading, isError } = useGetArticleByIdQuery(id, { skip: !id });
  const [updateArticle] = useUpdateArticleMutation();
  const [isEditOpen, setIsEditOpen] = React.useState(false);

  const handleUpdate = async (updatedArticle) => {
    try {
      await updateArticle(updatedArticle).unwrap();
    } catch (e) {
      console.error('Failed to update article', e);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[var(--bg)] px-6 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[var(--border)] p-8">
          <p className="text-sm text-[var(--text-muted)]">Loading article...</p>
        </div>
      </div>
    );
  }

  if (isError || !article) {
    return (
      <div className="min-h-screen bg-[var(--bg)] px-6 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[var(--border)] p-8">
          <p className="text-sm text-[var(--text-muted)]">Article not found.</p>
          <Link href="/projects" className="inline-block mt-4 text-sm font-semibold text-[var(--primary)]">Back to Articles</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-6">
          <Link href="/projects" className="text-xs font-bold text-[var(--primary)] uppercase tracking-wider">Back</Link>
        </div>

        <article className="bg-white rounded-3xl border border-[var(--border)] overflow-hidden">
          {article.coverImageUrl && (
            <div className="h-[320px] bg-[var(--bg)]">
              <img src={article.coverImageUrl} alt={article.title} className="w-full h-full object-cover" />
            </div>
          )}

          <div className="p-8">
            <div className="flex flex-col gap-2 mb-6">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                {article.title}
              </h1>

              <div className="flex items-center gap-4 mt-2">
                <button
                  onClick={() => setIsEditOpen(true)}
                  className="bg-white text-[var(--primary)] px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[var(--primary)] hover:text-white transition-all flex items-center gap-2 shadow-sm"
                >
                  <PenSquare size={14} />
                  Modify
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--text-muted)]">
                {!!article.field && (
                  <span className="px-2.5 py-1 rounded-lg bg-[var(--primary)]/6 text-[var(--primary)] font-bold">
                    {article.field}
                  </span>
                )}
                <span className="px-2.5 py-1 rounded-lg bg-black/5 text-[var(--text)] font-bold">
                  {(article.visibility || 'PUBLIC').toString()}
                </span>
              </div>
            </div>

            <div className="prose prose-sm max-w-none">
              <p className="whitespace-pre-line text-sm leading-7 text-[var(--text)]">
                {article.content}
              </p>
            </div>

            {!!(article.relatedUrls || []).length && (
              <div className="mt-8">
                <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-3">Related URLs</h3>
                <div className="flex flex-col gap-2">
                  {(article.relatedUrls || []).map((u) => (
                    <a key={u} href={u} target="_blank" rel="noreferrer" className="text-sm font-semibold text-[var(--primary)] break-all">
                      {u}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {!!(article.additionalMediaUrls || []).length && (
              <div className="mt-8">
                <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-3">Media</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {(article.additionalMediaUrls || []).map((src, i) => (
                    <div key={i} className="rounded-2xl border border-[var(--border)] overflow-hidden bg-[var(--bg)]">
                      <img src={src} alt="" className="w-full h-32 object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>

        <EditArticleModal
          isOpen={isEditOpen}
          onClose={() => setIsEditOpen(false)}
          onUpdateArticle={handleUpdate}
          article={article}
        />
      </div>
    </div>
  );
}
