import {CATEGORIES, PRICE_LEVELS, TAGS, SORT_OPTIONS} from '../constants/filters'
import './RecommendationFilters.css'

function FilterChip({label, active, onClick}) {
  return (
    <button type="button" className={`filter-chip ${active ? 'filter-chip--active' : ''}`} onClick={onClick}>
      {label}
    </button>
  )
}

function RecommendationFilters({
  categories,
  priceLevels,
  tags,
  sortBy,
  onToggleCategory,
  onTogglePrice,
  onToggleTag,
  onSortChange,
  onClear,
}) {
  const hasFilters = categories.length > 0 || priceLevels.length > 0 || tags.length > 0

  return (
    <div className="recommendation-filters">
      <div className="filters-row">
        <label className="filters-label" htmlFor="sort-by">
          Sort
        </label>
        <select id="sort-by" className="filters-select" value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.title}
            </option>
          ))}
        </select>
        {hasFilters && (
          <button type="button" className="filters-clear" onClick={onClear}>
            Clear filters
          </button>
        )}
      </div>

      <div className="filters-group">
        <span className="filters-label">Type</span>
        <div className="filter-chips">
          {CATEGORIES.map((cat) => (
            <FilterChip
              key={cat.value}
              label={cat.title}
              active={categories.includes(cat.value)}
              onClick={() => onToggleCategory(cat.value)}
            />
          ))}
        </div>
      </div>

      <div className="filters-group">
        <span className="filters-label">Price</span>
        <div className="filter-chips">
          {PRICE_LEVELS.map((price) => (
            <FilterChip
              key={price}
              label={price}
              active={priceLevels.includes(price)}
              onClick={() => onTogglePrice(price)}
            />
          ))}
        </div>
      </div>

      <div className="filters-group">
        <span className="filters-label">Tags</span>
        <div className="filter-chips">
          {TAGS.map((tag) => (
            <FilterChip
              key={tag.value}
              label={tag.title}
              active={tags.includes(tag.value)}
              onClick={() => onToggleTag(tag.value)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecommendationFilters
