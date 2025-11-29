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
    }
  ]
}