import {citySeed, rec} from '../helpers.js'

const S = 'cork'

export const corkSeed = citySeed(
  'Cork',
  'cork',
  'Ireland',
  `Day trips: West Cork (Clonakilty), Gougane Barra, Kinsale, Cobh. Try Beamish stout — made here.`,
  'Cork picks',
  [
    rec(S, 'Goldie', 'goldie', {
      category: 'restaurant',
      priceLevel: '$$',
      description: 'Fish-based menu.',
    }),
    rec(S, 'Farmgate', 'farmgate', {
      category: 'restaurant',
      priceLevel: '$$',
      description: 'Upstairs in the English Market.',
      tags: ['markets'],
    }),
    rec(S, 'Franciscan Well', 'franciscan-well', {
      category: 'bar',
      barType: 'pub',
      description: 'Pizza and pints.',
      tags: ['craft-beer'],
    }),
    rec(S, 'Miyazaki', 'miyazaki', {
      category: 'restaurant',
      restaurantType: 'japanese',
      priceLevel: '$$',
      description: 'Ramen.',
    }),
    rec(S, 'Mutton Lane', 'mutton-lane', {category: 'bar', barType: 'pub'}),
    rec(S, 'Crane Lane', 'crane-lane', {category: 'bar', barType: 'pub'}),
    rec(S, 'Sin É', 'sin-e', {
      category: 'bar',
      barType: 'pub',
      description: 'Means “that’s it” in Irish.',
    }),
    rec(S, 'The Oval', 'the-oval', {
      category: 'bar',
      barType: 'pub',
      description: 'Try Beamish if you like stout.',
    }),
  ],
  [
    {slug: `${S}-goldie`, title: 'Fish dinner', sortOrder: 1},
    {slug: `${S}-farmgate`, title: 'English Market', sortOrder: 2},
    {slug: `${S}-miyazaki`, title: 'Ramen', sortOrder: 3},
  ]
)
