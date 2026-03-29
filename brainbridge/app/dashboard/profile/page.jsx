"use client";
import React, { useState, useEffect } from 'react';
import { Camera, Save, User as UserIcon, Shield, Settings, Github, Linkedin, Globe, CheckCircle2 } from 'lucide-react';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('general');
  const [user, setUser] = useState(null);
  
  // Extended Mock Data for things not in the Backend yet
  const [extraProfile, setExtraProfile] = useState({
    bio: '',
    github: '',
    linkedin: '',
    portfolio: ''
  });
  
  // Save Action State
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    // Load standard user info from login
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        setUser(JSON.parse(userStr));
      } catch (e) {
        console.error("Error parsing user from localStorage", e);
      }
    }
    
    // Load local extended schema
    const extraStr = localStorage.getItem('brainbridge_extra_profile');
    if (extraStr) {
      try {
        setExtraProfile(JSON.parse(extraStr));
      } catch (e) {}
    }
  }, []);

  const handleSave = () => {
    setIsSaving(true);
    // Simulate API Call
    setTimeout(() => {
      localStorage.setItem('brainbridge_extra_profile', JSON.stringify(extraProfile));
      setIsSaving(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    }, 800);
  };

  const handleExtraChange = (e) => {
    const { name, value } = e.target;
    setExtraProfile(prev => ({ ...prev, [name]: value }));
  };

  if (!user) return <div className="p-8">Loading Profile...</div>;

  const fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim() || user.username;
  const avatarUrl = user.profilePicture || `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=08075C&color=fff&bold=true`;

  return (
    <div className="max-w-[1000px] mx-auto pb-10">
      
      {/* 1. Header Banner */}
      <div className="relative w-full h-48 sm:h-64 rounded-3xl overflow-hidden mb-16 bg-gradient-to-r from-[#08075C] to-[#3A38DE] shadow-xl shadow-blue-900/10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
        
        {/* Banner Action (Mock) */}
        <button className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold text-white transition-all flex items-center gap-2">
          <Camera size={14} /> Edit Cover
        </button>

        {/* Profile Avatar Overlaying the Bottom */}
        <div className="absolute -bottom-12 left-8 flex items-end gap-6">
          <div className="relative group cursor-pointer h-28 w-28 rounded-[2rem] p-1.5 bg-white shadow-xl shadow-[#3A38DE]/10 transition-transform hover:-translate-y-1">
            <img 
              src={avatarUrl} 
              alt={fullName} 
              className="w-full h-full rounded-[1.6rem] object-cover"
            />
            {/* Upload Hover Overlay */}
            <div className="absolute inset-1.5 rounded-[1.6rem] bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white backdrop-blur-sm">
              <Camera size={24} className="mb-1" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Update</span>
            </div>
            {/* Active Status */}
            <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-4 border-white rounded-full"></div>
          </div>
          
          <div className="mb-14">
            <h1 className="text-3xl font-black text-white leading-tight">{fullName}</h1>
            <p className="text-blue-200 text-sm font-semibold tracking-wide flex items-center gap-2">
              <UserIcon size={14} /> @{user.username}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* 2. Left Menu Settings Navigation */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-3xl p-3 shadow-lg shadow-gray-200/50 border border-gray-100 sticky top-28">
            <nav className="space-y-1">
              <button 
                onClick={() => setActiveTab('general')}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all ${activeTab === 'general' ? 'bg-[#F8F9FB] text-[#08075C]' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}
              >
                <UserIcon size={18} className={activeTab === 'general' ? 'text-[#3A38DE]' : ''} />
                General Profile
              </button>
              <button 
                onClick={() => setActiveTab('security')}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all ${activeTab === 'security' ? 'bg-[#F8F9FB] text-[#08075C]' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}
              >
                <Shield size={18} className={activeTab === 'security' ? 'text-[#3A38DE]' : ''} />
                Sign In & Security
              </button>
              <button 
                onClick={() => setActiveTab('preferences')}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all ${activeTab === 'preferences' ? 'bg-[#F8F9FB] text-[#08075C]' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}
              >
                <Settings size={18} className={activeTab === 'preferences' ? 'text-[#3A38DE]' : ''} />
                Preferences
              </button>
            </nav>
          </div>
        </div>

        {/* 3. Main Settings Content Area */}
        <div className="flex-1 min-w-0">
          <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-xl shadow-gray-200/40 border border-gray-100">
            
            {/* --- GENERAL TAB --- */}
            {activeTab === 'general' && (
              <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div>
                   <h2 className="text-xl font-black text-[#08075C] mb-1">Personal Details</h2>
                   <p className="text-gray-400 text-sm font-medium">Update your photo and personal details here.</p>
                </div>

                {/* Name Forms (Disabled Mock as they are tied to User entity usually) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#08075C] mb-2 uppercase tracking-wide">First Name</label>
                    <input type="text" disabled defaultValue={user.firstName} className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 text-sm font-medium text-gray-500 cursor-not-allowed" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#08075C] mb-2 uppercase tracking-wide">Last Name</label>
                    <input type="text" disabled defaultValue={user.lastName} className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 text-sm font-medium text-gray-500 cursor-not-allowed" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-[#08075C] mb-2 uppercase tracking-wide">Email Address</label>
                    <input type="email" disabled defaultValue={user.email} className="w-full bg-gray-50 border border-gray-100 rounded-xl py-3 px-4 text-sm font-medium text-gray-500 cursor-not-allowed" />
                  </div>
                </div>

                <hr className="border-gray-100" />

                {/* Editable Profile Information */}
                <div>
                   <h3 className="text-sm font-black text-[#08075C] mb-4 uppercase tracking-widest flex items-center gap-2">
                     <Settings size={14} className="text-[#3A38DE]" /> Public Profile
                   </h3>
                   <div className="space-y-6">
                     <div>
                       <label className="block text-xs font-bold text-[#08075C] mb-2 uppercase tracking-wide">Short Bio</label>
                       <textarea 
                         name="bio"
                         value={extraProfile.bio} 
                         onChange={handleExtraChange}
                         className="w-full bg-[#F8F9FB] border border-gray-200 rounded-2xl py-3 px-4 text-sm font-medium outline-none focus:border-[#3A38DE] focus:bg-white resize-none transition-all h-28"
                         placeholder="I am a full-stack developer passionate about building..."
                       />
                       <p className="text-right text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-widest">{250 - extraProfile.bio.length} chars left</p>
                     </div>
                   </div>
                </div>

                <hr className="border-gray-100" />

                {/* Social Links */}
                <div>
                   <h3 className="text-sm font-black text-[#08075C] mb-4 uppercase tracking-widest flex items-center gap-2">
                     <Globe size={14} className="text-[#3A38DE]" /> Social Links
                   </h3>
                   <div className="space-y-4">
                     <div className="relative">
                       <Github size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                       <input 
                         type="url" name="github" value={extraProfile.github} onChange={handleExtraChange}
                         className="w-full bg-[#F8F9FB] border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-sm font-medium outline-none focus:border-[#3A38DE] focus:bg-white transition-all" 
                         placeholder="https://github.com/username"
                       />
                     </div>
                     <div className="relative">
                       <Linkedin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                       <input 
                         type="url" name="linkedin" value={extraProfile.linkedin} onChange={handleExtraChange}
                         className="w-full bg-[#F8F9FB] border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-sm font-medium outline-none focus:border-[#3A38DE] focus:bg-white transition-all" 
                         placeholder="https://linkedin.com/in/username"
                       />
                     </div>
                     <div className="relative">
                       <Globe size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                       <input 
                         type="url" name="portfolio" value={extraProfile.portfolio} onChange={handleExtraChange}
                         className="w-full bg-[#F8F9FB] border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-sm font-medium outline-none focus:border-[#3A38DE] focus:bg-white transition-all" 
                         placeholder="https://yourportfolio.com"
                       />
                     </div>
                   </div>
                </div>

                {/* Save Footer */}
                <div className="flex justify-end pt-4">
                  <button 
                    onClick={handleSave}
                    disabled={isSaving}
                    className="flex items-center gap-2 bg-[#3A38DE] hover:bg-[#2A29B0] text-white px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-[#3A38DE]/20 hover:shadow-[#3A38DE]/40 transition-all active:scale-[0.98] disabled:opacity-70 disabled:scale-100"
                  >
                    {isSaving ? (
                      <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin"></span>
                    ) : (
                      <>
                        {saveSuccess ? <CheckCircle2 size={16} /> : <Save size={16} />} 
                        {saveSuccess ? 'Saved!' : 'Save Changes'}
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* --- SECURITY TAB --- */}
            {activeTab === 'security' && (
              <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div>
                   <h2 className="text-xl font-black text-[#08075C] mb-1">Security Settings</h2>
                   <p className="text-gray-400 text-sm font-medium">Protect your account and manage authentication.</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#08075C] mb-2 uppercase tracking-wide">Current Password</label>
                    <input type="password" placeholder="••••••••" className="w-full max-w-sm bg-[#F8F9FB] border border-gray-200 rounded-xl py-3 px-4 text-sm font-medium outline-none focus:border-[#3A38DE] focus:bg-white transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#08075C] mb-2 uppercase tracking-wide">New Password</label>
                    <input type="password" placeholder="••••••••" className="w-full max-w-sm bg-[#F8F9FB] border border-gray-200 rounded-xl py-3 px-4 text-sm font-medium outline-none focus:border-[#3A38DE] focus:bg-white transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#08075C] mb-2 uppercase tracking-wide">Confirm New Password</label>
                    <input type="password" placeholder="••••••••" className="w-full max-w-sm bg-[#F8F9FB] border border-gray-200 rounded-xl py-3 px-4 text-sm font-medium outline-none focus:border-[#3A38DE] focus:bg-white transition-all" />
                  </div>
                </div>

                <div>
                   <button className="bg-[#08075C] text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#1a1963] transition-colors">
                     Update Password
                   </button>
                </div>

                <hr className="border-gray-100" />
                
                <div className="flex items-center justify-between p-5 bg-blue-50/50 rounded-2xl border border-blue-100/50">
                   <div>
                     <h4 className="text-sm font-bold text-[#08075C]">Two-Factor Authentication</h4>
                     <p className="text-[11px] text-gray-500 font-medium">Add an extra layer of security to your account.</p>
                   </div>
                   <button className="bg-white border text-[#3A38DE] px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-gray-50 transition-colors">
                     Enable 2FA
                   </button>
                </div>
              </div>
            )}

            {/* --- PREFERENCES TAB --- */}
            {activeTab === 'preferences' && (
              <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div>
                   <h2 className="text-xl font-black text-[#08075C] mb-1">Preferences</h2>
                   <p className="text-gray-400 text-sm font-medium">Manage your notifications and dashboard layout.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xs font-black text-[#08075C] mb-2 uppercase tracking-widest border-b border-gray-100 pb-2">Email Notifications</h3>
                  
                  <label className="flex items-center justify-between p-4 border border-gray-100 rounded-2xl hover:bg-[#F8F9FB] transition-colors cursor-pointer group">
                    <div>
                      <h4 className="text-sm font-bold text-[#08075C]">Platform Announcements</h4>
                      <p className="text-[11px] text-gray-500 font-medium mt-0.5">Receive updates about new features and updates.</p>
                    </div>
                    <div className="w-10 h-6 bg-[#3A38DE] rounded-full relative transition-colors shadow-inner">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
                    </div>
                  </label>

                  <label className="flex items-center justify-between p-4 border border-gray-100 rounded-2xl hover:bg-[#F8F9FB] transition-colors cursor-pointer group">
                    <div>
                      <h4 className="text-sm font-bold text-[#08075C]">Collaboration Invites</h4>
                      <p className="text-[11px] text-gray-500 font-medium mt-0.5">Get notified when someone matches your project or invites you.</p>
                    </div>
                    <div className="w-10 h-6 bg-[#3A38DE] rounded-full relative transition-colors shadow-inner">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
                    </div>
                  </label>
                  
                  <label className="flex items-center justify-between p-4 border border-gray-100 rounded-2xl hover:bg-[#F8F9FB] transition-colors cursor-pointer group">
                    <div>
                      <h4 className="text-sm font-bold text-[#08075C]">Weekly Digest</h4>
                      <p className="text-[11px] text-gray-500 font-medium mt-0.5">A summary of the trending projects in your fields every Monday.</p>
                    </div>
                    <div className="w-10 h-6 bg-gray-200 rounded-full relative transition-colors shadow-inner">
                      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
                    </div>
                  </label>
                </div>

              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
}
