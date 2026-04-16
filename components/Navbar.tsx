import { Button } from './Button';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Results', href: '#results' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-brand-white/95 backdrop-blur-md">
      <div className="section-wrap flex h-20 items-center justify-between gap-6">
        <a href="#home" className="text-sm font-bold tracking-[0.12em] text-brand-navy sm:text-base">
          Lawson Sport Performance
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium tracking-wide text-slate-700 transition-colors hover:text-brand-navy"
            >
              {link.label}
            </a>
          ))}
        </div>
        <Button href="#contact" variant="primary">
          Join Training
        </Button>
      </div>
    </nav>
  );
}
