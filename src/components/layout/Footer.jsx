import { Link } from 'react-router-dom'
import { navLinks } from '../../data/navLinks'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-premium-grid opacity-50" />
      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-500 text-sm font-black text-white shadow-lg shadow-blue-500/25">
                NG
              </div>

              <div>
                <div className="text-base font-bold text-white">
                  NG Business Systems
                </div>
                <div className="text-xs text-slate-400">
                  Practical systems for SMEs
                </div>
              </div>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              SOPs, data products, warehouse controls, and lightweight business
              applications for companies that need better control.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white">Explore</h4>
            <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2">
  {navLinks.map((link) => (
    <Link
      key={link.path}
      to={link.path}
      className="text-sm text-slate-400 transition hover:text-blue-300"
    >
      {link.label}
    </Link>
  ))}
</div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white">Start here</h4>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Explore templates, request advisory support, or discuss a small
              business system you want to build.
            </p>

            <Link
              to="/contact"
              className="mt-5 inline-block rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-4 text-xs text-slate-500">
          © {new Date().getFullYear()} NG Business Systems. All rights reserved. Test deploy.
        </div>
      </div>
    </footer>
  )
}