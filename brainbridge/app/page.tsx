"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, ChevronRight, Layers, Users, TrendingUp, Shield, 
  Zap, Globe, Check, Menu, X, BarChart3, BookOpen
} from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

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
  { icon: <Layers size={24} />, title: 'Project Portfolio', desc: 'Showcase your work with rich project pages featuring tech stacks, field tags, SDG alignment, and media galleries.' },
  { icon: <Users size={24} />, title: 'Collaboration Hub', desc: 'Find teammates by skills and interests. Tag collaborators, share repositories, and build together across disciplines.' },
  { icon: <TrendingUp size={24} />, title: 'Discovery Feed', desc: 'A social-style feed that surfaces trending projects in your field. Like, bookmark, and follow creators you admire.' },
  { icon: <Shield size={24} />, title: 'SDG & NST2 Alignment', desc: 'Map your projects to UN Sustainable Development Goals and Rwanda\'s NST2 strategy to demonstrate real-world impact.' },
  { icon: <BarChart3 size={24} />, title: 'Analytics Dashboard', desc: 'Track views, engagement, and field rankings. Understand how your projects perform across the platform.' },
  { icon: <BookOpen size={24} />, title: 'Multi-Field Taxonomy', desc: '14 fields, 13 main tech domains, and 150+ sub-tags. Precisely categorize and discover projects across any discipline.' },
];

const STEPS = [
  { number: '01', title: 'Create Your Profile', desc: 'Sign up, set your field of interest, and configure your developer profile with skills and social links.' },
  { number: '02', title: 'Submit Your Project', desc: 'Add your project with a rich description, tech stack tags, SDG goals, cover images, and repository links.' },
  { number: '03', title: 'Get Discovered', desc: 'Your project appears in the discovery feed. Peers can like, comment, and bookmark. Enterprises can reach out.' },
];

const PRICING = [
  { name: 'Student', price: 'Free', period: 'forever', desc: 'Perfect for individual students and learners.', features: ['Up to 5 projects', 'Basic analytics', 'Public profile', 'SDG tagging', 'Community feed access'], cta: 'Get Started Free', highlighted: false },
  { name: 'Pro', price: '$4', period: '/month', desc: 'For serious builders who want full visibility.', features: ['Unlimited projects', 'Advanced analytics', 'Priority in feed', 'Custom profile banner', 'Media gallery uploads', 'Enterprise visibility'], cta: 'Start Pro Trial', highlighted: true },
  { name: 'University', price: 'Custom', period: '', desc: 'For institutions managing cohorts of students.', features: ['Unlimited students', 'Admin dashboard', 'Cohort analytics', 'Custom branding', 'API access', 'Dedicated support'], cta: 'Contact Sales', highlighted: false },
];

const STATS = [
  { value: '10+', label: 'Projects Submitted' },
  { value: '14', label: 'Innovation Fields' },
  { value: '150+', label: 'Technology Tags' },
  { value: '17', label: 'SDG Goals Covered' },
];

