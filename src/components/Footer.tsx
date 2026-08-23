const Footer = () => {
  return (
    <footer className="px-6 py-10 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted">
        <p>© {new Date().getFullYear()} Daniyal Saqib. Lahore, Pakistan.</p>
        <div className="flex gap-6">
          <a href="https://github.com/heredaniyal" target="_blank" rel="noreferrer" className="hover:text-gold">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gold">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
