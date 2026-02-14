'use client';

import Image from 'next/image';
import ThemeToggle from './components/ThemeToggle';
import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-slate-100 to-gray-200 dark:from-black dark:via-gray-950 dark:to-black relative overflow-hidden">
      {/* Video Background */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20 dark:opacity-30"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        {/* Overlay for theme consistency */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-500/20 via-gray-600/15 to-slate-700/20 dark:from-slate-900/30 dark:via-gray-800/20 dark:to-slate-900/30"></div>
      </div>
      
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-slate-400/15 dark:bg-slate-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gray-300/10 dark:bg-gray-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-slate-500/15 dark:bg-slate-700/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-black/90 backdrop-blur-xl z-50 border-b border-slate-200/60 dark:border-slate-700/40 shadow-2xl shadow-slate-500/20 dark:shadow-slate-900/40">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-linear-to-r from-slate-700 to-slate-900 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent hover:scale-110 hover:from-slate-800 hover:to-black dark:hover:from-cyan-300 dark:hover:to-blue-300 transition-all duration-300 cursor-pointer drop-shadow-lg">
            AK
          </h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-semibold">
            <a 
              href="#about" 
              className="relative text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1 group"
            >
              <span className="relative z-10">About</span>
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-linear-to-r from-purple-600 to-purple-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <a 
              href="#skills" 
              className="relative text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1 group"
            >
              <span className="relative z-10">Skills</span>
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-linear-to-r from-purple-600 to-purple-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <a 
              href="#projects" 
              className="relative text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1 group"
            >
              <span className="relative z-10">Projects</span>
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-linear-to-r from-purple-600 to-purple-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <a 
              href="#contact" 
              className="relative text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1 group"
            >
              <span className="relative z-10">Contact</span>
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-linear-to-r from-purple-600 to-purple-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            <ThemeToggle />
          </div>
          
          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            <ThemeToggle />
          </div>
        </div>
        
        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl border-t border-slate-200/60 dark:border-slate-700/40 shadow-xl">
            <div className="px-6 py-4 space-y-3">
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 font-semibold transition-colors duration-300 py-2"
              >
                About
              </a>
              <a 
                href="#skills" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 font-semibold transition-colors duration-300 py-2"
              >
                Skills
              </a>
              <a 
                href="#projects" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 font-semibold transition-colors duration-300 py-2"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-6 py-2 bg-linear-to-r from-purple-600 to-purple-800 text-white rounded-full text-center font-semibold hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-lg shadow-purple-500/40"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Content - Left Side */}
            <div className="flex-1 text-left">
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-semibold mb-4 tracking-wider uppercase animate-slide-up">
                Hello, my name is
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 animate-slide-up">
                <span className="bg-linear-to-r from-slate-700 via-slate-800 to-slate-900 dark:from-cyan-400 dark:via-blue-300 dark:to-purple-400 bg-clip-text text-transparent hover:from-slate-800 hover:via-slate-900 hover:to-black dark:hover:from-cyan-300 dark:hover:via-blue-200 dark:hover:to-purple-300 transition-all duration-300 cursor-pointer">Anvesh Rahul AK</span>
              </h1>
              <p className="text-2xl md:text-3xl text-zinc-600 dark:text-zinc-400 mb-8 animate-slide-up-delay-1 hover:text-slate-700 dark:hover:text-slate-400 transition-colors duration-300 font-semibold">
                Full Stack Developer & AI Systems Builder
              </p>
              <p className="text-lg text-zinc-500 dark:text-zinc-500 mb-12 max-w-2xl leading-relaxed animate-slide-up-delay-2 hover:text-zinc-700 dark:hover:text-zinc-400 transition-colors duration-300">
                I build intelligent, real-time web applications that solve real-world problems. Creator of SkillProof (AI-powered proctoring), ResQNet (emergency response system), and Aloymni (alumni networking platform), focused on scalable architecture and AI-driven solutions.
              </p>
              <div className="flex gap-4 animate-slide-up-delay-3">
                <a href="#projects" className="group relative px-8 py-4 bg-linear-to-r from-slate-700 to-slate-900 text-white rounded-full font-semibold hover:from-slate-800 hover:to-black transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-xl shadow-slate-500/40 hover:shadow-2xl hover:shadow-slate-600/60 active:scale-100">
                  <span className="relative z-10">View My Work →</span>
                  <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a href="#contact" className="group relative px-8 py-4 border-2 border-slate-700 dark:border-slate-600 text-slate-800 dark:text-slate-300 rounded-full font-semibold hover:bg-slate-700 dark:hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg shadow-slate-500/30 hover:shadow-2xl hover:shadow-slate-600/50 active:scale-100">
                  <span className="relative z-10">Contact Me</span>
                </a>
              </div>
            </div>

            {/* Profile Photo - Right Side */}
            <div className="shrink-0">
              <div className="relative group">
                <Image 
                  src="/WhatsApp Image 2026-02-13 at 10.28.08 PM.jpeg" 
                  alt="Anvesh Rahul AK" 
                  width={400} 
                  height={400} 
                  className="rounded-full object-cover w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-purple-400/50 dark:border-purple-500/60 shadow-2xl shadow-purple-400/60 dark:shadow-purple-500/80 hover:shadow-purple-500/90 dark:hover:shadow-purple-400/90 hover:scale-105 hover:rotate-3 transition-all duration-500 cursor-pointer"
                />
                <div className="absolute inset-0 rounded-full bg-linear-to-br from-purple-400/5 to-purple-600/5 dark:from-purple-500/8 dark:to-purple-700/8 group-hover:from-purple-400/10 group-hover:to-purple-600/10 dark:group-hover:from-purple-500/12 dark:group-hover:to-purple-700/12 transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative z-10 bg-linear-to-br from-white/60 via-slate-50/60 to-white/60 dark:from-black/60 dark:via-gray-950/40 dark:to-black/60 backdrop-blur-sm shadow-xl shadow-slate-500/10 dark:shadow-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-10 hover:text-slate-700 dark:hover:text-slate-400 transition-all duration-300 hover:scale-105 inline-block cursor-pointer">About Me</h2>
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed hover:text-zinc-900 dark:hover:text-zinc-300 transition-all duration-300 hover:translate-x-2 cursor-default">
              I'm a passionate full-stack developer focused on building intelligent, real-world technology solutions. I developed SkillProof, an AI-powered proctoring platform with face detection and secure authentication. I built ResQNet, an emergency response system for ambulance coordination and real-time communication. Through Aloymni, I created an alumni networking platform connecting students and graduates. My expertise includes Next.js, Django, MongoDB, AI integration with TensorFlow.js and MediaPipe, and scalable web architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-16">
            <h2 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100 text-center hover:scale-110 transition-all duration-300 cursor-pointer hover:text-transparent hover:bg-linear-to-r hover:from-slate-700 hover:to-slate-900 hover:bg-clip-text">Skills & Technologies</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl border-2 border-slate-200/50 dark:border-slate-500/30 hover:border-slate-500 dark:hover:border-slate-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-slate-500/40 hover:-translate-y-3 bg-linear-to-br from-white/90 to-slate-50/90 dark:from-black/90 dark:to-gray-950/60 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 group-hover:text-slate-700 dark:group-hover:text-slate-400 transition-colors duration-300">Frontend & Real-Time Systems</h3>
              <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
                <li className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:translate-x-3 cursor-pointer group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 group-hover/item:scale-150 transition-transform"></span>
                  Next.js
                </li>
                <li className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:translate-x-3 cursor-pointer group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 group-hover/item:scale-150 transition-transform"></span>
                  React.js & TypeScript
                </li>
                <li className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:translate-x-3 cursor-pointer group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 group-hover/item:scale-150 transition-transform"></span>
                  Tailwind CSS
                </li>
                <li className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:translate-x-3 cursor-pointer group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 group-hover/item:scale-150 transition-transform"></span>
                  WebRTC
                </li>
                <li className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:translate-x-3 cursor-pointer group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 group-hover/item:scale-150 transition-transform"></span>
                  Dynamic, event-driven UI updates
                </li>
              </ul>
            </div>
            <div className="group p-8 rounded-2xl border-2 border-slate-200/50 dark:border-slate-500/30 hover:border-slate-600 dark:hover:border-slate-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-slate-600/40 hover:-translate-y-3 bg-linear-to-br from-white/90 to-slate-100/90 dark:from-black/90 dark:to-gray-900/60 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 group-hover:text-slate-700 dark:group-hover:text-slate-400 transition-colors duration-300">Backend & Architecture</h3>
              <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
                <li className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:translate-x-3 cursor-pointer group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 group-hover/item:scale-150 transition-transform"></span>
                  Python / Django
                </li>
                <li className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:translate-x-3 cursor-pointer group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 group-hover/item:scale-150 transition-transform"></span>
                  REST API Design
                </li>
                <li className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:translate-x-3 cursor-pointer group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 group-hover/item:scale-150 transition-transform"></span>
                  MongoDB
                </li>
                <li className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:translate-x-3 cursor-pointer group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 group-hover/item:scale-150 transition-transform"></span>
                  Authentication & Secure Session Handling
                </li>
                <li className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:translate-x-3 cursor-pointer group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 group-hover/item:scale-150 transition-transform"></span>
                  Real-time system workflows
                </li>
              </ul>
            </div>
            <div className="group p-8 rounded-2xl border-2 border-slate-200/50 dark:border-slate-500/30 hover:border-slate-700 dark:hover:border-slate-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-slate-700/40 hover:-translate-y-3 bg-linear-to-br from-white/90 to-slate-200/90 dark:from-black/90 dark:to-gray-800/60 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 group-hover:text-slate-700 dark:group-hover:text-slate-400 transition-colors duration-300">AI Integration & Deployment</h3>
              <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
                <li className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:translate-x-3 cursor-pointer group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 group-hover/item:scale-150 transition-transform"></span>
                  MediaPipe & TensorFlow.js
                </li>
                <li className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:translate-x-3 cursor-pointer group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 group-hover/item:scale-150 transition-transform"></span>
                  Face Detection
                </li>
                <li className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:translate-x-3 cursor-pointer group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 group-hover/item:scale-150 transition-transform"></span>
                  Proctoring & Activity Tracking Systems
                </li>
                <li className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:translate-x-3 cursor-pointer group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 group-hover/item:scale-150 transition-transform"></span>
                  Clerk Authentication
                </li>
                <li className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:translate-x-3 cursor-pointer group/item">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 group-hover/item:scale-150 transition-transform"></span>
                  Git & GitHub
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section id="education" className="py-20 px-6 relative z-10 bg-linear-to-br from-white/60 via-slate-50/60 to-white/60 dark:from-black/60 dark:via-gray-950/40 dark:to-black/60 backdrop-blur-sm shadow-xl shadow-slate-500/10 dark:shadow-slate-900/30">
        <div className="flex justify-center mb-16">
      <h2 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100 text-center hover:scale-110 transition-all duration-300 cursor-pointer hover:text-transparent hover:bg-linear-to-r hover:from-purple-600 hover:to-purple-800 hover:bg-clip-text">
        Education & Certifications
      </h2>
    </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Education Card */}
            <div className="group p-8 rounded-3xl border-2 border-purple-200 dark:border-purple-800 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 bg-linear-to-br from-white/90 to-slate-50/90 dark:from-slate-900/95 dark:to-black/95 backdrop-blur-sm">
              {/* Icon */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Education</h2>
              </div>

              {/* Education Items */}
              <div className="space-y-6">
                {/* Bachelor Degree */}
                <div className="border-l-4 border-purple-600 dark:border-purple-500 pl-6 hover:border-purple-500 dark:hover:border-purple-400 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    Bachelor of Computer Applications
                  </h3>
                  <p className="text-zinc-600 dark:text-gray-400 text-base">
                    St. Aloysius College • 2026
                  </p>
                </div>

                {/* 12th Grade */}
                <div className="border-l-4 border-purple-600 dark:border-purple-500 pl-6 hover:border-purple-500 dark:hover:border-purple-400 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    12th Grade
                  </h3>
                  <p className="text-zinc-600 dark:text-gray-400 text-base">
                    St. Aloysius PU College • 2023
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="group p-8 rounded-3xl border-2 border-purple-200 dark:border-purple-800 hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/40 bg-linear-to-br from-white/90 to-slate-50/90 dark:from-slate-900/95 dark:to-black/95 backdrop-blur-sm">
              {/* Icon */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Certifications</h2>
              </div>

              {/* Certification Items */}
              <div className="space-y-6">
                {/* Google Data Analytics */}
                <div className="border-l-4 border-purple-600 dark:border-purple-500 pl-6 hover:border-purple-500 dark:hover:border-purple-400 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    Google Data Analytics Professional Certificate
                  </h3>
                  <p className="text-zinc-600 dark:text-gray-400 text-base">
                    Google • 2024
                  </p>
                </div>

                {/* AWS Cloud Practitioner */}
                <div className="border-l-4 border-purple-600 dark:border-purple-500 pl-6 hover:border-purple-500 dark:hover:border-purple-400 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    AWS Certified Cloud Practitioner
                  </h3>
                  <p className="text-zinc-600 dark:text-gray-400 text-base">
                    Amazon Web Services • 2024
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
<section id="projects" className="py-20 px-6 relative z-10 bg-linear-to-br from-purple-50/60 via-white/60 to-purple-50/60 dark:from-purple-900/20 dark:via-black/40 dark:to-purple-900/20 backdrop-blur-sm shadow-xl shadow-purple-500/10 dark:shadow-purple-900/30">
  <div className="max-w-6xl mx-auto">
    <div className="flex justify-center mb-16">
      <h2 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100 text-center hover:scale-110 transition-all duration-300 cursor-pointer hover:text-transparent hover:bg-linear-to-r hover:from-purple-600 hover:to-purple-800 hover:bg-clip-text">
        Featured Projects
      </h2>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* SkillProof */}
      <div className="group rounded-3xl overflow-hidden border-2 border-purple-200 dark:border-purple-800 hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-4 bg-white dark:bg-black">
        <div className="h-56 bg-linear-to-br from-purple-500 via-purple-600 to-purple-700 group-hover:from-purple-600 group-hover:via-purple-700 group-hover:to-purple-800 transition-all duration-500 relative overflow-hidden flex items-center justify-center">
          <Image 
            src="/Leonardo_Phoenix_10_generate_an_image_for_tech_company_named_S_3.jpg" 
            alt="SkillProof Logo" 
            width={192} 
            height={192} 
            className="object-contain w-3/4 h-3/4 group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </div>
        <div className="p-7">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
            SkillProof
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-5 leading-relaxed group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors">
            An AI-powered skill verification platform that authenticates real technical abilities 
            through structured assessments and secure authentication, eliminating fake skill claims.
          </p>

          <div className="flex gap-2 flex-wrap mb-5">
            <span className="px-4 py-1.5 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium hover:scale-110 hover:bg-purple-200 dark:hover:bg-purple-800 transition-all duration-200 cursor-pointer">Next.js</span>
            <span className="px-4 py-1.5 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium hover:scale-110 hover:bg-purple-200 dark:hover:bg-purple-800 transition-all duration-200 cursor-pointer">MongoDB</span>
            <span className="px-4 py-1.5 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium hover:scale-110 hover:bg-purple-200 dark:hover:bg-purple-800 transition-all duration-200 cursor-pointer">Clerk Auth</span>
            <span className="px-4 py-1.5 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium hover:scale-110 hover:bg-purple-200 dark:hover:bg-purple-800 transition-all duration-200 cursor-pointer">AI Integration</span>
          </div>

          <div className="flex gap-6">
            <a href="https://skillproof-ten.vercel.app" className="group/link text-zinc-900 dark:text-zinc-100 hover:text-purple-600 dark:hover:text-purple-400 font-semibold transition-all duration-300 hover:translate-x-2 flex items-center gap-1">
              View Project 
              <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
            </a>
            <a href="https://github.com/Anvesh-01/skillproof" target="_blank" rel="noopener noreferrer" className="group/link text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 font-semibold transition-all duration-300 hover:translate-x-2 flex items-center gap-1">
              GitHub 
              <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* ResQNet */}
      <div className="group rounded-3xl overflow-hidden border-2 border-purple-200 dark:border-purple-800 hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-4 bg-white dark:bg-black">
        <div className="h-56 bg-linear-to-br from-purple-600 via-purple-700 to-purple-800 group-hover:from-purple-700 group-hover:via-purple-800 group-hover:to-purple-900 transition-all duration-500 relative overflow-hidden flex items-center justify-center">
          <Image 
            src="/KenLogo.png" 
            alt="ResQNet Logo" 
            width={192} 
            height={192} 
            className="object-contain w-3/4 h-3/4 group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </div>
        <div className="p-7">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
            ResQNet
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-5 leading-relaxed group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors">
            A smart emergency response coordination system that connects accident victims, 
            hospitals, ambulances, and police stations through real-time tracking and 
            intelligent dispatch logic to reduce response time.
          </p>

          <div className="flex gap-2 flex-wrap mb-5">
            <span className="px-4 py-1.5 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium hover:scale-110 hover:bg-purple-200 dark:hover:bg-purple-800 transition-all duration-200 cursor-pointer">Next.js</span>
            <span className="px-4 py-1.5 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium hover:scale-110 hover:bg-purple-200 dark:hover:bg-purple-800 transition-all duration-200 cursor-pointer">MongoDB</span>
            <span className="px-4 py-1.5 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium hover:scale-110 hover:bg-purple-200 dark:hover:bg-purple-800 transition-all duration-200 cursor-pointer">Real-Time Tracking</span>
            <span className="px-4 py-1.5 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium hover:scale-110 hover:bg-purple-200 dark:hover:bg-purple-800 transition-all duration-200 cursor-pointer">PWA</span>
          </div>

          <div className="flex gap-6">
            <a href="https://kenet.vercel.app" className="group/link text-zinc-900 dark:text-zinc-100 hover:text-purple-600 dark:hover:text-purple-400 font-semibold transition-all duration-300 hover:translate-x-2 flex items-center gap-1">
              View Project 
              <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
            </a>
            <a href="https://github.com/Anvesh-01/kzresq" target="_blank" rel="noopener noreferrer" className="group/link text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 font-semibold transition-all duration-300 hover:translate-x-2 flex items-center gap-1">
              GitHub 
              <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Aloymni */}
      <div className="group rounded-3xl overflow-hidden border-2 border-purple-200 dark:border-purple-800 hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-4 bg-white dark:bg-black">
        <div className="h-56 bg-linear-to-br from-purple-700 via-purple-800 to-purple-900 group-hover:from-purple-800 group-hover:via-purple-900 group-hover:to-black transition-all duration-500 relative overflow-hidden flex items-center justify-center">
          <Image 
            src="/aloymni.ico" 
            alt="Aloymni Logo" 
            width={128} 
            height={128} 
            className="object-contain group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </div>
        <div className="p-7">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
            Aloymni
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-5 leading-relaxed group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors">
            A full-stack alumni networking platform that bridges graduates and students 
            through mentorship programs, structured networking, and institutional engagement tools.
          </p>

          <div className="flex gap-2 flex-wrap mb-5">
            <span className="px-4 py-1.5 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium hover:scale-110 hover:bg-purple-200 dark:hover:bg-purple-800 transition-all duration-200 cursor-pointer">Next.js</span>
            <span className="px-4 py-1.5 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium hover:scale-110 hover:bg-purple-200 dark:hover:bg-purple-800 transition-all duration-200 cursor-pointer">MongoDB</span>
            <span className="px-4 py-1.5 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium hover:scale-110 hover:bg-purple-200 dark:hover:bg-purple-800 transition-all duration-200 cursor-pointer">REST APIs</span>
            <span className="px-4 py-1.5 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium hover:scale-110 hover:bg-purple-200 dark:hover:bg-purple-800 transition-all duration-200 cursor-pointer">Tailwind</span>
          </div>

          <div className="flex gap-6">
            <a href="https://aloymni.in/" className="group/link text-zinc-900 dark:text-zinc-100 hover:text-purple-600 dark:hover:text-purple-400 font-semibold transition-all duration-300 hover:translate-x-2 flex items-center gap-1">
              View Project 
              <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
            </a>
            <a href="https://github.com/srijankulal/Aloymni" target="_blank" rel="noopener noreferrer" className="group/link text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 font-semibold transition-all duration-300 hover:translate-x-2 flex items-center gap-1">
              GitHub 
              <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 hover:scale-110 transition-all duration-300 inline-block cursor-pointer hover:text-transparent hover:bg-linear-to-r hover:from-purple-600 hover:to-purple-800 hover:bg-clip-text">Let's Work Together</h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-12 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:scale-105">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="mailto:anveshrahulak105@gmail.com" className="group relative px-10 py-4 border-2 border-purple-500 dark:border-purple-500 text-purple-700 dark:text-purple-300 rounded-full font-semibold hover:bg-purple-600 dark:hover:bg-purple-700 hover:text-white hover:border-purple-700 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-600/50 active:scale-100">
              <span className="relative z-10">Send Email</span>
            </a>
            <a href="https://www.linkedin.com/in/anvesh-rahul-a-k-45655b31b" target="_blank" rel="noopener noreferrer" className="group relative px-10 py-4 border-2 border-purple-500 dark:border-purple-500 text-purple-700 dark:text-purple-300 rounded-full font-semibold hover:bg-purple-600 dark:hover:bg-purple-700 hover:text-white hover:border-purple-700 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-600/50 active:scale-100">
              <span className="relative z-10">LinkedIn</span>
            </a>
            <a href="https://github.com/Anvesh-01" target="_blank" rel="noopener noreferrer" className="group relative px-10 py-4 border-2 border-purple-500 dark:border-purple-500 text-purple-700 dark:text-purple-300 rounded-full font-semibold hover:bg-purple-600 dark:hover:bg-purple-700 hover:text-white hover:border-purple-700 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-600/50 active:scale-100">
              <span className="relative z-10">GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t-2 border-purple-200/60 dark:border-purple-500/30 bg-linear-to-r from-purple-50/60 via-white/60 to-purple-50/60 dark:from-purple-900/30 dark:via-black/70 dark:to-purple-900/30 backdrop-blur-md relative z-10 hover:border-purple-400 dark:hover:border-purple-400 transition-all duration-300">
        <div className="max-w-6xl mx-auto text-center text-zinc-600 dark:text-zinc-400">
          <p className="hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:scale-105 inline-block cursor-pointer font-medium">© 2026 Anvesh Rahul AK. Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

