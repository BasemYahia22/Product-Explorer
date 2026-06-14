export default function SkeletonCard() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-card border border-line bg-white/60">
      <div className="h-48 w-full animate-pulse bg-canvas sm:h-56" />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="h-3 w-1/3 animate-pulse rounded-full bg-canvas" />
        <div className="h-4 w-5/6 animate-pulse rounded-full bg-canvas" />
        <div className="h-4 w-2/3 animate-pulse rounded-full bg-canvas" />
        <div className="mt-auto h-5 w-1/4 animate-pulse rounded-full bg-canvas" />
      </div>
    </div>
  );
}
