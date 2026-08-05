import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="section-wrap section-padding">
      <div className="surface-panel mx-auto max-w-2xl p-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-sky">Lawson Sport Performance</p>
        <h1 className="mt-3 text-3xl font-bold text-brand-navy">Page not found</h1>
        <p className="mt-4 text-slate-600">
          The page you requested does not exist. Return to the homepage to continue.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-lg bg-brand-yellow px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-brand-navy transition-colors hover:bg-yellow-300"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
