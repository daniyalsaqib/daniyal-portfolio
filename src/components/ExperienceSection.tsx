import { useState } from 'react';
import { Calendar, MapPin, ChevronDown, Sparkles, ExternalLink, FileText } from 'lucide-react';

interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  tagline: string;
  stack: string[];
  bullets: string[];
  docUrl?: string;
  docTitle?: string;
}

const jobs: Job[] = [
  {
    title: 'IT Intern',
    company: 'Allied Bank Limited (ABL)',
    location: 'Lahore, Pakistan',
    period: 'Aug 2026 – Sep 2026',
    current: false,
    tagline: 'Engineered multi-agent banking AI suites, authored enterprise SRDS specification, and delivered high-reliability C++ banking operations engine.',
    stack: ['Agentic AI', 'Python', 'FastAPI', 'State Machines', 'C++', 'Banking IT'],
    bullets: [
      'Authored the complete Software Requirements & Design Specification (SRDS) and engineered the ABL Outreach & Fraud Operations Suite — an agentic system featuring an autonomous Transaction Fraud Flagging Agent, Cold Outreach Agent, and a deterministic Charity Consent State Machine.',
      'Designed the ABL Banking Intelligence pipeline for automated statement analysis, subscription & fee anomaly detection, and regulatory policy Q&A with source citations.',
      'Completed a high-reliability console-based banking operations engine (C++) as an onboarding technical milestone within ABL’s 4th IT Group.',
    ],
    docUrl: '/ABL_Outreach_and_Fraud_Operations_Suite_Spec.pdf',
    docTitle: 'View SRDS Design Spec (PDF)',
  },
  {
    title: 'Chief Operating Officer (COO)',
    company: 'Axiolink Systems',
    location: 'Lahore, Pakistan',
    period: 'Dec 2025 – Jul 2026',
    current: false,
    tagline: 'Restructured engineering department of 20 down to an agile 10-person unit, driving sprint cadence, delivery accountability, and tech recruitment.',
    stack: ['Engineering Leadership', 'Agile / Jira', 'SDLC Management', 'Operations'],
    bullets: [
      'Restructured a 20-person technical team into a focused 10-person unit, boosting delivery accountability, sprint predictability, and cross-team communication.',
      'Partnered closely with the CTO to decompose complex product roadmaps, prioritize sprint backlogs, and delegate technical deliverables in Jira.',
      'Served as the primary public face of Axiolink across campus, driving organic brand visibility and developer talent acquisition.',
    ],
  },
  {
    title: 'Full-Stack Intern',
    company: 'WiMetrix',
    location: 'Lahore, Pakistan',
    period: 'Aug 2025 – Oct 2025',
    current: false,
    tagline: 'Built real-time digital clock synchronization modules in JavaScript and contributed to responsive production interfaces.',
    stack: ['JavaScript', 'HTML5/CSS3', 'Git', 'Team Workflows'],
    bullets: [
      'Engineered a real-time digital clock synchronization module in JavaScript while collaborating alongside senior software engineers.',
      'Contributed to responsive production interfaces and adhered to rigorous Git/GitHub branching and review standards.',
    ],
  },
];

const ExperienceSection = () => {
  // Index 0 (Allied Bank) expanded by default for immediate context
  const [expandedIndices, setExpandedIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setExpandedIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const allExpanded = expandedIndices.length === jobs.length;

  const toggleAll = () => {
    if (allExpanded) {
      setExpandedIndices([]);
    } else {
      setExpandedIndices(jobs.map((_, i) => i));
    }
  };

  return (
    <section id="experience" className="px-6 py-24 border-t border-border/80 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-px w-6 bg-gold/60 inline-block" />
              <p className="eyebrow !tracking-[0.2em] !mb-0">Work Experience</p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Where I've worked
            </h2>
          </div>

          {/* Quick Expand / Collapse All Control */}
          <button
            onClick={toggleAll}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-gold transition-colors py-1.5 px-3 rounded border border-border/80 hover:border-gold/40 bg-surface/50"
            aria-label={allExpanded ? 'Collapse all experiences' : 'Expand all experiences'}
          >
            <span>{allExpanded ? 'Collapse All' : 'Expand All Details'}</span>
          </button>
        </div>

        {/* Collapsible Accordion List */}
        <div className="space-y-4">
          {jobs.map((job, index) => {
            const isExpanded = expandedIndices.includes(index);

            return (
              <div
                key={job.title + job.company}
                className={`rounded-lg border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'border-gold/40 bg-surface/95 shadow-[0_4px_24px_rgba(201,168,76,0.08)]'
                    : 'border-border bg-surface/60 hover:border-border/90 hover:bg-surface/80'
                }`}
              >
                {/* Collapsible Header (Always visible & clickable) */}
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left p-6 sm:p-7 flex flex-col gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
                  aria-expanded={isExpanded}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 w-full">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-gold transition-colors">
                        {job.title}
                      </h3>
                      <span className="text-muted text-sm hidden sm:inline">·</span>
                      <p className="text-gold font-semibold text-base">{job.company}</p>
                      {job.current && (
                        <span className="text-[10px] uppercase tracking-wider font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                          Current Role
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-4 text-xs text-muted">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-gold/75" />
                        <span>{job.period}</span>
                      </div>
                      <div className="hidden sm:flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-gold/75" />
                        <span>{job.location}</span>
                      </div>
                      <div
                        className={`p-1 rounded-full border border-border/70 text-muted transition-transform duration-300 ${
                          isExpanded ? 'rotate-180 text-gold border-gold/40' : ''
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Scannable 1-line Tagline / Hook */}
                  <p className="text-foreground/75 text-sm leading-relaxed pr-8">
                    {job.tagline}
                  </p>
                </button>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 border-t border-border/60 animate-fadeIn">
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-muted mb-3">
                      Key Deliverables &amp; Impact
                    </h4>
                    <ul className="space-y-2.5 text-foreground/85 text-sm mb-6 leading-relaxed">
                      {job.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Footer bar with stack and optional document link */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border/50">
                      <div className="flex flex-wrap gap-1.5">
                        {job.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2.5 py-1 rounded bg-background/60 border border-border/70 text-foreground/80 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {job.docUrl && (
                        <a
                          href={job.docUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:text-gold-light transition-colors py-1 px-2.5 rounded border border-gold/30 bg-gold/5"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>{job.docTitle}</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
