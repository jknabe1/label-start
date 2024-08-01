import Image from "next/image";
import Link from "next/link";
import IgCarousel from "./IgCarousel";

interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
  media_type: string;
  timestamp: string;
  permalink: string;
}
export default async function IgFeed() {
  let instagramFeed = null;
  let error = null;

  try {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp,permalink&access_token=${process.env.META_TOKEN}&limit=3`;
    const data = await fetch(url);
    console.log("data", data);
    if (!data.ok) {
      throw new Error("Pleace contant K&K Media Group - Failed to fetch Instagram feed");
    }
    instagramFeed = await data.json();
    console.log("Instagram feed:", instagramFeed);
  } catch (err: any) {
    console.error("Error fetching Instagram feed:", err.message);
    error = err.message;
  }
  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  };
  
  return (
    <>
  {error && <p className="text-red-500">{error}</p>}
  {instagramFeed && (
    <div className="grid md:grid-cols-3 divide-x divide-black dark:divide-white">
      {instagramFeed.data.map((post: InstagramPost) => (
        <div key={post.id} className="divide-y divide-black dark:divide-white flex flex-col">
          <img
            src={post.media_url}
            style={{ objectPosition: "center" }}
            alt="Instagram Post"
            className="duration-300 w-full object-cover h-full !shadow-none transition-opacity ease-in !h-[100vw] md:!h-[33vw] opacity-100"
          />
          <div className="divide-black dark:divide-white flex flex-col divide-y min-h-0">
            <div className="divide-black dark:divide-white divide-y">
              <div className="grid grid-cols-2 divide-x w-full divide-black dark:divide-white">
                <div className="child:uppercase">
                  <div className="text-small">
                    <div className="p-[10px] overflow-x-scroll accordion-body md:overflow-clip overflow-y-hidden gap-[10px] flex-col text-small">
                      <span></span>
                      <a
                        className="whitespace-nowrap flex w-full overflow-y-hidden hover:!text-[#f05136]"
                        href={post.permalink}
                      >
                        <p>{formatDate(post.timestamp)}</p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-small p-[10px]">
                  <span className="text-[#7f7f7f]">
                    <a href={post.permalink}>Se mer</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex min-h-0 flex-row divide-x divide-black dark:divide-white">
              <div className="text-small">
                <div className="p-[10px] overflow-x-scroll accordion-body md:overflow-clip overflow-y-hidden gap-[10px] flex-col text-small">
                  <span></span>
                  <p>{post.caption}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )}
</>
  );
}
