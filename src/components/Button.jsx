export default function Button({
  children,
  onClick,
  active = false,
  variant = 'chip',
  className = '',
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center font-mono text-xs uppercase tracking-[0.15em] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2'

  const variants = {
    chip: active
      ? 'bg-ink text-paper border border-ink rounded-full px-4 py-2'
      : 'bg-transparent text-ink/70 border border-line rounded-full px-4 py-2 hover:border-ink hover:text-ink',
    primary:
      'bg-rust text-paper rounded-card px-5 py-3 hover:bg-rust/90',
    ghost:
      'bg-transparent text-ink border border-ink rounded-card px-5 py-3 hover:bg-ink hover:text-paper',
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
