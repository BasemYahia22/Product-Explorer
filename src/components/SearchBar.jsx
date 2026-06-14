export default function SearchBar({ value, onChange, resultCount }) {
  return (
    <div className="w-full rounded-[32px] border border-line bg-white/90 p-4 shadow-sm shadow-ink/5 backdrop-blur-sm">
      <label htmlFor="product-search" className="sr-only">
        Search products by name
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-ink/40">
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>

        <input
          id="product-search"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search the catalog…"
          className="w-full rounded-full border border-line bg-paper/80 py-4 pl-12 pr-4 text-sm text-ink placeholder:text-ink/40 transition duration-200 focus:border-ink focus:outline-none focus:ring-2 focus:ring-amber/20"
          autoComplete="off"
        />
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-sm text-ink/60">
        <p className="rounded-full border border-line/80 bg-white/80 px-3 py-1.5 font-mono uppercase tracking-[0.18em] text-ink/70">
          {resultCount} {resultCount === 1 ? 'item' : 'items'} found
        </p>
        <span className="rounded-full bg-canvas px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-ink/60">
          Search by product name
        </span>
      </div>
    </div>
  )
}
