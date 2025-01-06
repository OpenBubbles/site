// .vitepress/config.mts
import { defineConfig } from "file:///home/tae/Documents/GitHub/docs/node_modules/vitepress/dist/node/index.js";
var config_default = defineConfig({
  title: "OpenBubbles",
  description: "iMessage on all your devices",
  rewrites: {
    "/macos": "/quick-start"
  },
  themeConfig: {
    logo: "/icon.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Quickstart", link: "/quickstart" },
      { text: "Docs", link: "/docs/faq" }
    ],
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvdGFlL0RvY3VtZW50cy9HaXRIdWIvZG9jcy8udml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS90YWUvRG9jdW1lbnRzL0dpdEh1Yi9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS90YWUvRG9jdW1lbnRzL0dpdEh1Yi9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcblxuLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9zaXRlLWNvbmZpZ1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgdGl0bGU6IFwiT3BlbkJ1YmJsZXNcIixcbiAgZGVzY3JpcHRpb246IFwiaU1lc3NhZ2Ugb24gYWxsIHlvdXIgZGV2aWNlc1wiLFxuICByZXdyaXRlczoge1xuICAgICcvbWFjb3MnOiAnL3F1aWNrLXN0YXJ0J1xuICB9LFxuICB0aGVtZUNvbmZpZzoge1xuICAgIGxvZ286ICcvaWNvbi5wbmcnLFxuICAgIC8vIGh0dHBzOi8vdml0ZXByZXNzLmRldi9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS1jb25maWdcbiAgICBuYXY6IFtcbiAgICAgIHsgdGV4dDogJ0hvbWUnLCBsaW5rOiAnLycgfSxcbiAgICAgIHsgdGV4dDogJ1F1aWNrc3RhcnQnLCBsaW5rOiAnL3F1aWNrc3RhcnQnIH0sXG4gICAgICB7IHRleHQ6ICdEb2NzJywgbGluazogJy9kb2NzL2ZhcScgfVxuICAgIF0sXG5cbiAgICBzaWRlYmFyOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdEb2N1bWVudGF0aW9uJyxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICdRdWlja3N0YXJ0JywgbGluazogJy9xdWlja3N0YXJ0JyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0ZyZXF1ZW50bHkgQXNrZWQgUXVlc3Rpb25zJywgbGluazogJy9kb2NzL2ZhcScgfSxcbiAgICAgICAgICB7IHRleHQ6ICdQaG9uZSBOdW1iZXIgUmVnaXN0cmF0aW9uJywgbGluazogJy9kb2NzL3BucicgfSxcbiAgICAgICAgICB7IHRleHQ6ICdSZW5ld2FsIFN5c3RlbScsIGxpbms6ICcvZG9jcy9yZW5ld2FsJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0JhY2t1cCBhbmQgUmVzdG9yZScsIGxpbms6ICcvZG9jcy9iYWNrdXBhbmRyZXN0b3JlJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1Ryb3VibGVzaG9vdGluZycsIGxpbms6ICcvZG9jcy90cm91Ymxlc2hvb3RpbmcnIH0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdFeHRlbnNpb24gQVBJIERvY3MnLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ1doYXJlIGFyZSBleHRlbnNpb25zPycsIGxpbms6ICcvZXh0ZW5zaW9ucy93aGF0LWFyZS1leHRlbnNpb25zJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1F1aWNrc3RhcnQnLCBsaW5rOiAnL2V4dGVuc2lvbnMvcXVpY2stc3RhcnQnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnRXh0ZW5zaW9uIFNlcnZpY2UnLCBsaW5rOiAnL2V4dGVuc2lvbnMvZXh0ZW5zaW9uLXNlcnZpY2UnIH0sXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdLFxuXG4gICAgc29jaWFsTGlua3M6IFtcbiAgICAgIHsgaWNvbjogJ2dpdGh1YicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vT3BlbkJ1YmJsZXMvb3BlbmJ1YmJsZXMtYXBwJyB9LFxuICAgICAgeyBpY29uOiAnZGlzY29yZCcsIGxpbms6ICdodHRwczovL2Rpc2NvcmQuZ2cvOThmV1M0QVFxTicgfSxcbiAgICBdXG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdTLFNBQVMsb0JBQW9CO0FBR3JVLElBQU8saUJBQVEsYUFBYTtBQUFBLEVBQzFCLE9BQU87QUFBQSxFQUNQLGFBQWE7QUFBQSxFQUNiLFVBQVU7QUFBQSxJQUNSLFVBQVU7QUFBQSxFQUNaO0FBQUEsRUFDQSxhQUFhO0FBQUEsSUFDWCxNQUFNO0FBQUE7QUFBQSxJQUVOLEtBQUs7QUFBQSxNQUNILEVBQUUsTUFBTSxRQUFRLE1BQU0sSUFBSTtBQUFBLE1BQzFCLEVBQUUsTUFBTSxjQUFjLE1BQU0sY0FBYztBQUFBLE1BQzFDLEVBQUUsTUFBTSxRQUFRLE1BQU0sWUFBWTtBQUFBLElBQ3BDO0FBQUEsSUFFQSxTQUFTO0FBQUEsTUFDUDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFVBQ0wsRUFBRSxNQUFNLGNBQWMsTUFBTSxjQUFjO0FBQUEsVUFDMUMsRUFBRSxNQUFNLDhCQUE4QixNQUFNLFlBQVk7QUFBQSxVQUN4RCxFQUFFLE1BQU0sNkJBQTZCLE1BQU0sWUFBWTtBQUFBLFVBQ3ZELEVBQUUsTUFBTSxrQkFBa0IsTUFBTSxnQkFBZ0I7QUFBQSxVQUNoRCxFQUFFLE1BQU0sc0JBQXNCLE1BQU0seUJBQXlCO0FBQUEsVUFDN0QsRUFBRSxNQUFNLG1CQUFtQixNQUFNLHdCQUF3QjtBQUFBLFFBQzNEO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxVQUNMLEVBQUUsTUFBTSx5QkFBeUIsTUFBTSxrQ0FBa0M7QUFBQSxVQUN6RSxFQUFFLE1BQU0sY0FBYyxNQUFNLDBCQUEwQjtBQUFBLFVBQ3RELEVBQUUsTUFBTSxxQkFBcUIsTUFBTSxnQ0FBZ0M7QUFBQSxRQUNyRTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFFQSxhQUFhO0FBQUEsTUFDWCxFQUFFLE1BQU0sVUFBVSxNQUFNLGlEQUFpRDtBQUFBLE1BQ3pFLEVBQUUsTUFBTSxXQUFXLE1BQU0sZ0NBQWdDO0FBQUEsSUFDM0Q7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
