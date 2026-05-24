import {citySeed, rec} from '../helpers.js'

const S = 'dublin'

const IRISH_TIPS = `
Day trips: Glendalough, Wicklow Mountains, Forty Foot swimming, Boyne Valley.
Pubs close early vs Montreal — plan ahead. Pack high-vis and waterproofs for rain.
Transit app recommended for buses. Skip Cliffs of Moher unless a clear day.
Irish phrases: Dia dhuit (hello), Go raibh maith agat (thanks), Slán (bye), Leithreas (washroom).
`

export const dublinSeed = citySeed(
  'Dublin',
  'dublin',
  'Ireland',
  `Capital city — great coffee, wine bars, and literary pubs.${IRISH_TIPS}`,
  'Dublin favourites',
  [
    rec(S, 'Bread 41', 'bread-41', {category: 'bakery', mealTypes: ['breakfast', 'brunch']}),
    rec(S, 'Shoe Lane Coffee', 'shoe-lane-coffee', {category: 'cafe'}),
    rec(S, 'Note', 'note', {category: 'restaurant', priceLevel: '$$$'}),
    rec(S, 'Winding Stair', 'winding-stair', {category: 'restaurant', priceLevel: '$$'}),
    rec(S, 'Guinness Storehouse', 'guinness-storehouse', {
      category: 'activity',
      description: 'Guinness experience.',
    }),
    rec(S, "Frank's", 'franks', {
      category: 'bar',
      description: 'Wine / pub snacks / lunch.',
      tags: ['wine-bar'],
    }),
    rec(S, 'Loose Canon', 'loose-canon', {
      category: 'bar',
      tags: ['natural-wine', 'wine-bar'],
    }),
    rec(S, 'Tiller and Grain', 'tiller-and-grain', {category: 'restaurant', mealTypes: ['lunch']}),
    rec(S, 'Umi Falafel', 'umi-falafel', {
      category: 'restaurant',
      priceLevel: '$',
      tags: ['veggie-friendly', 'lunch-spot'],
      veggieFriendly: true,
    }),
    rec(S, 'Fish Shop', 'fish-shop', {category: 'restaurant', priceLevel: '$$'}),
    rec(S, 'Bar Pez', 'bar-pez', {category: 'restaurant', priceLevel: '$$'}),
    rec(S, 'Mae', 'mae', {category: 'restaurant', priceLevel: '$$'}),
    rec(S, 'Bastible', 'bastible', {category: 'restaurant', priceLevel: '$$'}),
    rec(S, 'Hodges Figgis', 'hodges-figgis', {category: 'activity', description: 'Bookstore.'}),
    rec(S, 'National Gallery of Ireland', 'national-gallery', {
      category: 'activity',
      description:
        'Hellelil and Hildebrand — limited viewing hours to protect pigments; worth checking schedule.',
    }),
    rec(S, "Stag's Head", 'stags-head', {
      category: 'bar',
      barType: 'pub',
      description: 'Favourite touristy pub — beautiful room, decent pint.',
    }),
    rec(S, 'Trinity College', 'trinity-college', {
      category: 'activity',
      description: 'Open to stroll around.',
    }),
    rec(S, "St Stephen's Green", 'st-stephens-green', {
      category: 'activity',
      description: 'Park walk.',
    }),
  ],
  [
    {slug: `${S}-bread-41`, title: 'Breakfast', sortOrder: 1},
    {slug: `${S}-note`, title: 'Dinner', sortOrder: 2},
    {slug: `${S}-loose-canon`, title: 'Natural wine', sortOrder: 3},
    {slug: `${S}-stags-head`, title: 'Pub', sortOrder: 4},
  ]
)
