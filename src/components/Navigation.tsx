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
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/90 backdrop-blur border-b border-border">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="font-display font-bold text-lg">
          Daniyal<span className="text-gold">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-foreground/80">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-gold transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn-primary text-sm py-2 px-4">
          Get In Touch
        </a>
      </nav>
    </header>
  );
};

export default Navigation;
