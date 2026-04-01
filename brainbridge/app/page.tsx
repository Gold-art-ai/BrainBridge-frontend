"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, ChevronRight, Layers, Users, TrendingUp, Shield, 
  Zap, Globe, Check, Menu, X, Sparkles, BarChart3, BookOpen
} from 'lucide-react';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
];

const FIELDS = [
  { name: 'Agriculture', color: '#4CAF50' },
  { name: 'Healthcare', color: '#FF5C8D' },
  { name: 'AI', color: '#6C63FF' },
  { name: 'Education', color: '#FFA726' },
  { name: 'Cybersecurity', color: '#EF5350' },
  { name: 'Finance', color: '#AB47BC' },
  { name: 'Energy', color: '#FFD54F' },
  { name: 'Smart Cities', color: '#5C6BC0' },
  { name: 'Tourism', color: '#29B6F6' },
  { name: 'Sustainability', color: '#66BB6A' },
];

const FEATURES = [
  {
    icon: <Layers size={24} />,
    title: 'Project Portfolio',
    desc: 'Showcase your work with rich project pages featuring tech stacks, field tags, SDG alignment, and media galleries.',
  },
  {
    icon: <Users size={24} />,
    title: 'Collaboration Hub',
    desc: 'Find teammates by skills and interests. Tag collaborators, share repositories, and build together across disciplines.',
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Discovery Feed',
    desc: 'A social-style feed that surfaces trending projects in your field. Like, bookmark, and follow creators you admire.',
  },
  {
    icon: <Shield size={24} />,
    title: 'SDG & NST2 Alignment',
    desc: 'Map your projects to UN Sustainable Development Goals and Rwanda\'s NST2 strategy to demonstrate real-world impact.',
  },
  {
    icon: <BarChart3 size={24} />,
    title: 'Analytics Dashboard',
    desc: 'Track views, engagement, and field rankings. Understand how your projects perform across the platform.',
  },
  {
    icon: <BookOpen size={24} />,
    title: 'Multi-Field Taxonomy',
    desc: '14 fields, 13 main tech domains, and 150+ sub-tags. Precisely categorize and discover projects across any discipline.',
  },
];

const STEPS = [
  { number: '01', title: 'Create Your Profile', desc: 'Sign up, set your field of interest, and configure your developer profile with skills and social links.' },
  { number: '02', title: 'Submit Your Project', desc: 'Add your project with a rich description, tech stack tags, SDG goals, cover images, and repository links.' },
  { number: '03', title: 'Get Discovered', desc: 'Your project appears in the discovery feed. Peers can like, comment, and bookmark. Enterprises can reach out.' },
];

