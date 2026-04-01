"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function PublicHero({ projects = [] }) {
  const featured = projects[0];

  return (
    <section className="relative bg-[var(--text)] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[var(--primary)] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[var(--secondary)] rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28 relative z-10">
        <div className="max-w-3xl">
          <p className="text-[var(--primary)] text-sm font-semibold mb-4 uppercase tracking-wider">Explore Hub</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Discover student projects<br/>across every discipline
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-xl">
            Browse innovations from 14 fields and 150+ technologies. Find inspiration, collaborate, and build the future.
          </p>
          <div className="flex gap-4">
            <Link href="/auth/signup" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold">
              Start Sharing <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}