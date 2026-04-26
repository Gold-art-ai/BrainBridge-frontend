"use client";

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Upload, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ProfileSetupPage() {
  const router = useRouter();
  const fileInputRef = useRef(null);
  
  const [preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file');
      return;
    }

    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB');
      return;
    }

    setError('');
    setSelectedFile(file);
    
    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError('Please select a file first');
      return;
    }

    const token = localStorage.getItem('token');
    console.log('[ProfileSetup] Token:', token ? `${token.substring(0, 20)}...` : 'MISSING');

    if (!token) {
      setError('Session expired. Please log in again.');
      router.push('/auth/login');
      return;
    }

    setIsUploading(true);
    setError('');

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8081';
      const res = await fetch(`${apiUrl}/api/users/me/profile-picture`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          // Do NOT set Content-Type — browser sets it with the correct boundary for multipart
        },
        body: formData,
      });

      console.log('[ProfileSetup] Response status:', res.status);
      const data = await res.json();
      console.log('[ProfileSetup] Response data:', data);

      if (!res.ok) {
        throw new Error(data.error || data.message || `Upload failed (${res.status})`);
      }

      router.push('/dashboard');
    } catch (err) {
      console.error('[ProfileSetup] Upload error:', err);
      setError(err.message || 'Failed to upload profile picture');
    } finally {
      setIsUploading(false);
    }
  };

  const handleSkip = () => {
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-[var(--bg)] dot-grid relative">
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[var(--primary)] opacity-[0.03] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-[500px] bg-white rounded-3xl border border-[var(--border)] shadow-2xl shadow-gray-200/40 p-8 sm:p-12">
        <Link href="/" className="text-xl font-extrabold text-[var(--primary)] mb-8 block" style={{ fontFamily: 'var(--font-heading)' }}>
          BrainBridge
        </Link>

        <h2 className="text-3xl font-extrabold text-[var(--text)] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
          Complete Your Profile
        </h2>
        <p className="text-sm text-[var(--text-muted)] mb-8">
          Add a profile picture to personalize your account (optional)
        </p>

        {error && (
          <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-semibold">
            {error}
          </div>
        )}

        <div className="flex flex-col items-center mb-8">
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="w-40 h-40 rounded-full border-4 border-dashed border-[var(--border)] flex items-center justify-center cursor-pointer hover:border-[var(--primary)] transition-colors overflow-hidden bg-[var(--bg)]"
          >
            {preview ? (
              <img src={preview} alt="Preview" className="w-full h-full object-cover" />
            ) : (
              <div className="text-center">
                <User size={48} className="text-[var(--text-muted)] mx-auto mb-2" />
                <p className="text-xs text-[var(--text-muted)] font-semibold">Click to upload</p>
              </div>
            )}
          </div>
          
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />

          {selectedFile && (
            <p className="mt-4 text-sm text-[var(--text-muted)]">
              {selectedFile.name} ({(selectedFile.size / 1024).toFixed(1)} KB)
            </p>
          )}
        </div>

        <div className="space-y-3">
          <button
            onClick={handleUpload}
            disabled={!selectedFile || isUploading}
            className="btn-primary w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isUploading ? (
              'Uploading...'
            ) : (
              <>
                <Upload size={16} />
                Upload & Continue
              </>
            )}
          </button>

          <button
            onClick={handleSkip}
            disabled={isUploading}
            className="w-full py-3.5 rounded-xl font-semibold text-sm text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--bg)] transition-colors flex items-center justify-center gap-2"
          >
            Skip for now <ArrowRight size={16} />
          </button>
        </div>

        <p className="text-xs text-[var(--text-muted)] text-center mt-6">
          Supported formats: JPG, PNG, GIF (max 5MB)
        </p>
      </div>
    </div>
  );
}
