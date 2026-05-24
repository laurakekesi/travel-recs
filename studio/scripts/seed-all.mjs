/**
 * Seed Montreal + all European cities.
 *
 * Usage (from studio/):
 *   SANITY_API_TOKEN=your_token node scripts/seed-all.mjs
 */

import {montrealSeed} from '../data/montreal.js'
import {europeCitySeeds} from '../data/cities/index.js'
import {createSeedClient, seedCity} from './seed-lib.mjs'

async function main() {
  const client = createSeedClient()
  const allSeeds = [montrealSeed, ...europeCitySeeds]
  let totalPlaces = 0
  let totalBestOf = 0

  for (const seed of allSeeds) {
    const {places, bestOf} = await seedCity(client, seed)
    totalPlaces += places
    totalBestOf += bestOf
  }

  console.log(`\n✅ Done — ${allSeeds.length} cities, ${totalPlaces} places, ${totalBestOf} best-of entries.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
