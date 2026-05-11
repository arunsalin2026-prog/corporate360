import { defineField, defineType } from 'sanity'

export const careersPageSchema = defineType({
  name: 'careersPage',
  title: 'Careers Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageHeadline',
      title: 'Page Headline',
      type: 'string',
    }),
    defineField({
      name: 'pageSubheadline',
      title: 'Sub-headline',
      type: 'string',
    }),
    defineField({
      name: 'openRoles',
      title: 'Open Roles',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'role',
          fields: [
            {
              name: 'roleName',
              title: 'Role Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'roleType',
              title: 'Type (Full Time / Contract / Part Time)',
              type: 'string',
            },
            {
              name: 'location',
              title: 'Location',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Brief Description',
              type: 'text',
              rows: 3,
            },
            {
              name: 'isActive',
              title: 'Currently Hiring?',
              type: 'boolean',
              initialValue: true,
            },
          ],
          preview: {
            select: { title: 'roleName', subtitle: 'roleType' },
          },
        },
      ],
      validation: (Rule) => Rule.max(10),
    }),
  ],
})
