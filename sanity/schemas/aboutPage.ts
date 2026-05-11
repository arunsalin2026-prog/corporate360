import { defineField, defineType } from 'sanity'

export const aboutPageSchema = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'vision',
      title: 'Vision Statement',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mission',
      title: 'Mission Statement',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ourStory',
      title: 'Our Story (rich text)',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'founderName',
      title: 'Founder Full Name',
      type: 'string',
    }),
    defineField({
      name: 'founderDesignation',
      title: 'Founder Designation',
      type: 'string',
    }),
    defineField({
      name: 'founderPhoto',
      title: 'Founder Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'coreValues',
      title: 'Core Values',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'coreValue',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'string' },
          ],
          preview: {
            select: { title: 'title', subtitle: 'description' },
          },
        },
      ],
      validation: (Rule) => Rule.max(5),
    }),
  ],
})
