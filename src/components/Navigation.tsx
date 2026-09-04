import { useState } from 'react';
import { Menu, X, FileDown, ArrowUpRight } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Activities', href: '#activities' },
  { label: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/80">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="font-display font-bold text-xl tracking-tight flex items-center gap-1 group">
          <span>Daniyal</span>
          <span className="text-gold group-hover:scale-125 transition-transform duration-200">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-foreground/75">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-gold transition-colors duration-200 py-1"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/Daniyal_Saqib_Resume.pdf"
            download="Daniyal_Saqib_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-md border border-gold/30 text-gold hover:bg-gold/10 hover:border-gold transition-all duration-200"
            title="Download Daniyal's Resume"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
          <a href="#contact" className="btn-primary text-xs py-2 px-3.5">
            Get In Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="/Daniyal_Saqib_Resume.pdf"
            download="Daniyal_Saqib_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1.5 rounded border border-gold/30 text-gold"
          >
            <FileDown className="w-3 h-3" />
            <span>CV</span>
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-foreground/80 hover:text-gold focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-b border-border bg-surface/95 backdrop-blur-xl px-6 py-6 transition-all">
          <ul className="space-y-4 text-base font-medium">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-foreground/80 hover:text-gold transition-colors py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-6 mt-4 border-t border-border flex flex-col gap-3">
            <a
              href="/Daniyal_Saqib_Resume.pdf"
              download="Daniyal_Saqib_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="btn-secondary w-full justify-center text-sm py-2.5"
            >
              <FileDown className="w-4 h-4 text-gold" />
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full justify-center text-sm py-2.5"
            >
              Get In Touch
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
