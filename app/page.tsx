// app/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useMotionValue } from 'framer-motion';
import { Menu, X, Mail, ExternalLink, Download, Briefcase, Award, Code, ArrowUpRight } from 'lucide-react';
import { personalInfo, skillCategories, projects, education, achievements } from '@/data/portfolio';

export default function PremiumPortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Using 'as const' fixes the strict string literal compilation error
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 60, damping: 20 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-950 scroll-smooth relative overflow-x-hidden">
      
      {/* Background Mesh */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div 
          className="absolute w-150 h-150 rounded-full bg-linear-to-r from-teal-500/5 to-indigo-500/5 blur-[120px]"
          style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
        />
        <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-indigo-600/4 blur-[160px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-teal-600/4 blur-[160px]" />
      </div>

      {/* Top Progress bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-0.75 bg-linear-to-r from-teal-400 via-cyan-400 to-indigo-500 origin-left z-100" style={{ scaleX }} />

      {/* Navbar Layout */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#030712]/70 border-b border-slate-900/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight bg-linear-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent flex items-center gap-1">
            <span>&lt;</span>SSG<span>.dev /&gt;</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-10 text-sm font-medium text-slate-400">
            {['about', 'skills', 'projects', 'education', 'contact'].map((link) => (
              <a key={link} href={`#${link}`} className="hover:text-teal-400 relative py-1 transition-colors capitalize group">
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-400 hover:text-white transition-colors">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-900 bg-[#030712] px-6 pb-6 space-y-3">
            {['about', 'skills', 'projects', 'education', 'contact'].map((link) => (
              <a key={link} href={`#${link}`} onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-4 rounded-lg hover:bg-slate-900/50 text-slate-300 capitalize transition-all">{link}</a>
            ))}
          </div>
        )}
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Area */}
        <section className="min-h-[calc(100vh-5rem)] flex flex-col justify-center py-12">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-8 max-w-3xl">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-400 text-xs font-semibold tracking-wide backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" /> Open for Software Dev Internships
            </motion.div>
            
            <div className="space-y-4">
              <motion.p variants={fadeInUp} className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-400">Engineering Experiences</motion.p>
              <motion.h1 variants={fadeInUp} className="text-4xl sm:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Shruti Suryakant <span className="bg-linear-to-r from-teal-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Gijbile</span>
              </motion.h1>
            </div>
            
            <motion.p variants={fadeInUp} className="text-xl sm:text-2xl text-slate-300 font-medium max-w-2xl leading-relaxed">
              {personalInfo.role}
            </motion.p>
            
            <motion.p variants={fadeInUp} className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
              Based out of Mumbai, India. Specialized in building performant technical products, web software, and AI-driven logic structures.
            </motion.p>

            <motion.div variants={fadeInUp} className="pt-6 flex flex-wrap gap-4">
              <a href="#projects" className="px-7 py-4 bg-linear-to-r from-teal-500 to-cyan-500 text-slate-950 font-bold rounded-xl shadow-lg shadow-teal-500/10 hover:shadow-teal-500/20 transition-all flex items-center gap-2">
                <Code size={18} /> View Projects
              </a>
              <a href="#contact" className="px-7 py-4 border border-slate-800 bg-slate-900/40 backdrop-blur-md text-slate-200 font-semibold rounded-xl hover:bg-slate-800 hover:border-slate-700 transition-all flex items-center gap-2">
                Contact Me
              </a>
              <a href={personalInfo.resume} download className="px-7 py-4 border border-dashed border-teal-500/40 bg-teal-950/5 backdrop-blur-md text-teal-400 font-semibold rounded-xl hover:bg-teal-950/20 transition-all flex items-center gap-2">
                <Download size={18} /> Download CV
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-28 border-t border-slate-900/60">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                <span className="text-transparent bg-linear-to-r from-teal-400 to-cyan-400 bg-clip-text">01.</span> About Background
              </h2>
              <div className="h-0.5 w-12 bg-linear-to-r from-teal-400 to-indigo-400 mt-3 rounded-full" />
            </div>
            <div className="md:col-span-2 space-y-6 text-slate-400 leading-relaxed text-base sm:text-lg">
              <p>{personalInfo.about}</p>
              <p>
                My approach combines clean layouts with robust system logic. I am highly motivated to implement artificial intelligence solutions, responsive platforms, and automated developer tools.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Skills Track Grid */}
        <section id="skills" className="py-28 border-t border-slate-900/60">
          <div className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="text-transparent bg-linear-to-r from-teal-400 to-cyan-400 bg-clip-text">02.</span> Technical Stack
            </h2>
            <div className="h-0.5 w-12 bg-linear-to-r from-teal-400 to-indigo-400 mt-3 rounded-full" />
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="p-7 rounded-2xl border border-slate-900 bg-slate-900/10 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
                <h3 className="text-base font-bold text-slate-200 mb-5 tracking-wide uppercase">{category.title}</h3>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="px-3 py-1.5 rounded-lg bg-[#0d1527] border border-slate-800/60 text-slate-300 text-xs font-medium tracking-wide">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Portfolio Projects Cards */}
        <section id="projects" className="py-28 border-t border-slate-900/60">
          <div className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="text-transparent bg-linear-to-r from-teal-400 to-cyan-400 bg-clip-text">03.</span> Engineering Works
            </h2>
            <div className="h-0.5 w-12 bg-linear-to-r from-teal-400 to-indigo-400 mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} key={idx} className="flex flex-col rounded-2xl border border-slate-900 bg-[#090f1c]/40 backdrop-blur-xl overflow-hidden group shadow-2xl relative">
                
                <div className="h-44 bg-linear-to-br from-slate-900 to-[#070c16] relative flex items-center justify-center border-b border-slate-900 text-slate-700 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [bg-size:16px_16px] opacity-30" />
                  <Briefcase size={36} className="relative z-10" />
                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[10px] uppercase font-bold tracking-widest text-teal-400">
                    Production Build
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white flex items-center justify-between">
                      {project.title} <ArrowUpRight size={18} className="text-teal-400" />
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-950/60 border border-slate-900 px-2.5 py-1 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                      <a href={project.github} className="flex-1 py-2.5 text-center rounded-xl bg-[#0b1220] border border-slate-800 text-xs font-semibold hover:bg-slate-800 text-slate-200 transition-all flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2"/></svg>
                        Repository
                      </a>
                      <a href={project.demo} className="flex-1 py-2.5 text-center rounded-xl bg-teal-500/10 border border-teal-500/20 text-xs font-semibold hover:bg-teal-500/20 text-teal-400 transition-all flex items-center justify-center gap-1.5">
                        <ExternalLink size={14} /> Application
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education & Achievements Track */}
        <section id="education" className="py-28 border-t border-slate-900/60 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                <span className="text-transparent bg-linear-to-r from-teal-400 to-cyan-400 bg-clip-text">04.</span> Education Paths
              </h2>
              <div className="h-0.5 w-12 bg-linear-to-r from-teal-400 to-indigo-400 mt-3 rounded-full" />
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:right-auto before:left-3.5 before:w-0.5 before:bg-slate-900">
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-10">
                  <div className="absolute left-[1.5px] top-1.5 w-6 h-6 rounded-full border border-slate-800 bg-slate-950 flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-teal-400" />
                  </div>
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">{edu.duration}</span>
                  <h3 className="text-lg font-bold text-white mt-1">{edu.degree}</h3>
                  <p className="text-sm text-slate-300 font-medium mt-0.5">{edu.institution} — <span className="text-slate-500">{edu.location}</span></p>
                  <p className="text-sm text-slate-400 mt-3 leading-relaxed bg-[#090f1c]/40 border border-slate-900 p-4 rounded-xl">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                <span className="text-transparent bg-linear-to-r from-teal-400 to-cyan-400 bg-clip-text">05.</span> Achievements
              </h2>
              <div className="h-0.5 w-12 bg-linear-to-r from-teal-400 to-indigo-400 mt-3 rounded-full" />
            </div>

            <div className="space-y-4">
              {achievements.map((ach, idx) => (
                <div key={idx} className="p-5 rounded-xl border border-slate-900 bg-[#090f1c]/30 backdrop-blur-xl flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white tracking-wide">{ach.title}</h3>
                    <p className="text-sm text-slate-400 mt-1 leading-relaxed">{ach.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact System Form */}
        <section id="contact" className="py-28 border-t border-slate-900/60">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Initiate Pipeline</h2>
              <p className="text-slate-400 max-w-md mx-auto text-sm sm:text-base">
                Let's discuss development roles or project timelines.
              </p>
            </div>

            <div className="flex justify-center gap-5">
              <a href={`mailto:${personalInfo.email}`} className="p-3.5 rounded-xl border border-slate-900 bg-slate-900/40 hover:bg-slate-900 text-slate-300 hover:text-teal-400 transition-all shadow-xl">
                <Mail size={22} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-xl border border-slate-900 bg-slate-900/40 hover:bg-slate-900 text-slate-300 hover:text-teal-400 transition-all shadow-xl">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-xl border border-slate-900 bg-slate-900/40 hover:bg-slate-900 text-slate-300 hover:text-teal-400 transition-all shadow-xl">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="mt-12 text-left p-6 sm:p-10 rounded-2xl border border-slate-900 bg-[#060b13]/60 backdrop-blur-xl max-w-xl mx-auto space-y-5 shadow-2xl relative">
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Email Endpoint</label>
                <input type="email" placeholder="recruiter@enterprise.com" className="w-full px-4 py-3.5 bg-slate-950/80 border border-slate-900 rounded-xl text-slate-200 placeholder:text-slate-700 focus:outline-none focus:border-teal-500/60 transition-all text-sm" required />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Message Packet</label>
                <textarea rows={4} placeholder="Hello Shruti, let's schedule an introductory call..." className="w-full px-4 py-3.5 bg-slate-950/80 border border-slate-900 rounded-xl text-slate-200 placeholder:text-slate-700 focus:outline-none focus:border-teal-500/60 transition-all text-sm resize-none" required />
              </div>
              <button type="submit" className="w-full py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-950 font-bold text-sm transition-all shadow-xl flex items-center justify-center gap-2">
                Transmit Message
              </button>
            </form>
          </div>
        </section>

      </main>

      <footer className="border-t border-slate-900/60 bg-[#02050c] py-10 relative z-10 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} {personalInfo.name}. All systems operational.</p>
        <p className="mt-1 text-[11px] tracking-wide text-slate-600">Next.js Framework, React, TypeScript, Tailwind CSS.</p>
      </footer>
    </div>
  );
}