type MetricCardProps = {
  title: string;
  value: string;
  subtext: string;
};

export function MetricCard({ title, value, subtext }: MetricCardProps) {
  return (
    <article className="rounded-xl bg-brand-navy p-6 text-brand-white shadow-card transition-transform duration-300 hover:-translate-y-1">
      <p className="text-sm uppercase tracking-widest text-brand-sky">{title}</p>
      <p className="mt-3 text-4xl font-bold text-brand-yellow">{value}</p>
      <p className="mt-2 text-sm text-slate-200">{subtext}</p>
    </article>
  );
}
