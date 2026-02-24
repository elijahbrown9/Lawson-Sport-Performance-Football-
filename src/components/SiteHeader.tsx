import Link from 'next/link';

const links = [
  { href: '/', label: 'Dashboard' },
  { href: '/attendance', label: 'Attendance' },
  { href: '/vertical', label: 'Vertical' },
  { href: '/strength', label: 'Strength' },
  { href: '/today', label: 'Today' },
];

export function SiteHeader() {
  return (
    <header className="border-b border-slate-800 bg-lawsonNavy/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <p className="text-lg font-semibold tracking-wide text-lawsonYellow">Lawson Football</p>
        <nav className="flex flex-wrap gap-2 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-slate-700 px-3 py-1.5 text-slate-200 hover:border-lawsonYellow hover:text-lawsonYellow"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
