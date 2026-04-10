"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, Bell, ChevronDown, Menu, Check } from 'lucide-react';
import { useGetUnreadNotificationCountQuery, useGetNotificationsQuery, useMarkNotificationAsReadMutation } from '../../redux/api/MessagesApiSlice';

export default function TopBar({ onMenuClick }) {
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { data: unreadCount = 0 } = useGetUnreadNotificationCountQuery(undefined, { skip: !user });
  const { data: notifications = [] } = useGetNotificationsQuery(undefined, { skip: !user });
  const [markAsRead] = useMarkNotificationAsReadMutation();

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try { setUser(JSON.parse(userStr)); } catch (e) {}
    }
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  const handleNotificationClick = async (notif) => {
    if (!notif.isRead) {
      try { await markAsRead(notif.id); } catch(e) {}
    }
    setIsDropdownOpen(false);
  };

  const fullName = user ? `${user.firstName || ''} ${user.lastName || ''}`.trim() || user.username : "Guest";
  const userRole = user ? 'Student' : 'Guest';
  const avatarUrl =
    user?.profilePicture ||
    user?.profileImageUrl ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=6C63FF&color=fff&bold=true`;

  return (
    <header className="h-16 bg-white/80 backdrop-blur-xl border-b border-[var(--border)] flex items-center justify-between px-4 sm:px-8 sticky top-0 z-40">
      <div className="flex items-center gap-4 flex-1">
        <button onClick={onMenuClick} className="lg:hidden p-2 rounded-lg hover:bg-[var(--bg)] text-[var(--text-muted)]" aria-label="Open menu">
          <Menu size={20} />
        </button>

        <div className="relative flex-1 max-w-md hidden sm:block">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)] pointer-events-none" size={16} />
          <input type="text" placeholder="Search projects, tags, people..."
            className="input-field w-full rounded-lg py-2 pl-10 pr-4 text-sm" />
        </div>

        <button className="sm:hidden p-2 rounded-lg hover:bg-[var(--bg)] text-[var(--text-muted)]">
          <Search size={20} />
        </button>
      </div>

      <div className="flex items-center gap-3 sm:gap-4 ml-4">
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="relative p-2 rounded-lg hover:bg-[var(--bg)] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
          >
            <Bell size={18} />
            {unreadCount > 0 && (
              <span className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 flex items-center justify-center min-w-[1.25rem] h-5 px-1 bg-[var(--accent)] text-white text-[10px] font-bold rounded-full ring-2 ring-white shadow-sm">
                {unreadCount > 99 ? '99+' : unreadCount}
              </span>
            )}
          </button>
          
          {/* Notification Dropdown Box */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white border border-[var(--border)] rounded-2xl shadow-xl z-50 overflow-hidden transform opacity-100 scale-100 transition-all origin-top-right">
              <div className="p-4 border-b border-[var(--border)] flex justify-between items-center bg-gray-50/50">
                <h3 className="text-xs font-black text-[var(--text)] uppercase tracking-widest">Notifications</h3>
                <span className="text-[10px] font-bold bg-[var(--primary)]/10 text-[var(--primary)] px-2 py-0.5 rounded-full">{unreadCount} New</span>
              </div>
              <div className="max-h-[350px] overflow-y-auto">
                {notifications.length === 0 ? (
                  <div className="p-8 text-center text-[var(--text-muted)] text-xs font-medium">
                    You have no notifications.
                  </div>
                ) : (
                  notifications.map((notif) => (
                    <div 
                      key={notif.id} 
                      onClick={() => handleNotificationClick(notif)}
                      className={`p-4 border-b border-[var(--border)] last:border-0 cursor-pointer transition-colors flex gap-3 ${!notif.isRead ? 'bg-blue-50/30 hover:bg-blue-50/60' : 'hover:bg-gray-50/80 grayscale-[0.2] opacity-80'}`}
                    >
                      <div className={`w-2 h-2 mt-1.5 rounded-full flex-shrink-0 ${!notif.isRead ? 'bg-[var(--primary)] shadow-[0_0_8px_rgba(108,99,255,0.5)]' : 'bg-transparent'}`}></div>
                      <div className="flex-1">
                        <p className={`text-[11px] font-bold ${!notif.isRead ? 'text-[var(--text)]' : 'text-gray-600'}`}>{notif.title}</p>
                        <p className={`text-[10px] mt-1 leading-snug ${!notif.isRead ? 'text-gray-700 font-medium' : 'text-gray-500'}`}>{notif.body}</p>
                        <p className="text-[8px] font-bold tracking-widest uppercase text-gray-400 mt-2">
                           {new Date(notif.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                        </p>
                      </div>
                      {!notif.isRead && (
                        <div className="text-[var(--primary)] opacity-0 hover:opacity-100 transition-opacity">
                          <Check size={14} />
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
              <div className="p-2 border-t border-[var(--border)] bg-gray-50/30 text-center">
                <Link href="/dashboard/inbox" onClick={() => setIsDropdownOpen(false)} className="text-[10px] font-black text-[var(--primary)] hover:text-[var(--primary-dark)] uppercase tracking-widest transition-colors">
                  View all in Inbox
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="h-6 w-px bg-[var(--border)] hidden sm:block"></div>

        <Link href="/dashboard/profile" className="flex items-center gap-3 cursor-pointer group py-1 px-2 rounded-lg hover:bg-[var(--bg)] transition-colors">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-[var(--text)] leading-none mb-0.5">{fullName}</p>
            <p className="text-[10px] text-[var(--text-muted)] font-medium">{userRole}</p>
          </div>
          <img src={avatarUrl} alt={fullName} className="w-8 h-8 rounded-full object-cover border border-[var(--border)]" />
          <ChevronDown size={14} className="text-[var(--text-muted)] hidden sm:block" />
        </Link>
      </div>
    </header>
  );
}