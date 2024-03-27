import algoliasearch from 'algoliasearch';
import sanityClient from '@sanity/client';
import indexer from 'sanity-algolia';

const algolia = algoliasearch("XB31FANH59", "db0c693ef44707e1b5e7b52feb5769e9");
const sanity = sanityClient({ projectId: "44gy0hz3", dataset: "production", useCdn: false });

export default function handler(req, res) {
  const sanityAlgolia = indexer(
    {
      post: {
        index: algolia.initIndex('posts'),
      },
      // Add other document types here
    },
    document => {
      switch (document._type) {
        case 'post':
          return {
            title: document.title,
            path: document.slug.current,
            publishedAt: document.publishedAt,
            excerpt: document.excerpt,
          };
        // Add other document types here
        default:
          throw new Error(`Unknown type: ${document._type}`);
      }
    }
  );

  return sanityAlgolia
    .webhookSync(sanity, req.body)
    .then(() => res.status(200).send('ok'))
    .catch(error => res.status(500).json({ error: `Sanity webhook failed: ${error.message}` }));
}