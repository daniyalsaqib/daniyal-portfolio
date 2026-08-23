const jobs = [
  {
    title: 'Full Stack Developer Intern',
    company: 'Allied Bank Limited (ABL)',
    location: 'Lahore',
    period: 'Aug 2026 – Sep 2026',
    current: true,
    bullets: [
      'Gaining hands-on exposure to banking IT systems at ABL Head Office, 4th IT Group.',
      'Supporting internal digital workflows and collaborating with IT and operations teams.',
    ],
  },
  {
    title: 'Chief Operating Officer (COO)',
    company: 'Axiolink Systems',
    location: 'Lahore',
    period: 'Dec 2025 – Jul 2026',
    current: false,
    bullets: [
      'Led technical planning and strategic operations, working with the CTO to streamline software delivery.',
      'Managed software development lifecycles using Jira, bridging client requirements with developer tasks.',
    ],
  },
  {
    title: 'Full-Stack Intern',
    company: 'WiMetrix',
    location: 'Lahore',
    period: 'Aug – Oct 2025',
    current: false,
    bullets: [
      'Developed and maintained responsive UIs using HTML, CSS, and JavaScript on live projects.',
      'Collaborated with senior developers via Git/GitHub; delivered a digital clock synchronization module.',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="px-6 py-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow">02 — Experience</p>
        <div className="rule" />
        <h2 className="text-4xl font-bold mb-14">Where I've worked</h2>

        <div className="space-y-10">
          {jobs.map((job) => (
            <div
              key={job.title + job.company}
              className="grid md:grid-cols-[auto_1fr_auto] gap-x-6 gap-y-2 border-t border-border pt-8"
            >
              <span
                className={`h-2.5 w-2.5 rounded-full mt-2 ${
                  job.current ? 'bg-gold' : 'bg-border'
                }`}
              />
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  {job.current && (
                    <span className="text-xs uppercase tracking-wide border border-gold text-gold px-2 py-0.5 rounded-sm">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-gold text-sm mb-3">{job.company}</p>
                <ul className="space-y-1.5 text-foreground/70 text-sm">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-gold">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-sm text-muted text-left md:text-right whitespace-nowrap">
                <p>{job.period}</p>
                <p>{job.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
