const activities = [
  {
    role: 'Marketing Lead',
    org: 'TEDx UMT',
    period: 'Jul 2026',
  },
  {
    role: 'Web Development Team Member',
    org: 'Google Developer Group (GDG) UMT',
    period: 'Nov 2025 – Present',
  },
  {
    role: 'Speed Programming Team Member',
    org: 'UMT ACM Student Chapter',
    period: 'Nov 2025 – Present',
  },
];

const ActivitiesSection = () => {
  return (
    <section id="activities" className="px-6 py-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow">05 — Activities</p>
        <div className="rule" />
        <h2 className="text-4xl font-bold mb-14">Societies & leadership</h2>

        <div className="divide-y divide-border border-t border-border">
          {activities.map((a) => (
            <div
              key={a.role}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-6 gap-1"
            >
              <div>
                <h3 className="font-semibold">{a.role}</h3>
                <p className="text-foreground/60 text-sm">{a.org}</p>
              </div>
              <p className="text-muted text-sm">{a.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
