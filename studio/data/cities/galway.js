import {citySeed, rec} from '../helpers.js'

const S = 'galway'

const GALWAY_TIPS = `
Day trips: Aran Islands (check ferry), Connemara, Coole Park, Kylemore Abbey, The Burren & Burren Perfumery café.
Scenic drives: Ring of Kerry, Dingle (between Cork and Galway).
Sunny day: get a 99 (flaky chocolate in soft serve). Saturday market near St Nicholas church.
`

export const galwaySeed = citySeed(
  'Galway',
  'galway',
  'Ireland',
  `West coast gem — pubs, oysters, and day trips to Connemara.${GALWAY_TIPS}`,
  'Galway favourites',
  [
    rec(S, 'Ard Bia', 'ard-bia', {
      category: 'restaurant',
      priceLevel: '$$',
      description: 'Favourite — breakfast, lunch, brunch, and dinner.',
      mealTypes: ['breakfast', 'brunch', 'lunch', 'dinner'],
    }),
    rec(S, 'Tigh Neachtain', 'tigh-neachtain', {
      category: 'bar',
      barType: 'pub',
      description: 'Classic pub.',
    }),
    rec(S, 'Black Cat', 'black-cat', {category: 'bar'}),
    rec(S, 'Magpie', 'magpie', {category: 'cafe', mealTypes: ['breakfast', 'brunch']}),
    rec(S, 'Coffeewerk', 'coffeewerk', {category: 'cafe'}),
    rec(S, 'Little Lane', 'little-lane', {category: 'cafe', mealTypes: ['breakfast']}),
    rec(S, 'Bunch of Grapes', 'bunch-of-grapes', {category: 'bar', barType: 'pub'}),
    rec(S, "Pádraicín's", 'padraicins', {
      category: 'bar',
      barType: 'pub',
      description: 'A bit of a drive — beach, good pints and chips.',
    }),
    rec(S, 'Daróg', 'darog', {category: 'bar', barType: 'wine', tags: ['wine-bar']}),
    rec(S, 'Kai', 'kai', {category: 'restaurant', priceLevel: '$$'}),
    rec(S, 'Blackrock Cottage', 'blackrock-cottage', {
      category: 'restaurant',
      description: 'Near the Diving Board in Salthill.',
    }),
    rec(S, 'Rúibín', 'ruibin', {category: 'restaurant', priceLevel: '$$'}),
    rec(S, "McDonagh's", 'mcdonaghs', {
      category: 'restaurant',
      priceLevel: '$',
      description: 'Fish and chips.',
    }),
    rec(S, "Charlie Byrne's Bookstore", 'charlie-bynes', {
      category: 'activity',
      description: 'Bookstore.',
    }),
    rec(S, 'Galway Saturday Market', 'saturday-market', {
      category: 'activity',
      description: 'Saturday morning market near St Nicholas church.',
      tags: ['markets'],
    }),
  ],
  [
    {slug: `${S}-ard-bia`, title: 'All-day favourite', sortOrder: 1},
    {slug: `${S}-tigh-neachtain`, title: 'Pub', sortOrder: 2},
    {slug: `${S}-mcdonaghs`, title: 'Fish & chips', sortOrder: 3},
  ]
)
