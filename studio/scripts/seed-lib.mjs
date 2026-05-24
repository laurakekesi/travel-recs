import {createClient} from '@sanity/client'

export function createSeedClient() {
  const token = process.env.SANITY_API_TOKEN
  if (!token) {
    throw new Error('Missing SANITY_API_TOKEN. Create one at https://www.sanity.io/manage')
  }
  return createClient({
    projectId: '26828cl1',
    dataset: 'production',
    apiVersion: '2024-11-29',
    token,
    useCdn: false,
  })
}

function toSlugDoc(slug) {
  return {_type: 'slug', current: slug}
}

export async function seedCity(client, seed) {
  const {city, recommendations, bestOf = []} = seed

  const existing = await client.fetch(`*[_type == "city" && slug.current == $slug][0]._id`, {
    slug: city.slug,
  })

  const cityDoc = {
    _type: 'city',
    name: city.name,
    slug: toSlugDoc(city.slug),
    country: city.country,
    description: city.description,
    bestOfIntro: city.bestOfIntro,
  }

  let cityId
  if (existing) {
    await client.patch(existing).set(cityDoc).commit()
    cityId = existing
    console.log(`\n▸ ${city.name} (updated)`)
  } else {
    const created = await client.create(cityDoc)
    cityId = created._id
    console.log(`\n▸ ${city.name} (created)`)
  }

  const recommendationIdsBySlug = {}

  for (const item of recommendations) {
    const existingId = await client.fetch(
      `*[_type == "recommendation" && slug.current == $slug][0]._id`,
      {slug: item.slug}
    )

    const doc = {
      _type: 'recommendation',
      name: item.name,
      slug: toSlugDoc(item.slug),
      category: item.category,
      description: item.description || '',
      status: 'approved',
      upvotes: 0,
      downvotes: 0,
      city: {_type: 'reference', _ref: cityId},
      ...(item.priceLevel && {priceLevel: item.priceLevel}),
      ...(item.restaurantType && {restaurantType: item.restaurantType}),
      ...(item.barType && {barType: item.barType}),
      ...(item.mealTypes && {mealTypes: item.mealTypes}),
      ...(item.tags && {tags: item.tags}),
      ...(item.veggieFriendly != null && {veggieFriendly: item.veggieFriendly}),
    }

    if (existingId) {
      await client.patch(existingId).set(doc).commit()
      recommendationIdsBySlug[item.slug] = existingId
    } else {
      const created = await client.create(doc)
      recommendationIdsBySlug[item.slug] = created._id
    }
    console.log(`  ✓ ${item.name}`)
  }

  for (const entry of bestOf) {
    const recId = recommendationIdsBySlug[entry.slug]
    if (!recId) {
      console.warn(`  ⚠ best-of skipped (missing): ${entry.slug}`)
      continue
    }

    const existingId = await client.fetch(
      `*[_type == "bestOfEntry" && city._ref == $cityId && recommendation._ref == $recId][0]._id`,
      {cityId, recId}
    )

    const doc = {
      _type: 'bestOfEntry',
      title: entry.title,
      blurb: entry.blurb,
      sortOrder: entry.sortOrder ?? 0,
      city: {_type: 'reference', _ref: cityId},
      recommendation: {_type: 'reference', _ref: recId},
    }

    if (existingId) {
      await client.patch(existingId).set(doc).commit()
    } else {
      await client.create(doc)
    }
    console.log(`  ★ ${entry.title || entry.slug}`)
  }

  return {places: recommendations.length, bestOf: bestOf.length}
}
