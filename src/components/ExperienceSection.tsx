import { Briefcase, Calendar, MapPin } from 'lucide-react';

const jobs = [
  {
    title: 'IT Intern',
    company: 'Allied Bank Limited (ABL)',
    location: 'Lahore, Pakistan',
    period: 'Aug 2026 – Sep 2026',
    current: false,
    stack: ['Agentic AI', 'Python', 'State Machines', 'C++', 'Banking IT'],
    bullets: [
      'Authored the Software Requirements & Design Specification (SRDS) and engineered the ABL Outreach & Fraud Operations Suite — an agentic system featuring an autonomous Transaction Fraud Flagging Agent, Cold Outreach Agent, and a deterministic Charity Consent State Machine.',
      'Designed the ABL Banking Intelligence pipeline for automated statement analysis, subscription & fee anomaly detection, and regulatory policy Q&A with source citations.',
      'Completed a high-reliability console-based banking operations engine (C++) as an onboarding technical milestone within ABL’s 4th IT Group.',
    ],
  },
  {
    title: 'Chief Operating Officer (COO)',
    company: 'Axiolink Systems',
    location: 'Lahore, Pakistan',
    period: 'Dec 2025 – Jul 2026',
    current: false,
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
    stack: ['JavaScript', 'HTML5/CSS3', 'Git', 'Team Workflows'],
    bullets: [
      'Engineered a real-time digital clock synchronization module in JavaScript while collaborating alongside senior software engineers.',
      'Contributed to responsive production interfaces and adhered to rigorous Git/GitHub branching and review standards.',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="px-6 py-24 border-t border-border relative">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow">02 — Experience</p>
        <div className="rule" />
        <h2 className="text-3xl sm:text-4xl font-bold mb-14">Where I've worked</h2>

        <div className="space-y-12">
          {jobs.map((job) => (
            <div
              key={job.title + job.company}
              className="card p-6 sm:p-8 relative group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 flex-wrap mb-1">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-gold-light transition-colors">
                      {job.title}
                    </h3>
                    {job.current && (
                      <span className="text-[11px] uppercase tracking-wider font-semibold bg-gold/15 text-gold border border-gold/40 px-2.5 py-0.5 rounded-full">
                        Current Role
                      </span>
                    )}
                  </div>
                  <p className="text-gold font-medium text-base mb-1">{job.company}</p>
                </div>

                <div className="flex flex-wrap items-center md:flex-col md:items-end gap-x-4 gap-y-1 text-xs text-muted">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gold/80" />
                    <span>{job.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gold/80" />
                    <span>{job.location}</span>
                  </div>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2.5 text-foreground/80 text-sm mb-6 leading-relaxed">
                {job.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span className="text-gold mt-1.5 text-xs">◆</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies Tag Bar */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/70">
                {job.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-md bg-surface border border-border/60 text-foreground/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
