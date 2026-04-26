import Button from '../components/ui/Button'

const teamMembers = [
  {
    name: 'Nikhil Gangadharappa',
    role: 'Founder · Business Control & Data Products',
    intro:
      'Business data and internal control professional focused on SOPs, governance, reporting systems, warehouse control, and practical business applications.',
    focus: [
      'Business control and SOP design',
      'Data products and reporting automation',
      'SAP B1, SQL, Power BI, Azure data workflows',
      'Warehouse, SCM, inventory, and action tracking systems',
    ],
    skills: [
      ['Business Control', 'SOPs, audit actions, governance, approval workflows'],
      ['Data Products', 'SQL, Power BI, Excel tools, reporting models'],
      ['Operations', 'SCM, warehouse control, stock movement, inventory accuracy'],
      ['Implementation', 'React apps, Azure workflows, reporting automation'],
      ['Leadership', 'Board reporting, KPI design, cross-functional execution'],
    ],
    experience: [
      'Business Data Director working across data, reporting, control, and operational improvement.',
      'Built SAP B1 reporting models, Azure SQL reporting layers, and automated management reports.',
      'Designed internal control workflows, SOP governance, audit follow-up, and re-audit structures.',
    ],
    education: [
      'Business, data, and operational control experience across SME environments.',
      'Hands-on technical stack: SQL, Excel, Power BI, React, Azure, automation workflows.',
    ],
    resumePath: '/downloads/nikhil-gangadhar-resume.pdf',
    resumeLabel: 'Download Profile',
  },
  {
    name: 'Meghana Gangadhar',
    role: 'Project Manager · Delivery & Coordination',
    intro:
      'Project management professional supporting planning, coordination, documentation, follow-up, and delivery discipline across business and implementation work.',
    focus: [
      'Project planning and milestone tracking',
      'Stakeholder coordination and follow-up',
      'Documentation, action logs, and delivery support',
      'Client communication and implementation discipline',
    ],
    skills: [
      ['Project Planning', 'Scope, timelines, milestones, task breakdown'],
      ['Coordination', 'Stakeholders, follow-up, delivery tracking'],
      ['Documentation', 'Requirements, meeting notes, action logs'],
      ['Client Support', 'Communication, status updates, closure tracking'],
      ['Execution Support', 'Process tracking and implementation discipline'],
    ],
    experience: [
      'Supports structured delivery, documentation, and project coordination.',
      'Helps convert business requirements into clear action plans and follow-up routines.',
      'Focuses on keeping implementation work organized, visible, and accountable.',
    ],
    education: [
      'Project management, coordination, documentation, and client support experience.',
      'Practical delivery focus across business and operational work.',
    ],
    resumePath: '/downloads/project-manager-profile.pdf',
    resumeLabel: 'Download Profile',
  },
]

export default function Team() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-premium-grid opacity-70" />
        <div className="motion-blob-one absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="motion-blob-two absolute right-0 bottom-0 h-96 w-96 rounded-full bg-emerald-400/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 md:py-24">
          <div className="max-w-4xl">
            <div className="mb-4 inline-flex rounded-full border border-blue-300/25 bg-blue-400/10 px-4 py-2 text-sm font-bold text-blue-200">
              Team
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
              Meet the people behind NG Advisory Co.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              A small advisory and implementation practice combining business
              control, data products, project management, and practical delivery.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/contact">Discuss a Problem</Button>
              <Button to="/case-studies" variant="glass">
                View Case Studies
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
              People & Capability
            </div>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
              Practical delivery needs both systems thinking and execution discipline.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
              NG Advisory Co. is built around a simple idea: diagnose the
              business problem clearly, design a practical system, and support
              structured delivery.
            </p>
          </div>

          <div className="grid gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-900/5">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                  How We Work Together
                </div>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
                  Strategy, systems, and delivery in one workflow.
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-600">
                  Nikhil focuses on problem diagnosis, business control, data
                  models, reporting, and system design. Project management
                  support focuses on planning, documentation, coordination,
                  follow-up, and delivery discipline.
                </p>
              </div>

              <div className="grid gap-3">
                {[
                  'Understand the business problem',
                  'Define the control, data, or workflow requirement',
                  'Design the practical system or implementation path',
                  'Coordinate actions, documentation, and follow-up',
                  'Review outcomes and improve the operating rhythm',
                ].map((step, index) => (
                  <div
                    key={step}
                    className="flex items-start gap-3 rounded-2xl bg-[#f4f7fb] p-4"
                  >
                    <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blue-50 text-xs font-black text-blue-700">
                      {index + 1}
                    </div>
                    <div className="text-sm font-semibold leading-6 text-slate-800">
                      {step}
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
                  Want to work with us?
                </h2>
                <p className="mt-4 max-w-2xl text-slate-300">
                  Share the problem. We can help identify whether you need an
                  SOP, reporting layer, Excel tool, workflow app, or advisory
                  support.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button to="/contact">Discuss a Problem</Button>
                <Button to="/services" variant="glass">
                  View Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function TeamMemberCard({ member, index }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5 md:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-sm font-black text-white">
              {String(index + 1).padStart(2, '0')}
            </div>

            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
              Team Member
            </span>
          </div>

          <h3 className="mt-5 text-3xl font-extrabold text-slate-950">
            {member.name}
          </h3>

          <div className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
            {member.role}
          </div>

          <p className="mt-5 text-base leading-7 text-slate-600">
            {member.intro}
          </p>

          <div className="mt-6 grid gap-2">
            {member.focus.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400" />
                <div className="text-sm leading-6 text-slate-700">{item}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
  href={member.resumePath}
  download
  className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-center text-sm font-bold leading-5 text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 sm:min-w-[220px]"
>
  {member.resumeLabel}
</a>

            <Button to="/contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="rounded-2xl bg-[#f4f7fb] p-5">
            <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
              Skills Table
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              {member.skills.map(([area, strength], skillIndex) => (
                <div
                  key={area}
                  className={`grid gap-2 p-4 md:grid-cols-[0.32fr_0.68fr] ${
                    skillIndex !== member.skills.length - 1
                      ? 'border-b border-slate-200'
                      : ''
                  }`}
                >
                  <div className="text-sm font-bold text-slate-950">
                    {area}
                  </div>
                  <div className="text-sm leading-6 text-slate-600">
                    {strength}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <InfoList title="Experience Highlights" items={member.experience} />
          <InfoList title="Education & Capability" items={member.education} />
        </div>
      </div>
    </article>
  )
}

function InfoList({ title, items }) {
  return (
    <div className="rounded-2xl bg-[#f4f7fb] p-5">
      <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
        {title}
      </div>

      <div className="mt-4 grid gap-3">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <div className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-500" />
            <div className="text-sm leading-6 text-slate-700">{item}</div>
          </div>
        ))}
      </div>
    </div>
  )
}