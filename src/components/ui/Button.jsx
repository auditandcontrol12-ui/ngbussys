import { Link } from 'react-router-dom'

const styles = {
  primary:
    'bg-blue-500 text-white hover:bg-blue-400 shadow-lg shadow-blue-500/25',
  secondary:
    'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 shadow-sm',
  glass:
    'border border-white/15 bg-white/8 text-white hover:bg-white/14 shadow-sm backdrop-blur',
  light:
    'bg-white text-slate-950 hover:bg-slate-100 shadow-sm',
  dark:
    'bg-slate-950 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20',
}

export default function Button({
  to,
  href,
  children,
  variant = 'primary',
  className = '',
}) {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition'

  const classes = `${base} ${styles[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return <button className={classes}>{children}</button>
}