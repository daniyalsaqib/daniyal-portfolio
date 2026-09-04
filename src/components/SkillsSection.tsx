import { Code2, Globe, Database, Cpu } from 'lucide-react';

const groups = [
  {
    label: 'Languages',
    icon: Code2,
    items: ['JavaScript (ES6+)', 'Python', 'C++', 'Java', 'C#', 'SQL'],
  },
  {
    label: 'Web & AI Technologies',
    icon: Globe,
    items: ['React', 'Next.js', 'FastAPI', 'Streamlit', 'Node.js', 'HTML5/CSS3'],
  },
  {
    label: 'Databases & Tools',
    icon: Database,
    items: ['PostgreSQL', 'Git', 'GitHub', 'Jira', 'Unity'],
  },
  {
    label: 'Core Competencies',
    icon: Cpu,
    items: [
      'Full-Stack Development',
      'Agentic AI Workflows',
      'Data Structures & Algorithms (DSA)',
      'Object-Oriented Programming (OOP)',
      'Agile / Scrum',
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="px-6 py-24 border-t border-border relative">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow">04 — Skills</p>
        <div className="rule" />
        <h2 className="text-3xl sm:text-4xl font-bold mb-14">Technical toolkit</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {groups.map((g) => {
            const Icon = g.icon;
            return (
              <div key={g.label} className="card p-6 sm:p-7 border border-border">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/70">
                  <Icon className="w-4 h-4 text-gold" />
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
                    {g.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="tag font-medium py-1.5 px-3 hover:border-gold/50 transition-colors"
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
