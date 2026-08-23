const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 pt-24">
      <div className="max-w-6xl mx-auto w-full">
        <p className="eyebrow">Lahore, Pakistan</p>
        <div className="rule" />
        <h1 className="text-6xl md:text-8xl font-bold leading-[0.95] mb-6">
          Daniyal Saqib
        </h1>
        <p className="text-xl md:text-2xl text-foreground/90 mb-6">
          Full Stack Developer <span className="text-muted">/</span> CS Student @ UMT
        </p>
        <p className="max-w-xl text-foreground/60 mb-10 leading-relaxed">
          Pragmatic CS student and startup executive with hands-on experience in
          full-stack development and operations. I build responsive,
          business-aligned UIs on a strong foundation in JavaScript, DSA, and
          real-world delivery.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
