"use client";
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send, Hash, Paperclip, Search } from 'lucide-react';

import { useGetInboxQuery, useSendMessageMutation } from '../../redux/api/MessagesApiSlice';

function InboxContent() {
  const searchParams = useSearchParams();
  const { data: fetchedMessages, isLoading } = useGetInboxQuery(undefined, {
    pollingInterval: 5000,
  });
  const [sendMessage] = useSendMessageMutation();
  
  const [inputText, setInputText] = useState("");
  const [activeChatId, setActiveChatId] = useState('global');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try { setUser(JSON.parse(userStr)); } catch (e) {}
    }
  }, []);

  // Process messages into chats
  const chatGroups = (fetchedMessages || []).reduce((acc, msg) => {
    const otherUserId = msg.senderId === user?.id ? msg.receiverId : msg.senderId;
    const otherUserUsername = msg.senderId === user?.id ? msg.receiverUsername : msg.senderUsername;
    
    const chatId = msg.projectId ? `proj-${msg.projectId}-user-${otherUserId}` : `direct-${otherUserId}`;
    
    if (!acc[chatId]) {
      acc[chatId] = {
        id: chatId,
        name: otherUserUsername || "Unknown User",
        project: msg.projectName,
        projectId: msg.projectId,
        otherUserId: otherUserId,
        lastMsg: msg.content,
        messages: [],
        hasUnread: false
      };
    }
    acc[chatId].messages.push(msg);
    // Keep lastMsg updated with the most recent processing
    acc[chatId].lastMsg = msg.content;
    
    // Check if there are any unread messages from the other user
    if (!msg.isRead && msg.senderId !== user?.id) {
        acc[chatId].hasUnread = true;
    }
    
    return acc;
  }, {});

  const chats = [
    { id: 'global', name: "Global Chat", project: null, lastMsg: "System online.", messages: [] },
    ...Object.values(chatGroups)
  ];

  const activeChat = chats.find(c => c.id === activeChatId) || chats[0];

  useEffect(() => {
    const isNewChat = searchParams.get('newChat');
    const projectTag = searchParams.get('project');

    if (isNewChat && projectTag) {
      const found = chats.find(c => c.project === projectTag);
      if (found) setActiveChatId(found.id);
    }
  }, [searchParams, chats]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputText.trim() || !user) return;

    try {
      // Send to the specifically grouped other user, fallback to 1 only for global chat if allowed
      const receiverId = activeChat.otherUserId || 1;

      await sendMessage({
        receiverId: receiverId,
        projectId: activeChat.projectId,
        content: inputText
      }).unwrap();
      
      setInputText("");
    } catch (err) {
      console.error("Failed to send message", err);
    }
  };

  if (isLoading) return <div className="p-8 text-center text-[10px] font-black uppercase text-[var(--primary)] animate-pulse">Synchronizing Nodes...</div>;

  return (
    <div className="flex flex-col lg:flex-row lg:h-[calc(100vh-120px)] bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm">
      {/* Sidebar */}
      <div className="w-full lg:w-80 border-b lg:border-b-0 lg:border-r border-gray-50 flex flex-col bg-white">
        <div className="p-6">
          <h2 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--primary)] mb-6">Active Nodes</h2>
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            <input 
              type="text" 
              placeholder="Search chats..." 
              className="w-full bg-gray-100 border-none rounded-xl py-2.5 pl-9 pr-4 text-[11px] text-[var(--text)] font-bold outline-none placeholder:text-gray-400" 
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-3 space-y-1">
          {chats.map((chat) => (
            <div key={chat.id} onClick={() => setActiveChatId(chat.id)} className={`p-4 rounded-2xl cursor-pointer transition-all relative ${activeChatId === chat.id ? 'bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/20' : 'hover:bg-gray-50 text-gray-500'}`}>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs relative overflow-visible ${activeChatId === chat.id ? 'bg-white/10 text-white' : 'bg-gray-100 text-[var(--primary)]'}`}>
                  {chat.name.charAt(0)}
                  {chat.hasUnread && <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-sm ring-red-200"></span>}
                </div>
                <div className="overflow-hidden">
                  <p className={`text-xs truncate ${chat.hasUnread ? 'font-black' : 'font-bold'} ${activeChatId === chat.id ? 'text-white' : (chat.hasUnread ? 'text-black' : 'text-[var(--text)]')}`}>{chat.name}</p>
                  <p className={`text-[9px] truncate tracking-tight ${chat.hasUnread ? 'font-bold opacity-100 text-black' : 'opacity-60 font-medium uppercase'}`}>{chat.project ? `Proj: ${chat.project}` : chat.lastMsg}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-gray-50/30">
        <div className="p-6 bg-white border-b border-gray-50 flex justify-between items-center">
          <h3 className="text-sm font-bold text-[var(--text)]" style={{ fontFamily: 'var(--font-heading)' }}>{activeChat.name}</h3>
          {activeChat.project && (
            <div className="flex items-center gap-2 px-4 py-1.5 bg-[var(--primary)] rounded-full text-white text-[9px] font-black uppercase tracking-widest shadow-md">
              <Hash size={12} /> {activeChat.project}
            </div>
          )}
        </div>
        <div className="flex-1 overflow-y-auto p-8 space-y-6 flex flex-col-reverse">
          {(activeChat.messages || []).map((msg) => (
            <div key={msg.id} className={`flex flex-col ${msg.senderId === user?.id ? "items-end" : "items-start"}`}>
              <div className={`max-w-[70%] p-4 rounded-2xl text-xs leading-relaxed shadow-sm ${msg.senderId === user?.id ? "bg-[var(--primary)] text-white rounded-tr-none" : "bg-white text-[var(--text)] border border-gray-100 rounded-tl-none font-semibold"}`}>
                {msg.content}
              </div>
              <span className="text-[8px] font-black uppercase text-gray-300 mt-2 tracking-widest">{msg.senderUsername}</span>
            </div>
          ))}
        </div>
        <div className="p-6 bg-white border-t border-gray-50">
          <form onSubmit={handleSend} className="relative">
            <input 
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your message..."
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl pl-6 pr-28 py-4 text-sm text-[var(--text)] font-semibold outline-none focus:ring-4 focus:ring-[var(--primary)]/5 transition-all placeholder:text-gray-400"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <button type="button" className="p-2 text-gray-300"><Paperclip size={18} /></button>
              <button type="submit" className="bg-[var(--primary)] text-white px-5 py-2.5 rounded-xl hover:bg-[var(--primary-dark)] transition-all flex items-center gap-2">
                <span className="text-[9px] font-black uppercase tracking-widest">Send</span>
                <Send size={14} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function InboxPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]"><p className="text-[10px] font-black uppercase tracking-widest text-[var(--primary)] animate-pulse">Loading Inbox...</p></div>}>
      <InboxContent />
    </Suspense>
  );
}