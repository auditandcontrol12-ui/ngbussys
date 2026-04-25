import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../../data/navLinks'
import { productCategories } from '../../data/products'
import { servicePackages } from '../../data/services'
import { expertiseItems } from '../../data/expertise'
import { caseStudies } from '../../data/caseStudies'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSection, setOpenSection] = useState(null)

  function closeMenu() {
    setIsOpen(false)
    setOpenSection(null)
  }

  function toggleSection(section) {
    setOpenSection((current) => (current === section ? null : section))
  }

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold text-white"
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full max-h-[calc(100vh-72px)] w-full overflow-y-auto border-b border-white/10 bg-slate-950 px-5 py-5 shadow-2xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              if (link.path === '/products') {
                return (
                  <MobileAccordion
                    key={link.path}
                    title="Products"
                    isOpen={openSection === 'products'}
                    onClick={() => toggleSection('products')}
                  >
                    {productCategories.map((category) => (
                      <div
                        key={category.id}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                      >
                        <Link
                          to={`/products/${category.id}`}
                          onClick={closeMenu}
                          className="block"
                        >
                          <div className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">
                            {category.shortTitle}
                          </div>
                          <div className="mt-1 text-base font-extrabold text-white">
                            {category.title}
                          </div>
                        </Link>

                        <div className="mt-3 grid gap-2">
                          {category.products.map((product) => (
                            <Link
                              key={product.slug}
                              to={`/products/${category.id}/${product.slug}`}
                              onClick={closeMenu}
                              className="rounded-xl bg-white/[0.04] px-3 py-2 text-sm text-slate-300"
                            >
                              {product.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </MobileAccordion>
                )
              }

              if (link.path === '/services') {
                return (
                  <MobileAccordion
                    key={link.path}
                    title="Services"
                    isOpen={openSection === 'services'}
                    onClick={() => toggleSection('services')}
                  >
                    {servicePackages.map((service) => (
                      <Link
                        key={service.id}
                        to={`/services#${service.id}`}
                        onClick={closeMenu}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                      >
                        <div className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">
                          {service.label}
                        </div>
                        <div className="mt-1 text-base font-extrabold text-white">
                          {service.title}
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {service.description}
                        </p>
                      </Link>
                    ))}
                  </MobileAccordion>
                )
              }

              if (link.path === '/expertise') {
                return (
                  <MobileAccordion
                    key={link.path}
                    title="Expertise"
                    isOpen={openSection === 'expertise'}
                    onClick={() => toggleSection('expertise')}
                  >
                    {expertiseItems.map((item, index) => (
                      <Link
                        key={item.title}
                        to={`/expertise#${item.id}`}
                        onClick={closeMenu}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                      >
                        <div className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <div className="mt-1 text-base font-extrabold text-white">
                          {item.title}
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </MobileAccordion>
                )
              }

              if (link.path === '/case-studies') {
                return (
                  <MobileAccordion
                    key={link.path}
                    title="Case Studies"
                    isOpen={openSection === 'case-studies'}
                    onClick={() => toggleSection('case-studies')}
                  >
                    {caseStudies.map((study) => (
                      <Link
                        key={study.slug}
                        to={`/case-studies/${study.slug}`}
                        onClick={closeMenu}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                      >
                        <div className="text-sm font-bold uppercase tracking-[0.18em] text-blue-300">
                          {study.tag}
                        </div>
                        <div className="mt-1 text-base font-extrabold text-white">
                          {study.title}
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {study.summary || study.description}
                        </p>
                      </Link>
                    ))}
                  </MobileAccordion>
                )
              }

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `text-base font-semibold ${
                      isActive ? 'text-blue-300' : 'text-slate-200'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            })}

            <div className="grid gap-3 pt-3">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="rounded-full border border-white/15 px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Ask Recommendation
              </Link>

              <Link
                to="/contact"
                onClick={closeMenu}
                className="rounded-full bg-blue-500 px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Book Advisory
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}

function MobileAccordion({ title, isOpen, onClick, children }) {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between text-base font-semibold text-slate-200"
      >
        {title}
        <span>{isOpen ? '-' : '+'}</span>
      </button>

      {isOpen && <div className="mt-4 grid gap-4">{children}</div>}
    </div>
  )
}