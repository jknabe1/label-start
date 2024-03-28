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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {teams.map((team: { _id: string, name: string, image: any }, index: number) => (
        <div key={team._id} className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
            <img alt={team.name} src={urlFor(team.image).url()} className="max-h-40 w-full object-cover"/>
            <div className="bg-white dark:bg-gray-800 w-full p-4">
              <p className="text-indigo-500 text-md font-medium">
                {team.name}
              </p>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Page