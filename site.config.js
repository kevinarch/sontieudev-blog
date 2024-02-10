const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Son Tieu",
    // image: "/myface.jpeg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Software Engineer",
    bio: "Explore my software engineering journey through topics and insights. Join me as I navigate the world of coding, problem-solving, and innovation",
    email: "me@sontieu.dev",
    linkedin: "sontieudev",
    github: "kevinarch",
    instagram: "",
  },
  projects: [
    {
      name: `sontieudev-blog`,
      href: "https://github.com/kevinarch/sontieudev-blog",
    },
  ],
  // blog setting (required)
  blog: {
    title: "sontieu.dev | SE Journal",
    description: "This is where I share all my thoughts and useful topics.",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://sontieu.dev",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://dynamic-og-image-generator.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: [
      "Mobile Development",
      "Android Development",
      "iOS Development",
      "Flutter Development",
      "mobile dev blog",
      "flutter",
      "flutter dev",
      "android dev",
      "mobile dev",
      "ios dev",
    ],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
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
      repo: "kevinarch/sontieudev-blog",
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

module.exports = { CONFIG }
