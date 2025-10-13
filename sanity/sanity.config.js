import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'RPFMI - Admin Dashboard',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'kxp18f70',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Settings - Single document
            S.listItem()
              .title('Site Settings')
              .icon(() => '⚙️')
              .child(S.document().schemaType('settings').documentId('settings')),

            S.divider(),

            // Sermons
            S.listItem()
              .title('Sermons')
              .icon(() => '🎙️')
              .child(S.documentTypeList('sermon').title('Sermons')),

            // Events
            S.listItem()
              .title('Events')
              .icon(() => '📅')
              .child(S.documentTypeList('event').title('Events')),

            // Announcements
            S.listItem()
              .title('Announcements')
              .icon(() => '📢')
              .child(S.documentTypeList('announcement').title('Announcements')),

            // Ministries
            S.listItem()
              .title('Ministries')
              .icon(() => '🙏')
              .child(S.documentTypeList('ministry').title('Ministries')),

            S.divider(),

            // All other document types
            ...S.documentTypeListItems().filter(
              (listItem) =>
                !['settings', 'sermon', 'event', 'announcement', 'ministry'].includes(
                  listItem.getId(),
                ),
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
