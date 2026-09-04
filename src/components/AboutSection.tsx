import { GraduationCap, BookOpen, Code2, Briefcase } from 'lucide-react';

const badges = [
  'Full Stack & AI Engineer',
  'Ex-IT Intern, Allied Bank',
  'Ex-COO, Axiolink Systems',
  'BS CS @ UMT (2027)',
];

const AboutSection = () => {
  return (
    <section id="about" className="px-6 py-24 border-t border-border relative">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow">01 — About</p>
        <div className="rule" />
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Who I am</h2>

        <div className="grid md:grid-cols-[1.3fr_1fr] gap-12 items-start">
          <div>
            <p className="text-foreground/85 leading-relaxed text-base sm:text-lg mb-5">
              I'm a <span className="text-foreground font-semibold">Full Stack and AI Engineer</span> and Computer Science student at UMT. Following my IT internship at Allied Bank where I engineered agentic AI systems and high-reliability C++ banking infrastructure, I build high-performance web systems using React/Next.js, FastAPI, PostgreSQL, and Python.
            </p>
            <p className="text-foreground/80 leading-relaxed text-sm sm:text-base mb-5">
              Prior to my banking engineering work, I served as <span className="text-gold font-medium">Chief Operating Officer (COO) at Axiolink Systems</span>, where I restructured an engineering department of 20 down to an agile 10-person technical unit, improving delivery accountability, sprint cadence, and engineering velocity.
            </p>
            <p className="text-foreground/80 leading-relaxed text-sm sm:text-base mb-8">
              That blend of full-stack engineering, practical AI architecture, and startup execution drives how I build: clean, maintainable systems that serve actual user needs and business metrics without unnecessary overhead.
            </p>

            <div className="flex flex-wrap gap-2.5">
              {badges.map((b) => (
                <span key={b} className="tag font-medium">
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Education Card */}
          <div className="card p-7 sm:p-8 bg-surface/90 border border-border">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-gold" />
              <p className="eyebrow !mb-0">Education</p>
            </div>
            <h3 className="text-xl font-bold mb-1">BS Computer Science</h3>
            <p className="text-foreground/70 text-sm mb-6">
              University of Management and Technology (UMT), Lahore
            </p>

            <div className="space-y-3 py-4 border-t border-border/70 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-muted">Expected Graduation</span>
                <span className="font-medium text-foreground">Jun 2027</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted">Academic Term</span>
                <span className="font-medium text-foreground">Oct 2023 – Present</span>
              </div>
            </div>

            <div className="pt-5 border-t border-border/70">
              <div className="flex items-center gap-1.5 mb-2.5">
                <BookOpen className="w-4 h-4 text-gold" />
                <p className="eyebrow !mb-0 !text-[11px]">Relevant Coursework</p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-2 text-xs">
                {['OOP', 'Data Structures & Algorithms', 'Data Mining', 'Game Development'].map((course) => (
                  <span key={course} className="px-2 py-1 rounded bg-surface border border-border text-foreground/80">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
