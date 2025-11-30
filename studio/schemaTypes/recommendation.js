export default {
  name: 'recommendation',
  title: 'Recommendation',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Place Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'website',
      title: 'Website',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Restaurant', value: 'restaurant'},
          {title: 'Cafe', value: 'cafe'},
          {title: 'Bar', value: 'bar'},
          {title: 'Bakery', value: 'bakery'},
          {title: 'Activity', value: 'activity'}
        ]
      },
      validation: Rule => Rule.required()
    },
    {
        name: 'restaurantType',
        title: 'Restaurant Type',
        type: 'string',
        options: {
            list: [
            {title: 'American', value: 'american'},
            {title: 'Argentine', value: 'argentine'},
            {title: 'Chinese', value: 'chinese'},
            {title: 'Deli', value: 'Deli'},
            {title: 'French', value: 'french'},
            {title: 'Greek', value: 'greek'},
            {title: 'Indian', value: 'indian'},
            {title: 'Irish', value: 'irish'},
            {title: 'Italian', value: 'italian'},
            {title: 'Japanese', value: 'japanese'},
            {title: 'Korean', value: 'korean'},
            {title: 'Lebanese', value: 'lebanese'},
            {title: 'Mediterranean', value: 'mediterranean'},
            {title: 'Mexican', value: 'mexican'},
            {title: 'Portuguese', value: 'portuguese'},
            {title: 'Thai', value: 'thai'},
            {title: 'Turkish', value: 'turkish'},
            {title: 'Vietnamese', value: 'vietnamese'},
            {title: 'Other', value: 'other'}
            ]
        },
        hidden: ({document}) => document?.category !== 'restaurant'
    },
        {
        name: 'veggieFriendly',
        title: 'Veggie friendly?',
        type: 'boolean',
        hidden: ({document}) => document?.category !== 'restaurant'
    },
    {
        name: 'mealTypes',
        title: 'Meal Types',
        type: 'array',
        of: [{type: 'string'}],
        options: {
            list: [
            {title: 'Breakfast', value: 'breakfast'},
            {title: 'Brunch', value: 'brunch'},
            {title: 'Lunch', value: 'lunch'},
            {title: 'Snacks', value: 'snacks'},
            {title: 'Dinner', value: 'dinner'}
            ]
        },
        hidden: ({document}) => document?.category !== 'restaurant'
    },
    {
        name: 'barType',
        title: 'Bar Type',
        type: 'string',
        options: {
            list: [
            {title: 'Cocktail', value: 'cocktail'},
            {title: 'Dive', value: 'dive'},
            {title: 'Pub', value: 'pub'},
            {title: 'Sports', value: 'sports'},
            {title: 'Wine', value: 'wine'},
            {title: 'Other', value: 'other'}
            ]
        },
        hidden: ({document}) => document?.category !== 'bar'
    },
    {
        name: 'priceLevel',
        title: 'Price Level',
        type: 'string',
        options: {
            list: [
            {title: '$', value: '$'},
            {title: '$$', value: '$$'},
            {title: '$$$', value: '$$$'},
            {title: '$$$$', value: '$$$$'}
            ]
        }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string'
    },
    {
      name: 'city',
      title: 'City',
      type: 'reference',
      to: [{type: 'city'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Pending', value: 'pending'},
          {title: 'Approved', value: 'approved'},
          {title: 'Rejected', value: 'rejected'}
        ]
      },
      initialValue: 'pending'
    },
    {
      name: 'submittedBy',
      title: 'Submitted By',
      type: 'reference',
      to: [{type: 'user'}]
    },
    {
      name: 'upvotes',
      title: 'Upvotes',
      type: 'number',
      initialValue: 0
    },
    {
      name: 'downvotes',
      title: 'Downvotes',
      type: 'number',
      initialValue: 0
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'image'
    }
  }
}