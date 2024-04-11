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
  const [sponsor, setsponsor] = useState([])

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

  useEffect(() => {
    const fetchsponsors = async () => {
      try {
        const data = await client.fetch('*[_type == "sponsor"]');
        setsponsor(data);
      } catch (error) {
        console.error('Error fetching sponsor:', error);
      }
    };
  
    fetchsponsors();
  }, []);


  return (
    <div>
      <header className="lg:flex flex-col md:flex-row w-full border-b-4 border-black sm:border-b-4 dark:border-white">
                <div className="flex flex-1 items-center justify-center p-4">
                    <h1 className="text-4xl md:text-6xl font-bold">OM K&K RECORDS</h1>
                </div>
                <div className="border-l-4 border-black dark:border-white" />
                <div className="flex flex-1 items-center justify-center p-4">
                    <div className='lg:p-24'>
                    <h2 className="text-xl md:text-3xl font-semibold mb-4">LÄR DIG MER OM OSS OCH VILKA VI ÄR</h2>
                    <p>
                    Vi är ett ideellt skivbolag som är en del av Kulturföreningen 019. Vi arbetar med att främja ungdomar, främst inom Örebro län med deras kulturutveckling. 
                    </p>
                    <br/>
                    <p>
                    Alla är välkomna att vara med och driva föreningen! Vänligen <Link href={"/kontakt"} className="underline">kontakta oss</Link> för mer information. Hos oss finns det något för alla, 
                    oavsett om du är intresserad av musik, kultur, arrangemang eller vill engagera dig ideellt. I vissa fall kan vi även ta emot praktikanter från KAA.
                    </p>
                    </div>
                </div>
        </header>
        <main className='mx-8'>
        <div className='lg:py-48 sm:py-12 '>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-48">
    <div className="border-4 border-black dark:border-white m-auto overflow-x-hidden col-span-full sm:col-span-2 md:col-span-3"> {/* Here's the change */}
        <Image
            className='w-full h-full object-cover'
            height={1920}
            alt="{team.name}"
            width={1080}
            src="/assets/B05I6324.png"
            style={{
                width: '100%',
                height: "full",
            }}
            loading='lazy'
        />
    </div>
</div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-center lg:py-8 pt-4">Vad är K&K Records</h1>
            <p className='text-center'>Det är vi som står bakom arbetet och vi som ansvarar för att vårt syfte ska följas.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-48">
                      <div className="border-4 border-black dark:border-white h-90 w-80 md:w-80 m-auto overflow-x-hidden">
                        <Image 
                          height={320}
                          alt=""
                          width={1080}
                          src='https://yt3.googleusercontent.com/_iy1wEEEoVUc1be5OCm2nCZFBWIJIh_NuCeVzEefoNcatrOqHKDKkSvBfDRpjWm1_wBvSuyBOw=s900-c-k-c0x00ffffff-no-rj'
                          style={{
                            width: '100%',
                          }}
                        />
                        <div className="bg-white dark:bg-black w-full p-4 border-t-4 border-black dark:border-white">
                          <p className="text-black dark:text-white text-md font-medium divider border-b-2 border-black dark:border-white">
                            Det ska vara lätt
                          </p>
                          <p>
                            Vi lättar på byråkratin och ser till att det är enkelt att vara medlem och att engagera sig.
                          </p>
                        </div>
                      </div>
                      <div className="border-4 border-black dark:border-white h-90 w-80 md:w-80 m-auto overflow-x-hidden">
                        <Image 
                          height={320}
                          alt=""
                          width={1080}
                          src='https://yt3.googleusercontent.com/_iy1wEEEoVUc1be5OCm2nCZFBWIJIh_NuCeVzEefoNcatrOqHKDKkSvBfDRpjWm1_wBvSuyBOw=s900-c-k-c0x00ffffff-no-rj'
                          style={{
                            width: '100%',
                          }}
                        />
                        <div className="bg-white dark:bg-black w-full p-4 border-t-4 border-black dark:border-white">
                          <p className="text-black dark:text-white text-md font-medium divider border-b-2 border-black dark:border-white">
                            Det ska vara lätt
                          </p>
                          <p>
                            Vi lättar på byråkratin och ser till att det är enkelt att vara medlem och att engagera sig.
                          </p>
                        </div>
                      </div>
                      <div className="border-4 border-black dark:border-white h-90 w-80 md:w-80 m-auto overflow-x-hidden">
                        <Image 
                          height={320}
                          alt=""
                          width={1080}
                          src='https://yt3.googleusercontent.com/_iy1wEEEoVUc1be5OCm2nCZFBWIJIh_NuCeVzEefoNcatrOqHKDKkSvBfDRpjWm1_wBvSuyBOw=s900-c-k-c0x00ffffff-no-rj'
                          style={{
                            width: '100%',
                          }}
                        />
                        <div className="bg-white dark:bg-black w-full p-4 border-t-4 border-black dark:border-white">
                          <p className="text-black dark:text-white text-md font-medium divider border-b-2 border-black dark:border-white">
                            Det ska vara lätt
                          </p>
                          <p>
                            Vi lättar på byråkratin och ser till att det är enkelt att vara medlem och att engagera sig.
                          </p>
                        </div>
                      </div>
                </div>
            </div>
            <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-center lg:py-8 pt-4">Styrelsen</h1>
            <p className='text-center'>Det är vi som står bakom arbetet och vi som ansvarar för att vårt syfte ska följas.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-48">
                  {teams && teams.map((team: { _id: string, name: string, image: any, email: string, roll: string }) => (
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
                            <span>{typeof team.email === 'string' && team.email.length > 0 ? team.email : 'E-post: ¯\\_(ツ)_/¯'}</span>
                          </p>
                          <p>Roll: {team.roll}</p>
                        </div>
                      </div>
                  ))}
                </div>
            </div>
            <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-center lg:py-8 pt-4">Tack till</h1> 
            <p className='text-center'>...dessa organisationer och personer som stöttar vårt arbete. Vill ni också synas här? Vänligen <Link className='underline' href={`/news/}`}>kontakta</Link> oss för mer info.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-48"> 
            {sponsor && sponsor.map((sponsor: { _id: string, name: string, image: any, }) => ( 
            <div key={sponsor._id} className="border-4 border-black dark:border-white h-90 w-80 md:w-80 m-auto overflow-x-hidden"> 
            <Image 
            height={320} 
            alt={sponsor.name} 
            width={1080} 
            src={sponsor.image ? urlFor(sponsor.image).url() : 'https://yt3.googleusercontent.com/_iy1wEEEoVUc1be5OCm2nCZFBWIJIh_NuCeVzEefoNcatrOqHKDKkSvBfDRpjWm1_wBvSuyBOw=s900-c-k-c0x00ffffff-no-rj'} 
            style={{ width: '100%', }} 
            /> 
            <div className="bg-white dark:bg-black w-full p-4 border-t-4 border-black dark:border-white"> 
            <p className="text-black dark:text-white text-md font-medium"> {sponsor.name} </p> 
            </div> 
            </div> 
          ))} 
            </div>
            <p className='text-center'>...och alla ni som kommer till våra konserter, lyssnar på musiken vi släpper,  köper vår merch! Stort tack till er också.</p> 
            </div>
            <div className='flex flex-col items-center justify-center min-h-screen'>
              <h1 className="text-2xl sm:text-3xl md:text-4xl text-center lg:py-8 pt-4">Bli medlem och få AAA-brickan</h1>
            </div>
            <div className='lg:py-48 sm:py-12 '>
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-center lg:py-8 pt-4">Djupgående och mer specifik information</h1>
            <p className='text-center'>Nedan finns länkar om mer djupgående- och specifik information. Till exempel, hur vi hanterar data, osv.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-48">
                      <div className="border-4 border-black dark:border-white h-90 w-80 md:w-80 m-auto overflow-x-hidden">
                        <Image 
                          height={320}
                          alt=""
                          width={1080}
                          src='/assets/B05I6324.png'
                          style={{
                            width: '100%',
                          }}
                        />
                        <div className="bg-white dark:bg-black w-full p-4 border-t-4 border-black dark:border-white">
                          <p className="text-black dark:text-white text-md font-medium divider border-b-2 border-black dark:border-white">
                            Det ska vara lätt.
                          </p>
                          <p>
                            Vi 
                          </p>
                        </div>
                      </div>
                </div>
            </div>
            </main>
    </div>
  )
}

export default Page