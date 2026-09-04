import { Github, ArrowUpRight, Sparkles, Terminal, Map, MailCheck, Gamepad2, ShieldAlert, FileText } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  status: string;
  isLiveOrActive?: boolean;
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
    status: 'Architected & Delivered',
    isLiveOrActive: false,
    description:
      'Authored the complete Software Requirements & Design Specification (SRDS) and built a layered multi-agent banking system: a Transaction Fraud Flagging Agent with plain-language explainability, a Cold Email Outreach Agent, and an Automated Charity Consent Workflow Agent enforcing a deterministic 5-state machine with bounded retries and an immutable audit trail.',
    stack: ['Python', 'FastAPI', 'Agentic Workflows', 'State Machine', 'Audit Logging', 'Synthetic Data'],
    repoUrl: 'https://github.com/daniyalsaqib',
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
    repoUrl: 'https://github.com/daniyalsaqib',
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
    repoUrl: 'https://github.com/daniyalsaqib',
    icon: Map,
  },
  {
    title: 'Inbox Copilot',
    category: 'AI Hackathon · SOFTEC’26',
    status: 'Built in 6h Sprint',
    isLiveOrActive: false,
    description:
      'Engineered with Team Panic Pointers at FAST-NU Lahore under a 6-hour sprint. Classifies incoming opportunity emails, extracts key structured fields with LLM pipelines, and computes personalized priority rankings for executives.',
    stack: ['Streamlit', 'Python', 'FastAPI', 'Groq API', 'NLP'],
    repoUrl: 'https://github.com/daniyalsaqib',
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
    repoUrl: 'https://github.com/daniyalsaqib',
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
    repoUrl: 'https://github.com/daniyalsaqib',
    icon: Gamepad2,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="px-6 py-24 border-t border-border relative">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow">03 — Projects</p>
        <div className="rule" />
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Selected work</h2>
            <p className="text-foreground/70 text-sm sm:text-base max-w-xl">
              From enterprise agentic banking suites with design specs to full-stack geospatial platforms and game engines.
            </p>
          </div>
          <a
            href="https://github.com/daniyalsaqib"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary text-xs py-2 px-3.5 w-fit"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => {
            const IconComponent = p.icon;
            return (
              <div
                key={p.title}
                className="card p-6 sm:p-7 flex flex-col justify-between group relative hover:border-gold/50 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-medium tracking-wider uppercase text-gold">
                      {p.category}
                    </span>
                    <span
                      className={`text-[10px] uppercase tracking-wide font-semibold px-2 py-0.5 rounded-full border ${
                        p.isLiveOrActive
                          ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400'
                          : 'border-border bg-surface text-muted'
                      }`}
                    >
                      {p.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="p-1.5 rounded-md bg-gold/10 text-gold group-hover:scale-110 transition-transform">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-gold transition-colors">
                      {p.title}
                    </h3>
                  </div>

                  <p className="text-foreground/75 text-sm leading-relaxed mb-6">
                    {p.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] px-2.5 py-1 rounded bg-surface border border-border/80 text-foreground/70"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border/70 flex flex-wrap items-center justify-between gap-3">
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
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded border border-gold/30 bg-gold/5 text-gold hover:bg-gold/15 transition-all"
                        title="Read the Software Requirements & Design Specification"
                      >
                        <FileText className="w-3 h-3" />
                        <span>Design Spec (PDF)</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
