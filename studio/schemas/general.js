export default {
  name: 'general',
  title: 'General',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      hidden: true,
      readOnly: true,
      initialValue: 'General',
    },
    {
      name: 'favIcon',
      title: 'Favicon',
      description: `The image shown on the tab in the visitor's browser.`,
      type: 'image',
      storeOriginalFilename: false,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Logo Image',
      description: `The logo in the top left of the navbar. Should be as large as possible with a transparent background.`,
      type: 'image',
      storeOriginalFilename: false,
      validation: (Rule) => Rule.required(),
    },
  ],
}
