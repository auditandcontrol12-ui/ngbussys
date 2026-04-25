export default function Card({ children, className = '' }) {
  return (
    <div
      className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/10 ${className}`}
    >
      {children}
    </div>
  )
}