export function slugify(name) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

/** Build a recommendation with a city-prefixed globally unique slug */
export function rec(citySlug, name, slugSuffix, fields = {}) {
  const slug = slugSuffix || slugify(name)
  return {
    name,
    slug: `${citySlug}-${slug}`,
    ...fields,
  }
}

export function citySeed(name, slug, country, description, bestOfIntro, recommendations, bestOf = []) {
  return {city: {name, slug, country, description, bestOfIntro}, recommendations, bestOf}
}
