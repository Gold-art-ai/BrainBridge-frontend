"use client";
import React, { useState, useEffect } from 'react';
import { Camera, Save, User as UserIcon, Shield, Settings, Github, Linkedin, Globe, CheckCircle2 } from 'lucide-react';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('general');
  const [user, setUser] = useState(null);
  const [extraProfile, setExtraProfile] = useState({ bio: '', github: '', linkedin: '', portfolio: '' });
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const toTitleCase = (str) => {
    if (!str || typeof str !== 'string') return '';
    return str
      .toLowerCase()
      .split(' ')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
  };

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) { try { setUser(JSON.parse(userStr)); } catch (e) {} }
    const extraStr = localStorage.getItem('brainbridge_extra_profile');
    if (extraStr) { try { setExtraProfile(JSON.parse(extraStr)); } catch (e) {} }
  }, []);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      localStorage.setItem('brainbridge_extra_profile', JSON.stringify(extraProfile));
      setIsSaving(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    }, 600);
  };

  const handleExtraChange = (e) => {
    const { name, value } = e.target;
    setExtraProfile(prev => ({ ...prev, [name]: value }));
  };

  if (!user) return <div className="p-8 text-[var(--text-muted)]">Loading Profile...</div>;

  const fullNameRaw = `${user.firstName || ''} ${user.lastName || ''}`.trim() || user.username;
  const fullName = toTitleCase(fullNameRaw);
  const avatarUrl =
    user.profilePicture ||
    user.profileImageUrl ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(fullName)}&background=6C63FF&color=fff&bold=true`;

  return (
    <div className="max-w-[960px] mx-auto pb-10">
      {/* Banner */}
      <div className="relative w-full h-44 sm:h-56 rounded-2xl overflow-hidden mb-16 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)]">
        <button className="absolute top-4 right-4 bg-white/15 hover:bg-white/25 backdrop-blur-md px-4 py-2 rounded-lg text-xs font-semibold text-white transition-colors flex items-center gap-2">
          <Camera size={14} /> Edit Cover
        </button>
        <div className="absolute -bottom-12 left-8 flex items-end gap-5">
          <div className="relative group cursor-pointer w-24 h-24 rounded-2xl bg-white p-1.5 shadow-lg border border-[var(--border)]">
            <img src={avatarUrl} alt={fullName} className="w-full h-full rounded-xl object-cover" />
            <div className="absolute inset-1.5 rounded-xl bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
              <Camera size={20} />
            </div>
          </div>
          <div className="mb-14">
            <h1 className="text-2xl font-extrabold text-white" style={{ fontFamily: 'var(--font-heading)' }}>{fullName}</h1>
            <p className="text-white/70 text-sm font-medium">@{user.username}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Settings Nav */}
        <div className="w-full lg:w-56 flex-shrink-0">
          <div className="bg-white rounded-2xl p-2 border border-[var(--border)] sticky top-20">
            {[
              { key: 'general', icon: <UserIcon size={16} />, label: 'General' },
              { key: 'security', icon: <Shield size={16} />, label: 'Security' },
              { key: 'preferences', icon: <Settings size={16} />, label: 'Preferences' },
            ].map(tab => (
              <button key={tab.key} onClick={() => setActiveTab(tab.key)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  activeTab === tab.key ? 'bg-[var(--bg)] text-[var(--text)]' : 'text-[var(--text-muted)] hover:bg-[var(--bg)]'
                }`}>
                <span className={activeTab === tab.key ? 'text-[var(--primary)]' : ''}>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="bg-white rounded-2xl p-8 border border-[var(--border)]">
            
            {activeTab === 'general' && (
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h2 className="text-xl font-extrabold text-[var(--text)] mb-1" style={{ fontFamily: 'var(--font-heading)' }}>Personal Details</h2>
                  <p className="text-[var(--text-muted)] text-sm">Update your profile information.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">First Name</label>
                    <input type="text" disabled defaultValue={toTitleCase(user.firstName)} className="input-field w-full rounded-xl py-2.5 px-4 text-sm opacity-60 cursor-not-allowed" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">Last Name</label>
                    <input type="text" disabled defaultValue={toTitleCase(user.lastName)} className="input-field w-full rounded-xl py-2.5 px-4 text-sm opacity-60 cursor-not-allowed" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">Email</label>
                    <input type="email" disabled defaultValue={user.email} className="input-field w-full rounded-xl py-2.5 px-4 text-sm opacity-60 cursor-not-allowed" />
                  </div>
                </div>

                <hr className="border-[var(--border)]" />

                <div className="space-y-5">
                  <h3 className="text-sm font-bold text-[var(--text)] uppercase tracking-wider">Bio</h3>
                  <textarea name="bio" value={extraProfile.bio} onChange={handleExtraChange}
                    className="input-field w-full rounded-xl py-3 px-4 text-sm resize-none h-24"
                    placeholder="Tell others about yourself..." />
                </div>

                <hr className="border-[var(--border)]" />

                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-[var(--text)] uppercase tracking-wider">Social Links</h3>
                  {[
                    { icon: <Github size={16} />, name: 'github', placeholder: 'https://github.com/username' },
                    { icon: <Linkedin size={16} />, name: 'linkedin', placeholder: 'https://linkedin.com/in/username' },
                    { icon: <Globe size={16} />, name: 'portfolio', placeholder: 'https://yoursite.com' },
                  ].map(s => (
                    <div key={s.name} className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">{s.icon}</span>
                      <input type="url" name={s.name} value={extraProfile[s.name]} onChange={handleExtraChange}
                        className="input-field w-full rounded-xl py-2.5 pl-11 pr-4 text-sm" placeholder={s.placeholder} />
                    </div>
                  ))}
                </div>

                <div className="flex justify-end pt-2">
                  <button onClick={handleSave} disabled={isSaving}
                    className="btn-primary px-6 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 disabled:opacity-60">
                    {isSaving ? <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"></span>
                     : <>{saveSuccess ? <CheckCircle2 size={16} /> : <Save size={16} />} {saveSuccess ? 'Saved!' : 'Save Changes'}</>}
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h2 className="text-xl font-extrabold text-[var(--text)] mb-1" style={{ fontFamily: 'var(--font-heading)' }}>Security</h2>
                  <p className="text-[var(--text-muted)] text-sm">Manage your password and authentication.</p>
                </div>
                <div className="space-y-4 max-w-sm">
                  {['Current Password', 'New Password', 'Confirm New Password'].map(label => (
                    <div key={label}>
                      <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">{label}</label>
                      <input type="password" placeholder="••••••••" className="input-field w-full rounded-xl py-2.5 px-4 text-sm" />
                    </div>
                  ))}
                </div>
                <button className="btn-primary px-5 py-2.5 rounded-xl text-sm font-semibold">Update Password</button>
              </div>
            )}

            {activeTab === 'preferences' && (
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h2 className="text-xl font-extrabold text-[var(--text)] mb-1" style={{ fontFamily: 'var(--font-heading)' }}>Preferences</h2>
                  <p className="text-[var(--text-muted)] text-sm">Manage your notification settings.</p>
                </div>
                <div className="space-y-3">
                  {[
                    { label: 'Platform Announcements', desc: 'New features and updates', on: true },
                    { label: 'Collaboration Invites', desc: 'When someone matches your project', on: true },
                    { label: 'Weekly Digest', desc: 'Trending projects summary every Monday', on: false },
                  ].map(pref => (
                    <div key={pref.label} className="flex items-center justify-between p-4 border border-[var(--border)] rounded-xl hover:bg-[var(--bg)] transition-colors">
                      <div>
                        <p className="text-sm font-semibold text-[var(--text)]">{pref.label}</p>
                        <p className="text-xs text-[var(--text-muted)]">{pref.desc}</p>
                      </div>
                      <div className={`w-9 h-5 rounded-full relative transition-colors cursor-pointer ${pref.on ? 'bg-[var(--primary)]' : 'bg-gray-200'}`}>
                        <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all shadow-sm ${pref.on ? 'right-0.5' : 'left-0.5'}`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
