import {citySeed, rec} from '../helpers.js'

const S = 'copenhagen'

export const copenhagenSeed = citySeed(
  'Copenhagen',
  'copenhagen',
  'Denmark',
  'New Nordic meets natural wine and perfect coffee. Classic smørrebrød and seafood.',
  'Copenhagen highlights',
  [
    rec(S, 'Det Vide Hus', 'det-vide-hus', {
      category: 'cafe',
      description: 'Ice cream and coffee.',
    }),
    rec(S, 'Sune', 'sune', {
      category: 'activity',
      description: 'Natural wine shop.',
      tags: ['natural-wine'],
    }),
    rec(S, 'Tigermom', 'tigermom', {
      category: 'restaurant',
      restaurantType: 'other',
      priceLevel: '$$',
      description: 'Asian food.',
    }),
    rec(S, 'Coffee Collective', 'coffee-collective', {category: 'cafe'}),
    rec(S, 'Guld Grillen', 'guld-grillen', {
      category: 'restaurant',
      priceLevel: '$$',
      description: 'Classic Danish “diner” — order the flæskesteg sandwich.',
      mealTypes: ['lunch'],
    }),
    rec(S, 'Marchal', 'marchal', {
      category: 'restaurant',
      priceLevel: '$$$',
      description: 'Gourmet.',
    }),
    rec(S, 'Cibievini', 'cibievini', {
      category: 'activity',
      description: 'Delicatessen — wine, olives, dried pasta, charcuterie.',
      tags: ['natural-wine'],
    }),
    rec(S, 'Lille', 'lille', {category: 'bakery'}),
    rec(S, 'La Banchina', 'la-banchina', {
      category: 'restaurant',
      priceLevel: '$$',
      description:
        'Casual breakfast, lunch, dinner. Organic vegetables, sustainable seafood, natural wine.',
      tags: ['natural-wine', 'farm-to-table'],
      mealTypes: ['breakfast', 'lunch', 'dinner'],
    }),
    rec(S, 'Gasoline Grill', 'gasoline-grill', {
      category: 'restaurant',
      priceLevel: '$$',
      description: 'Burgers.',
    }),
    rec(S, 'Fiskerikajen', 'fiskerikajen', {
      category: 'activity',
      description: 'Seafood supplier.',
    }),
    rec(S, 'Kihoskh', 'kihoskh', {
      category: 'activity',
      description: 'Best grocery store — amazing beer selection.',
      tags: ['craft-beer'],
    }),
  ],
  [
    {slug: `${S}-la-banchina`, title: 'Natural wine & seafood', sortOrder: 1},
    {slug: `${S}-coffee-collective`, title: 'Coffee', sortOrder: 2},
    {slug: `${S}-guld-grillen`, title: 'Flæskesteg sandwich', sortOrder: 3},
  ]
)
