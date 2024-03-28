import * as React from "react"
import { SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { Image } from "next-sanity/image";
import { client } from "@/sanity/client";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const news_QUERY = `*[_type == "news" && defined(slug.current)]{name, image, title, body, author, category, publishedAt, mainImage}`;


  const [news, setnews] = React.useState<SanityDocument[]>([]);

  React.useEffect(() => {
    const fetchnewss = async () => {
      const data = await client.fetch<SanityDocument[]>(news_QUERY);
      setnews(data);
    };

    fetchnewss();
  }, []);


  return (
    <div className="flex">
      <div className="fixed w-1/4">
        <section>
          <h2 className="font-bold text-lg">Author</h2>
          <p>{news.author}</p>
        </section>
        <section>
          <h2 className="font-bold text-lg">Category</h2>
          <p>{news.category}</p>
        </section>
        <section>
          <h2 className="font-bold text-lg">Published/Updated Date</h2>
          <p>{new Date(news.publishedAt).toLocaleDateString()}</p>
        </section>
      </div>
      <div className="w-3/4 ml-1/4">
        <img src={urlFor(news.mainImage).url()} alt="Featured" className="w-full" />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl">{news.title}</h1>
        <news className="mt-8">
          {news.body}
        </news>
      </div>
    </div>
  );
};

export default newsPage;