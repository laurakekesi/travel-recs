import {citySeed, rec} from '../helpers.js'

const S = 'london'

export const londonSeed = citySeed(
  'London',
  'london',
  'United Kingdom',
  'Modern British dining and old-school pub rock.',
  'London picks',
  [
    rec(S, 'Duck Soup', 'duck-soup', {category: 'restaurant', priceLevel: '$$$'}),
    rec(S, 'Bright', 'bright', {category: 'restaurant', priceLevel: '$$'}),
    rec(S, "Lyle's", 'lyles', {category: 'restaurant', priceLevel: '$$$'}),
    rec(S, 'Rochelle Canteen', 'rochelle-canteen', {
      category: 'restaurant',
      priceLevel: '$$',
      mealTypes: ['lunch'],
    }),
    rec(S, 'Saint John Bread & Wine', 'saint-john-bread-wine', {
      category: 'restaurant',
      priceLevel: '$$$',
    }),
    rec(S, 'Brat', 'brat', {
      category: 'restaurant',
      priceLevel: '$$$',
      description: 'Listed as “Braun” in notes — Brat is the well-known spot.',
    }),
    rec(S, 'Barrafina', 'barrafina', {
      category: 'restaurant',
      restaurantType: 'other',
      priceLevel: '$$$',
      description: 'Tapas.',
    }),
    rec(S, 'The Camden Eye', 'camden-eye', {
      category: 'bar',
      barType: 'pub',
      description: 'Old-school rock pub.',
      tags: ['montreal-classic'],
    }),
  ],
  [
    {slug: `${S}-lyles`, title: 'Special occasion', sortOrder: 1},
    {slug: `${S}-duck-soup`, title: 'Seasonal cooking', sortOrder: 2},
    {slug: `${S}-camden-eye`, title: 'Pub night', sortOrder: 3},
  ]
)
