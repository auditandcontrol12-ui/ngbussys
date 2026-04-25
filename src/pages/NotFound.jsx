import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="mt-4 text-slate-300">The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white"
      >
        Go Home
      </Link>
    </section>
  )
}