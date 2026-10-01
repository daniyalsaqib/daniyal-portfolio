import { Code2, Globe, Database, Cpu } from 'lucide-react';

const groups = [
  {
    label: 'Languages',
    icon: Code2,
    items: ['JavaScript (ES6+)', 'Python', 'C++', 'Java', 'C#', 'SQL', 'TypeScript'],
  },
  {
    label: 'Web & AI',
    icon: Globe,
    items: [
      'React',
      'FastAPI',
      'Streamlit',
      'Node.js',
      'Agentic AI Workflows',
      'RAG',
      'REST APIs',
      'HTML5/CSS3',
    ],
  },
  {
    label: 'Databases & Tools',
    icon: Database,
    items: ['PostgreSQL', 'Git', 'GitHub', 'Jira', 'Unity', 'Linux'],
  },
  {
    label: 'Core Competencies',
    icon: Cpu,
    items: [
      'Full-Stack Development',
      'Data Structures & Algorithms (DSA)',
      'OOP',
      'Agile/Scrum',
      'System Architecture',
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="px-6 py-24 border-t border-border/80 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <span className="h-px w-6 bg-gold/60 inline-block" />
          <p className="eyebrow !tracking-[0.2em] !mb-0">Technical Toolkit</p>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-10">
          Skills &amp; Technologies
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((g) => {
            const Icon = g.icon;
            return (
              <div
                key={g.label}
                className="p-5 sm:p-6 rounded-lg bg-surface/70 border border-border hover:border-gold/30 transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="p-1.5 rounded bg-gold/10 text-gold">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">
                    {g.label}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded bg-background/80 border border-border/70 text-foreground/80 font-medium hover:border-gold/40 hover:text-gold transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
