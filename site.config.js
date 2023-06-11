const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Sơn Tiêu",
    image: "/myface.jpeg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Software Engineer",
    bio: "This is where I share all my thoughts and useful topics",
    email: "me@sontieu.dev",
    linkedin: "sontieudev",
    github: "kevinb0ss",
    instagram: "",
  },
  projects: [
    {
      name: `sontieudev-blog`,
      href: "https://github.com/kevinb0ss/sontieudev-blog",
    },
  ],
  // blog setting (required)
  blog: {
    title: "sontieu.dev",
    description: "welcome to my space!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://sontieu.dev",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "kevinb0ss/sontieudev-blog",
      "issue-term": "og:title",
      label: "💬 Comments",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.PROD === "YES", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
