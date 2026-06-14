import { memo } from "react";

function ProductCard({ product }) {
  const { title, price, image, category, rating } = product;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white transition-shadow duration-200 hover:shadow-lg">
      <div className="flex h-48 w-full shrink-0 items-center justify-center bg-canvas p-6 sm:h-56">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-sage">
          {category}
        </span>

        <h3 className="line-clamp-2 min-h-[2.75rem] font-display text-base font-medium leading-snug text-ink">
          {title}
        </h3>

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-display text-lg font-semibold text-rust">
            ${price.toFixed(2)}
          </span>
          {rating && (
            <span className="font-mono text-xs text-ink/50">
              ★ {rating.rate} ({rating.count})
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default memo(ProductCard);
