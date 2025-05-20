import client from '$lib/client'

export async function load({ params }) {
  const data = await client.fetch(`*[_type == 'course' && title == 'Firebase'][0]`)

  if (data) {
    return data
  }

  return {
    status: 500,
    body: new Error('Internal Server Error'),
  }
}
