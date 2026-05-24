import {citySeed, rec} from '../helpers.js'

const S = 'paris'

export const parisSeed = citySeed(
  'Paris',
  'paris',
  'France',
  'Wine bars, bouillons, and natural wine caves. Rue de la Roquette / Lappe area for late bars.',
  'Paris essentials',
  [
    rec(S, 'Clown Bar', 'clown-bar', {category: 'bar', barType: 'wine', tags: ['wine-bar']}),
    rec(S, 'Du Pain et des Idées', 'du-pain-et-des-idees', {category: 'bakery'}),
    rec(S, "L'As du Fallafel", 'as-du-falafel', {
      category: 'restaurant',
      priceLevel: '$',
      description: 'Lunch institution in the Marais.',
      mealTypes: ['lunch'],
      tags: ['lunch-spot'],
    }),
    rec(S, 'Le Comptoir', 'le-comptoir', {category: 'restaurant', priceLevel: '$$$'}),
    rec(S, "L'Avant Comptoir", 'lavant-comptoir', {
      category: 'bar',
      description: 'Standing wine bar snacks.',
      tags: ['wine-bar'],
    }),
    rec(S, 'Cave au Gé', 'cave-au-ge', {category: 'bar', barType: 'wine', tags: ['wine-bar', 'natural-wine']}),
    rec(S, 'Shakespeare & Company', 'shakespeare-and-company', {
      category: 'activity',
      description: 'Bookstore.',
    }),
    rec(S, 'Poulet Coq Rico', 'poulet-coq-rico', {category: 'restaurant', priceLevel: '$$'}),
    rec(S, 'La Buvette', 'la-buvette', {category: 'bar', barType: 'wine', tags: ['wine-bar']}),
    rec(S, 'Comptoir aux Deux Amis', 'comptoir-aux-deux-amis', {
      category: 'restaurant',
      priceLevel: '$$',
    }),
    rec(S, 'Yard', 'yard', {category: 'restaurant', priceLevel: '$$'}),
    rec(S, 'Boot Café', 'boot-cafe', {category: 'cafe'}),
    rec(S, 'Téléscope', 'telescope', {category: 'cafe'}),
    rec(S, 'Clamato', 'clamato', {category: 'restaurant', priceLevel: '$$$'}),
    rec(S, 'CAM Import Export', 'cam-import-export', {
      category: 'restaurant',
      priceLevel: '$$',
      tags: ['natural-wine'],
    }),
    rec(S, 'Chez Aline', 'chez-aline', {category: 'restaurant', priceLevel: '$', mealTypes: ['lunch']}),
    rec(S, 'Brutos', 'brutos', {category: 'restaurant', priceLevel: '$$'}),
    rec(S, 'Les Caves du Fauve', 'les-cuves-du-fauve', {
      category: 'bar',
      barType: 'wine',
      tags: ['natural-wine', 'wine-bar'],
    }),
    rec(S, 'Cave Septime', 'cave-septime', {
      category: 'bar',
      barType: 'wine',
      tags: ['natural-wine', 'wine-bar'],
    }),
    rec(S, 'Chambre Noire', 'chambre-noire', {category: 'bar', tags: ['wine-bar']}),
    rec(S, 'Margot', 'margot', {category: 'restaurant', priceLevel: '$$'}),
    rec(S, 'Martin', 'martin', {category: 'restaurant', priceLevel: '$$'}),
    rec(S, 'Double Dragon', 'double-dragon', {
      category: 'restaurant',
      restaurantType: 'other',
      priceLevel: '$$',
    }),
    rec(S, 'Lao Siam', 'lao-siam', {category: 'restaurant', restaurantType: 'thai', priceLevel: '$$'}),
    rec(S, "Cheval d'Or", 'cheval-dor', {category: 'bar', barType: 'wine', tags: ['wine-bar']}),
    rec(S, 'Rue de la Roquette', 'rue-de-la-roquette', {
      category: 'activity',
      description: 'Bar street — bars close later.',
    }),
    rec(S, 'Rue Lappe', 'rue-lappe', {
      category: 'activity',
      description: 'Bar street — bars close later.',
    }),
  ],
  [
    {slug: `${S}-clamato`, title: 'Seafood', sortOrder: 1},
    {slug: `${S}-clown-bar`, title: 'Wine bar', sortOrder: 2},
    {slug: `${S}-du-pain-et-des-idees`, title: 'Pastry', sortOrder: 3},
    {slug: `${S}-as-du-falafel`, title: 'Lunch', sortOrder: 4},
  ]
)
