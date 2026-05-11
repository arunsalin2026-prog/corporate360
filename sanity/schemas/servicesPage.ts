import { defineField, defineType } from 'sanity'

export const servicesPageSchema = defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageIntro',
      title: 'Page Introduction Text',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'services',
      title: 'Service Pillars',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'servicePillar',
          fields: [
            {
              name: 'pillarNumber',
              title: 'Pillar Number (e.g. 01)',
              type: 'string',
            },
            {
              name: 'serviceName',
              title: 'Service Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'shortDescription',
              title: 'Short Description',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'features',
              title: 'Feature Bullet Points',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
          preview: {
            select: { title: 'serviceName', subtitle: 'pillarNumber' },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(5).max(5),
    }),
  ],
})
