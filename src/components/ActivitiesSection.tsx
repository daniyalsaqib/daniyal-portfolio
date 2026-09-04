import { Users, Award, Code2, Megaphone } from 'lucide-react';

const activities = [
  {
    role: 'Co-Director Marketing',
    org: 'UMT Entrepreneur Society',
    period: 'Aug 2026 – Present',
    current: true,
    description: 'Leading strategic campus outreach, event branding, and marketing initiatives for entrepreneurship drives and startup summits.',
    icon: Megaphone,
  },
  {
    role: 'Marketing Lead',
    org: 'TEDx UMT',
    period: 'Jul 2026',
    current: false,
    description: 'Spearheaded digital marketing strategy and attendee acquisition for the flagship TEDx conference.',
    icon: Award,
  },
  {
    role: 'Web Development Team Member',
    org: 'Google Developer Group (GDG) UMT',
    period: 'Nov 2025 – Sep 2026',
    current: false,
    description: 'Collaborated on web community initiatives, tech workshops, and developer developer-advocacy events.',
    icon: Code2,
  },
  {
    role: 'Speed Programming Team Member',
    org: 'UMT ACM Student Chapter',
    period: 'Nov 2025 – Present',
    current: true,
    description: 'Trained and competed in competitive algorithmic speed programming and data structures challenges.',
    icon: Users,
  },
];

const ActivitiesSection = () => {
  return (
    <section id="activities" className="px-6 py-24 border-t border-border relative">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow">05 — Activities</p>
        <div className="rule" />
        <h2 className="text-3xl sm:text-4xl font-bold mb-14">Societies &amp; leadership</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {activities.map((a) => {
            const Icon = a.icon;
            return (
              <div
                key={a.role + a.org}
                className="card p-6 border border-border flex flex-col justify-between hover:border-gold/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="p-2 rounded-md bg-gold/10 text-gold">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${
                        a.current
                          ? 'border-gold/40 bg-gold/10 text-gold'
                          : 'border-border bg-surface text-muted'
                      }`}
                    >
                      {a.period}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{a.role}</h3>
                  <p className="text-gold font-medium text-sm mb-3">{a.org}</p>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {a.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
