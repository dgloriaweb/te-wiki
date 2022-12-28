export default {
  appearance: false,

  // These are app level configs.
  lang: 'en-UK',
  title: 'Talentexploit Documentation',
  description: 'Documentation and API docs for talentexploit.com',

  themeConfig: {
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'TE Docs', link: '/index' },
          { text: 'TE API', link: '/api' }
        ]
      }
    ]
  }
}