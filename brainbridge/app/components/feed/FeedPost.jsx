// FeedPost.jsx
import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, MessageCircle, Share2, Bookmark, Activity } from 'lucide-react';
import { useToggleProjectLikeMutation } from '../../redux/api/ProjectsApiSlice';
import { useAddFavoriteMutation, useRemoveFavoriteMutation } from '../../redux/api/FavoritesApiSlice';
import RecommendationBadge from './RecommendationBadge';

export default function FeedPost({ project, recommendationReason }) {
  const [isLiked, setIsLiked] = useState(project.isLiked || false);
  const [isSaved, setIsSaved] = useState(project.isFavorited || false);
  const [likesCount, setLikesCount] = useState(project.likesCount || 0);

  const [toggleLike] = useToggleProjectLikeMutation();
  const [addFavorite] = useAddFavoriteMutation();
  const [removeFavorite] = useRemoveFavoriteMutation();

  const tags =
    (project.mainTags && project.mainTags.length > 0)
      ? project.mainTags
      : (project.tech && project.tech.length > 0)
        ? project.tech
        : (project.field ? [project.field] : []);

  const handleLike = async () => {
    try {
      const res = await toggleLike(project.id).unwrap();
      setIsLiked(res.isLiked);
      setLikesCount(res.likesCount);
    } catch (err) { console.error("Like toggle failed", err); }
  };

  const handleSave = async () => {
    try {
      if (isSaved) {
        await removeFavorite(project.id).unwrap();
        setIsSaved(false);
      } else {
        await addFavorite(project.id).unwrap();
        setIsSaved(true);
      }
    } catch (err) { console.error("Save toggle failed", err); }
  };

  const authorName = project.ownerName || "Anonymous Developer";
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(authorName)}&background=random&color=fff`;
  
  // Format creation date
  const timeAgo = project.createdAt ? new Date(project.createdAt).toLocaleDateString() : "Recent";

  // Provide high-quality default images if backend lacks one
  const coverUrl = project.coverImageUrl || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop";

  return (
    <article className="relative bg-white/60 backdrop-blur-xl border border-white/50 rounded-[40px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(58,56,222,0.06)] transition-all duration-300 w-full max-w-2xl mx-auto mb-10 overflow-hidden group">
      {/* Decorative gradient blur in background */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-40 h-40 bg-[var(--primary)] mix-blend-multiply filter blur-[60px] opacity-10 rounded-full pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between mb-5 relative z-10">
        <div className="flex items-center gap-3">
          <img src={avatarUrl} alt={authorName} className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm" />
          <div>
            <h4 className="text-[13px] font-bold text-[var(--text)] leading-none mb-1">{authorName}</h4>
            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.2em]">{timeAgo}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
           <Activity size={14} className="text-gray-300" />
           <span className="text-[10px] font-bold uppercase tracking-widest">{project.viewCount || 0} Views</span>
        </div>
      </div>

      {/* Media Box */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-[24px] overflow-hidden mb-5">
        <RecommendationBadge reason={recommendationReason} />
        <Link href={`/projects/${project.id}`} className="block w-full h-full">
          <img 
            src={coverUrl} 
            alt={project.title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out" 
          />
        </Link>
      </div>

      {/* Interaction Bar */}
      <div className="flex items-center justify-between mb-4 relative z-10 px-2 mt-2">
        <div className="flex items-center gap-6">
          <button onClick={handleLike} className="group flex items-center gap-2 transition-transform active:scale-90 touch-manipulation">
            <Heart size={26} className={`${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-500 group-hover:text-red-500'} transition-colors stroke-2`} />
            <span className={`text-[13px] font-bold ${isLiked ? 'text-red-500' : 'text-gray-500'}`}>{likesCount}</span>
          </button>
          <button className="group flex items-center gap-2 transition-transform active:scale-90 hover:bg-gray-50 p-2 -ml-2 rounded-2xl touch-manipulation">
            <MessageCircle size={26} className="text-gray-500 group-hover:text-[var(--primary)] transition-colors stroke-2" />
            <span className="text-[13px] font-bold text-gray-500">{project.commentsCount || 0}</span>
          </button>
          <button className="group relative flex items-center justify-center transition-transform active:scale-90 hover:bg-gray-50 w-10 h-10 rounded-2xl touch-manipulation">
            <Share2 size={22} className="text-gray-500 group-hover:text-[var(--primary)] transition-colors absolute stroke-2" />
          </button>
        </div>
        <div>
          <button onClick={handleSave} className="transition-transform active:scale-90 hover:bg-gray-50 w-10 h-10 flex items-center justify-center rounded-2xl touch-manipulation">
            <Bookmark size={26} className={`${isSaved ? 'fill-[var(--primary)] text-[var(--primary)]' : 'text-gray-500 hover:text-[var(--primary)]'} transition-colors stroke-2`} />
          </button>
        </div>
      </div>

      {/* Details Area */}
      <div className="px-2 relative z-10">
        <h3 className="text-lg font-black text-[var(--text)] mb-2 leading-tight">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-gray-600 line-clamp-2 mb-4 leading-relaxed">
          {project.description || "An innovative project built to explore new technologies and design patterns. Dive into the repository to learn more."}
        </p>
        
        {/* Chips */}
        <div className="flex flex-wrap gap-2">
          {tags.length > 0 ? (
            tags.map((t, idx) => (
              <span key={idx} className="text-[10px] uppercase tracking-wider font-black bg-[var(--primary)]/8 text-[var(--primary)] px-3 py-1.5 rounded-xl">
                #{t.replace(/\s+/g, '')}
              </span>
            ))
          ) : (
            <span className="text-[10px] uppercase tracking-wider font-black bg-[var(--primary)]/8 text-[var(--primary)] px-3 py-1.5 rounded-xl">
              #INNOVATION
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
