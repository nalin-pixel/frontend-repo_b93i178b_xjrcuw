import { ArrowRight, Download, Mail } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay to improve text readability (doesn't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950/70 via-transparent to-slate-900/40 z-[1]" />

      {/* Content */}
      <div className="relative z-[2] mx-auto flex max-w-7xl flex-col gap-10 px-6 pb-24 pt-32 md:flex-row md:items-center md:gap-16 md:pt-40">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available for consulting & fractional leadership
          </div>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Annis Fahreza
          </h1>
          <p className="mt-3 text-lg font-medium text-slate-300 md:text-xl">
            Information Systems Expert — turning data and processes into
            technology-driven business value.
          </p>
          <ul className="mt-6 grid list-disc grid-cols-1 gap-2 pl-5 text-slate-300 sm:grid-cols-2">
            <li>System analysis & enterprise architecture</li>
            <li>Data modeling, governance, and analytics</li>
            <li>Process optimization & automation</li>
            <li>Solution design for scalable platforms</li>
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Get in touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="mailto:annis.fahreza@example.com"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
