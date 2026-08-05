import { Button } from '@/components/Button';
import { Footer } from '@/components/Footer';
import { MetricCard } from '@/components/MetricCard';
import { Navbar } from '@/components/Navbar';
import { ProgramCard } from '@/components/ProgramCard';
import { SectionHeading } from '@/components/SectionHeading';

const programs = [
  {
    title: 'Football Performance',
    description:
      'Comprehensive off-season and in-season training built for speed, force production, and durability in contact sport.',
    audience: 'High school football athletes who want to separate themselves.',
    focuses: ['Explosive lower-body power', 'Linear speed mechanics', 'Total-body strength progression'],
  },
  {
    title: 'Softball Performance',
    description:
      'Strength and rotational power work designed to improve acceleration, throwing resilience, and repeatable output.',
    audience: 'Softball athletes serious about performance and longevity.',
    focuses: ['Rotational strength and deceleration', 'Sprint speed and first-step quickness', 'Shoulder and hip durability'],
  },
  {
    title: 'Speed and Jump Training',
    description:
      'A focused development block targeting acceleration, max velocity, and vertical jump performance.',
    audience: 'Athletes from any sport needing measurable speed and power gains.',
    focuses: ['Start and acceleration drills', 'Reactive plyometrics', 'Sprint and jump testing'],
  },
  {
    title: 'Small Group Training',
    description:
      'Coached small-group sessions that deliver individualized progressions in a competitive training environment.',
    audience: 'Athletes who perform best with accountability and coaching detail.',
    focuses: ['Individualized load progressions', 'Movement quality and mechanics', 'Consistent attendance systems'],
  },
];

const metrics = [
  { title: 'Vertical Jump Development', value: '+3.8 in', subtext: 'Average increase over a 12-week training block.' },
  { title: 'Strength Gains', value: '+18%', subtext: 'Average rise in key strength benchmarks across athletes.' },
  { title: 'Speed Improvement', value: '-0.21s', subtext: 'Average 40-yard time reduction after phased training.' },
  { title: 'Attendance and Consistency', value: '92%', subtext: 'Session adherence across committed athlete cohorts.' },
];

const differentiators = [
  'Structured training',
  'Athlete development systems',
  'Performance testing',
  'Serious coaching environment',
  'Built for high school athletes',
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="home" className="bg-brand-white">
        <section className="section-wrap section-padding grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-9">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-sky">
              Lawson Sport Performance
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
              Train to be faster, stronger, and more durable
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              We build high school athletes through focused strength training, speed development, and resilience systems that transfer directly to competition.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="#contact" variant="primary">Join Training</Button>
              <Button href="#programs" variant="secondary">View Programs</Button>
            </div>
            <div className="grid max-w-xl gap-3 sm:grid-cols-3">
              {['Strength', 'Speed', 'Resilience'].map((pillar) => (
                <div key={pillar} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-center text-xs font-semibold uppercase tracking-[0.08em] text-slate-600">
                  {pillar}
                </div>
              ))}
            </div>
          </div>
          <div className="surface-panel bg-brand-gray p-8">
            <div className="flex h-full min-h-[320px] items-center justify-center rounded-xl border-2 border-dashed border-brand-sky/60 bg-white/80 text-center">
              <p className="max-w-xs text-sm font-medium text-slate-600">
                Premium visual placeholder for future athlete photography and facility imagery.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="section-padding bg-brand-gray">
          <div className="section-wrap grid gap-10 lg:grid-cols-2">
            <SectionHeading
              eyebrow="About"
              title="Performance training with intent"
              description="Lawson Sport Performance is built on disciplined systems that combine speed, strength, and resilience into one clear development path."
            />
            <div className="surface-panel space-y-5 p-7 text-slate-700">
              <p>
                Every session has a purpose. We train movement quality, power output, and force application so athletes can perform with confidence under pressure.
              </p>
              <p>
                Our coaching standard is direct, professional, and accountable. We value discipline and consistency because lasting performance is built through repeatable habits.
              </p>
              <p>
                The result is training that transfers: stronger positions, faster reactions, and durability that holds up across a full season.
              </p>
            </div>
          </div>
        </section>

        <section id="programs" className="section-wrap section-padding">
          <SectionHeading
            eyebrow="Programs"
            title="Programs designed for competitive athletes"
            description="Built with clear progressions, measurable outputs, and coaching detail for serious high school development."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {programs.map((program) => (
              <ProgramCard key={program.title} {...program} />
            ))}
          </div>
        </section>

        <section id="results" className="section-padding bg-brand-gray">
          <div className="section-wrap">
            <SectionHeading
              eyebrow="Results"
              title="Performance dashboard preview"
              description="Representative KPI metrics showing how progress is tracked and communicated to athletes and families."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {metrics.map((metric) => (
                <MetricCard key={metric.title} {...metric} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap section-padding">
          <SectionHeading
            eyebrow="Why Lawson"
            title="A serious environment for measurable growth"
            description="Our systems are built to challenge athletes and deliver outcomes that matter in sport."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item) => (
              <article key={item} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
                <p className="text-base font-semibold tracking-wide text-brand-navy">{item}</p>
                <p className="mt-2 text-sm text-slate-600">Delivered through coached progression, accountability, and measurable checkpoints.</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-padding bg-brand-navy text-brand-white">
          <div className="section-wrap grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Start your athlete's next training phase"
                description="Families and athletes can reach out below to ask questions, check fit, and reserve training options."
                inverted
              />
            </div>
            <form className="grid gap-4 rounded-2xl bg-white p-6 text-brand-navy shadow-card sm:grid-cols-2">
              <label className="text-sm font-medium">Parent Name
                <input className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-brand-sky focus:ring-2" type="text" name="parentName" />
              </label>
              <label className="text-sm font-medium">Athlete Name
                <input className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-brand-sky focus:ring-2" type="text" name="athleteName" />
              </label>
              <label className="text-sm font-medium">Sport
                <input className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-brand-sky focus:ring-2" type="text" name="sport" />
              </label>
              <label className="text-sm font-medium">Email
                <input className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-brand-sky focus:ring-2" type="email" name="email" />
              </label>
              <label className="text-sm font-medium sm:col-span-2">Phone
                <input className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-brand-sky focus:ring-2" type="tel" name="phone" />
              </label>
              <label className="text-sm font-medium sm:col-span-2">Message
                <textarea className="mt-2 min-h-28 w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-brand-sky focus:ring-2" name="message" />
              </label>
              <div className="sm:col-span-2">
                <button type="submit" className="w-full rounded-lg bg-brand-yellow px-5 py-3 text-sm font-semibold text-brand-navy transition-colors hover:bg-yellow-300">
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
