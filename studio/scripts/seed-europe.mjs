/**
 * Seed European cities (Amsterdam, Barcelona, Copenhagen, Cork, Dublin, Galway, London, Paris, Rome).
 *
 * Usage (from studio/):
 *   SANITY_API_TOKEN=your_token node scripts/seed-europe.mjs
 */

import {europeCitySeeds} from '../data/cities/index.js'
import {createSeedClient, seedCity} from './seed-lib.mjs'

async function main() {
  const client = createSeedClient()
  let totalPlaces = 0
  let totalBestOf = 0

  for (const seed of europeCitySeeds) {
    const {places, bestOf} = await seedCity(client, seed)
    totalPlaces += places
    totalBestOf += bestOf
  }

  console.log(`\n✅ Done — ${europeCitySeeds.length} cities, ${totalPlaces} places, ${totalBestOf} best-of entries.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
