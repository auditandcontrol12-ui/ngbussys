import Button from '../components/ui/Button'
import { expertiseItems } from '../data/expertise'

export default function Expertise() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-premium-grid opacity-70" />
        <div className="motion-blob-one absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="motion-blob-two absolute right-0 bottom-0 h-96 w-96 rounded-full bg-emerald-400/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 md:py-24">
          <div className="max-w-4xl">
            <div className="mb-4 inline-flex rounded-full border border-blue-300/25 bg-blue-400/10 px-4 py-2 text-sm font-bold text-blue-200">
              Expertise
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
              Practical expertise across control, operations, data, and small systems.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              This is not isolated technical skill. Each capability connects
              business problems, process design, data, reporting, and execution.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/services">View Services</Button>
              <Button to="/case-studies" variant="glass">
                View Case Studies
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
              Capability Areas
            </div>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
              Choose the area that matches your business problem.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
              Each area is structured around common problems, expected outcomes,
              and practical ways to support the business.
            </p>
          </div>

          <div className="mb-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {expertiseItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-bold text-slate-800 shadow-sm transition hover:border-blue-200 hover:text-blue-700 hover:shadow-lg"
              >
                {item.title}
              </a>
            ))}
          </div>

          <div className="grid gap-8">
            {expertiseItems.map((item, index) => (
              <ExpertiseBlock key={item.id} item={item} index={index} />
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-900/20 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-extrabold">
                  Need help applying this to a real business problem?
                </h2>
                <p className="mt-4 max-w-2xl text-slate-300">
                  Share the problem. I can help identify whether you need an
                  SOP, reporting layer, Excel tool, workflow app, or advisory
                  support.
                </p>
              </div>

              <Button to="/contact">Discuss a Problem</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ExpertiseBlock({ item, index }) {
  return (
    <section
      id={item.id}
      className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5 md:p-8"
    >
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 text-sm font-black text-white">
              {String(index + 1).padStart(2, '0')}
            </div>

            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
              Expertise Area
            </span>
          </div>

          <h3 className="mt-5 text-2xl font-extrabold text-slate-950 md:text-3xl">
            {item.title}
          </h3>

          <p className="mt-4 text-base leading-7 text-slate-600">
            {item.description}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button to="/contact">Discuss This Area</Button>
            <Button to="/services" variant="secondary">
              View Related Services
            </Button>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-[#f4f7fb] p-5">
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              Common Problems
            </div>

            <div className="mt-4 grid gap-3">
              {item.problems.map((problem) => (
                <div key={problem} className="flex items-start gap-3">
                  <div className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-amber-400" />
                  <div className="text-sm leading-6 text-slate-700">
                    {problem}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-[#f4f7fb] p-5">
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              Expected Outcomes
            </div>

            <div className="mt-4 grid gap-3">
              {item.outcomes.map((outcome) => (
                <div key={outcome} className="flex items-start gap-3">
                  <div className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400" />
                  <div className="text-sm leading-6 text-slate-700">
                    {outcome}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}