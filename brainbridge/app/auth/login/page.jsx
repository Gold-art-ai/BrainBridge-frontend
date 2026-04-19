"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useLoginMutation } from '../../redux/api/UserApiSlice';
import { useRouter } from 'next/navigation';
import { ArrowRight, Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';

export default function LoginPage() {
  const [formData, setFormData] = useState({ emailOrUsername: '', password: '' });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [login] = useLoginMutation();

  const handleLogin = async () => {
    let newErrors = {};
    if (!formData.emailOrUsername) newErrors.emailOrUsername = "Required";
    if (!formData.password) newErrors.password = "Required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const res = await login(formData).unwrap();
      if (res.data?.token) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
      }
      setErrors({});
      router.push('/dashboard');
    } catch (error) {
      if (error.data?.fieldErrors) {
        newErrors = { ...newErrors, ...error.data.fieldErrors };
      } else if (error.data?.message) {
        newErrors._root = error.data.message;
      } else {
        newErrors._root = "Login failed. Please check your credentials.";
      }
      setErrors(newErrors);
    }
  };

  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: false }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-[var(--bg)] dot-grid relative">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[var(--primary)] opacity-[0.03] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-[960px] bg-white rounded-3xl border border-[var(--border)] shadow-2xl shadow-gray-200/40 overflow-hidden flex flex-col lg:flex-row">
        
        {/* LEFT — Form */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-14">
          <Link href="/" className="text-xl font-extrabold text-[var(--primary)] mb-10 block" style={{ fontFamily: 'var(--font-heading)' }}>
            BrainBridge
          </Link>

          <h2 className="text-3xl font-extrabold text-[var(--text)] mb-1" style={{ fontFamily: 'var(--font-heading)' }}>Welcome back</h2>
          <p className="text-sm text-[var(--text-muted)] mb-8">
            Don't have an account?{' '}
            <Link href="/auth/signup" className="text-[var(--primary)] font-semibold hover:underline">Sign Up</Link>
          </p>

          <div className="space-y-5">
            {errors._root && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-semibold">
                {errors._root}
              </div>
            )}
            <div>
              <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">Email or Username</label>
              <input type="text" value={formData.emailOrUsername} onChange={(e) => handleChange(e, 'emailOrUsername')}
                className={`input-field w-full rounded-xl px-4 py-3 text-sm ${errors.emailOrUsername ? 'error-ring animate-shake' : ''}`}
                placeholder="Email or Username" />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Password</label>
                <Link href="/forgot" className="text-xs font-semibold text-[var(--primary)] hover:underline">Forgot?</Link>
              </div>
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} value={formData.password} onChange={(e) => handleChange(e, 'password')}
                  className={`input-field w-full rounded-xl px-4 py-3 pr-11 text-sm ${errors.password ? 'error-ring animate-shake' : ''}`} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text)]">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" className="w-4 h-4 accent-[var(--primary)] cursor-pointer rounded" />
              <label htmlFor="remember" className="text-xs text-[var(--text-muted)] font-medium cursor-pointer">Keep me logged in</label>
            </div>

            <button onClick={handleLogin} className="btn-primary w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 mt-2">
              Sign In <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* RIGHT — Brand Panel */}
        <div className="hidden lg:flex w-1/2 bg-[var(--bg)] relative items-center justify-center p-14">
          <div className="relative z-10 text-center">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-8 mx-auto border border-[var(--border)]">
              {/* Logo */}
              <Image src="/logo.png" alt="BrainBridge" width={80} height={80} />
            </div>
            <h3 className="text-2xl font-extrabold text-[var(--text)] mb-3 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Showcase Your<br/>Innovation
            </h3>
            <p className="text-sm text-[var(--text-muted)] max-w-xs mx-auto leading-relaxed">
              Access your dashboard, discover trending projects, and connect with peers across 14 innovation fields.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}