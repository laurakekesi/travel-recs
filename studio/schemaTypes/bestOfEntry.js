export default {
  name: 'bestOfEntry',
  title: 'Best Of Entry',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Headline',
      type: 'string',
      description: 'Optional short label (defaults to the place name)',
    },
    {
      name: 'city',
      title: 'City',
      type: 'reference',
      to: [{type: 'city'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'recommendation',
      title: 'Recommendation',
      type: 'reference',
      to: [{type: 'recommendation'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'blurb',
      title: 'Blurb',
      type: 'text',
      rows: 3,
      description: 'Why this spot made the list',
    },
    {
      name: 'sortOrder',
      title: 'Sort order',
      type: 'number',
      description: 'Lower numbers appear first',
      initialValue: 0,
    },
  ],
  orderings: [
    {
      title: 'Sort order',
      name: 'sortOrderAsc',
      by: [{field: 'sortOrder', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      placeName: 'recommendation.name',
      cityName: 'city.name',
      sortOrder: 'sortOrder',
    },
    prepare({title, placeName, cityName, sortOrder}) {
      return {
        title: title || placeName || 'Best of entry',
        subtitle: [cityName, sortOrder != null ? `#${sortOrder}` : null].filter(Boolean).join(' · '),
      }
    },
  },
}
