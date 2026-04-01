"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRegisterMutation } from '../../redux/api/UserApiSlice';
import { ArrowRight, Eye, EyeOff, Check } from 'lucide-react';

export default function SignUpPage() {
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [registerUser] = useRegisterMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '', firstName: '', lastName: '', email: '', password: '', confirmPassword: '', isSubmitting: false
  });

  const [requirements, setRequirements] = useState({ length: false, upper: false, number: false, special: false });

  useEffect(() => {
    const pass = formData.password;
    setRequirements({
      length: pass.length >= 8,
      upper: /[A-Z]/.test(pass),
      number: /[0-9]/.test(pass),
      special: /[^A-Za-z0-9]/.test(pass)
    });
  }, [formData.password]);

  const handleSignUp = async () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email format";

    ['username', 'firstName', 'lastName'].forEach(field => {
      if (!formData[field].trim()) newErrors[field] = "Required";
    });

    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    if (!requirements.length || !requirements.upper || !requirements.number || !requirements.special) {
      newErrors.password = "Password does not meet all requirements";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setFormData(prev => ({ ...prev, isSubmitting: true }));
      try {
        await registerUser(formData).unwrap();
        router.push('/auth/login');
      } catch (error) {
        if (error.data?.fieldErrors) setErrors(error.data.fieldErrors);
      } finally {
        setFormData(prev => ({ ...prev, isSubmitting: false }));
      }
    }
  };

  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: false }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-[var(--bg)] dot-grid relative">
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[var(--secondary)] opacity-[0.03] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-[1000px] bg-white rounded-3xl border border-[var(--border)] shadow-2xl shadow-gray-200/40 overflow-hidden flex flex-col lg:flex-row">
        
        {/* LEFT — Form */}
        <div className="w-full lg:w-1/2 p-8 sm:p-10 lg:p-12">
          <Link href="/" className="text-xl font-extrabold text-[var(--primary)] mb-8 block" style={{ fontFamily: 'var(--font-heading)' }}>
            BrainBridge
          </Link>

          <h2 className="text-3xl font-extrabold text-[var(--text)] mb-1" style={{ fontFamily: 'var(--font-heading)' }}>Create an account</h2>
          <p className="text-sm text-[var(--text-muted)] mb-7">
            Already a member?{' '}
            <Link href="/auth/login" className="text-[var(--primary)] font-semibold hover:underline">Log In</Link>
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">Username</label>
              <input type="text" value={formData.username} onChange={(e) => handleChange(e, 'username')}
                className={`input-field w-full rounded-xl px-4 py-3 text-sm ${errors.username ? 'error-ring animate-shake' : ''}`} />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">First Name</label>
                <input type="text" value={formData.firstName} onChange={(e) => handleChange(e, 'firstName')}
                  className="input-field w-full rounded-xl px-4 py-3 text-sm" />
              </div>
              <div className="flex-1">
                <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">Last Name</label>
                <input type="text" value={formData.lastName} onChange={(e) => handleChange(e, 'lastName')}
                  className="input-field w-full rounded-xl px-4 py-3 text-sm" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">Email</label>
              <input type="email" value={formData.email} onChange={(e) => handleChange(e, 'email')} placeholder="name@university.edu"
                className={`input-field w-full rounded-xl px-4 py-3 text-sm ${errors.email ? 'error-ring animate-shake' : ''}`} />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">Password</label>
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} value={formData.password} onChange={(e) => handleChange(e, 'password')}
                  className="input-field w-full rounded-xl px-4 py-3 pr-11 text-sm" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text)]">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2.5">
                {[
                  { label: '8+ characters', met: requirements.length },
                  { label: 'Uppercase', met: requirements.upper },
                  { label: 'Number', met: requirements.number },
                  { label: 'Special char', met: requirements.special },
                ].map(r => (
                  <div key={r.label} className="flex items-center gap-1.5">
                    <div className={`w-3.5 h-3.5 rounded-full flex items-center justify-center transition-colors ${r.met ? 'bg-[var(--secondary)]' : 'bg-gray-200'}`}>
                      {r.met && <Check size={8} className="text-white" strokeWidth={3} />}
                    </div>
                    <span className={`text-[10px] font-semibold ${r.met ? 'text-[var(--secondary)]' : 'text-[var(--text-muted)]'}`}>{r.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1.5">Confirm Password</label>
              <input type="password" value={formData.confirmPassword} onChange={(e) => handleChange(e, 'confirmPassword')}
                className={`input-field w-full rounded-xl px-4 py-3 text-sm ${errors.confirmPassword ? 'error-ring animate-shake' : ''}`} />
              {errors.confirmPassword && <span className="text-[10px] text-[var(--accent)] font-semibold mt-1 block">{errors.confirmPassword}</span>}
            </div>

            <button onClick={handleSignUp}
              className="btn-primary w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 mt-1">
              {formData.isSubmitting ? 'Creating...' : 'Create Account'} <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* RIGHT — Brand Panel */}
        <div className="hidden lg:flex w-1/2 bg-[var(--bg)] relative items-center justify-center p-14">
          <div className="relative z-10 text-center">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-8 mx-auto border border-[var(--border)]">
              <i className="fa-solid fa-code-branch text-3xl text-[var(--primary)] opacity-60"></i>
            </div>
            <h3 className="text-2xl font-extrabold text-[var(--text)] mb-3 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
              Build. Showcase.<br/>Connect.
            </h3>
            <p className="text-sm text-[var(--text-muted)] max-w-xs mx-auto leading-relaxed">
              Join a community of student innovators transforming ideas into visible, impactful projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}