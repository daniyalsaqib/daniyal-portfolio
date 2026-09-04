import { FileDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 pt-28 pb-16 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gold/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Status Pill & Location */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Full-Stack &amp; AI Roles</span>
          </div>
          <span className="text-xs text-muted">·</span>
          <p className="eyebrow !tracking-[0.15em] !text-muted">Lahore, Pakistan</p>
        </div>

        <div className="rule" />

        {/* Main Name */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[0.95] mb-5 text-foreground">
          Daniyal Saqib
        </h1>

        {/* Professional Title & Sub-roles */}
        <div className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground/90 mb-6 flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="text-gold font-semibold">Full Stack &amp; AI Engineer</span>
          <span className="text-muted hidden sm:inline">/</span>
          <span className="text-foreground/75 text-lg sm:text-2xl">Ex-IT Intern, Allied Bank</span>
          <span className="text-muted hidden sm:inline">/</span>
          <span className="text-foreground/75 text-lg sm:text-2xl">Ex-COO, Axiolink Systems</span>
          <span className="text-muted hidden sm:inline">/</span>
          <span className="text-foreground/60 text-base sm:text-xl">CS @ UMT</span>
        </div>

        {/* Narrative Bio */}
        <p className="max-w-2xl text-foreground/70 mb-8 text-base sm:text-lg leading-relaxed font-normal">
          Full-Stack and AI Engineer with hands-on experience building agentic workflows at Allied Bank and scalable web platforms across React, Next.js, FastAPI, and PostgreSQL. Former COO who restructured and led a 10-person engineering unit, pairing technical delivery with operational discipline.
        </p>

        {/* Primary Call-to-Actions */}
        <div className="flex flex-wrap items-center gap-4 mb-10">
          <a href="#projects" className="btn-primary">
            <span>View Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="/Daniyal_Saqib_Resume.pdf"
            download="Daniyal_Saqib_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary group"
            title="Download Daniyal Saqib's Resume"
          >
            <FileDown className="w-4 h-4 text-gold group-hover:scale-110 transition-transform duration-200" />
            <span>Download Resume</span>
          </a>
          <a href="#contact" className="btn-ghost px-3 py-2">
            Get In Touch
          </a>
        </div>

        {/* Quick Social & Proof Links */}
        <div className="flex items-center gap-5 text-muted text-sm pt-4 border-t border-border/60">
          <span className="text-xs uppercase tracking-wider text-muted font-medium">Connect:</span>
          <a
            href="https://github.com/daniyalsaqib"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gold transition-colors flex items-center gap-1.5"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/daniyal-saqib-012142335"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gold transition-colors flex items-center gap-1.5"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href="mailto:daniyalsaqib70@gmail.com"
            className="hover:text-gold transition-colors flex items-center gap-1.5"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
