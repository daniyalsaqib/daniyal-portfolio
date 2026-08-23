const badges = ['Full Stack Developer', 'CS Student @ UMT', 'Ex-COO, Axiolink'];

const AboutSection = () => {
  return (
    <section id="about" className="px-6 py-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow">01 — About</p>
        <div className="rule" />
        <h2 className="text-4xl font-bold mb-12">Who I am</h2>

        <div className="grid md:grid-cols-[1.3fr_1fr] gap-12">
          <div>
            <p className="text-foreground/80 leading-relaxed mb-5">
              I'm a Computer Science student at UMT and a front-end focused full
              stack developer. I've shipped responsive UIs on live projects at
              WiMetrix, and led technical planning and delivery as COO at
              Axiolink Systems.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-5">
              That mix of building and operating shapes how I work: I care about
              clean, maintainable interfaces, but also about scope, timelines,
              and whether the thing actually serves the business behind it.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-8">
              Currently I'm deepening my work with Next.js, PostgreSQL, and
              Python-based AI tooling, alongside coursework in data structures,
              data mining, and game development.
            </p>
            <div className="flex flex-wrap gap-3">
              {badges.map((b) => (
                <span key={b} className="tag">
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="card p-8">
            <p className="eyebrow mb-4">Education</p>
            <h3 className="text-xl font-semibold mb-1">BS Computer Science</h3>
            <p className="text-foreground/60 mb-6">
              University of Management and Technology (UMT), Lahore
            </p>

            <div className="flex justify-between py-3 border-t border-border text-sm">
              <span className="text-muted">Duration</span>
              <span>Oct 2023 – Jun 2027</span>
            </div>
            <div className="flex justify-between py-3 border-t border-border text-sm">
              <span className="text-muted">CGPA</span>
              <span>3.00</span>
            </div>

            <p className="eyebrow mt-6 mb-2">Relevant Coursework</p>
            <p className="text-sm text-foreground/60">
              OOP · Data Structures &amp; Algorithms · Data Mining · Game
              Development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
