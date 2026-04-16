const links = ['Home', 'About', 'Programs', 'Results', 'Contact'];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-brand-white py-10">
      <div className="section-wrap flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
        <div>
          <p className="text-lg font-semibold text-brand-navy">Lawson Sport Performance</p>
          <p className="mt-2 text-sm text-slate-600">Built for serious high school athletes.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="transition-colors hover:text-brand-navy">
              {link}
            </a>
          ))}
        </div>
        <div className="flex gap-3 text-sm text-slate-600">
          <a href="#" aria-label="Instagram" className="hover:text-brand-navy">IG</a>
          <a href="#" aria-label="X" className="hover:text-brand-navy">X</a>
          <a href="#" aria-label="YouTube" className="hover:text-brand-navy">YT</a>
        </div>
      </div>
    </footer>
  );
}
