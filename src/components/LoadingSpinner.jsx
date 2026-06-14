export default function LoadingSpinner({ label = 'Loading catalog…' }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center justify-center gap-4 py-24"
    >
      <span
        className="h-12 w-12 animate-spin rounded-full border-2 border-line border-t-rust"
        aria-hidden="true"
      />
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/60">
        {label}
      </p>
    </div>
  )
}
