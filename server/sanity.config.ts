import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'KGL HipHop Charts',

  projectId: 'dh9vsroc',
  dataset: 'charts',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
