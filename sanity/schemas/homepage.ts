import { defineField, defineType } from 'sanity'

export const homepageSchema = defineType({
  name: 'homepage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      description: 'The big bold text in the hero section',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSubheadline',
      title: 'Hero Sub-headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroCtaText',
      title: 'CTA Button Text',
      type: 'string',
      initialValue: "Let's Build Together",
    }),
    defineField({
      name: 'introParagraph',
      title: 'Intro Paragraph (below hero)',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'statBadge1',
      title: 'Stat Badge 1',
      type: 'string',
      initialValue: '14 Districts',
    }),
    defineField({
      name: 'statBadge2',
      title: 'Stat Badge 2',
      type: 'string',
      initialValue: '360° Solutions',
    }),
    defineField({
      name: 'statBadge3',
      title: 'Stat Badge 3',
      type: 'string',
      initialValue: '5 Business Pillars',
    }),
    defineField({
      name: 'whyUsHeadline',
      title: "'Why Choose Us' Section Headline",
      type: 'string',
    }),
    defineField({
      name: 'whyUsSubtext',
      title: "'Why Choose Us' Supporting Text",
      type: 'text',
      rows: 3,
    }),
  ],
})
