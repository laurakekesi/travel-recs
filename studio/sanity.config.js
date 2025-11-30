import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Travel Reccos',

  projectId: '26828cl1',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Pending recommendations view
            S.listItem()
              .title('Pending Recommendations')
              .icon(() => '⏳')
              .child(
                S.documentList()
                  .title('Pending Recommendations')
                  .filter('_type == "recommendation" && status == "pending"')
              ),
            
            // Divider
            S.divider(),
            
            // All other document types
            ...S.documentTypeListItems().filter(
              (listItem) => !['recommendation'].includes(listItem.getId())
            ),
            
            // All recommendations (original list)
            S.listItem()
              .title('All Recommendations')
              .child(
                S.documentTypeList('recommendation')
                  .title('All Recommendations')
              ),
          ])
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})