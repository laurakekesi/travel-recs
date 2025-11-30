import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: '26828cl1',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-11-29',
  token: process.env.REACT_APP_SANITY_TOKEN 
})