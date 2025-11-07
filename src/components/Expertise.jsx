import { Database, Workflow, Brain, LineChart } from 'lucide-react';

const skills = [
  {
    icon: Workflow,
    title: 'System Analysis',
    desc: 'End-to-end analysis of business requirements, processes, and constraints to blueprint robust systems.',
    tags: ['BPMN', 'UML', 'ERP', 'SOA'],
  },
  {
    icon: Database,
    title: 'Data Management',
    desc: 'Data modeling, governance, and lifecycle management to ensure integrity, quality, and accessibility.',
    tags: ['MDM', 'ETL', 'Data Warehousing', 'SQL/NoSQL'],
  },
  {
    icon: Brain,
    title: 'Solution Design',
    desc: 'Translating strategy into scalable architectures using cloud-native and event-driven patterns.',
    tags: ['Microservices', 'Cloud', 'API-first', 'Security'],
  },
  {
    icon: LineChart,
    title: 'Business Insights',
    desc: 'Analytics and KPI frameworks to turn operational data into executive-grade insights.',
    tags: ['BI', 'Dashboards', 'Forecasting', 'Data Viz'],
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="relative bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Core Expertise</h2>
            <p className="mt-2 max-w-2xl text-slate-300">
              Focused on aligning technology with business outcomes across the full system lifecycle.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ icon: Icon, title, desc, tags }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 shadow-2xl backdrop-blur transition hover:from-white/10"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-400/20">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
