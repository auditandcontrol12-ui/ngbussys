import Button from '../components/ui/Button'
import { servicePackages, serviceUseCases } from '../data/services'

export default function Services() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-premium-grid opacity-70" />
        <div className="motion-blob-one absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="motion-blob-two absolute right-0 bottom-0 h-96 w-96 rounded-full bg-emerald-400/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 md:py-24">
          <div className="max-w-4xl">
            <div className="mb-4 inline-flex rounded-full border border-blue-300/25 bg-blue-400/10 px-4 py-2 text-sm font-bold text-blue-200">
              Services
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
              Support when templates are not enough.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Advisory, system design, implementation support, and mentorship
              for businesses and professionals who need practical execution.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/contact">Book Advisory</Button>
              <Button to="/products/sop-control" variant="glass">
                Explore Templates
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
              Choose the support level
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
              Start small. Build only what is needed.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
              Services are designed to move from clarity to implementation
              without forcing unnecessary complexity.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {servicePackages.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-900/5">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                  Common Problems
                </div>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
                  Good fit when the business problem is clear, but the system is not.
                </h2>
                <p className="mt-5 text-base leading-7 text-slate-600">
                  These are the type of problems where practical advisory or a
                  small build can create quick value.
                </p>
              </div>

              <div className="grid gap-3">
                {serviceUseCases.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-[#f4f7fb] p-4"
                  >
                    <div className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-500" />
                    <div className="text-sm font-semibold leading-6 text-slate-800">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-900/20 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-extrabold">
                  Need help choosing the right service?
                </h2>
                <p className="mt-4 max-w-2xl text-slate-300">
                  Send the problem in plain language. I will recommend whether
                  you need a template, advisory call, system design, or custom
                  implementation.
                </p>
              </div>

              <Button to="/contact">Ask Recommendation</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ServiceCard({ service }) {
  return (
   <div id={service.id} className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/10">
    <div className="mb-4 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
        {service.label}
      </div>

      <h3 className="text-2xl font-extrabold text-slate-950">
        {service.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        {service.description}
      </p>

      <div className="mt-5 rounded-2xl bg-[#f4f7fb] p-4">
        <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
          Best For
        </div>
        <div className="mt-2 text-sm font-semibold text-slate-800">
          {service.bestFor}
        </div>
      </div>

      <div className="mt-5">
        <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
          Outcomes
        </div>

        <div className="mt-3 grid gap-2">
          {service.outcomes.map((item) => (
            <div key={item} className="flex items-start gap-2">
              <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
              <div className="text-sm leading-5 text-slate-700">{item}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <Button to="/contact">{service.cta}</Button>
      </div>
    </div>
  )
}