import {citySeed, rec} from '../helpers.js'

const S = 'rome'

const ROME_DISHES = `
Classic Roman dishes to seek out: carciofi alla giudia, supplì, carbonara, amatriciana, cacio e pepe, saltimbocca, porchetta, baccalà, fiori di zucca, trippa alla romana, cicoria, maritozzo, torta ricotta.
`

const ROME_WINES = `
Wines for weens — not yet in Quebec: Gazeta, Ajolla, Can Libero. Available but pricey: Carfania, Massavecchia, Centoerbe amaro, Capovilla grappa. Catalan: Loreano Serres, Joan Ramon Escoda, Oriol Artigas, Ruben Parrera, La Salada. Spanish: La Perdita, Chateau Pequita. Rip through conservas — vermouth and canned fish.
`

export const romeSeed = citySeed(
  'Rome',
  'rome',
  'Italy',
  `Eternal city of pasta, pizza al taglio, and natural wine.${ROME_DISHES}${ROME_WINES}`,
  'Roman essentials',
  [
    rec(S, 'Pizzarium by Bonci', 'pizzarium-bonci', {
      category: 'restaurant',
      priceLevel: '$',
      restaurantType: 'italian',
      description: 'Pizza al taglio — legendary.',
      mealTypes: ['lunch', 'snacks'],
    }),
    rec(S, 'Panificio Bonci', 'panificio-bonci', {category: 'bakery'}),
    rec(S, 'Birra +', 'birra-plus', {category: 'bar', tags: ['craft-beer']}),
    rec(S, 'Pasta Imperiale', 'pasta-imperiale', {
      category: 'restaurant',
      restaurantType: 'italian',
      mealTypes: ['lunch'],
      priceLevel: '$$',
    }),
    rec(S, 'De Cesare (Casteletto)', 'de-cesare', {
      category: 'restaurant',
      restaurantType: 'italian',
      priceLevel: '$$',
    }),
    rec(S, 'Roscioli', 'roscioli', {
      category: 'restaurant',
      restaurantType: 'italian',
      priceLevel: '$$$',
    }),
    rec(S, 'Roscioli Caffè', 'roscioli-caffe', {category: 'cafe'}),
    rec(S, 'Roscioli Forno', 'roscioli-forno', {category: 'bakery'}),
    rec(S, 'Litro', 'litro', {
      category: 'bar',
      barType: 'wine',
      description: 'Wine bar / restaurant — best.',
      tags: ['wine-bar', 'natural-wine'],
    }),
    rec(S, 'Tavernaccia da Bruno', 'tavernaccia-da-bruno', {
      category: 'restaurant',
      restaurantType: 'italian',
      priceLevel: '$$',
    }),
    rec(S, 'Armando al Pantheon', 'armando-al-pantheon', {
      category: 'restaurant',
      restaurantType: 'italian',
      priceLevel: '$$$',
      description: 'Reserve — great Roman cuisine, one of the faves.',
    }),
    rec(S, 'Otaleg', 'otaleg', {category: 'cafe', description: 'Gelato.'}),
    rec(S, 'Gracchi', 'gracchi', {category: 'cafe', description: 'Gelato.'}),
    rec(S, 'Fatamorgana', 'fatamorgana', {category: 'cafe', description: 'Gelato.'}),
    rec(S, '180G', '180g', {category: 'restaurant', priceLevel: '$$'}),
    rec(S, 'Les Vignerons', 'les-vignerons', {
      category: 'activity',
      description: 'Wine shop.',
      tags: ['natural-wine'],
    }),
    rec(S, 'Santo Palato', 'santo-palato', {
      category: 'restaurant',
      restaurantType: 'italian',
      priceLevel: '$$',
    }),
    rec(S, 'Marigold', 'marigold', {
      category: 'restaurant',
      mealTypes: ['lunch'],
      priceLevel: '$$',
    }),
    rec(S, 'Casa Doro', 'casa-doro', {category: 'cafe', description: 'Iced coffee.'}),
    rec(S, 'Antico Forno Roscioli', 'antico-forno-roscioli', {
      category: 'restaurant',
      priceLevel: '$',
      description:
        'Walk-in pizza al taglio — eat on the barrels outside. Cacio e pepe, burro e acciughe, burrata, coppa cruda.',
      mealTypes: ['lunch', 'snacks'],
    }),
    rec(S, 'Caffè Roscioli', 'caffe-roscioli', {category: 'cafe'}),
    rec(S, 'Caffè Sciascia', 'caffe-sciascia', {category: 'cafe'}),
    rec(S, "Sant'Eustachio Il Caffè", 'sant-eustachio', {
      category: 'cafe',
      description: 'Famous coffee — not far from the Pantheon.',
    }),
    rec(S, 'Caffè Greco', 'caffe-greco', {category: 'cafe'}),
    rec(S, 'Tazza d\'Oro', 'tazza-doro', {category: 'cafe'}),
    rec(S, 'Trattoria Sora Lella', 'sora-lella', {
      category: 'restaurant',
      restaurantType: 'italian',
      priceLevel: '$$',
      description: 'Traditional off-cuts — dope old-school spot.',
    }),
    rec(S, 'Flavio al Velavevodetto', 'flavio-velavevodetto', {
      category: 'restaurant',
      restaurantType: 'italian',
      priceLevel: '$$',
      description: 'Roman cuisine in Testaccio.',
    }),
    rec(S, 'Il Goccetto', 'il-goccetto', {
      category: 'bar',
      barType: 'wine',
      tags: ['wine-bar'],
    }),
    rec(S, 'Dar Filettaro', 'dar-filettaro', {
      category: 'restaurant',
      priceLevel: '$',
      description: 'Fried baccalà.',
    }),
    rec(S, 'Supplizio', 'supplizio', {
      category: 'restaurant',
      priceLevel: '$',
      description: 'Supplì specialist.',
    }),
    rec(S, 'Nonna Betta', 'nonna-betta', {
      category: 'restaurant',
      restaurantType: 'italian',
      priceLevel: '$$',
      description: 'Jewish Ghetto — known for carciofi alla giudia.',
    }),
    rec(S, 'Freni e Frizzoni', 'freni-e-frizzoni', {
      category: 'bar',
      description: 'Perfect aperitivo in Trastevere.',
      tags: ['wine-bar'],
    }),
    rec(S, 'La Prosciutteria', 'la-prosciutteria', {
      category: 'restaurant',
      priceLevel: '$$',
      description: 'Charcuterie plate — pair with Da Biagio next door.',
    }),
    rec(S, 'Da Biagio', 'da-biagio', {
      category: 'bar',
      barType: 'wine',
      description: 'Old-school wine bar next to La Prosciutteria.',
      tags: ['wine-bar'],
    }),
    rec(S, 'Ma Che Siete Venuti A Fà', 'ma-che-siete-venuti-a-fa', {
      category: 'bar',
      description: 'Cool bar in Trastevere.',
    }),
    rec(S, 'La Torricella', 'la-torricella', {
      category: 'restaurant',
      restaurantType: 'italian',
      priceLevel: '$$$',
      description: 'Testaccio — Roman seafood.',
    }),
    rec(S, 'Colline Emiliane', 'colline-emiliane', {
      category: 'restaurant',
      restaurantType: 'italian',
      priceLevel: '$$',
      description: 'Near Trevi — great pasta.',
    }),
    rec(S, 'Trattoria Monti', 'trattoria-monti', {
      category: 'restaurant',
      restaurantType: 'italian',
      priceLevel: '$$',
      description: 'Good old-school trattoria.',
    }),
    rec(S, 'Mercato Centrale Roma', 'mercato-centrale', {
      category: 'activity',
      description: 'Massive food hall — Bonci, Trapizzino, and more.',
      tags: ['markets'],
    }),
    rec(S, 'Mordi e Vai', 'mordi-e-vai', {
      category: 'restaurant',
      priceLevel: '$',
      description: 'Sandwich spot — have the trippa sandwich.',
      mealTypes: ['lunch'],
    }),
    rec(S, 'Pro Loco DOL', 'pro-loco-dol', {
      category: 'activity',
      description: 'Charcuterie / groceries — everything local.',
    }),
    rec(S, 'I Porchettoni del Pigneto', 'porchettoni-pigneto', {
      category: 'restaurant',
      priceLevel: '$',
      description: 'Small porchetta spot in Pigneto — eat outside when sunny.',
    }),
    rec(S, 'Betto e Mary', 'betto-e-mary', {
      category: 'restaurant',
      restaurantType: 'italian',
      priceLevel: '$$',
      description: 'Off-cuts and cucina povera — hipster nonna vibes.',
    }),
    rec(S, 'Osteria Bonelli', 'osteria-bonelli', {
      category: 'restaurant',
      restaurantType: 'italian',
      priceLevel: '$$',
      description: 'Super classic, no frills, good price.',
    }),
    rec(S, "L'Arcangelo", 'larcangelo', {
      category: 'restaurant',
      restaurantType: 'italian',
      priceLevel: '$$$',
      description: 'Old-school Roman — chef opened the supplì shop in Rome.',
    }),
  ],
  [
    {slug: `${S}-pizzarium-bonci`, title: 'Pizza al taglio', sortOrder: 1},
    {slug: `${S}-litro`, title: 'Wine bar / resto', sortOrder: 2},
    {slug: `${S}-antico-forno-roscioli`, title: 'Eat on the barrels', sortOrder: 3},
    {slug: `${S}-armando-al-pantheon`, title: 'Reserve ahead', sortOrder: 4},
    {slug: `${S}-mordi-e-vai`, title: 'Trippa sandwich', sortOrder: 5},
  ]
)
