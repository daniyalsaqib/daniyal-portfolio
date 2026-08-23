const groups = [
  {
    label: 'Languages',
    items: ['JavaScript (ES6+)', 'C++', 'Java', 'Python', 'C#', 'SQL'],
  },
  {
    label: 'Web Technologies',
    items: ['HTML5', 'CSS3', 'Node.js (Learning)', 'Next.js (Familiarity)', 'Streamlit', 'FastAPI'],
  },
  {
    label: 'Databases & Tools',
    items: ['PostgreSQL', 'Git', 'GitHub', 'VS Code', 'Jira', 'Unity'],
  },
  {
    label: 'Core Competencies',
    items: ['UI Development', 'Data Structures & Algorithms', 'OOP', 'Agile/Scrum'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="px-6 py-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow">04 — Skills</p>
        <div className="rule" />
        <h2 className="text-4xl font-bold mb-14">Technical toolkit</h2>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
          {groups.map((g) => (
            <div key={g.label} className="border-t border-border pt-6">
              <p className="eyebrow mb-4">{g.label}</p>
              <div className="flex flex-wrap gap-3">
                {g.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
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

export default SkillsSection;
