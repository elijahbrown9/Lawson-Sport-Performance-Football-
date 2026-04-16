type MetricCardProps = {
  title: string;
  value: string;
  subtext: string;
};

export function MetricCard({ title, value, subtext }: MetricCardProps) {
  return (
    <article className="rounded-2xl border border-brand-sky/30 bg-brand-navy p-6 text-brand-white shadow-card transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.18em] text-brand-sky">{title}</p>
        <span className="rounded-md bg-brand-white/10 px-2 py-1 text-[11px] font-semibold text-brand-yellow">
          trending
        </span>
      </div>
      <p className="mt-4 text-4xl font-bold text-brand-yellow">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-200">{subtext}</p>
    </article>
  );
}
