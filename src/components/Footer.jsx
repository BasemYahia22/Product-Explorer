export default function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            <span
              className="flex h-7 w-7 items-center justify-center rounded-full bg-ink font-display text-xs font-semibold text-paper"
              aria-hidden="true"
            >
              P
            </span>
            <div>
              <p className="font-display text-sm font-semibold text-ink">
                Product Explorer
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink/40">
                Data from Fake Store API
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink/40">
              Built with React &amp; Tailwind CSS
            </p>
            <a
              href="#top"
              className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink/70 underline underline-offset-4 transition-colors hover:text-rust"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
