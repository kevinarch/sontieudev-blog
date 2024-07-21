import { GetServerSidePropsContext } from "next"
import { getPosts } from "../libs/apis"
import { TPosts } from "../types"

const URL = "https://sontieu.dev"

function generateSiteMap(posts: TPosts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
       ${posts
         .filter((item) => {
           return (
             !item.slug.startsWith("[skip]") && !item.status.includes("Private")
           )
         })
         .map(({ slug }) => {
           return `
             <url>
                 <loc>${`${URL}/${slug}`}</loc>
                 <lastmod>${new Date().toISOString()}</lastmod>
                 <changefreq>weekly</changefreq>
                 <priority>0.7</priority>
             </url>
           `
         })
         .join("")}
     </urlset>
   `
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const posts = await getPosts()

  // Generate the XML sitemap with the blog data
  const sitemap = generateSiteMap(posts)

  context.res.setHeader("Content-Type", "text/xml")
  // Send the XML to the browser
  context.res.write(sitemap)
  context.res.end()

  return {
    props: {},
  }
}

export default function SiteMap() {}
