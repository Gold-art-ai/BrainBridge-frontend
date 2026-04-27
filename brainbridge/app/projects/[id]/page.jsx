"use client";
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useGetProjectByIdQuery, useIncrementViewCountMutation, useGetProjectCommentsQuery, useAddProjectCommentMutation, useToggleProjectLikeMutation } from '../../redux/api/ProjectsApiSlice';
import { useCheckFavoriteQuery, useAddFavoriteMutation, useRemoveFavoriteMutation } from '../../redux/api/FavoritesApiSlice';
import { useSendMessageMutation } from '../../redux/api/MessagesApiSlice';
import { ArrowLeft, MessageSquare, Heart, Send, Terminal, Activity, Eye, Bookmark } from 'lucide-react';
import Link from 'next/link';
import ProjectView from "../../components/projects/ProjectView"; 

export default function ProjectPage() {
  const { id } = useParams();
  const router = useRouter();
  const [project, setProject] = useState(null);
  const [commentText, setCommentText] = useState("");
  
  const { data: fetchedProject, refetch: refetchProject } = useGetProjectByIdQuery(id, { skip: !id });
  const { data: comments = [] } = useGetProjectCommentsQuery(id, { skip: !id });
  
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const [incrementViewCount] = useIncrementViewCountMutation();
  const [sendMessage] = useSendMessageMutation();
  const [addComment] = useAddProjectCommentMutation();
  const [addFavorite] = useAddFavoriteMutation();
  const [removeFavorite] = useRemoveFavoriteMutation();
  const [toggleLike] = useToggleProjectLikeMutation();

  const [user, setUser] = useState(null);
  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try { setUser(JSON.parse(userStr)); } catch (e) {}
    }
  }, []);

  useEffect(() => {
    if (fetchedProject) {
      setIsLiked(fetchedProject.isLiked || false);
      setIsSaved(fetchedProject.isFavorited || false);
      setLikesCount(fetchedProject.likesCount || 0);
    }
  }, [fetchedProject]);

  const isOwner = user && project && (
    user.id === project.ownerId || 
    user.username === project.ownerName ||
    user.username === project.creator
  );

  useEffect(() => {
    const handleInitialLoad = async () => {
      if (fetchedProject && !isNaN(Number(id))) {
        // Unique Session-based View Incrementation
        const sessionKey = 'viewed_projects';
        const viewedProjects = JSON.parse(sessionStorage.getItem(sessionKey) || '[]');
        
        if (!viewedProjects.includes(id)) {
          try {
            await incrementViewCount(id).unwrap();
            refetchProject();
            // Register this node as viewed in the current session
            sessionStorage.setItem(sessionKey, JSON.stringify([...viewedProjects, id]));
          } catch (e) {
            console.error("View registration bypass:", e);
          }
        }
        setProject(fetchedProject);
        return;
      }
    };
    
    handleInitialLoad();

    if (!fetchedProject) {
      const saved = localStorage.getItem('my_projects');
      const userProjects = saved ? JSON.parse(saved) : [];
      const initialData = [
        { id: "p1", name: "Quantum Ledger", creator: "Alex Rivers", category: "Fintech", description: "Decentralized protocol for high-frequency quantum trading.", tech: ["Rust", "Solidity"], status: "Active Node" },
        { id: "p2", name: "CryptoSec AI", creator: "Sarah Chen", category: "AI / ML", description: "LLM-driven monitoring for global trading groups.", tech: ["Python", "PyTorch"], status: "Operational" }
      ];
      const found = [...userProjects, ...initialData].find(p => p.id.toString() === id.toString());
      if (found) setProject(found);
    }
  }, [id, fetchedProject]);

  const handleLike = async () => {
    if (!user) return;
    try {
      const res = await toggleLike(id).unwrap();
      setIsLiked(res.isLiked);
      setLikesCount(res.likesCount);
    } catch (err) { console.error(err); }
  };

  const handleSave = async () => {
    if (!user) return;
    try {
      if (isSaved) {
        await removeFavorite(id).unwrap();
        setIsSaved(false);
      } else {
        await addFavorite(id).unwrap();
        setIsSaved(true);
      }
    } catch (err) { console.error(err); }
  };

  const handlePostComment = async (e) => {
    e.preventDefault();
    if (!commentText.trim() || !user) return;
    try {
      await addComment({ id, content: commentText }).unwrap();
      setCommentText("");
    } catch (err) { console.error(err); }
  };

  const handleCollaborate = async () => {
    if (!project || !user) return;
    try {
      await sendMessage({
        receiverId: project.ownerId || 1, 
        projectId: parseInt(project.id),
        content: `Hi, I'm interested in collaborating on "${project.title || project.name}".`
      }).unwrap();
      router.push(`/dashboard/inbox`);
    } catch (err) { console.error(err); }
  };

  if (!project) return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
       <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--primary)] animate-pulse">Initialising...</p>
    </div>
  );

  return (
    <div className="bg-[#FAFBFD] min-h-screen pb-24">
      <header className="max-w-5xl mx-auto px-6 py-12 flex justify-between items-center">
        <Link href="/projects" className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-[var(--primary)] transition-all group">
          <div className="w-10 h-10 rounded-2xl bg-white border border-gray-100 flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:text-white transition-all shadow-sm">
            <ArrowLeft size={16} />
          </div>
          System Hub
        </Link>
        <div className="flex items-center gap-4">
          <button 
            onClick={handleLike}
            className={`flex items-center gap-3 px-8 py-3.5 rounded-2xl border transition-all text-[10px] font-black uppercase tracking-widest shadow-sm ${
              isLiked ? 'bg-red-50 border-red-100 text-red-500' : 'bg-white border-gray-100 text-gray-400 hover:text-red-500'
            }`}
          >
            <Heart size={18} className={isLiked ? 'fill-red-500' : ''} />
            {likesCount} Likes
          </button>
          <button 
            onClick={handleSave}
            className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all ${
              isSaved ? 'bg-[var(--primary)] border-[var(--primary)] text-white shadow-lg shadow-blue-500/20' : 'bg-white border-gray-100 text-gray-400 hover:text-[var(--primary)]'
            }`}
          >
            <Bookmark size={20} className={isSaved ? 'fill-white' : ''} />
          </button>
        </div>
      </header>

      <div className="px-6">
        <ProjectView project={project} isOwner={isOwner} />
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-16 space-y-16">
        {!isOwner && (
          <section className="bg-white p-12 rounded-[3.5rem] border border-gray-100 shadow-xl shadow-blue-900/5 flex flex-col md:flex-row md:items-center justify-between gap-10">
            <div className="flex-1">
              <h3 className="text-[10px] font-black text-[var(--primary)] uppercase tracking-[0.3em] mb-4">Network Protocols</h3>
              <h2 className="text-4xl font-black text-[var(--text)] mb-6 tracking-tight italic">Work with {project.ownerName || project.creator}</h2>
              <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-lg">Initiate a direct link to the architect of this node for synchronization and resource sharing.</p>
            </div>
            <button 
              onClick={handleCollaborate}
              className="bg-[var(--text)] text-white px-12 py-6 rounded-[2.5rem] text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[var(--primary)] transition-all shadow-2xl shadow-blue-900/20 active:scale-95 flex items-center gap-4"
            >
              <MessageSquare size={20} />
              Connect Now
            </button>
          </section>
        )}

        {/* Discussion Section Centered */}
        <section className="bg-white p-12 rounded-[3.5rem] border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-2xl font-black text-[var(--text)] flex items-center gap-4">
              Discussion Log <span className="text-[10px] bg-gray-50 px-5 py-2 rounded-full text-gray-400 uppercase tracking-widest">{comments.length} Entries</span>
            </h3>
          </div>

          <form onSubmit={handlePostComment} className="mb-12 relative">
            <textarea 
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Input technical feedback..."
              className="w-full bg-[#FCFDFF] border border-gray-100 rounded-[2.5rem] p-8 text-sm focus:outline-none focus:ring-4 focus:ring-blue-500/5 transition-all min-h-[160px] resize-none font-medium text-gray-600"
            />
            <button 
              type="submit"
              disabled={!commentText.trim()}
              className="absolute bottom-6 right-6 bg-[var(--primary)] text-white p-4 rounded-2xl hover:bg-[var(--primary-dark)] transition-all disabled:opacity-50 shadow-lg shadow-blue-500/30"
            >
              <Send size={20} />
            </button>
          </form>

          <div className="space-y-10">
            {comments.map((c) => (
              <div key={c.id} className="flex gap-8 group">
                <div className="w-14 h-14 rounded-3xl bg-[#F8F9FF] border border-gray-100 flex items-center justify-center text-sm font-black text-[var(--primary)] uppercase">
                  {c.username?.[0] || 'U'}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-sm font-black text-[var(--text)]">@{c.username || 'user'}</span>
                    <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{new Date(c.createdAt).toLocaleDateString()}</span>
                  </div>
                  <p className="text-base text-gray-500 leading-relaxed font-medium">{c.content}</p>
                </div>
              </div>
            ))}
            {comments.length === 0 && (
              <div className="text-center py-12 bg-gray-50/50 rounded-[2.5rem] border border-dashed border-gray-200">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Protocol standing by. No discussion logged.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}