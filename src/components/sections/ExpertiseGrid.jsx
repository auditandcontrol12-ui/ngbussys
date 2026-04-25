import SectionHeader from '../ui/SectionHeader'
import Card from '../ui/Card'
import { expertiseItems } from '../../data/expertise'

export default function ExpertiseGrid() {
  return (
    <section className="relative overflow-hidden bg-[#f4f7fb]">
      <div className="absolute inset-0 bg-soft-grid opacity-80" />
      <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-20">
        <SectionHeader
          eyebrow="Expertise"
          title="Organized around business problems, not buzzwords."
          subtitle="Each area connects practical operations, controls, data, and implementation."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {expertiseItems.map((item, index) => (
            <Card key={item.title}>
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-lg shadow-slate-900/15">
                {String(index + 1).padStart(2, '0')}
              </div>

              <h3 className="text-xl font-extrabold text-slate-950">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}