import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
};

const variants = {
  primary:
    'bg-brand-yellow text-brand-navy hover:bg-yellow-300 focus-visible:outline-brand-yellow',
  secondary:
    'bg-brand-navy text-brand-white hover:bg-slate-900 focus-visible:outline-brand-navy',
  ghost:
    'bg-brand-white text-brand-navy ring-1 ring-brand-navy/20 hover:ring-brand-sky focus-visible:outline-brand-sky',
};

export function Button({ children, href, variant = 'primary' }: ButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]}`}
    >
      {children}
    </a>
  );
}
