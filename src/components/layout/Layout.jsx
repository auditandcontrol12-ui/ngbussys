import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}