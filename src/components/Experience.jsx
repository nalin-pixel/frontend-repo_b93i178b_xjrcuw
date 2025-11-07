export default function Experience() {
  const roles = [
    {
      org: 'TechBridge Consulting',
      role: 'Lead Information Systems Analyst',
      period: '2021 — Present',
      points: [
        'Architected a data governance framework reducing report discrepancies by 38%.',
        'Led cross-functional workshops to map core processes and standardize KPIs across 6 departments.',
        'Designed API-first integration patterns enabling near real-time data synchronization.',
      ],
    },
    {
      org: 'Innova Retail Group',
      role: 'Systems & Data Specialist',
      period: '2018 — 2021',
      points: [
        'Implemented a modern data warehouse with automated ETL, cutting manual work by 60%.',
        'Introduced event-driven architecture to decouple legacy services during ERP upgrade.',
        'Built executive dashboards for inventory, sales, and forecasting with actionable insights.',
      ],
    },
  ];

  return (
    <section id="experience" className="relative bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Experience</h2>
          <p className="mt-2 max-w-2xl text-slate-300">
            Selected roles highlighting impact across strategy, architecture, and analytics.
          </p>
        </div>

        <div className="space-y-6">
          {roles.map((r) => (
            <div key={r.org} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-xl font-semibold">{r.role}</h3>
                  <p className="text-slate-300">{r.org}</p>
                </div>
                <p className="text-sm text-slate-400">{r.period}</p>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
                {r.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
