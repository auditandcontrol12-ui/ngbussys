export default function Badge({ children }) {
  return (
    <span className="inline-flex rounded-full border border-blue-300/25 bg-blue-400/10 px-4 py-2 text-sm font-bold text-blue-200 shadow-sm backdrop-blur">
      {children}
    </span>
  )
}