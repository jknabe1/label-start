"use client"

import React, { useEffect, useState } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/client'
import Link from 'next/link'
import Image from 'next/image'


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
      <header className="lg:flex flex-col md:flex-row w-full pt-24 border-b-4 border-black sm:border-b-4 dark:border-white">
                <div className="flex flex-1 items-center justify-center p-4">
                    <h1 className="text-4xl md:text-6xl font-bold">OM K&K RECORDS</h1>
                </div>
                <div className="border-l-4 border-black dark:border-white" />
                <div className="flex flex-1 items-center justify-center p-4">
                    <div className='p-24'>
                    <h2 className="text-xl md:text-3xl font-semibold mb-4">LÄR DIG MER OM OSS OCH VILKA VI ÄR</h2>
                    <p className="text-xs md:text-sm">
                      <p> 
                        Vi är ett ideellt skivbolag som är en del av Kulturföreningen 019. Vi arbetar med att främja ungdomar, främst inom Örebro län. 
                        Vi arbetar inom kultursektorn och har en bred verksamhet som sträcker sig från musikproduktion till evenemang och utbildning. Läs mer nedan om varför- och hur vi arbetar med vårt syfte och ändamål.
                      </p>
                    <p className="text-xs md:text-sm mt-4">
                      Alla är välkomna att vara med och driva föreningen! Vänligen <Link href={"/kontakt"} className="underline">kontakta oss</Link> för mer information. Hos oss finns det något för alla, oavsett om du är intresserad av musik, kultur, evenemang eller vill engagera dig ideellt.
                    </p>
                    </p>
                    </div>
                </div>
            </header>
            <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-center lg:py-8 pt-4">Styrelsen</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-48">
                  {teams.map((team: { _id: string, name: string, image: any, Email: any[], Roll: any[] }, index: number) => (
                      <div key={team._id} className="border-4 border-black dark:border-white h-90 w-80 md:w-80 m-auto overflow-x-hidden">
                        <Image 
                          height={320}
                          alt={team.name}
                          width={1080}
                          src={team.image ? urlFor(team.image).url() : 'https://yt3.googleusercontent.com/_iy1wEEEoVUc1be5OCm2nCZFBWIJIh_NuCeVzEefoNcatrOqHKDKkSvBfDRpjWm1_wBvSuyBOw=s900-c-k-c0x00ffffff-no-rj'} 
                          style={{
                            width: '100%',
                          }}
                        />
                        <div className="bg-white dark:bg-black w-full p-4 border-t-4 border-black dark:border-white">
                          <p className="text-black dark:text-white text-md font-medium">
                            {team.name}
                          </p>
                          <p className="flex items-center space-x-2">
                          <span>{team.Email && team.Email.length > 0 ? team.Email[0].children[0].text : 'E-post: ¯\\_(ツ)_/¯'}</span>
                          </p>
                          <p>Roll: {team.Roll && team.Roll.length > 0 ? team.Roll[0].children[0].text : 'saknas'}</p>
                        </div>
                      </div>
                  ))}
                </div>
            </div>
    </div>
  )
}

export default Page