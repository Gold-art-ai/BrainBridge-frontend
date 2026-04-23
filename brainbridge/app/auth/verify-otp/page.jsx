"use client";

import { useState, useRef, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useVerifyOTPMutation, useResendOTPMutation } from '../../redux/api/UserApiSlice';
import { Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function VerifyOTPPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  
  const [verifyOTP, { isLoading }] = useVerifyOTPMutation();
  const [resendOTP, { isLoading: isResending }] = useResendOTPMutation();
  
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [countdown, setCountdown] = useState(0);
  
  const inputRefs = useRef([]);

  useEffect(() => {
    if (!email) {
      router.push('/auth/signup');
    }
  }, [email, router]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // Only allow digits

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Only take last character
    setOtp(newOtp);
    setError('');

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];
    pastedData.split('').forEach((char, i) => {
      if (i < 6) newOtp[i] = char;
    });
    setOtp(newOtp);
    
    // Focus last filled input or next empty
    const nextIndex = Math.min(pastedData.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  const handleVerify = async () => {
    const otpCode = otp.join('');
    
    if (otpCode.length !== 6) {
      setError('Please enter all 6 digits');
      return;
    }

    try {
      await verifyOTP({ email, otp: otpCode }).unwrap();
      setSuccess('Email verified successfully!');
      setTimeout(() => {
        router.push('/auth/profile-setup');
      }, 1000);
    } catch (err) {
      setError(err.data?.message || 'Invalid or expired code');
      setOtp(['', '', '', '', '', '']);
      inputRefs.current[0]?.focus();
    }
  };

  const handleResend = async () => {
    if (countdown > 0) return;

    try {
      await resendOTP({ email }).unwrap();
      setSuccess('New code sent to your email');
      setCountdown(60);
      setOtp(['', '', '', '', '', '']);
      inputRefs.current[0]?.focus();
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err.data?.message || 'Failed to resend code');
    }
  };

  if (!email) return null;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-[var(--bg)] dot-grid relative">
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[var(--secondary)] opacity-[0.03] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-[480px] bg-white rounded-3xl border border-[var(--border)] shadow-2xl shadow-gray-200/40 p-8 sm:p-12">
        <Link href="/" className="text-xl font-extrabold text-[var(--primary)] mb-8 block" style={{ fontFamily: 'var(--font-heading)' }}>
          BrainBridge
        </Link>

        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 bg-[var(--bg)] rounded-2xl flex items-center justify-center">
            <Mail size={32} className="text-[var(--primary)]" />
          </div>
        </div>

        <h2 className="text-3xl font-extrabold text-[var(--text)] mb-2 text-center" style={{ fontFamily: 'var(--font-heading)' }}>
          Verify Your Email
        </h2>
        <p className="text-sm text-[var(--text-muted)] mb-8 text-center">
          We sent a 6-digit code to<br />
          <span className="font-semibold text-[var(--text)]">{email}</span>
        </p>

        {error && (
          <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-semibold text-center">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-6 p-3 bg-green-50 border border-green-200 text-green-600 rounded-xl text-sm font-semibold text-center">
            {success}
          </div>
        )}

        <div className="flex gap-3 justify-center mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className="w-12 h-14 text-center text-2xl font-bold border-2 border-[var(--border)] rounded-xl focus:border-[var(--primary)] focus:outline-none transition-colors"
              autoFocus={index === 0}
            />
          ))}
        </div>

        <button
          onClick={handleVerify}
          disabled={isLoading || otp.join('').length !== 6}
          className="btn-primary w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Verifying...' : 'Verify Email'} <ArrowRight size={16} />
        </button>

        <div className="text-center">
          <p className="text-sm text-[var(--text-muted)] mb-2">
            Didn't receive the code?
          </p>
          <button
            onClick={handleResend}
            disabled={countdown > 0 || isResending}
            className="text-sm font-semibold text-[var(--primary)] hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isResending ? 'Sending...' : countdown > 0 ? `Resend in ${countdown}s` : 'Resend Code'}
          </button>
        </div>
      </div>
    </div>
  );
}
