import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import { caseStudies } from '../data/caseStudies'

export default function CaseStudies() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-premium-grid opacity-70" />
        <div className="motion-blob-one absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="motion-blob-two absolute right-0 bottom-0 h-96 w-96 rounded-full bg-emerald-400/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 md:py-24">
          <div className="max-w-4xl">
            <div className="mb-4 inline-flex rounded-full border border-blue-300/25 bg-blue-400/10 px-4 py-2 text-sm font-bold text-blue-200">
              Case Studies
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
              Real systems built for messy business problems.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Practical examples across data engineering, reporting automation,
              warehouse control, audit governance, and lightweight business
              applications.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/contact">Discuss Similar Work</Button>
              <Button to="/services" variant="glass">
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f4f7fb]">
        <div className="absolute inset-0 bg-soft-grid opacity-70" />
        <div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-blue-200/35 blur-3xl" />
        <div className="absolute right-0 bottom-40 h-80 w-80 rounded-full bg-emerald-200/35 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16">
          <div className="mb-10 max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Proof of Work
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
              From problem to system.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
              Each case study follows the same structure: business problem,
              solution built, tools used, and practical impact.
            </p>
          </div>

          <div className="grid gap-6">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.slug} study={study} index={index} />
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-900/20 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-extrabold">
                  Want to build something similar?
                </h2>
                <p className="mt-4 max-w-2xl text-slate-300">
                  Share the business problem. I can help define the SOP, data
                  model, reporting layer, app workflow, or implementation path.
                </p>
              </div>

              <Button to="/contact">Discuss Your Problem</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function CaseStudyCard({ study, index }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/10 md:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 text-sm font-black text-white">
              {String(index + 1).padStart(2, '0')}
            </div>

            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
              {study.tag}
            </span>
          </div>

          <h3 className="mt-5 text-2xl font-extrabold text-slate-950 md:text-3xl">
            {study.title}
          </h3>

          <p className="mt-4 text-base leading-7 text-slate-600">
            {study.summary}
          </p>

         <Link
  to={`/case-studies/${study.slug}`}
  className="mt-6 inline-flex rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
>
  View Case Study
</Link>
        </div>

        <div className="grid gap-4">
          <CaseBlock title="Problem" text={study.problem} />
          <CaseBlock title="Solution Built" text={study.solution} />

          <div className="rounded-2xl bg-[#f4f7fb] p-5">
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              Tools Used
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {study.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-[#f4f7fb] p-5">
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              Business Impact
            </div>
            <div className="mt-3 grid gap-2">
              {study.impact.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                  <div className="text-sm leading-5 text-slate-700">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

function CaseBlock({ title, text }) {
  return (
    <div className="rounded-2xl bg-[#f4f7fb] p-5">
      <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
        {title}
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-700">{text}</p>
    </div>
  )
}