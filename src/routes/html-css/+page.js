import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "mowf6uky",
  dataset: "production",
  apiVersion: "2022-10-13",
  useCdn: false
})

export async function load() {
  const data = await client.fetch(`*[_type == "project"]`);

  if (data) return data
}