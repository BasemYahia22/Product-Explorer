export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-card border border-dashed border-line bg-white/40 px-6 py-24 text-center">
      <span className="font-display text-3xl text-ink/30" aria-hidden="true">
        ◌
      </span>
      <h3 className="font-display text-lg font-medium text-ink">
        No results found
      </h3>
      <p className="max-w-xs text-sm text-ink/60">
        Nothing matches that search or category. Try a different term or
        choose another category.
      </p>
    </div>
  )
}
