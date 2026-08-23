const projects = [
  {
    title: 'Inbox Copilot',
    tag: 'AI Hackathon — SOFTEC\u201926',
    stack: ['Streamlit', 'FastAPI', 'Python', 'Groq API'],
  },
  {
    title: 'Networking CRM System',
    tag: 'In progress',
    stack: ['Next.js', 'PostgreSQL', 'Leaflet'],
  },
  {
    title: 'PatientZero Prototype',
    tag: 'Game Dev',
    stack: ['C#', 'Unity 3D'],
  },
  {
    title: 'Hotel Reservation System',
    tag: 'Coursework',
    stack: ['C++', 'OOP', 'Data Structures'],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="px-6 py-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow">03 — Projects</p>
        <div className="rule" />
        <h2 className="text-4xl font-bold mb-14">Selected work</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="card p-6">
              <p className="text-xs text-gold uppercase tracking-wide mb-2">
                {p.tag}
              </p>
              <h3 className="text-lg font-semibold mb-4">{p.title}</h3>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="tag text-xs py-1 px-2.5">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="https://github.com/daniyalsaqib"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            See more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
