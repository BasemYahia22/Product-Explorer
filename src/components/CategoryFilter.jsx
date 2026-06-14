import Button from './Button.jsx'

export default function CategoryFilter({ categories, activeCategory, onSelect }) {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="tablist"
      aria-label="Filter products by category"
    >
      <Button
        active={activeCategory === 'all'}
        onClick={() => onSelect('all')}
        role="tab"
        aria-selected={activeCategory === 'all'}
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          active={activeCategory === category}
          onClick={() => onSelect(category)}
          role="tab"
          aria-selected={activeCategory === category}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
