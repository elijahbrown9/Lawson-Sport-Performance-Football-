const links = ['Home', 'About', 'Programs', 'Results', 'Contact'];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-brand-white py-12">
      <div className="section-wrap flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
        <div>
          <p className="text-lg font-semibold tracking-wide text-brand-navy">Lawson Sport Performance</p>
          <p className="mt-2 text-sm text-slate-600">Serious training. Measurable performance. Real transfer.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="transition-colors hover:text-brand-navy">
              {link}
            </a>
          ))}
        </div>
        <div className="flex gap-3 text-xs font-semibold uppercase tracking-wider text-slate-600">
          <a href="#" aria-label="Instagram" className="rounded border border-slate-300 px-2 py-1 hover:border-brand-sky hover:text-brand-navy">IG</a>
          <a href="#" aria-label="X" className="rounded border border-slate-300 px-2 py-1 hover:border-brand-sky hover:text-brand-navy">X</a>
          <a href="#" aria-label="YouTube" className="rounded border border-slate-300 px-2 py-1 hover:border-brand-sky hover:text-brand-navy">YT</a>
        </div>
      </div>
    </footer>
  );
}
