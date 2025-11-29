export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required().email()
    },
    {
      name: 'savedRecommendations',
      title: 'Saved Recommendations',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'recommendation'}]}]
    }
  ]
}