import { defineConfig, StudioLogo } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { myTheme } from './theme';
import StudioNavbar from './components/StudioNavbar';
import Logo from './components/Logo';
import { getDefaultDocumentNode } from './structure';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: '/studio',
  name: 'INTROSPECTIVE_CONTENT_STUDIO',
  title: 'Nullius in Verba',

  projectId,
  dataset,

  plugins: [deskTool({
    defaultDocumentNode: getDefaultDocumentNode,
    structure: (S) =>
      S.list()
        .title('Base')
        .items([...S.documentTypeListItems().reverse()]),
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,

    }
  },
  theme: myTheme,
})
