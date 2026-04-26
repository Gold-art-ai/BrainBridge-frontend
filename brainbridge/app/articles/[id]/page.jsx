"use client";
import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Heart, MessageSquare, PenSquare, SendHorizonal } from 'lucide-react';
import {
  useAddArticleCommentMutation,
  useGetArticleByIdQuery,
  useGetArticleCommentsQuery,
  useGetArticleLikeStatusQuery,
  useToggleArticleLikeMutation,
  useUpdateArticleMutation
} from '../../redux/api/ArticlesApiSlice';
import EditArticleModal from '../../components/articles/EditArticleModal';

export default function ArticleReadPage() {
  const params = useParams();
  const id = params?.id;

  const { data: article, isLoading, isError } = useGetArticleByIdQuery(id, { skip: !id });
  const [updateArticle] = useUpdateArticleMutation();
  const [isEditOpen, setIsEditOpen] = React.useState(false);

  const [pageError, setPageError] = React.useState('');

  const { data: likeStatus } = useGetArticleLikeStatusQuery(id, { skip: !id });
  const [toggleLike, { isLoading: isTogglingLike }] = useToggleArticleLikeMutation();

  const { data: comments = [], isLoading: isLoadingComments } = useGetArticleCommentsQuery(id, { skip: !id });
  const [addComment, { isLoading: isAddingComment }] = useAddArticleCommentMutation();
  const [commentText, setCommentText] = React.useState('');

  const handleUpdate = async (updatedArticle) => {
    try {
      setPageError('');
      await updateArticle(updatedArticle).unwrap();
    } catch (e) {
      console.error('Failed to update article', e);
      setPageError('Failed to update article. Please try again.');
    }
  };

  const handleToggleLike = async () => {
    if (!id || isTogglingLike) return;
    try {
      setPageError('');
      await toggleLike(id).unwrap();
    } catch (e) {
      console.error('Failed to toggle like', e);
      setPageError('Failed to update like. Please try again.');
    }
  };

  const handleAddComment = async (e) => {
    e?.preventDefault?.();
    if (!id) return;
    const content = (commentText || '').trim();
    if (!content) return;

    try {
      setPageError('');
      await addComment({ id, content }).unwrap();
      setCommentText('');
    } catch (err) {
      console.error('Failed to add comment', err);
      setPageError('Failed to post comment. Please try again.');
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
      <div className="max-w-7xl mx-auto px-6 py-10">
        {!!pageError && (
          <div className="mb-6 bg-red-50 border border-red-100 text-red-700 rounded-2xl px-5 py-4 text-sm font-semibold">
            {pageError}
          </div>
        )}

        <div className="mb-6 flex items-center justify-between gap-4">
          <Link href="/projects" className="text-xs font-bold text-[var(--primary)] uppercase tracking-wider">Back</Link>
          <button
            onClick={() => setIsEditOpen(true)}
            className="bg-white text-[var(--primary)] px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[var(--primary)] hover:text-white transition-all flex items-center gap-2 shadow-sm border border-[var(--border)]"
          >
            <PenSquare size={14} />
            Modify
          </button>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <article className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden anim-fade-in-up">
            {article.coverImageUrl && (
              <div className="h-[400px] w-full overflow-hidden">
                <img 
                  src={article.coverImageUrl} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                />
              </div>
            )}

            <div className="p-8 sm:p-12">
              <header className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-[10px] font-black uppercase tracking-widest">
                    {(article.visibility || 'PUBLIC').toString()}
                  </span>
                  {article.field && (
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-[10px] font-black uppercase tracking-widest">
                      {article.field}
                    </span>
                  )}
                </div>

                <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#08075C] leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  {article.title}
                </h1>

                {!!(article.technologies || []).length && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {(article.technologies || []).map((t) => (
                      <span key={t} className="px-3 py-1.5 rounded-xl bg-gray-50 border border-gray-100 text-gray-600 text-[11px] font-bold">
                        #{t}
                      </span>
                    ))}
                  </div>
                )}
              </header>

              <div className="prose prose-lg max-w-none mb-12">
                <p className="whitespace-pre-line text-base leading-relaxed text-gray-700 font-medium">
                  {article.content}
                </p>
              </div>

              {!!(article.relatedUrls || []).length && (
                <div className="mt-10 pt-10 border-t border-gray-50">
                  <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Resources</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {(article.relatedUrls || []).map((u) => (
                      <a key={u} href={u} target="_blank" rel="noreferrer" className="flex items-center gap-2 p-3 rounded-2xl bg-gray-50 border border-gray-100 text-xs font-bold text-[var(--primary)] hover:bg-[var(--primary)]/5 transition-colors group">
                        <i className="fa-solid fa-link text-[10px] opacity-40 group-hover:opacity-100"></i>
                        <span className="truncate">{u}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Engagement Section directly under content */}
              <div className="mt-12 pt-8 border-t border-gray-50 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleToggleLike}
                    disabled={isTogglingLike}
                    className={`flex items-center gap-3 px-6 py-3 rounded-2xl transition-all duration-300 font-bold text-sm ${
                      likeStatus?.likedByMe 
                        ? 'bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/20 scale-105' 
                        : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                    }`}
                  >
                    <Heart size={18} fill={likeStatus?.likedByMe ? "currentColor" : "none"} className={isTogglingLike ? 'animate-pulse' : ''} />
                    <span>{likeStatus?.likedByMe ? 'Liked' : 'Like'}</span>
                    <span className={`pl-2 border-l ${likeStatus?.likedByMe ? 'border-white/20' : 'border-gray-200'}`}>
                      {likeStatus?.count ?? 0}
                    </span>
                  </button>

                  <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-gray-50 text-gray-400 font-bold text-sm">
                    <MessageSquare size={18} />
                    <span>{(comments || []).length}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Share this article</span>
                  <div className="flex gap-2">
                    {['twitter', 'linkedin', 'copy'].map(plat => (
                      <button key={plat} className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[var(--primary)] hover:bg-white transition-all">
                        <i className={`fa-brands fa-${plat === 'copy' ? 'link' : plat} text-xs`}></i>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Comments Section inside the same article card */}
            <div className="bg-gray-50/50 border-t border-gray-100 p-8 sm:p-12">
              <div className="mb-8">
                <h2 className="text-xl font-black text-[#08075C] tracking-tight mb-2">Discussion</h2>
                <p className="text-sm text-gray-500 font-medium">Join the conversation and share your thoughts.</p>
              </div>

              <form onSubmit={handleAddComment} className="relative mb-10 group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[var(--primary)] transition-colors">
                  <PenSquare size={18} />
                </div>
                <input
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Share your perspective..."
                  className="w-full bg-white border border-gray-100 rounded-[1.25rem] py-4 pl-12 pr-32 text-sm font-bold text-[#08075C] outline-none focus:ring-2 focus:ring-[var(--primary)]/10 focus:border-[var(--primary)] transition-all shadow-sm"
                  disabled={isAddingComment}
                />
                <button
                  type="submit"
                  disabled={isAddingComment || !(commentText || '').trim()}
                  className="absolute right-2 top-2 bottom-2 bg-[var(--primary)] hover:bg-[#060548] text-white px-6 rounded-xl text-xs font-black uppercase tracking-widest transition-all disabled:opacity-50 flex items-center gap-2"
                >
                  {isAddingComment ? '...' : <><SendHorizonal size={14} /> Post</>}
                </button>
              </form>

              <div className="space-y-6">
                {!isLoadingComments && (comments || []).length === 0 && (
                  <div className="py-12 text-center bg-white rounded-3xl border border-dashed border-gray-200">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
                      <MessageSquare size={32} />
                    </div>
                    <p className="text-sm font-black text-gray-400 uppercase tracking-widest">No comments yet</p>
                    <p className="text-xs text-gray-400 mt-2 italic font-medium">Be the first to share your thoughts on this article.</p>
                  </div>
                )}

                {(comments || []).map((c) => (
                  <div key={c.id} className="group flex gap-4 anim-fade-in">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--primary)] to-[#6366f1] flex-shrink-0 flex items-center justify-center text-white text-xs font-black shadow-md">
                      {(c?.userName ? c.userName[0] : (c?.userId != null ? 'U' : '?')).toUpperCase()}
                    </div>
                    <div className="flex-1 bg-white border border-gray-100 rounded-3xl p-5 shadow-sm group-hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <p className="text-[10px] font-black text-[#08075C] uppercase tracking-widest bg-gray-50 px-2 py-0.5 rounded-md">
                          {c?.userName ? c.userName : (c?.userId != null ? `Contributor #${c.userId}` : 'Anonymous')}
                        </p>
                        <p className="text-[10px] text-gray-400 font-bold">{c.createdAt ? String(c.createdAt).replace('T', ' ').slice(0, 16) : ''}</p>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed font-semibold whitespace-pre-line">{c.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>

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
