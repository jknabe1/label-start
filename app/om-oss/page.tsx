"use client"

import React, { useEffect, useState } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/client'
import Link from 'next/link'
import Image from 'next/image'
import '@/components/styles/about.css'
import CarouselPlugin from '@/components/about/aboutCarousel'


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
        <main className='mx-8 grid flex flex-col items-center'>
        <div className='lg:pb-48 sm:py-12'>
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-center lg:py-8 pt-4 pb-24">Vad är K&K Records</h1>

            <div className="offering module parallax-anchor">
              <div className="container">
                  <div className="offering-container">
                  <div className="img-container border-2 border-black dark:border-white">
                      <img decoding="async" src="/assets/vinyl-1.png" alt="bg-offering"/>
                    </div>
                    <div className="text-container bg-white text-black dark:bg-black dark:text-white border-2 sm:border-y-4 sm:border-b-4 border-black dark:border-white">
                        <div className="text-container-alt">
                            <h1 className='text-3xl mb-4'>Vi är inte ett vanligt skivbolag - inte ens ett bolag.</h1>
                            <p className='text-ms'>K&K Records är Kulturföreningen 019s skivbolag. Vi har varit aktiva sedan 2019, och enda sedan dess har vi jobbat med ett och samma syfte - att främja ungdomar med deras kulturutveckling och samtidigt erbjuda barn och unga en meningfull fritid. </p>
                            <br/>
                            <p>
                            
                            </p>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>

    <div className="grid md:grid-cols-1 divide-y divide-x divide-black dark:divide-white">
          <CarouselPlugin/>
    </div>

              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl text-center">Kulturförening 019</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-24">
            <div className="border-2 border-black dark:border-white h-90 w-80 md:w-80 m-auto overflow-x-hidden ">
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
                            Skivbolag
                          </p>
                          <p>
                            
                          </p>
                        </div>
              </div>
              <div className="border-2 border-black dark:border-white h-90 w-80 md:w-80 m-auto overflow-x-hidden">
                        <Image 
                          height={320}
                          alt=""
                          width={1080}
                          src='/assets/019.png'
                          style={{
                            width: '100%',
                          }}
                        />
                        <div className="bg-white dark:bg-black w-full p-4 border-t-4 border-black dark:border-white">
                          <p className="text-black dark:text-white text-md font-medium divider border-b-2 border-black dark:border-white">
                            Arrangörsgruppen
                          </p>
                          <p>
                          </p>
                        </div>
              </div>
              <div className="border-2 border-black dark:border-white h-90 w-80 md:w-80 m-auto overflow-x-hidden">
                        <Image 
                          height={120}
                          alt=""
                          width={1080}
                          src='/assets/kkrec-back.png'
                          style={{
                            width: '100%',
                            height: '100%',
                          }}
                        />
                        <div className="bg-white dark:bg-black w-full p-4 border-t-4 border-black dark:border-white">
                          <p className="text-black dark:text-white text-md font-medium divider border-b-2 border-black dark:border-white">
                            Tidskriften
                          </p>
                          <p>
                            
                          </p>
                        </div>
                </div>
                </div>
              </div>
        </div>
        <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-center lg:pb-8">Styrelsen för KF-019</h1>
            <p className='text-center'>Det är vi som står bakom arbetet och vi som ansvarar för att vårt syfte ska följas.</p>
            <div className="grid md:grid-cols-3 md:divide-x divide-black divide-y md:divide-y-0 dark:divide-white border-x-2 border-b-2 border-t-2 border-black dark:border-white ">
            {teams && teams.map((team: { _id: string, name: string, image: any, email: string, roll: string }) => (        
              <div key={team._id} className="divide-y divide-black flex  flex-col undefined dark:divide-white">
          <img
            src={team.image ? urlFor(team.image).url() : '/assets/missing.png'}            
            style={{ objectPosition: "center" }}
            alt="Instagram Post"
            className="divide-black dark:divide-white duration-300 w-full opacity-0 object-cover h-full !shadow-none transition-opacity ease-in !h-[100vw] md:!h-[33vw] opacity-100"
          />
          <div className="divide-black dark:divide-white flex flex-col divide-y min-h-0">
            <div className="divide-black dark:divide-white divide-y">
              <div className="grid grid-cols-2 divide-x w-full divide-black dark:divide-white">
                <div className="child:uppercase">
                  <div className="text-small">
                    <div className="p-[10px] overflow-x-scroll accordion-body md:overflow-clip overflow-y-hidden gap-[10px] flex-col text-small">
                      <span></span>
                      <p
                        className="whitespace-nowrap flex w-full overflow-y-hidden hover:!text-[#f05136]"
                      >
                        {team.name}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-small p-[10px]">
                  <span className="text-[#7f7f7f]">
                    <a className='hover:!text-[#f05136]' href={`mailto:${team.email}`}>{team.email}</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex min-h-0 flex-row divide-x divide-black dark:divide-white">
              <div className="text-small">
                <div className="p-[10px] overflow-x-scroll accordion-body md:overflow-clip overflow-y-hidden gap-[10px] flex-col text-small">
                  <span></span>
                  <p>{team.roll}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
        </div>
        <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-center lg:py-8 pt-4">Tack till</h1> 
            <p className='text-center'>...dessa organisationer och personer som stöttar vårt arbete. Vill ni också stötta oss? Sjävklart vill ni det - vänligen <Link className='underline' href={`/kontakt`}>kontakta</Link> oss för mer info.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-16"> 
            {sponsor && sponsor.map((sponsor: { _id: string, name: string, }) => ( 
            <div key={sponsor._id} className="border-2 border-black dark:border-white h-90 w-80 md:w-80 m-auto overflow-x-hidden"> 
            <div className="bg-white dark:bg-black w-full p-4"> 
            <p className="text-black dark:text-white text-md font-medium"> {sponsor.name} </p> 
            </div> 
            </div> 
          ))} 
            </div>
            <p className='text-center mb-12'>...och till alla ni som kommer till våra konserter, lyssnar på musiken vi släpper,  köper vår merch. Stort tack till er också.</p> 
        </div>

        </main>
    </div>
  )
}

export default Page