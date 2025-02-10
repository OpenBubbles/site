import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OpenBubbles",
  description: "iMessage on all your devices",
  themeConfig: {
    logo: '/icon.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Quickstart', link: '/quickstart' },
      { text: 'Docs', link: '/docs/faq' }
    ],

    footer: {
      message: '<a href="/about">About</a> &nbsp; <a href="https://www.paypal.com/donate/?hosted_button_id=MUZH6LH6ZGN6G">Donate</a><br>Mac, iMessage, FaceTime, iPhone, and iCloud are trademarks of Apple Inc.',
      copyright: 'Copyright © 2024-present OpenBubbles',
    },

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Quickstart', link: '/quickstart' },
          { text: 'Frequently Asked Questions', link: '/docs/faq' },
          { text: 'Phone Number Registration', link: '/docs/pnr' },
          { text: 'Renewal System', link: '/docs/renewal' },
          { text: 'Backup and Restore', link: '/docs/backupandrestore' },
          { text: 'Troubleshooting', link: '/docs/troubleshooting' },
          { text: 'App Features', link: '/docs/features' },
        ]
      },
      {
        text: 'Extension API Docs',
        items: [
          { text: 'Whare are extensions?', link: '/extensions/what-are-extensions' },
          { text: 'Quickstart', link: '/extensions/quick-start' },
          { text: 'Extension Service', link: '/extensions/extension-service' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/OpenBubbles/openbubbles-app' },
      { icon: 'discord', link: 'https://discord.gg/98fWS4AQqN' },
    ]
  }
})
