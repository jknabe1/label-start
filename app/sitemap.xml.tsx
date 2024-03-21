// pages/sitemap.xml.tsx

import { GetServerSideProps } from 'next'
import { client } from '@/sanity/client'

const Sitemap: React.FC = () => {
    return null; // Replace null with your JSX element
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const data_QUERY = `*[_type == "data" && defined(slug.current)]{ "slug": slug.current }`
  const data = await client.fetch(data_QUERY)

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${data
            .map(({ slug }: { slug: string }) => { // Explicitly type 'slug' as string
                return `
                    <url>
                        <loc>${`http://localhost:3000/data/${slug}`}</loc>
                        <changefreq>daily</changefreq>
                        <priority>0.7</priority>
                    </url>
                `
            })
            .join('')}
    </urlset>
`

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default Sitemap