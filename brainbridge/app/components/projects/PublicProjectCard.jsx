"use client";
import React from 'react';
import { Bookmark, ArrowUpRight, Clock, Eye } from "lucide-react";
import { useGetMyFavoritesQuery, useAddFavoriteMutation, useRemoveFavoriteMutation } from "../../redux/api/FavoritesApiSlice";

const formatDate = (dateString) => {
  if (!dateString) return "Just now";
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);

  if (diffInSeconds < 60) return "Just now";
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: date.getFullYear() !== now.getFullYear() ? "numeric" : undefined,
  });
};

export default function PublicProjectCard({ project }) {
  const isLoggedIn = typeof window !== 'undefined' && !!localStorage.getItem('token');

  const { data: favoriteIds = [] } = useGetMyFavoritesQuery(undefined, {
    skip: !isLoggedIn
  });
  const [addFavorite] = useAddFavoriteMutation();
  const [removeFavorite] = useRemoveFavoriteMutation();

  const isSaved = favoriteIds.includes(project.id);

  const handleSave = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isLoggedIn) return; // silently do nothing if not logged in

    try {
      if (isSaved) {
        await removeFavorite(project.id).unwrap();
      } else {
        await addFavorite(project.id).unwrap();
      }
    } catch (err) {
      // Only log meaningful errors, not empty auth rejections
      if (err?.status !== 401 && err?.status !== 403) {
        console.error("Failed to toggle favorite", err);
      }
    }
  };

  return (
    <div className="group cursor-pointer">
      {/* Image with Bookmark Icon */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-100 mb-5">
        <img
          src={
            project.coverImageUrl
              ? project.coverImageUrl.startsWith('http') ||
                project.coverImageUrl.startsWith('/') ||
                project.coverImageUrl.startsWith('data:')
                ? project.coverImageUrl
                : `/${project.coverImageUrl}`
              : ''
          }
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          alt={project.title}
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />

        <button
          onClick={handleSave}
          className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-md rounded-full shadow-sm hover:bg-white transition-all transform active:scale-90 z-20"
        >
          <Bookmark
            size={18}
            className={`transition-colors ${isSaved ? 'fill-blue-600 text-blue-600' : 'text-gray-600'}`}
          />
        </button>
      </div>

      {/* Header Info */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-[#6941C6] font-semibold text-xs uppercase tracking-wider">
          <span>{project.category}</span>
          <div className="flex items-center gap-1.5 text-gray-400">
            <Clock size={12} />
            <span>{formatDate(project.createdAt)}</span>
          </div>
        </div>

        <div className="flex items-start justify-between">
          <h4 className="text-2xl font-bold text-[#101828] group-hover:text-[#6941C6] transition-colors leading-tight">
            {project.title}
          </h4>
          <ArrowUpRight className="text-gray-300 group-hover:text-[#6941C6] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={24} />
        </div>

        <p className="text-[#475467] text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Footer Info */}
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-600 border border-gray-200 uppercase">
              {project.creator ? project.creator[0] : "A"}
            </div>
            <span className="text-xs font-medium text-gray-600">{project.creator || "Anonymous"}</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-gray-400 text-xs font-medium">
              <Eye size={14} />
              <span>{project.viewCount || 0}</span>
            </div>
            <div className="flex gap-1">
              {project.category && [project.category].map(t => (
                <span key={t} className="px-2 py-0.5 bg-[#F9F5FF] text-[#6941C6] rounded text-[10px] font-bold uppercase">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}