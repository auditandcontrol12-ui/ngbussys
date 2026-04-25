import { Link, useParams } from 'react-router-dom'
import { getProductCategory } from '../data/products'
import Button from '../components/ui/Button'

export default function ProductCategory() {
  const { categoryId } = useParams()
  const category = getProductCategory(categoryId)

  if (!category) {
    return (
      <section className="mx-auto max-w-7xl px-5 py-20">
        <h1 className="text-4xl font-extrabold text-slate-950">Category not found</h1>
        <Link to="/products" className="mt-6 inline-block text-blue-600">
          Back to products
        </Link>
      </section>
    )
  }

  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-premium-grid opacity-70" />
        <div className="motion-blob-one absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="motion-blob-two absolute right-0 bottom-0 h-96 w-96 rounded-full bg-emerald-400/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 md:py-24">
          <Link
            to="/products"
            className="mb-5 inline-block text-sm font-semibold text-blue-300 hover:text-blue-200"
          >
            ← Back to Product Funnel
          </Link>

          <div className="max-w-4xl">
            <div className="mb-4 inline-flex rounded-full border border-blue-300/25 bg-blue-400/10 px-4 py-2 text-sm font-bold text-blue-200">
              Product Category
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
              {category.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f4f7fb]">
        <div className="absolute inset-0 bg-soft-grid opacity-70" />
        <div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-blue-200/35 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16">
          <div className="mb-10 max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Choose a product
            </div>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-950 md:text-5xl">
              Select the exact problem you want to solve.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {category.products.map((product) => (
              <Link
                key={product.slug}
                to={`/products/${category.id}/${product.slug}`}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/10"
              >
                <div className="mb-5 h-44 rounded-3xl border border-slate-200 bg-[#f4f7fb] p-5">
                  <ProductMockup product={product} />
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                    {product.type}
                  </span>
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">
                    {product.status}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-extrabold text-slate-950 group-hover:text-blue-700">
                  {product.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {product.description}
                </p>

                <div className="mt-5 rounded-2xl bg-[#f4f7fb] p-4">
                  <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                    Outcome
                  </div>
                  <div className="mt-2 text-sm font-semibold text-slate-800">
                    {product.outcome}
                  </div>
                </div>

                <div className="mt-6 text-sm font-bold text-blue-600">
                  View product →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function ProductMockup({ product }) {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl bg-white p-4 shadow-sm">
      <div>
        <div className="h-3 w-24 rounded-full bg-blue-100" />
        <div className="mt-3 h-3 w-40 rounded-full bg-slate-200" />
        <div className="mt-2 h-3 w-32 rounded-full bg-slate-100" />
      </div>

      <div className="grid gap-2">
        {product.included.slice(0, 3).map((item) => (
          <div key={item} className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-400" />
            <div className="h-2 flex-1 rounded-full bg-slate-200" />
          </div>
        ))}
      </div>
    </div>
  )
}