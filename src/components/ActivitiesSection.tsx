import { Users, Award, Code2, Megaphone } from 'lucide-react';

const activities = [
  {
    role: 'Co-Director Marketing',
    org: 'UMT Entrepreneur Society',
    period: 'Aug 2026 – Present',
    current: true,
    description: 'Leading campus outreach, brand positioning, and marketing campaigns for university startup conferences and founder summits.',
    icon: Megaphone,
  },
  {
    role: 'Marketing Lead',
    org: 'TEDx UMT',
    period: 'Jul 2026',
    current: false,
    description: 'Spearheaded digital marketing strategy and attendee acquisition campaigns for the flagship university TEDx event.',
    icon: Award,
  },
  {
    role: 'Web Development Team Member',
    org: 'Google Developer Group (GDG) UMT',
    period: 'Nov 2025 – Sep 2026',
    current: false,
    description: 'Collaborated on developer community initiatives, hands-on coding workshops, and developer-advocacy events.',
    icon: Code2,
  },
  {
    role: 'Speed Programming Team Member',
    org: 'UMT ACM Student Chapter',
    period: 'Nov 2025 – Present',
    current: true,
    description: 'Trained and competed in algorithmic speed programming competitions and advanced data structure challenges.',
    icon: Users,
  },
];

const ActivitiesSection = () => {
  return (
    <section id="activities" className="px-6 py-24 border-t border-border/80 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <span className="h-px w-6 bg-gold/60 inline-block" />
          <p className="eyebrow !tracking-[0.2em] !mb-0">Leadership &amp; Community</p>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-10">
          Societies &amp; Campus Initiatives
        </h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {activities.map((a) => {
            const Icon = a.icon;
            return (
              <div
                key={a.role + a.org}
                className="p-5 sm:p-6 rounded-lg bg-surface/70 border border-border flex flex-col justify-between hover:border-gold/35 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="p-2 rounded-md bg-gold/10 text-gold">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${
                        a.current
                          ? 'border-gold/40 bg-gold/10 text-gold'
                          : 'border-border bg-background/50 text-muted'
                      }`}
                    >
                      {a.period}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{a.role}</h3>
                  <p className="text-gold font-medium text-sm mb-2.5">{a.org}</p>
                  <p className="text-foreground/75 text-sm leading-relaxed">
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
