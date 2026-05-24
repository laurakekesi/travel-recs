export const CATEGORIES = [
  {title: 'Restaurant', value: 'restaurant'},
  {title: 'Cafe', value: 'cafe'},
  {title: 'Bar', value: 'bar'},
  {title: 'Bakery', value: 'bakery'},
  {title: 'Activity', value: 'activity'},
]

export const PRICE_LEVELS = ['$', '$$', '$$$', '$$$$']

export const TAGS = [
  {title: 'Veggie friendly', value: 'veggie-friendly'},
  {title: 'Brunch', value: 'brunch'},
  {title: 'Natural wine', value: 'natural-wine'},
  {title: 'Wine bar', value: 'wine-bar'},
  {title: 'Craft beer', value: 'craft-beer'},
  {title: 'Tasting menu', value: 'tasting-menu'},
  {title: 'No reservations', value: 'no-reservations'},
  {title: 'Lunch spot', value: 'lunch-spot'},
  {title: 'Farm to table', value: 'farm-to-table'},
  {title: 'Montreal classic', value: 'montreal-classic'},
  {title: 'Markets', value: 'markets'},
]

export const TAG_LABELS = Object.fromEntries(TAGS.map((t) => [t.value, t.title]))

export const SORT_OPTIONS = [
  {title: 'Name (A–Z)', value: 'name-asc'},
  {title: 'Price (low to high)', value: 'price-asc'},
  {title: 'Price (high to low)', value: 'price-desc'},
  {title: 'Category', value: 'category'},
]

const PRICE_RANK = {'$': 1, '$$': 2, '$$$': 3, '$$$$': 4}

export function sortRecommendations(list, sortBy) {
  const items = [...list]
  switch (sortBy) {
    case 'price-asc':
      return items.sort(
        (a, b) => (PRICE_RANK[a.priceLevel] || 99) - (PRICE_RANK[b.priceLevel] || 99) || a.name.localeCompare(b.name)
      )
    case 'price-desc':
      return items.sort(
        (a, b) => (PRICE_RANK[b.priceLevel] || 0) - (PRICE_RANK[a.priceLevel] || 0) || a.name.localeCompare(b.name)
      )
    case 'category':
      return items.sort((a, b) => (a.category || '').localeCompare(b.category || '') || a.name.localeCompare(b.name))
    case 'name-asc':
    default:
      return items.sort((a, b) => a.name.localeCompare(b.name))
  }
}

export function matchesFilters(recco, {categories, priceLevels, tags}) {
  if (categories.length > 0 && !categories.includes(recco.category)) return false
  if (priceLevels.length > 0 && !priceLevels.includes(recco.priceLevel)) return false
  if (tags.length > 0) {
    const reccoTags = recco.tags || []
    const wantsVeggie = tags.includes('veggie-friendly')
    const matchesVeggie = recco.veggieFriendly || reccoTags.includes('veggie-friendly')
    const otherTags = tags.filter((t) => t !== 'veggie-friendly')
    const matchesOthers =
      otherTags.length === 0 || otherTags.every((t) => reccoTags.includes(t))

    if (wantsVeggie && !matchesVeggie) return false
    if (!matchesOthers) return false
  }
  return true
}
