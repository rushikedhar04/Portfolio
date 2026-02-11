'use client'

import { SplineScene } from "@/components/ui/splite"
import { SpotlightIbelick } from "@/components/ui/spotlight-ibelick"
import { Card } from "@/components/ui/card"
import { CursorGlow } from "@/components/ui/cursor-glow"
import { MobileNav } from "@/components/ui/mobile-nav"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { InteractiveSpline } from "@/components/ui/interactive-spline"

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Liquid Cursor Effect */}
      <CursorGlow />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">RK</a>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">About</a>
            <a href="#experience" className="text-gray-400 hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#skills" className="text-gray-400 hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden sm:block px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:scale-105 transition-transform text-sm shadow-lg shadow-cyan-500/20">
              Let&apos;s Talk
            </a>
            <MobileNav />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black" />
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        </div>

        <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 animate-in fade-in slide-in-from-bottom-2 duration-700">
              👋 Hey there! I&apos;m
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Rushi Kedhar
              <br />
              <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                Konduru
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150">
              Software Engineer & AI/ML Enthusiast
            </p>
            <p className="text-base md:text-lg text-gray-500 max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              MS CS Student at University of Houston | Research Assistant | Building intelligent systems with React, Python, and cutting-edge AI
            </p>
            <div className="flex gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
              <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-200 shadow-lg shadow-cyan-500/30">
                View My Work
              </a>
              <a href="https://still-snow-181.linkyhost.com" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-black text-white border-2 border-cyan-500 rounded-full font-semibold hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-all duration-200">
                Resume
              </a>
            </div>
            <div className="flex gap-6 pt-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
              <a href="https://github.com/rushikedhar04" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/rushi-kedhar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="mailto:rkonduru@uh.edu" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="hidden md:block animate-in fade-in zoom-in-50 duration-1000 delay-200">
            <InteractiveSpline />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-black border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400">
                About Me
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Turning Ideas Into
                <br />
                <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                  Reality Through Code
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                I&apos;m a Master&apos;s student in Computer Science at the <span className="text-white font-semibold">University of Houston</span> (GPA: 3.90),
                passionate about building scalable systems and AI-powered solutions.
              </p>
              <p className="text-gray-400 leading-relaxed">
                As a <span className="text-white font-semibold">Research Assistant</span>, I work on backend systems, REST APIs, and mentor students in data structures
                and algorithms. Previously, I built AI-assisted workflows at <span className="text-white font-semibold">Philips</span> and full-stack applications
                at <span className="text-white font-semibold">Comsoft Solutions</span>.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                  <div className="text-3xl font-bold text-white">3.90</div>
                  <div className="text-sm text-gray-400">GPA (MS)</div>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                  <div className="text-3xl font-bold text-white">3+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-zinc-950 border-white/10 hover:border-white/20 transition-all">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-white font-semibold">M.S., Computer Science</div>
                    <div className="text-gray-400 text-sm">University of Houston</div>
                    <div className="text-gray-500 text-sm">May 2027 • GPA: 3.90</div>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <div className="text-white font-semibold">B.S., Computer Science</div>
                    <div className="text-gray-400 text-sm">R.V. Institute of Technology</div>
                    <div className="text-gray-500 text-sm">Jun 2025 • GPA: 3.80</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-zinc-950 border-white/10 hover:border-white/20 transition-all">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  Achievements
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="text-gray-400 flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>Published paper in <span className="text-white">Elsevier Procedia-CS</span></span>
                  </li>
                  <li className="text-gray-400 flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>1st place CDAC-2023 Mental Health Hackathon</span>
                  </li>
                  <li className="text-gray-400 flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>Co-inventor on waste segregation patent</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 bg-black border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 mb-4">
              Career Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Professional Experience
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Building scalable systems, AI solutions, and mentoring the next generation
            </p>
          </div>

          <div className="space-y-12 relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

            {/* University of Houston */}
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right space-y-2 order-1">
                <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs text-gray-400">Aug 2025 - Present</div>
              </div>
              <div className="order-2">
                <Card className="p-6 bg-zinc-950 border-white/10 hover:border-white/20 transition-all hover:scale-[1.02] relative overflow-hidden">
                  <SpotlightIbelick size={200} />
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Research Assistant</h3>
                        <div className="text-gray-400 font-medium">University of Houston</div>
                        <div className="text-gray-500 text-sm">Houston, TX</div>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-white mt-1">•</span>
                        <span>Built backend components using Java/Python with REST APIs and SQL, improving workflow reliability for 100+ students</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-white mt-1">•</span>
                        <span>Collaborated on research prototypes, turning algorithms into production-ready utilities with unit tests and Git reviews</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-white mt-1">•</span>
                        <span>Mentored undergraduates in data structures and algorithms, improving their interview readiness</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </div>
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white rounded-full border-4 border-black transform -translate-x-1/2 z-10" />
            </div>

            {/* Philips */}
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right space-y-2 md:order-1 order-2">
                <Card className="p-6 bg-zinc-950 border-white/10 hover:border-white/20 transition-all hover:scale-[1.02] relative overflow-hidden">
                  <SpotlightIbelick size={200} />
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Software Development Intern</h3>
                        <div className="text-gray-400 font-medium">Philips</div>
                        <div className="text-gray-500 text-sm">Bengaluru, KA</div>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-white mt-1">•</span>
                        <span>Automated data flows between Salesforce and Analytics using Python/Epics, reducing manual prep time by 30%</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-white mt-1">•</span>
                        <span>Implemented Generative AI-assisted support workflow with REST APIs, handling error paths and rate limits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-white mt-1">•</span>
                        <span>Hardened C++ and Python tools with validation, logging, and regression tests, reducing production bugs</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </div>
              <div className="order-1 md:order-2 space-y-2">
                <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs text-gray-400">Jul 2024 - Jun 2025</div>
              </div>
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white rounded-full border-4 border-black transform -translate-x-1/2 z-10" />
            </div>

            {/* Comsoft Solutions */}
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right space-y-2 order-1">
                <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs text-gray-400">Jun 2023 - Feb 2024</div>
              </div>
              <div className="order-2">
                <Card className="p-6 bg-zinc-950 border-white/10 hover:border-white/20 transition-all hover:scale-[1.02] relative overflow-hidden">
                  <SpotlightIbelick size={200} />
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">Software Engineering Intern</h3>
                        <div className="text-gray-400 font-medium">Comsoft Solutions</div>
                        <div className="text-gray-500 text-sm">Mumbai, MH</div>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-white mt-1">•</span>
                        <span>Built web app features with Python (Flask) and JavaScript, creating CRUD APIs with role-based access controls</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-white mt-1">•</span>
                        <span>Wrote SQL queries and utility scripts to clean and migrate legacy data, reducing production defects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-white mt-1">•</span>
                        <span>Implemented Git branching conventions and CI checks for automated linting and testing before deployment</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </div>
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white rounded-full border-4 border-black transform -translate-x-1/2 z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 bg-black border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 mb-4">
              What I&apos;ve Built
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Full-stack applications, AI systems, and innovative solutions
            </p>
          </div>

          <div className="space-y-12">
            {/* RAG Knowledge Assistant - FEATURED */}
            <div className="relative">
              <div className="absolute -top-4 left-4 px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-full shadow-lg shadow-cyan-500/30">
                ⭐ Featured Project
              </div>
            <Card className="bg-gradient-to-br from-zinc-950 to-zinc-900 border-cyan-500/30 hover:border-cyan-500/60 transition-all overflow-hidden group shadow-xl shadow-cyan-500/10">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">RAG Knowledge Assistant</h3>
                      <div className="text-sm text-gray-400">Oct 2025</div>
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    AI-powered Q&A system using Retrieval-Augmented Generation with LangChain. Answers questions over PDFs and documents in seconds.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-white">•</span>
                      <span>Python + FastAPI service with LLM API integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white">•</span>
                      <span>Text-chunking, embeddings, and pgvector similarity search</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white">•</span>
                      <span>Containerized with Docker, reducing search time from minutes to seconds</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">Python</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">FastAPI</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">LangChain</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">pgvector</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">Docker</span>
                  </div>
                </div>
                <div className="md:order-1 flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg p-8 group-hover:scale-105 transition-transform">
                  <svg className="w-32 h-32 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
            </Card>
            </div>

            {/* Solo Leveling Task Tracker */}
            <Card className="bg-zinc-950 border-white/10 hover:border-white/20 transition-all overflow-hidden group">
              <div className="grid md:grid-cols-2 gap-6 p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Solo Leveling Task Tracker</h3>
                      <div className="text-sm text-gray-400">Jan 2026</div>
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    Gamified productivity app that transforms tasks into XP, streaks, and boss battles. Built with React, Node.js/Express, and PostgreSQL.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-white">•</span>
                      <span>Secure REST APIs with JWT authentication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white">•</span>
                      <span>Redis caching for optimized query performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white">•</span>
                      <span>Analytics showing improved task completion after gamification</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">React</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">Node.js</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">PostgreSQL</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">Redis</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">JWT</span>
                  </div>
                </div>
                <div className="flex items-center justify-center bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg p-8 group-hover:scale-105 transition-transform">
                  <svg className="w-32 h-32 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </Card>

            {/* ScrapIT */}
            <Card className="bg-zinc-950 border-white/10 hover:border-white/20 transition-all overflow-hidden group">
              <div className="grid md:grid-cols-2 gap-6 p-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">ScrapIT - Waste Segregation AI</h3>
                      <div className="text-sm text-gray-400">Sep 2024</div>
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    Automated waste segregation using computer vision. Classifies waste from camera input with 95% accuracy and rewards correct disposal.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-white">•</span>
                      <span>TensorFlow/Keras and OpenCV for real-time classification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white">•</span>
                      <span>FastAPI backend on Raspberry Pi with reward mechanism</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white">•</span>
                      <span>95% accuracy in lab tests • Co-authored patent</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">Python</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">TensorFlow</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">OpenCV</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">FastAPI</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">IoT</span>
                  </div>
                </div>
                <div className="flex items-center justify-center bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-lg p-8 group-hover:scale-105 transition-transform">
                  <svg className="w-32 h-32 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive 3D Scene Section */}
      <section className="py-24 px-4 bg-black border-t border-white/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              Explore in 3D
            </h2>
            <p className="text-gray-500 text-lg">
              Interact with the 3D scene - drag, rotate, and discover
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="w-full h-[600px] bg-zinc-950 border-white/10 overflow-hidden">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 bg-black border-t border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 mb-4">
              Tech Stack
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Skills & Technologies
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8">
              Modern tools and frameworks I use to build exceptional software
            </p>
            {/* Trending Tech Tags */}
            <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-400 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                AI/ML Engineering
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-400 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                Full-Stack Development
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-400 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                Cloud Architecture
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-400 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                RAG Systems
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Languages */}
            <Card className="p-6 bg-zinc-950 border-white/10 hover:border-white/20 transition-all relative overflow-hidden group">
              <SpotlightIbelick size={200} />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Languages</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">Java</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">Python</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">C++</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">JavaScript</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">SQL</span>
                </div>
              </div>
            </Card>

            {/* Frameworks */}
            <Card className="p-6 bg-zinc-950 border-white/10 hover:border-white/20 transition-all relative overflow-hidden group">
              <SpotlightIbelick size={200} />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Frameworks</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">React</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">React Native</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">Node.js</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">Spring Boot</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">Flask</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">Django</span>
                </div>
              </div>
            </Card>

            {/* Data & Cloud */}
            <Card className="p-6 bg-zinc-950 border-white/10 hover:border-white/20 transition-all relative overflow-hidden group">
              <SpotlightIbelick size={200} />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Data & Cloud</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">PostgreSQL</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">Git</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">Docker</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">AWS</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">Azure</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">GCP</span>
                </div>
              </div>
            </Card>

            {/* AI/ML */}
            <Card className="p-6 bg-zinc-950 border-white/10 hover:border-white/20 transition-all relative overflow-hidden group">
              <SpotlightIbelick size={200} />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">AI/ML</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">TensorFlow</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">Keras</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">LangChain</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">OpenCV</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">RAG</span>
                </div>
              </div>
            </Card>

            {/* Web Technologies */}
            <Card className="p-6 bg-zinc-950 border-white/10 hover:border-white/20 transition-all relative overflow-hidden group">
              <SpotlightIbelick size={200} />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Web Tech</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">HTML</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">CSS</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">REST APIs</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">GraphQL</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">JWT</span>
                </div>
              </div>
            </Card>

            {/* Tools */}
            <Card className="p-6 bg-zinc-950 border-white/10 hover:border-white/20 transition-all relative overflow-hidden group">
              <SpotlightIbelick size={200} />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">DevOps</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">Linux</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">CI/CD</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">Redis</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">Nginx</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">Kubernetes</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-black border-t border-white/5">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 mb-6">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s Build Something
            <br />
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, collaborations, or just chatting about tech!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="mailto:rkonduru@uh.edu" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-200 shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Me
            </a>
            <a href="https://still-snow-181.linkyhost.com" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-black text-white border-2 border-cyan-500 rounded-full font-semibold hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-all duration-200 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
              Download Resume
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <a href="https://github.com/rushikedhar04" target="_blank" rel="noopener noreferrer" className="p-6 bg-zinc-950 border border-white/10 rounded-lg hover:border-cyan-500/50 hover:scale-105 transition-all group">
              <svg className="w-8 h-8 text-gray-400 group-hover:text-cyan-400 transition-colors mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <div className="text-white font-semibold">GitHub</div>
              <div className="text-gray-500 text-sm">rushikedhar04</div>
            </a>

            <a href="https://linkedin.com/in/rushi-kedhar" target="_blank" rel="noopener noreferrer" className="p-6 bg-zinc-950 border border-white/10 rounded-lg hover:border-cyan-500/50 hover:scale-105 transition-all group">
              <svg className="w-8 h-8 text-gray-400 group-hover:text-cyan-400 transition-colors mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <div className="text-white font-semibold">LinkedIn</div>
              <div className="text-gray-500 text-sm">rushi-kedhar</div>
            </a>

            <a href="https://www.rushikedhar.info" target="_blank" rel="noopener noreferrer" className="p-6 bg-zinc-950 border border-white/10 rounded-lg hover:border-cyan-500/50 hover:scale-105 transition-all group">
              <svg className="w-8 h-8 text-gray-400 group-hover:text-cyan-400 transition-colors mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <div className="text-white font-semibold">Website</div>
              <div className="text-gray-500 text-sm">rushikedhar.info</div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/5 bg-black">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">RK</h3>
              <p className="text-gray-500 text-sm">
                Software Engineer building intelligent systems and exceptional user experiences.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-500 hover:text-white transition-colors text-sm">About</a>
                <a href="#experience" className="block text-gray-500 hover:text-white transition-colors text-sm">Experience</a>
                <a href="#projects" className="block text-gray-500 hover:text-white transition-colors text-sm">Projects</a>
                <a href="#skills" className="block text-gray-500 hover:text-white transition-colors text-sm">Skills</a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Connect</h4>
              <div className="space-y-2">
                <a href="mailto:rkonduru@uh.edu" className="block text-gray-500 hover:text-white transition-colors text-sm">Email</a>
                <a href="https://github.com/rushikedhar04" target="_blank" rel="noopener noreferrer" className="block text-gray-500 hover:text-white transition-colors text-sm">GitHub</a>
                <a href="https://linkedin.com/in/rushi-kedhar" target="_blank" rel="noopener noreferrer" className="block text-gray-500 hover:text-white transition-colors text-sm">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 text-center">
            <p className="text-gray-600 text-sm">
              Built with Next.js 15, React 19, TypeScript, Tailwind CSS & Spline
            </p>
            <p className="text-gray-700 text-sm mt-2">
              © 2026 Rushi Kedhar Konduru. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
