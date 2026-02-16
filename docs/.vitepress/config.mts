import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Dominion Docs",
  description: "Talon Hunt Framework Documentation",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Framework', link: '/framework' }
    ],
    sidebar: [
      {
        text: 'Talon Hunt Framework',
        items: [
          { text: 'Introduction', link: '/framework' },
          { text: 'Detection Logic', link: '/detection' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/DominionCyber' }
    ]
  }
})
