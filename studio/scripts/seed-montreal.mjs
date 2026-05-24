/**
 * Seed Montreal city + recommendations + best-of entries.
 *
 * Usage (from studio/):
 *   SANITY_API_TOKEN=your_token npm run seed:montreal
 */

import {montrealSeed} from '../data/montreal.js'
import {createSeedClient, seedCity} from './seed-lib.mjs'

async function main() {
  const client = createSeedClient()
  const {places, bestOf} = await seedCity(client, montrealSeed)
  console.log(`\nDone — ${places} places, ${bestOf} best-of entries.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
