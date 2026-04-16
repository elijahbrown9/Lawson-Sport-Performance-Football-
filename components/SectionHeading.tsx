type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  inverted?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  inverted = false,
}: SectionHeadingProps) {
  return (
    <header className="max-w-3xl space-y-3">
      {eyebrow && (
        <p
          className={`text-sm font-semibold uppercase tracking-[0.2em] ${
            inverted ? 'text-brand-yellow' : 'text-brand-sky'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          inverted ? 'text-brand-white' : 'text-brand-navy'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-7 ${inverted ? 'text-slate-200' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </header>
  );
}
