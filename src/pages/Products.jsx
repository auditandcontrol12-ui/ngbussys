import { Link } from 'react-router-dom'
import { productCategories } from '../data/products'
import Button from '../components/ui/Button'

export default function Products() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-premium-grid opacity-70" />
        <div className="motion-blob-one absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="motion-blob-two absolute right-0 bottom-0 h-96 w-96 rounded-full bg-emerald-400/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 md:py-24">
          <div className="max-w-4xl">
            <div className="mb-4 inline-flex rounded-full border border-blue-300/25 bg-blue-400/10 px-4 py-2 text-sm font-bold text-blue-200">
              Product Funnel
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
              What business problem are you trying to solve?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Choose a product category based on the outcome you need. Each path
              leads to focused tools, templates, or small applications.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f4f7fb]">
        <div className="absolute inset-0 bg-soft-grid opacity-70" />
        <div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-blue-200/35 blur-3xl" />
        <div className="absolute right-0 bottom-40 h-80 w-80 rounded-full bg-emerald-200/35 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16">
          <div className="grid gap-5 md:grid-cols-2">
            {productCategories.map((category) => (
              <Link
                key={category.id}
                to={`/products/${category.id}`}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/10"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-lg shadow-slate-900/15">
                  {category.products.length}
                </div>

                <div className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                  {category.shortTitle}
                </div>

                <h2 className="mt-3 text-3xl font-extrabold text-slate-950 group-hover:text-blue-700">
                  {category.title}
                </h2>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  {category.funnelQuestion}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {category.products.slice(0, 4).map((product) => (
                    <span
                      key={product.slug}
                      className="rounded-full bg-[#f4f7fb] px-3 py-1 text-xs font-semibold text-slate-600"
                    >
                      {product.name}
                    </span>
                  ))}
                </div>

                <div className="mt-6 text-sm font-bold text-blue-600">
                  Continue to category →
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-900/20 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-extrabold">
                  Not sure which product you need?
                </h2>
                <p className="mt-4 max-w-2xl text-slate-300">
                  Start with an advisory request. I can point you to a template,
                  Excel tool, reporting product, or custom app direction.
                </p>
              </div>

              <Button to="/contact">Ask for Recommendation</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}