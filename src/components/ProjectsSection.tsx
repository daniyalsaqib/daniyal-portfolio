import { useState } from 'react';
import { Github, ArrowUpRight, Sparkles, Terminal, Map, MailCheck, Gamepad2, ShieldAlert, FileText, ChevronDown } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  status: string;
  isLiveOrActive?: boolean;
  isFlagship?: boolean;
  description: string;
  stack: string[];
  repoUrl: string;
  specUrl?: string;
  icon: typeof Terminal;
}

const projects: Project[] = [
  {
    title: 'ABL Outreach & Fraud Operations Suite',
    category: 'Agentic AI · Enterprise Banking',
    status: 'Flagship Architecture',
    isLiveOrActive: false,
    isFlagship: true,
    description:
      'Authored the complete Software Requirements & Design Specification (SRDS) and built a layered multi-agent banking system: an autonomous Transaction Fraud Flagging Agent with explainability, Cold Email Outreach Agent, and an Automated Charity Consent Workflow Agent enforcing a deterministic 5-state machine with bounded retries and an immutable audit trail.',
    stack: ['Python', 'FastAPI', 'Agentic Workflows', 'State Machine', 'Audit Logging', 'Synthetic Data'],
    repoUrl: 'https://github.com/daniyalsaqib/Outreach_Fraud_Charity_Suite_ABL',
    specUrl: '/ABL_Outreach_and_Fraud_Operations_Suite_Spec.pdf',
    icon: ShieldAlert,
  },
  {
    title: 'ABL Statement & Policy Intelligence',
    category: 'Agentic AI & RAG · Banking IT',
    status: 'Delivered',
    isLiveOrActive: false,
    description:
      'Multi-agent pipeline engineered for retail banking intelligence: automated account statement Q&A, recurring subscription and fee anomaly detection, and institutional policy retrieval grounded in official banking guidelines with verifiable source citations.',
    stack: ['Python', 'FastAPI', 'RAG', 'Groq API', 'Vector Search'],
    repoUrl: 'https://github.com/daniyalsaqib/Statement_Intelligence_Suite_ABL',
    icon: Sparkles,
  },
  {
    title: 'Networking CRM System',
    category: 'Full Stack · Geospatial',
    status: 'In Development',
    isLiveOrActive: true,
    description:
      'Map-based contact intelligence and relationship management system for organizing, indexing, and surfacing a 1,300+ professional network based on real-time geographic proximity, company clusters, and industry tags.',
    stack: ['Next.js', 'PostgreSQL', 'Leaflet', 'TypeScript', 'TailwindCSS'],
    repoUrl: 'https://github.com/daniyalsaqib/networking-crm',
    icon: Map,
  },
  {
    title: 'Inbox Copilot',
    category: 'AI Hackathon · SOFTEC’26',
    status: '6h Sprint',
    isLiveOrActive: false,
    description:
      'Engineered with Team Panic Pointers at FAST-NU Lahore under a 6-hour sprint. Classifies incoming opportunity emails, extracts key structured fields with LLM pipelines, and computes personalized priority rankings for executives.',
    stack: ['Streamlit', 'Python', 'FastAPI', 'Groq API', 'NLP'],
    repoUrl: 'https://github.com/frdnu/SOFTEC-AI-HACKATHON-2026',
    icon: MailCheck,
  },
  {
    title: 'ABL Core Banking Console',
    category: 'Systems · C++',
    status: 'Delivered Milestone',
    isLiveOrActive: false,
    description:
      'Console-based banking operations menu engineered as an onboarding technical assignment within Allied Bank’s 4th IT Group, simulating transaction routing, balance validations, and ledger updates with low-level data structures.',
    stack: ['C++', 'OOP', 'Data Structures', 'Memory Management'],
    repoUrl: 'https://github.com/daniyalsaqib/ablinternship-fall-2026/blob/main/Sir%20Affan/banking.cpp',
    icon: Terminal,
  },
  {
    title: 'PatientZero Prototype',
    category: 'Game Dev · Unity3D',
    status: 'Playable Prototype',
    isLiveOrActive: false,
    description:
      'Atmospheric horror game prototype featuring custom C# creature behavior logic, spatial sound triggers, and collision detection systems built with two teammates for an elective in Game Development.',
    stack: ['C#', 'Unity 3D', 'AI State Machines', 'Collision Logic'],
    repoUrl: 'https://github.com/daniyalsaqib/PatientZero_Prototype',
    icon: Gamepad2,
  },
];

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);

  // Top 3 featured initially, reveal remaining on click
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="px-6 py-24 border-t border-border/80 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-px w-6 bg-gold/60 inline-block" />
              <p className="eyebrow !tracking-[0.2em] !mb-0">Selected Projects</p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
              Crafted Systems &amp; Software
            </h2>
            <p className="text-foreground/75 text-sm sm:text-base max-w-xl">
              Enterprise agentic banking systems with formal architecture specifications, full-stack geospatial platforms, and systems software.
            </p>
          </div>
          <a
            href="https://github.com/daniyalsaqib"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary text-xs py-2 px-3.5 w-fit"
          >
            <Github className="w-3.5 h-3.5" />
            <span>All Repositories</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {visibleProjects.map((p) => {
            const IconComponent = p.icon;
            const isFlagship = p.isFlagship;

            return (
              <div
                key={p.title}
                className={`card p-6 sm:p-7 flex flex-col justify-between group relative transition-all duration-300 ${
                  isFlagship
                    ? 'md:col-span-2 border-gold/40 bg-gradient-to-br from-surface via-surface to-gold/5 shadow-[0_4px_24px_rgba(201,168,76,0.08)]'
                    : 'hover:border-gold/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-gold">
                      {p.category}
                    </span>
                    <span
                      className={`text-[10px] uppercase tracking-wide font-semibold px-2.5 py-0.5 rounded-full border ${
                        isFlagship
                          ? 'border-gold/50 bg-gold/15 text-gold'
                          : p.isLiveOrActive
                          ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400'
                          : 'border-border bg-surface text-muted'
                      }`}
                    >
                      {p.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="p-2 rounded-md bg-gold/10 text-gold group-hover:scale-105 transition-transform">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-gold transition-colors">
                      {p.title}
                    </h3>
                  </div>

                  <p className="text-foreground/75 text-sm sm:text-base leading-relaxed mb-6">
                    {p.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] px-2.5 py-1 rounded bg-surface border border-border/80 text-foreground/75 font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-3">
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:text-gold-light transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>View Code / Repo</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>

                    {p.specUrl && (
                      <a
                        href={p.specUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md border border-gold/40 bg-gold/10 text-gold hover:bg-gold/20 hover:border-gold transition-all shadow-[0_0_12px_rgba(201,168,76,0.15)]"
                        title="Read the 8-page Software Requirements & Design Specification"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Read Architecture Spec (PDF)</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All / View Less Toggle Button */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn-secondary group px-6 py-2.5 text-xs font-semibold"
          >
            <span>{showAll ? 'Show Featured Projects Only' : `View All Projects (${projects.length})`}</span>
            <ChevronDown
              className={`w-4 h-4 text-gold transition-transform duration-300 ${
                showAll ? 'rotate-180' : 'group-hover:translate-y-0.5'
              }`}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
