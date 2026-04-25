import SectionHeader from '../ui/SectionHeader'
import Card from '../ui/Card'
import Button from '../ui/Button'
import { services } from '../../data/services'

export default function ServicePreview() {
  return (
    <section className="relative overflow-hidden bg-[#f4f7fb]">
      <div className="absolute inset-0 bg-soft-grid opacity-70" />
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-20">
        <SectionHeader
          eyebrow="Services"
          title="Support when templates are not enough."
          subtitle="Advisory, design, mentorship, and implementation support for business, data, and operations problems."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title}>
              <h3 className="text-lg font-extrabold text-slate-950">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-10">
          <Button to="/services">Explore Services</Button>
        </div>
      </div>
    </section>
  )
}