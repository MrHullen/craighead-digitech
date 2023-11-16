import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'zar9osnq',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
})

export default client