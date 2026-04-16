import { Button } from './Button';

type ProgramCardProps = {
  title: string;
  description: string;
  audience: string;
  focuses: string[];
};

export function ProgramCard({
  title,
  description,
  audience,
  focuses,
}: ProgramCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-brand-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-sky/60">
      <div className="mb-5 h-1 w-14 rounded-full bg-brand-sky" aria-hidden="true" />
      <h3 className="text-xl font-semibold text-brand-navy">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      <p className="mt-4 text-sm font-medium text-slate-700">
        <span className="font-semibold text-brand-navy">For:</span> {audience}
      </p>
      <ul className="mt-4 flex flex-1 flex-col gap-2 text-sm text-slate-600">
        {focuses.map((focus) => (
          <li key={focus} className="flex items-start gap-2">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-sky" />
            <span>{focus}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Button href="#contact" variant="ghost">
          Request Details →
        </Button>
      </div>
    </article>
  );
}
