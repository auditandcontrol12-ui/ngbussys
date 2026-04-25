import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { initGA, trackPageView } from '../lib/analytics'

export default function AnalyticsTracker() {
  const location = useLocation()

  useEffect(() => {
    initGA()
  }, [])

  useEffect(() => {
    const path = location.pathname + location.search
    trackPageView(path)
  }, [location])

  return null
}