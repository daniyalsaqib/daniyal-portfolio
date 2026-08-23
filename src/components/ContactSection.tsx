const ContactSection = () => {
  return (
    <section id="contact" className="px-6 py-24 border-t border-border">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <p className="eyebrow">06 — Contact</p>
          <div className="rule" />
          <h2 className="text-4xl font-bold mb-6">Let's talk</h2>
          <p className="text-foreground/60 max-w-md leading-relaxed">
            Open to full stack and front-end opportunities, internships, and
            collaboration on interesting problems. The fastest way to reach me
            is WhatsApp or email.
          </p>
        </div>

        <div className="card p-8">
          <p className="eyebrow mb-6">Reach Out</p>
          <a
            href="https://wa.me/923308068062"
            target="_blank"
            rel="noreferrer"
            className="btn-primary w-full justify-center mb-4"
          >
            WhatsApp
          </a>
          <a
            href="mailto:hello@daniyalsaqib.me"
            className="btn-secondary w-full justify-center"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
