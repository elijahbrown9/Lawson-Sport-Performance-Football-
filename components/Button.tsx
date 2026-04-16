import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
};

const variants = {
  primary:
    'bg-brand-yellow text-brand-navy shadow-[0_10px_24px_-14px_rgba(244,197,66,0.9)] hover:-translate-y-0.5 hover:bg-yellow-300 focus-visible:outline-brand-yellow',
  secondary:
    'bg-brand-navy text-brand-white shadow-[0_12px_24px_-16px_rgba(11,31,58,1)] hover:-translate-y-0.5 hover:bg-slate-900 focus-visible:outline-brand-navy',
  ghost:
    'bg-brand-white text-brand-navy ring-1 ring-brand-navy/25 hover:-translate-y-0.5 hover:ring-brand-sky focus-visible:outline-brand-sky',
};

export function Button({ children, href, variant = 'primary' }: ButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]}`}
    >
      {children}
    </a>
  );
}
