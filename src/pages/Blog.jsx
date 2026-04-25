import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import { blogCategories, blogPosts } from '../data/blogPosts'

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'All') return blogPosts
    return blogPosts.filter((post) => post.category === selectedCategory)
  }, [selectedCategory])

  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-premium-grid opacity-70" />
        <div className="motion-blob-one absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="motion-blob-two absolute right-0 bottom-0 h-96 w-96 rounded-full bg-emerald-400/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 md:py-24">
          <div className="max-w-4xl">
            <div className="mb-4 inline-flex rounded-full border border-blue-300/25 bg-blue-400/10 px-4 py-2 text-sm font-bold text-blue-200">
              Blog & Insights
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
              Practical articles connected to LinkedIn, SEO, and business funnels.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Weekly and monthly articles on SOPs, warehouse control, data
              products, reporting automation, audit governance, and small
              business applications.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/products/sop-control">Explore Templates</Button>
              <Button to="/contact" variant="glass">
                Suggest a Topic
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
              Content Strategy
            </div>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
              Every article should move the reader somewhere.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
              LinkedIn articles build authority. SEO articles bring search
              traffic. Each article should connect to a product, service, case
              study, or lead capture form.
            </p>
          </div>

          <div className="mb-4 flex flex-wrap gap-2">
            {blogCategories.map((category) => {
              const isActive = selectedCategory === category

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold shadow-sm transition ${
                    isActive
                      ? 'border-blue-600 bg-blue-600 text-white'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-blue-700'
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>

          <div className="mb-10 text-sm font-semibold text-slate-500">
            Showing {filteredPosts.length} article
            {filteredPosts.length === 1 ? '' : 's'} for{' '}
            <span className="text-slate-900">{selectedCategory}</span>
          </div>

          <div className="grid items-stretch gap-6 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-900/20 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-extrabold">
                  Blog funnel direction
                </h2>
                <p className="mt-4 max-w-2xl text-slate-300">
                  Each article can later connect to LinkedIn posts, Google
                  search traffic, email marketing, and product landing pages.
                </p>
              </div>

              <Button to="/contact">Plan a Content Funnel</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function BlogCard({ post }) {
  return (
   <article className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/10">
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
          {post.category}
        </span>

        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
          {post.frequency}
        </span>

        <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700">
          {post.status}
        </span>
      </div>

      <h3 className="mt-5 min-h-[64px] text-2xl font-extrabold text-slate-950">
        {post.title}
      </h3>

      <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">{post.excerpt}</p>

     <div className="mt-5 min-h-[104px] rounded-2xl bg-[#f4f7fb] p-4">
        <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
          Target Audience
        </div>
        <div className="mt-2 text-sm font-semibold text-slate-800">
          {post.audience}
        </div>
      </div>

     <div className="mt-5 min-h-[88px] rounded-2xl bg-[#f4f7fb] p-4">
        <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
          Source Strategy
        </div>
        <div className="mt-2 text-sm font-semibold text-slate-800">
          {post.source}
        </div>
      </div>

      <div className="mt-auto flex flex-col gap-3 pt-6">
        <Link
          to={post.ctaLink}
          className="inline-flex justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
        >
          {post.cta}
        </Link>

        <Link
          to="/contact"
          className="inline-flex justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-900 transition hover:bg-slate-50"
        >
          Request Article / Topic
        </Link>
      </div>
    </article>
  )
}