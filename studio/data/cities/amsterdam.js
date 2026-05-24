import {citySeed, rec} from '../helpers.js'

const S = 'amsterdam'

export const amsterdamSeed = citySeed(
  'Amsterdam',
  'amsterdam',
  'Netherlands',
  'Canal city — cafés, wine bars, and late nights. Pubs close earlier than Montreal; plan accordingly.',
  'Amsterdam essentials',
  [
    rec(S, 'De School', 'de-school', {
      category: 'activity',
      description: 'Crazy club — go late.',
      tags: ['montreal-classic'],
    }),
    rec(S, 'Glou Glou', 'glou-glou', {
      category: 'bar',
      barType: 'wine',
      description: 'Wine bar.',
      tags: ['wine-bar', 'natural-wine'],
    }),
    rec(S, 'Rakang', 'rakang', {
      category: 'restaurant',
      restaurantType: 'thai',
      priceLevel: '$$',
      description: 'Thai food.',
    }),
    rec(S, 'Tuschinski', 'tuschinski', {
      category: 'activity',
      description: 'Historic theatre.',
    }),
    rec(S, 'Dampkring', 'dampkring', {
      category: 'cafe',
      description: 'Café.',
    }),
    rec(S, 'Public Space', 'public-space', {
      category: 'cafe',
      description: 'Café.',
    }),
    rec(S, 'Soundgarden', 'soundgarden', {
      category: 'bar',
      description: 'Punky bar.',
    }),
    rec(S, 'Skatecafé', 'skatecafe', {
      category: 'cafe',
      description: 'Skate café.',
    }),
    rec(S, 'Het Fietscafe', 'het-fietscafe', {
      category: 'bar',
      description: 'Travelling tandem bike bar.',
      tags: ['montreal-classic'],
    }),
  ],
  [
    {slug: `${S}-glou-glou`, title: 'Natural wine night', sortOrder: 1},
    {slug: `${S}-de-school`, title: 'Go late', sortOrder: 2},
    {slug: `${S}-rakang`, title: 'Thai fix', sortOrder: 3},
  ]
)
