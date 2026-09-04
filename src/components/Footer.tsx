import { ArrowUp, FileDown, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="px-6 py-12 border-t border-border bg-background/80">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <p className="font-semibold text-foreground">Daniyal Saqib</p>
          <span className="hidden sm:inline text-border">•</span>
          <p className="text-xs text-muted">Full Stack &amp; AI Engineer</p>
          <span className="hidden sm:inline text-border">•</span>
          <p className="text-xs text-muted">© {new Date().getFullYear()} All rights reserved</p>
        </div>

        <div className="flex items-center gap-6 text-xs">
          <a
            href="https://github.com/daniyalsaqib"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gold transition-colors flex items-center gap-1"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/daniyal-saqib-012142335"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gold transition-colors flex items-center gap-1"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="/Daniyal_Saqib_Resume.pdf"
            download="Daniyal_Saqib_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors flex items-center gap-1"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
          <a
            href="#home"
            className="hover:text-gold transition-colors flex items-center gap-1 p-1"
            title="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
