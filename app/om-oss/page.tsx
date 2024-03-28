"use client"

import React, { useEffect, useState } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/client'
const builder = imageUrlBuilder(client)

function urlFor(source: any) {
  return builder.image(source)
}

const Page = () => {
  const [teams, setteams] = useState([])

  useEffect(() => {
    const fetchteams = async () => {
      try {
        const data = await client.fetch('*[_type == "team"]');
        setteams(data);
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    };
  
    fetchteams();
  }, []);

  return (
    <div>
    <div className="relative h-64 md:h-80 bg-cover bg-center border-y-4 border-black" style={{ backgroundImage: 'https://kulturradet.imagevault.app/publishedmedia/gfjmvref58gxsa4oei2t/webb_2362x1016_1.jpg' }}>
  <div className="absolute bottom-0 py-12 pl-4 pr-24 text-black bg-white border-r-4 border-t-4 border-black">
    <h1 className="text-4xl">Om oss</h1>
    <p> 
      Vi är ett ideellt skivbolag som är en del av Kulturföreningen 019. Vi arbetar med att främja ungdomar, främst inom Örebro län. 
      <br/>
      Vi arbetar inom kultursektorn och har en bred verksamhet som sträcker sig från musikproduktion till evenemang och utbildning.</p>
  </div>
</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-48">
      {teams.map((team: { _id: string, name: string, image: any, Email: any[], Roll: any[] }, index: number) => (
          <div key={team._id} className="border-4 border-black dark:border-white h-90 w-80 md:w-80 m-auto overflow-x-hidden">
            <img 
              alt={team.name} 
              src={team.image ? urlFor(team.image).url() : 'https://yt3.googleusercontent.com/_iy1wEEEoVUc1be5OCm2nCZFBWIJIh_NuCeVzEefoNcatrOqHKDKkSvBfDRpjWm1_wBvSuyBOw=s900-c-k-c0x00ffffff-no-rj'} 
              className=" h-80 w-full object-cover"
            />
            <div className="bg-white dark:bg-black w-full p-4 border-t-4 border-black dark:border-white">
              <p className="text-black dark:text-white text-md font-medium">
                {team.name}
              </p>
              <p className="flex items-center space-x-2">
                <span>{team.Email && team.Email.length > 0 ? team.Email[0].children[0].text : 'E-post saknas, vänligen kontaka oss.'}</span>
              </p>
              <p>Roll: {team.Roll && team.Roll.length > 0 ? team.Roll[0].children[0].text : 'Roll saknas'}</p>
            </div>
          </div>
      ))}
    </div>
    </div>
  )
}

export default Page