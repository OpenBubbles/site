// .vitepress/config.mts
import { defineConfig } from "file:///home/tae/Documents/GitHub/docs/node_modules/vitepress/dist/node/index.js";
var config_default = defineConfig({
  title: "OpenBubbles",
  description: "iMessage on all your devices",
  themeConfig: {
    logo: "/icon.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Quickstart", link: "/quickstart" },
      { text: "Docs", link: "/docs/faq" }
    ],
    footer: {
      message: '<a href="/about">About</a><br>Mac, iMessage, FaceTime, iPhone, and iCloud are trademarks of Apple Inc.',
      copyright: "Copyright \xA9 2024-present OpenBubbles"
    },
    sidebar: [
      {
        text: "Documentation",
        items: [
          { text: "Quickstart", link: "/quickstart" },
          { text: "Frequently Asked Questions", link: "/docs/faq" },
          { text: "Phone Number Registration", link: "/docs/pnr" },
          { text: "Renewal System", link: "/docs/renewal" },
          { text: "Backup and Restore", link: "/docs/backupandrestore" },
          { text: "Troubleshooting", link: "/docs/troubleshooting" }
        ]
      },
      {
        text: "Extension API Docs",
        items: [
          { text: "Whare are extensions?", link: "/extensions/what-are-extensions" },
          { text: "Quickstart", link: "/extensions/quick-start" },
          { text: "Extension Service", link: "/extensions/extension-service" }
        ]
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/OpenBubbles/openbubbles-app" },
      { icon: "discord", link: "https://discord.gg/98fWS4AQqN" }
    ]
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvdGFlL0RvY3VtZW50cy9HaXRIdWIvZG9jcy8udml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS90YWUvRG9jdW1lbnRzL0dpdEh1Yi9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS90YWUvRG9jdW1lbnRzL0dpdEh1Yi9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcblxuLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9zaXRlLWNvbmZpZ1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgdGl0bGU6IFwiT3BlbkJ1YmJsZXNcIixcbiAgZGVzY3JpcHRpb246IFwiaU1lc3NhZ2Ugb24gYWxsIHlvdXIgZGV2aWNlc1wiLFxuICB0aGVtZUNvbmZpZzoge1xuICAgIGxvZ286ICcvaWNvbi5wbmcnLFxuICAgIC8vIGh0dHBzOi8vdml0ZXByZXNzLmRldi9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS1jb25maWdcbiAgICBuYXY6IFtcbiAgICAgIHsgdGV4dDogJ0hvbWUnLCBsaW5rOiAnLycgfSxcbiAgICAgIHsgdGV4dDogJ1F1aWNrc3RhcnQnLCBsaW5rOiAnL3F1aWNrc3RhcnQnIH0sXG4gICAgICB7IHRleHQ6ICdEb2NzJywgbGluazogJy9kb2NzL2ZhcScgfVxuICAgIF0sXG5cbiAgICBmb290ZXI6IHtcbiAgICAgIG1lc3NhZ2U6ICc8YSBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L2E+PGJyPk1hYywgaU1lc3NhZ2UsIEZhY2VUaW1lLCBpUGhvbmUsIGFuZCBpQ2xvdWQgYXJlIHRyYWRlbWFya3Mgb2YgQXBwbGUgSW5jLicsXG4gICAgICBjb3B5cmlnaHQ6ICdDb3B5cmlnaHQgXHUwMEE5IDIwMjQtcHJlc2VudCBPcGVuQnViYmxlcydcbiAgICB9LFxuXG4gICAgc2lkZWJhcjogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiAnRG9jdW1lbnRhdGlvbicsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnUXVpY2tzdGFydCcsIGxpbms6ICcvcXVpY2tzdGFydCcgfSxcbiAgICAgICAgICB7IHRleHQ6ICdGcmVxdWVudGx5IEFza2VkIFF1ZXN0aW9ucycsIGxpbms6ICcvZG9jcy9mYXEnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnUGhvbmUgTnVtYmVyIFJlZ2lzdHJhdGlvbicsIGxpbms6ICcvZG9jcy9wbnInIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnUmVuZXdhbCBTeXN0ZW0nLCBsaW5rOiAnL2RvY3MvcmVuZXdhbCcgfSxcbiAgICAgICAgICB7IHRleHQ6ICdCYWNrdXAgYW5kIFJlc3RvcmUnLCBsaW5rOiAnL2RvY3MvYmFja3VwYW5kcmVzdG9yZScgfSxcbiAgICAgICAgICB7IHRleHQ6ICdUcm91Ymxlc2hvb3RpbmcnLCBsaW5rOiAnL2RvY3MvdHJvdWJsZXNob290aW5nJyB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnRXh0ZW5zaW9uIEFQSSBEb2NzJyxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICdXaGFyZSBhcmUgZXh0ZW5zaW9ucz8nLCBsaW5rOiAnL2V4dGVuc2lvbnMvd2hhdC1hcmUtZXh0ZW5zaW9ucycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdRdWlja3N0YXJ0JywgbGluazogJy9leHRlbnNpb25zL3F1aWNrLXN0YXJ0JyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0V4dGVuc2lvbiBTZXJ2aWNlJywgbGluazogJy9leHRlbnNpb25zL2V4dGVuc2lvbi1zZXJ2aWNlJyB9LFxuICAgICAgICBdXG4gICAgICB9XG4gICAgXSxcblxuICAgIHNvY2lhbExpbmtzOiBbXG4gICAgICB7IGljb246ICdnaXRodWInLCBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL09wZW5CdWJibGVzL29wZW5idWJibGVzLWFwcCcgfSxcbiAgICAgIHsgaWNvbjogJ2Rpc2NvcmQnLCBsaW5rOiAnaHR0cHM6Ly9kaXNjb3JkLmdnLzk4ZldTNEFRcU4nIH0sXG4gICAgXVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3UyxTQUFTLG9CQUFvQjtBQUdyVSxJQUFPLGlCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixhQUFhO0FBQUEsSUFDWCxNQUFNO0FBQUE7QUFBQSxJQUVOLEtBQUs7QUFBQSxNQUNILEVBQUUsTUFBTSxRQUFRLE1BQU0sSUFBSTtBQUFBLE1BQzFCLEVBQUUsTUFBTSxjQUFjLE1BQU0sY0FBYztBQUFBLE1BQzFDLEVBQUUsTUFBTSxRQUFRLE1BQU0sWUFBWTtBQUFBLElBQ3BDO0FBQUEsSUFFQSxRQUFRO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxXQUFXO0FBQUEsSUFDYjtBQUFBLElBRUEsU0FBUztBQUFBLE1BQ1A7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxVQUNMLEVBQUUsTUFBTSxjQUFjLE1BQU0sY0FBYztBQUFBLFVBQzFDLEVBQUUsTUFBTSw4QkFBOEIsTUFBTSxZQUFZO0FBQUEsVUFDeEQsRUFBRSxNQUFNLDZCQUE2QixNQUFNLFlBQVk7QUFBQSxVQUN2RCxFQUFFLE1BQU0sa0JBQWtCLE1BQU0sZ0JBQWdCO0FBQUEsVUFDaEQsRUFBRSxNQUFNLHNCQUFzQixNQUFNLHlCQUF5QjtBQUFBLFVBQzdELEVBQUUsTUFBTSxtQkFBbUIsTUFBTSx3QkFBd0I7QUFBQSxRQUMzRDtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsVUFDTCxFQUFFLE1BQU0seUJBQXlCLE1BQU0sa0NBQWtDO0FBQUEsVUFDekUsRUFBRSxNQUFNLGNBQWMsTUFBTSwwQkFBMEI7QUFBQSxVQUN0RCxFQUFFLE1BQU0scUJBQXFCLE1BQU0sZ0NBQWdDO0FBQUEsUUFDckU7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBRUEsYUFBYTtBQUFBLE1BQ1gsRUFBRSxNQUFNLFVBQVUsTUFBTSxpREFBaUQ7QUFBQSxNQUN6RSxFQUFFLE1BQU0sV0FBVyxNQUFNLGdDQUFnQztBQUFBLElBQzNEO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
