import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'corporate360hub',
  title: 'Corporate 360 Hub — Content Studio',

  // When embedded at /studio in the Next.js app
  basePath: '/studio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  schema: {
    types: schemaTypes,
  },

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem().title('Home Page').id('homepage').child(
              S.document().schemaType('homepage').documentId('homepage')
            ),
            S.listItem().title('About Page').id('aboutPage').child(
              S.document().schemaType('aboutPage').documentId('aboutPage')
            ),
            S.listItem().title('Services Page').id('servicesPage').child(
              S.document().schemaType('servicesPage').documentId('servicesPage')
            ),
            S.listItem().title('Careers Page').id('careersPage').child(
              S.document().schemaType('careersPage').documentId('careersPage')
            ),
            S.listItem().title('Site Settings').id('siteSettings').child(
              S.document().schemaType('siteSettings').documentId('siteSettings')
            ),
          ]),
    }),
  ],
})
