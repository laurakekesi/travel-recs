export default {
  name: 'city',
  title: 'City',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'City Name',
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
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'image',
      title: 'City Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'country',
      title: 'Country',
      type: 'string'
    },
    {
      name: 'bestOfIntro',
      title: 'Best of section intro',
      type: 'text',
      rows: 2,
      description: 'Optional intro text shown above the Best of carousel on the city page',
    },
  ]
}