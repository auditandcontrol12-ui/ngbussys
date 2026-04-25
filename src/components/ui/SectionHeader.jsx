export default function SectionHeader({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
          {eyebrow}
        </div>
      )}

      <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}