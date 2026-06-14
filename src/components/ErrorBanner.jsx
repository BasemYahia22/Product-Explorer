import Button from './Button.jsx'

export default function ErrorBanner({ message }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-card border border-rust/30 bg-rust/5 px-6 py-16 text-center">
      <h3 className="font-display text-lg font-medium text-rust">
        Something went wrong
      </h3>
      <p className="max-w-sm text-sm text-ink/70">
        {message || 'The catalog could not be loaded. Please check your connection and try again.'}
      </p>
      <Button variant="ghost" onClick={() => window.location.reload()}>
        Try again
      </Button>
    </div>
  )
}
