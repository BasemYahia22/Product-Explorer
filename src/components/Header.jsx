export default function Header() {
  return (
    <header className="border-b border-line bg-paper">
      <div className="border-b border-line/70">
        <div className="flex items-center justify-between max-w-6xl px-6 py-4 mx-auto sm:px-8">
          <div className="flex items-center gap-2.5">
            <span
              className="flex items-center justify-center w-8 h-8 text-sm font-semibold rounded-full bg-ink font-display text-paper"
              aria-hidden="true"
            >
              P
            </span>
            <span className="text-base font-semibold tracking-tight font-display text-ink">
              Product Explorer
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
            <span
              className="h-1.5 w-1.5 rounded-full bg-sage"
              aria-hidden="true"
            />
            Live Catalog
          </div>
        </div>
      </div>

    </header>
  );
}
