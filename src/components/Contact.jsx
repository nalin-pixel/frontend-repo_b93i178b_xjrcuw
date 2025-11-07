import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Let’s collaborate</h2>
          <p className="mt-2 max-w-2xl text-slate-300">
            Have a challenge in system analysis, data management, or solution design? I’d love to help.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <a
            href="mailto:annis.fahreza@example.com"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/10"
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-400/20">
              <Mail className="h-5 w-5" />
            </div>
            <h3 className="font-semibold">Email</h3>
            <p className="mt-1 text-slate-300">annis.fahreza@example.com</p>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/10"
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-400/20">
              <Linkedin className="h-5 w-5" />
            </div>
            <h3 className="font-semibold">LinkedIn</h3>
            <p className="mt-1 text-slate-300">linkedin.com/in/annisfahreza</p>
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/10"
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-400/20">
              <Github className="h-5 w-5" />
            </div>
            <h3 className="font-semibold">GitHub</h3>
            <p className="mt-1 text-slate-300">github.com/annisfahreza</p>
          </a>
        </div>

        <p className="mt-10 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Annis Fahreza — Information Systems Expert
        </p>
      </div>
    </section>
  );
}