const PRICING = [
  {
    name: 'Student',
    price: 'Free',
    period: 'forever',
    desc: 'Perfect for individual students and learners.',
    features: ['Up to 5 projects', 'Basic analytics', 'Public profile', 'SDG tagging', 'Community feed access'],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$4',
    period: '/month',
    desc: 'For serious builders who want full visibility.',
    features: ['Unlimited projects', 'Advanced analytics', 'Priority in feed', 'Custom profile banner', 'Media gallery uploads', 'Enterprise visibility'],
    cta: 'Start Pro Trial',
    highlighted: true,
  },
  {
    name: 'University',
    price: 'Custom',
    period: '',
    desc: 'For institutions managing cohorts of students.',
    features: ['Unlimited students', 'Admin dashboard', 'Cohort analytics', 'Custom branding', 'API access', 'Dedicated support'],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

const STATS = [
  { value: '2,400+', label: 'Projects Submitted' },
  { value: '14', label: 'Innovation Fields' },
  { value: '150+', label: 'Technology Tags' },
  { value: '17', label: 'SDG Goals Covered' },
];

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      
      {/* ═══ NAVBAR ═══ */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-extrabold text-[var(--primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
            BrainBridge
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/auth/login" className="text-sm font-semibold text-[var(--text)] hover:text-[var(--primary)] transition-colors px-4 py-2">
              Log In
            </Link>
            <Link href="/auth/signup" className="btn-primary text-sm font-semibold px-5 py-2.5 rounded-xl">
              Sign Up Free
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-[var(--text)]">
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[var(--border)] bg-white px-6 py-4 space-y-3 animate-slide-up">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-[var(--text-muted)] py-2">
                {link.label}
              </a>
            ))}
            <hr className="border-[var(--border)]" />
            <Link href="/auth/login" className="block text-sm font-semibold py-2">Log In</Link>
            <Link href="/auth/signup" className="btn-primary block text-center text-sm font-semibold px-5 py-2.5 rounded-xl">Sign Up Free</Link>
          </div>
        )}
      </nav>

      {/* ═══ HERO SECTION ═══ */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Subtle background gradient blobs */}
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[var(--primary)] opacity-[0.04] rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[var(--secondary)] opacity-[0.04] rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Copy */}
          <div className="flex-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[var(--primary)]/8 text-[var(--primary)] text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
              <Sparkles size={14} /> Now Open for All Universities
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Where Student Projects{' '}
              <span className="text-[var(--primary)]">Come to Life</span>
            </h1>

            <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-8 max-w-lg">
              BrainBridge is the platform where students showcase innovation, connect across disciplines, and get discovered by the people who matter.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/auth/signup" className="btn-primary inline-flex items-center gap-2 text-base font-semibold px-7 py-3.5 rounded-xl">
                Get Started <ArrowRight size={18} />
              </Link>
              <a href="#features" className="inline-flex items-center gap-2 text-base font-semibold text-[var(--text)] bg-white border border-[var(--border)] px-7 py-3.5 rounded-xl hover:border-[var(--primary)] transition-colors">
                Explore Features
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-sm text-[var(--text-muted)]">
              <span className="flex items-center gap-1.5"><Check size={16} className="text-[var(--secondary)]" /> Free to start</span>
              <span className="flex items-center gap-1.5"><Check size={16} className="text-[var(--secondary)]" /> No credit card</span>
              <span className="flex items-center gap-1.5"><Check size={16} className="text-[var(--secondary)]" /> 14 fields</span>
            </div>
          </div>

          {/* Right: Product Preview Card */}
          <div className="flex-1 max-w-lg w-full">
            <div className="bg-white rounded-3xl border border-[var(--border)] shadow-2xl shadow-[var(--primary)]/5 p-6 relative">
              {/* Mock Dashboard Preview */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 rounded-full bg-[#FF6058]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27CA40]"></div>
                <span className="text-[10px] text-[var(--text-muted)] ml-2 font-medium">BrainBridge Dashboard</span>
              </div>
              
              <div className="bg-[var(--bg)] rounded-2xl p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[var(--text-muted)] font-medium">Welcome back</p>
                    <p className="text-lg font-bold" style={{ fontFamily: 'var(--font-heading)' }}>Gold I. 👋</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center text-white text-sm font-bold">GI</div>
                </div>

                {/* Mini Stats */}
                <div className="grid grid-cols-3 gap-3">
                  {[{ l: 'Projects', v: '8' }, { l: 'Views', v: '2.4k' }, { l: 'Rank', v: '#12' }].map(s => (
                    <div key={s.l} className="bg-white rounded-xl p-3 text-center">
                      <p className="text-lg font-bold text-[var(--text)]">{s.v}</p>
                      <p className="text-[10px] text-[var(--text-muted)] font-medium">{s.l}</p>
                    </div>
                  ))}
                </div>

                {/* Mini Project Cards */}
                {[
                  { title: 'Wastenet', field: 'Clean cities', color: '#4CAF50' },
                  { title: 'GreenIQ', field: 'Clean cities', color: '#FF5C8D' },
                ].map(p => (
                  <div key={p.title} className="bg-white rounded-xl p-3.5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: p.color + '18', color: p.color }}>
                        <Layers size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{p.title}</p>
                        <p className="text-[10px] text-[var(--text-muted)]">{p.field}</p>
                      </div>
                    </div>
                    <ChevronRight size={16} className="text-[var(--text-muted)]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FIELD BADGES MARQUEE ═══ */}
      <section className="py-10 border-y border-[var(--border)] bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-6">Projects Across Every Sector</p>
          <div className="flex flex-wrap justify-center gap-3">
            {FIELDS.map(f => (
              <span key={f.name} className="badge" style={{ background: f.color + '12', color: f.color }}>
                <span className="w-2 h-2 rounded-full" style={{ background: f.color }}></span>
                {f.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map(s => (
            <div key={s.label}>
              <p className="text-3xl sm:text-4xl font-extrabold text-[var(--text)]" style={{ fontFamily: 'var(--font-heading)' }}>{s.value}</p>
              <p className="text-sm text-[var(--text-muted)] font-medium mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wider mb-3">Platform Features</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Everything you need to showcase your work
            </h2>
            <p className="text-[var(--text-muted)] text-lg">Built specifically for university students and academic innovators.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[var(--border)] p-7 hover:shadow-lg hover:shadow-[var(--primary)]/5 hover:border-[var(--primary)]/20 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/8 text-[var(--primary)] flex items-center justify-center mb-5 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{f.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section id="how-it-works" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-[var(--secondary)] uppercase tracking-wider mb-3">How It Works</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              From idea to visibility in minutes
            </h2>
            <p className="text-[var(--text-muted)] text-lg">Three steps to becoming part of the innovation community.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {STEPS.map((s, i) => (
              <div key={i} className="relative text-center">
                <div className="text-6xl font-extrabold text-[var(--primary)]/8 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>{s.number}</div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>{s.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-xs mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wider mb-3">Pricing</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Plans for every stage
            </h2>
            <p className="text-[var(--text-muted)] text-lg">Start free. Scale when you're ready.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PRICING.map((plan, i) => (
              <div key={i} className={`rounded-2xl p-8 border transition-all ${
                plan.highlighted 
                  ? 'bg-[var(--text)] text-white border-transparent shadow-2xl shadow-[var(--primary)]/15 scale-[1.03]' 
                  : 'bg-white border-[var(--border)] hover:shadow-lg hover:shadow-gray-200/50'
              }`}>
                <p className={`text-sm font-semibold mb-1 ${plan.highlighted ? 'text-[var(--secondary)]' : 'text-[var(--primary)]'}`}>{plan.name}</p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-extrabold" style={{ fontFamily: 'var(--font-heading)' }}>{plan.price}</span>
                  {plan.period && <span className={`text-sm ${plan.highlighted ? 'text-gray-400' : 'text-[var(--text-muted)]'}`}>{plan.period}</span>}
                </div>
                <p className={`text-sm mb-6 ${plan.highlighted ? 'text-gray-400' : 'text-[var(--text-muted)]'}`}>{plan.desc}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat, fi) => (
                    <li key={fi} className="flex items-center gap-2.5 text-sm">
                      <Check size={16} className={plan.highlighted ? 'text-[var(--secondary)]' : 'text-[var(--primary)]'} />
                      <span className={plan.highlighted ? 'text-gray-300' : 'text-[var(--text-muted)]'}>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/auth/signup" className={`block text-center py-3 rounded-xl text-sm font-semibold transition-all ${
                  plan.highlighted
                    ? 'bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]'
                    : 'bg-[var(--bg)] text-[var(--text)] hover:bg-[var(--primary)] hover:text-white border border-[var(--border)] hover:border-transparent'
                }`}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <p className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wider mb-3">About BrainBridge</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Bridging academia and industry
            </h2>
            <p className="text-[var(--text-muted)] text-base leading-relaxed mb-6">
              BrainBridge was born from a simple observation: brilliant student projects often die in classroom folders, unseen by the world. 
              We built a platform that gives every student — regardless of their university or field — a professional space to 
              showcase their innovation, connect with peers, and attract real-world opportunities.
            </p>
            <p className="text-[var(--text-muted)] text-base leading-relaxed mb-8">
              Our taxonomy covers 14 sectors from Agriculture to Smart Cities, aligns with the UN's 17 SDGs and Rwanda's NST2 strategy, 
              and supports 150+ technology sub-tags. Whether you're building an IoT sensor for farms or an AI model for healthcare, 
              BrainBridge is where your work gets the visibility it deserves.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/auth/signup" className="btn-primary inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-xl">
                Join the Community <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* About Visual */}
          <div className="flex-1 max-w-md w-full">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Globe size={28} />, label: 'Global Reach', sub: 'Open to all universities' },
                { icon: <Users size={28} />, label: 'Community First', sub: 'Built by students, for students' },
                { icon: <Zap size={28} />, label: 'Real Impact', sub: 'SDG + NST2 aligned' },
                { icon: <Shield size={28} />, label: 'Trusted', sub: 'Secure and transparent' },
              ].map((item, i) => (
                <div key={i} className="bg-[var(--bg)] rounded-2xl p-5 border border-[var(--border)]">
                  <div className="text-[var(--primary)] mb-3">{item.icon}</div>
                  <p className="text-sm font-bold mb-0.5">{item.label}</p>
                  <p className="text-xs text-[var(--text-muted)]">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center bg-[var(--text)] rounded-3xl px-8 sm:px-16 py-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)] rounded-full opacity-10 blur-[80px] pointer-events-none"></div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>
            Ready to showcase your projects?
          </h2>
          <p className="text-gray-400 text-base mb-8 max-w-md mx-auto relative z-10">
            Join thousands of students already building their portfolio on BrainBridge. It's free to start.
          </p>
          <Link href="/auth/signup" className="btn-primary inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded-xl relative z-10">
            Create Your Free Account <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-white border-t border-[var(--border)] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            <div className="col-span-2 md:col-span-1">
              <p className="text-lg font-extrabold text-[var(--primary)] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>BrainBridge</p>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">Where student projects come to life. Built for innovators, by innovators.</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-[var(--text)] uppercase tracking-wider mb-4">Product</p>
              <ul className="space-y-2.5">
                {['Features', 'Pricing', 'Explore Projects', 'Discovery Feed'].map(l => (
                  <li key={l}><a href="#" className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-[var(--text)] uppercase tracking-wider mb-4">Company</p>
              <ul className="space-y-2.5">
                {['About', 'Blog', 'Careers', 'Contact'].map(l => (
                  <li key={l}><a href="#" className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-[var(--text)] uppercase tracking-wider mb-4">Legal</p>
              <ul className="space-y-2.5">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(l => (
                  <li key={l}><a href="#" className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[var(--border)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[var(--text-muted)]">© {new Date().getFullYear()} BrainBridge. All rights reserved.</p>
            <div className="flex items-center gap-5">
              {['fa-brands fa-github', 'fa-brands fa-linkedin', 'fa-brands fa-x-twitter'].map(icon => (
                <a key={icon} href="#" className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">
                  <i className={`${icon} text-base`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