// Typing Effect
const TypingText = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Come to Life";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else clearInterval(interval);
    }, 75);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-[var(--primary)] relative inline-block font-extrabold">
      {displayText}
      <span className="animate-blink absolute -right-1 top-1/2 -translate-y-1/2 w-[4px] h-12 bg-[var(--primary)] rounded" />
    </span>
  );
};

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  // Scroll-driven hero depth
  const heroOpacity = useTransform(scrollY, [0, 700], [1, 0.55]);
  const heroScale = useTransform(scrollY, [0, 700], [1, 0.94]);
  const bgY = useTransform(scrollY, [0, 1200], [0, -180]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXProgress = useMotionValue(0.5);
  const mouseYProgress = useMotionValue(0.5);
  
  const cursorX = useSpring(x, { stiffness: 450, damping: 30 });
  const cursorY = useSpring(y, { stiffness: 450, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      mouseXProgress.set(e.clientX / window.innerWidth);
      mouseYProgress.set(e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y, mouseXProgress, mouseYProgress]);

  // Parallax Refs
  const featuresRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);

  // Smooth Spring Configuration
  const smoothConfig = { stiffness: 80, damping: 25, mass: 0.5 };

  // Hero Card 3D Rotation
  const cardRotateXRaw = useTransform(mouseYProgress, [0, 1], [15, -15]);
  const cardRotateYRaw = useTransform(mouseXProgress, [0, 1], [-15, 15]);
  const cardRotateX = useSpring(cardRotateXRaw, smoothConfig);
  const cardRotateY = useSpring(cardRotateYRaw, smoothConfig);

  // Features Parallax
  const { scrollYProgress: fProg } = useScroll({ target: featuresRef, offset: ["start end", "end start"] });
  const fY1Raw = useTransform(fProg, [0, 1], [150, -150]);
  const fY2Raw = useTransform(fProg, [0, 1], [250, -250]);
  const fY3Raw = useTransform(fProg, [0, 1], [50, -50]);
  const fY1 = useSpring(fY1Raw, smoothConfig);
  const fY2 = useSpring(fY2Raw, smoothConfig);
  const fY3 = useSpring(fY3Raw, smoothConfig);
  const featYArr = [fY1, fY2, fY3];

  // Steps Parallax
  const { scrollYProgress: sProg } = useScroll({ target: stepsRef, offset: ["start end", "end start"] });
  const sNumYRaw = useTransform(sProg, [0, 1], [-120, 120]);
  const sNumY = useSpring(sNumYRaw, smoothConfig);

  // Pricing Parallax
  const { scrollYProgress: pProg } = useScroll({ target: pricingRef, offset: ["start end", "end start"] });
  const pY1Raw = useTransform(pProg, [0, 1], [100, -100]);
  const pY2Raw = useTransform(pProg, [0, 1], [0, 0]); 
  const pY3Raw = useTransform(pProg, [0, 1], [-100, 100]);
  const pY1 = useSpring(pY1Raw, smoothConfig);
  const pY2 = useSpring(pY2Raw, smoothConfig);
  const pY3 = useSpring(pY3Raw, smoothConfig);
  const priceYArr = [pY1, pY2, pY3];
  
  // About Parallax
  const { scrollYProgress: aProg } = useScroll({ target: aboutRef, offset: ["start end", "end start"] });
  const aYTextRaw = useTransform(aProg, [0, 1], [80, -80]);
  const aYGridRaw = useTransform(aProg, [0, 1], [-100, 100]);
  const aYText = useSpring(aYTextRaw, smoothConfig);
  const aYGrid = useSpring(aYGridRaw, smoothConfig);

  // Cinematic shared variants
  const sectionVariant = {
    hidden: { opacity: 0, y: 110 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.15, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] }
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 90, scale: 0.94 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        delay: 0.12 + i * 0.09, 
        duration: 0.95, 
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
      }
    })
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 overflow-hidden relative">
      {/* Enhanced Interactive Cursor */}
      <motion.div 
        className="fixed w-11 h-11 pointer-events-none z-[100] hidden lg:block mix-blend-difference"
        style={{ 
          left: cursorX, 
          top: cursorY,
          x: "-50%",
          y: "-50%"
        }}
      >
        <div className="w-full h-full border border-[var(--primary)]/80 rounded-full flex items-center justify-center">
          <div className="w-3.5 h-3.5 bg-[var(--primary)] rounded-full scale-75" />
        </div>
      </motion.div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-extrabold tracking-tight text-[var(--primary)]">
            BrainBridge
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-all hover:scale-105">
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/auth/login" className="text-sm font-semibold px-5 py-2 text-zinc-600 hover:text-zinc-900 transition-colors">Log In</Link>
            <Link href="/auth/signup" className="btn-primary text-sm font-semibold px-6 py-2.5 rounded-2xl shadow-lg shadow-[var(--primary)]/20 hover:shadow-[var(--primary)]/50 transition-all active:scale-[0.97]">
              Sign Up Free
            </Link>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-zinc-700">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-100 bg-white px-6 py-6 space-y-4">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block py-3 text-lg text-zinc-600 hover:text-zinc-900">
                {link.label}
              </a>
            ))}
            <Link href="/auth/login" className="block py-3 text-lg">Log In</Link>
            <Link href="/auth/signup" className="btn-primary block text-center py-3.5 rounded-2xl">Sign Up Free</Link>
          </div>
        )}
      </nav>

      {/* HERO - Cinematic Staged Reveal + Scroll Parallax */}
      <section className="relative min-h-[100dvh] flex items-center pt-16 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-[var(--primary)] opacity-[0.045]"
          style={{ y: bgY }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="flex-1 max-w-2xl"
              style={{ opacity: heroOpacity, scale: heroScale }}
            >
              {/* Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 90 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="text-6xl sm:text-7xl lg:text-[5.1rem] font-extrabold leading-[1.01] tracking-[-2.5px] mb-8"
              >
                Where Developer Projects{' '}
                <TypingText />
              </motion.h1>

              {/* Subtext */}
              <motion.p 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 1 }}
                className="text-xl text-zinc-600 leading-relaxed mb-10 max-w-lg"
              >
                BrainBridge is the platform where students showcase innovation, connect across disciplines, and get discovered by the people who matter.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 1 }}
                className="flex flex-wrap gap-4 mb-12"
              >
                <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/auth/signup" className="btn-primary inline-flex items-center gap-3 text-lg font-semibold px-12 py-4.5 rounded-2xl shadow-2xl group">
                    Get Started 
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" size={22} />
                  </Link>
                </motion.div>
                <motion.a 
                  href="#features"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-3 text-lg font-semibold px-12 py-4.5 rounded-2xl border border-zinc-200 hover:border-[var(--primary)] hover:bg-zinc-50 transition-all"
                >
                  Explore Features
                </motion.a>
              </motion.div>

              {/* Trust signals */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.15 }}
                className="flex items-center gap-8 text-sm text-zinc-500"
              >
                <span className="flex items-center gap-2"><Check className="text-emerald-500" size={18} /> Free to start</span>
                <span className="flex items-center gap-2"><Check className="text-emerald-500" size={18} /> No credit card</span>
                <span className="flex items-center gap-2"><Check className="text-emerald-500" size={18} /> 14 fields</span>
              </motion.div>
            </motion.div>

            {/* 3D Dashboard tracking cursor */}
            <motion.div 
              className="flex-1 max-w-lg w-full"
              initial={{ opacity: 0, y: 140 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] as [number, number, number, number], delay: 0.6 }}
              style={{ perspective: 1800 }}
            >
              <motion.div 
                style={{ rotateX: cardRotateX, rotateY: cardRotateY }}
                className="bg-white rounded-3xl border border-zinc-100 shadow-2xl shadow-[var(--primary)]/35 p-7 relative overflow-hidden"
              >
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs text-zinc-500 ml-3 font-medium">BrainBridge Dashboard</span>
                </div>
                
                <div className="bg-zinc-50 rounded-2xl p-6 space-y-6 border border-zinc-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-zinc-500">Welcome back</p>
                      <p className="text-2xl font-bold tracking-tight">Gold I. 👋</p>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-[var(--primary)] flex items-center justify-center text-white font-bold text-xl">GI</div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {[{ l: 'Projects', v: '8' }, { l: 'Views', v: '2.4k' }, { l: 'Rank', v: '#12' }].map(s => (
                      <motion.div 
                        key={s.l} 
                        whileHover={{ y: -8, scale: 1.03 }}
                        className="bg-white rounded-2xl p-4 text-center border border-zinc-100 hover:border-[var(--primary)]/40"
                      >
                        <p className="text-3xl font-bold text-zinc-900">{s.v}</p>
                        <p className="text-xs text-zinc-500 mt-1">{s.l}</p>
                      </motion.div>
                    ))}
                  </div>

                  {[
                    { title: 'Wastenet', field: 'Clean cities', color: '#4CAF50' },
                    { title: 'GreenIQ', field: 'Clean cities', color: '#FF5C8D' },
                  ].map((p, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ x: 12 }}
                      className="bg-white rounded-2xl p-4 flex items-center justify-between border border-zinc-100 hover:border-[var(--primary)]/40 group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: p.color + '15', color: p.color }}>
                          <Layers size={20} />
                        </div>
                        <div>
                          <p className="font-semibold">{p.title}</p>
                          <p className="text-xs text-zinc-500">{p.field}</p>
                        </div>
                      </div>
                      <ChevronRight size={20} className="text-zinc-400 group-hover:text-[var(--primary)] transition" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FIELD BADGES MARQUEE */}
      <section className="py-10 border-y border-zinc-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-6">Projects Across Every Sector</p>
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {[...FIELDS, ...FIELDS].map((f, i) => (
              <span 
                key={i}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-medium border border-zinc-200 hover:border-[var(--primary)]/30 transition-all hover:scale-105"
                style={{ background: f.color + '10', color: f.color }}
              >
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: f.color }} />
                {f.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {STATS.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.9 }}
              className="group"
            >
              <p className="text-5xl font-extrabold tracking-tighter text-zinc-900 group-hover:text-[var(--primary)] transition-colors">{s.value}</p>
              <p className="text-sm text-zinc-500 mt-3 tracking-wide">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" ref={featuresRef} className="py-28 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <p className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wider mb-3">PLATFORM FEATURES</p>
            <h2 className="text-5xl font-extrabold tracking-tight">Everything you need to showcase your work</h2>
            <p className="mt-4 text-zinc-600 text-lg">Built specifically for university students and academic innovators.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((f, i) => (
              <motion.div key={i} style={{ y: featYArr[i % 3] }} className="h-full">
                <motion.div 
                  custom={i}
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ 
                    y: -18, 
                    scale: 1.03,
                    transition: { type: "spring", stiffness: 320, damping: 22 }
                  }}
                  className="group h-full bg-white border border-zinc-100 rounded-3xl p-9 hover:border-[var(--primary)]/30 transition-all"
                >
                  <motion.div 
                    whileHover={{ rotate: [0, -6, 6, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center mb-8 group-hover:bg-[var(--primary)] group-hover:text-white transition-all"
                  >
                    {f.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4">{f.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">{f.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" ref={stepsRef} className="py-28 px-6 bg-zinc-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <p className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wider mb-3">HOW IT WORKS</p>
            <h2 className="text-5xl font-extrabold tracking-tight">From idea to visibility in minutes</h2>
            <p className="mt-4 text-zinc-600 text-lg">Three steps to becoming part of the innovation community.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {STEPS.map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 90 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.18, duration: 1 }}
                whileHover={{ y: -12 }}
                className="relative text-center group"
              >
                <motion.div style={{ y: sNumY }} className="absolute inset-0 flex items-center justify-center text-[10rem] font-extrabold text-[var(--primary)]/5 mb-6 group-hover:text-[var(--primary)]/15 transition-colors pointer-events-none -z-10">{s.number}</motion.div>
                <div className="pt-8">
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">{s.title}</h3>
                  <p className="text-zinc-600 leading-relaxed max-w-xs mx-auto">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" ref={pricingRef} className="py-28 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <p className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wider mb-3">PRICING</p>
            <h2 className="text-5xl font-extrabold tracking-tight">Plans for every stage</h2>
            <p className="mt-4 text-zinc-600 text-lg">Start free. Scale when you're ready.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PRICING.map((plan, i) => (
              <motion.div key={i} style={{ y: priceYArr[i % 3] }} className="h-full">
                <motion.div 
                  initial={{ opacity: 0, y: 90 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.13 }}
                  whileHover={plan.highlighted ? { scale: 1.07, y: -14 } : { scale: 1.04, y: -10 }}
                  className={`group h-full rounded-3xl p-9 border transition-all duration-500 ${
                    plan.highlighted 
                      ? 'bg-zinc-900 text-white border-[var(--primary)] shadow-2xl shadow-[var(--primary)]/35' 
                      : 'bg-white border-zinc-100 hover:shadow-2xl hover:border-[var(--primary)]/30'
                  }`}
                >
                  <p className={`text-sm font-semibold mb-1 ${plan.highlighted ? 'text-white' : 'text-[var(--primary)]'}`}>{plan.name}</p>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-5xl font-extrabold tracking-tighter">{plan.price}</span>
                    {plan.period && <span className={`text-sm ${plan.highlighted ? 'text-zinc-300' : 'text-zinc-500'}`}>{plan.period}</span>}
                  </div>
                  <p className={`mb-8 text-sm ${plan.highlighted ? 'text-zinc-300' : 'text-zinc-600'}`}>{plan.desc}</p>
                  
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feat, fi) => (
                      <li key={fi} className="flex items-start gap-3 text-sm">
                        <Check size={18} className={plan.highlighted ? 'text-white mt-0.5' : 'text-[var(--primary)] mt-0.5'} />
                        <span className={plan.highlighted ? 'text-zinc-200' : 'text-zinc-600'}>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href="/auth/signup" 
                    className={`block mt-auto text-center py-4 rounded-2xl text-sm font-semibold transition-all ${
                      plan.highlighted 
                        ? 'bg-white text-zinc-900 hover:bg-zinc-100' 
                        : 'bg-zinc-900 text-white hover:bg-black'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" ref={aboutRef} className="py-28 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            style={{ y: aYText }}
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex-1"
          >
            <p className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wider mb-3">ABOUT BRAINBRIDGE</p>
            <h2 className="text-5xl font-extrabold tracking-tight mb-8">Bridging academia and industry</h2>
            
            <div className="space-y-6 text-zinc-600 leading-relaxed text-[17px]">
              <p>BrainBridge was born from a simple observation: brilliant student projects often die in classroom folders, unseen by the world. We built a platform that gives every student — regardless of their university or field — a professional space to showcase their innovation, connect with peers, and attract real-world opportunities.</p>
              <p>Our taxonomy covers 14 sectors from Agriculture to Smart Cities, aligns with the UN's 17 SDGs and Rwanda's NST2 strategy, and supports 150+ technology sub-tags. Whether you're building an IoT sensor for farms or an AI model for healthcare, BrainBridge is where your work gets the visibility it deserves.</p>
            </div>

            <div className="mt-10">
              <Link href="/auth/signup" className="btn-primary inline-flex items-center gap-3 text-base font-semibold px-8 py-4 rounded-2xl">
                Join the Community <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            style={{ y: aYGrid }}
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex-1 max-w-md w-full"
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Globe size={32} />, label: 'Global Reach', sub: 'Open to all universities' },
                { icon: <Users size={32} />, label: 'Community First', sub: 'Built by students, for students' },
                { icon: <Zap size={32} />, label: 'Real Impact', sub: 'SDG + NST2 aligned' },
                { icon: <Shield size={32} />, label: 'Trusted', sub: 'Secure and transparent' },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -12, scale: 1.03 }}
                  className="bg-white rounded-3xl p-7 border border-zinc-100 hover:border-[var(--primary)]/30 transition-all"
                >
                  <div className="text-[var(--primary)] mb-5">{item.icon}</div>
                  <p className="font-bold mb-1">{item.label}</p>
                  <p className="text-xs text-zinc-500">{item.sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="max-w-4xl mx-auto text-center bg-zinc-900 rounded-3xl px-10 py-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[var(--primary)] opacity-10" />
          
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 relative z-10">Ready to showcase your projects?</h2>
          <p className="text-zinc-300 text-lg mb-10 max-w-md mx-auto relative z-10">Join thousands of students already building their portfolio on BrainBridge. It's free to start.</p>
          
          <motion.div whileHover={{ scale: 1.08 }}>
            <Link href="/auth/signup" className="btn-primary inline-flex items-center gap-3 text-lg font-semibold px-12 py-5 rounded-2xl relative z-10">
              Create Your Free Account <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-zinc-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            <div className="col-span-2 md:col-span-1">
              <p className="text-2xl font-extrabold text-[var(--primary)] mb-4">BrainBridge</p>
              <p className="text-sm text-zinc-500 leading-relaxed">Where developer projects come to life. Built for innovators, by innovators.</p>
            </div>
            
            {[
              { title: 'Product', links: ['Features', 'Pricing', 'Explore Projects', 'Discovery Feed'] },
              { title: 'Company', links: ['About', 'Blog', 'Careers', 'Contact'] },
              { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'] },
            ].map((col, idx) => (
              <div key={idx}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-5 text-zinc-400">{col.title}</p>
                <ul className="space-y-3">
                  {col.links.map(l => (
                    <li key={l}><a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-zinc-100 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-zinc-500">
            <p>© {new Date().getFullYear()} BrainBridge. All rights reserved.</p>
            <div className="flex items-center gap-6">
              {['github', 'linkedin', 'x-twitter'].map(icon => (
                <a key={icon} href="#" className="hover:text-zinc-900 transition-colors">
                  <i className={`fa-brands fa-${icon}`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{__html: `
        :root {
          --primary: #6C63FF;
        }
        
        .btn-primary {
          background: var(--primary);
          color: white;
          box-shadow: 0 10px 30px -8px rgba(108, 99, 255, 0.35);
        }
        
        .btn-primary:hover {
          background: #5851e6;
          box-shadow: 0 15px 35px -10px rgba(108, 99, 255, 0.45);
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .animate-blink {
          animation: blink 0.82s step-end infinite;
        }
      `}} />
    </div>
  );
}