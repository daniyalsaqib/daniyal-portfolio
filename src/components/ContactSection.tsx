import { useState } from 'react';
import { Mail, MessageSquare, Phone, Copy, Check, Linkedin, Github, FileDown } from 'lucide-react';

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = 'daniyalsaqib04@gmail.com';
  const phone = '+92 330 8068062';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="px-6 py-24 border-t border-border relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="eyebrow">06 — Contact</p>
          <div className="rule" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Let's talk</h2>
          <p className="text-foreground/75 max-w-md leading-relaxed mb-8">
            I’m actively open to <span className="text-foreground font-semibold">Full-Stack and AI Engineering roles</span>, high-impact projects, and technical collaborations. The fastest way to reach me is WhatsApp or direct email.
          </p>

          {/* Quick info list */}
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-gold/10 text-gold">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-muted uppercase tracking-wider">Email</p>
                <a
                  href={`mailto:${email}`}
                  className="text-foreground hover:text-gold transition-colors font-medium"
                >
                  {email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-gold/10 text-gold">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-muted uppercase tracking-wider">Phone &amp; WhatsApp</p>
                <a
                  href="https://wa.me/923308068062"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground hover:text-gold transition-colors font-medium"
                >
                  {phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Action Card */}
        <div className="card p-7 sm:p-8 bg-surface/90 border border-border">
          <p className="eyebrow mb-6">Start a Conversation</p>

          <div className="space-y-3.5">
            <a
              href="https://wa.me/923308068062"
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full justify-center py-3 text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={`mailto:${email}`}
                className="btn-secondary w-full justify-center py-2.5 text-xs font-semibold"
              >
                <Mail className="w-3.5 h-3.5 text-gold" />
                <span>Send Email</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="btn-secondary w-full justify-center py-2.5 text-xs font-semibold"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-gold" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            <a
              href="/Daniyal_Saqib_Resume.pdf"
              download="Daniyal_Saqib_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 p-3 rounded-md border border-border/80 text-foreground/80 hover:border-gold/50 hover:text-gold transition-colors text-xs font-medium"
            >
              <FileDown className="w-4 h-4 text-gold" />
              <span>Download Updated Resume (PDF)</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-border/70 flex items-center justify-between text-xs text-muted">
            <span>Location: Lahore, Pakistan</span>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/in/daniyal-saqib-012142335"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold transition-colors"
              >
                LinkedIn
              </a>
              <span>·</span>
              <a
                href="https://github.com/daniyalsaqib"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
