import {citySeed, rec} from '../helpers.js'

const S = 'barcelona'

export const barcelonaSeed = citySeed(
  'Barcelona',
  'barcelona',
  'Spain',
  'Tapas, vermouth, and late bar streets. Don’t sleep on conservas, canned fish, and Catalan wine.',
  'Barcelona favourites',
  [
    rec(S, 'Bar Brutal', 'bar-brutal', {category: 'bar', barType: 'wine', tags: ['wine-bar']}),
    rec(S, 'Discos Paradiso', 'discos-paradiso', {
      category: 'activity',
      description: 'Record store.',
    }),
    rec(S, 'Cal Pep', 'cal-pep', {
      category: 'restaurant',
      restaurantType: 'other',
      priceLevel: '$$$',
      description: 'Tapas institution.',
      mealTypes: ['lunch', 'dinner'],
    }),
    rec(S, 'MACBA', 'macba', {category: 'activity', description: 'Contemporary art museum.'}),
    rec(S, "Satan's Coffee", 'satans-coffee', {category: 'cafe', description: 'Coffee.'}),
    rec(S, "L'Ovella Negra Marina", 'lovella-negra-marina', {
      category: 'bar',
      description: 'Fun student bar.',
    }),
    rec(S, 'Macarena', 'macarena', {category: 'activity', description: 'Club.'}),
    rec(S, 'Quimet y Quimet', 'quimet-y-quimet', {
      category: 'bar',
      description: 'Canned fish and beer / cider / vermouth.',
      tags: ['wine-bar', 'lunch-spot'],
    }),
    rec(S, 'La Bombeta', 'la-bombeta', {
      category: 'restaurant',
      priceLevel: '$$',
      description: 'Seafood and tapas.',
    }),
    rec(S, "L'Anima del Vi", 'lanima-del-vi', {
      category: 'bar',
      barType: 'wine',
      tags: ['wine-bar'],
    }),
    rec(S, 'Bar Angel', 'bar-angel', {category: 'bar'}),
  ],
  [
    {slug: `${S}-cal-pep`, title: 'Tapas legend', sortOrder: 1},
    {slug: `${S}-quimet-y-quimet`, title: 'Conservas & vermouth', sortOrder: 2},
    {slug: `${S}-bar-brutal`, title: 'Wine bar', sortOrder: 3},
  ]
)
