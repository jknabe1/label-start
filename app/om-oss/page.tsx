"use client"

import React, { useEffect, useState } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/sanity/client'
import Link from 'next/link'
import Image from 'next/image'
import App from '@/components/about/card/app'
import '@/components/styles/about.css'



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
        <main className='mx-8 grid'>
        <div className='lg:pb-48 sm:py-12'>
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-center lg:py-8 pt-4 pb-24">Vad är K&K Records</h1>
            <div className="offering module parallax-anchor">
              <div className="container">
                  <div className="offering-container">
                  <div className="img-container border-4 border-black dark:border-white">
                      <img decoding="async" src="https://cdn-p.smehost.net/sites/239008154bb641859bcbbc74541773c3/wp-content/uploads/2024/03/Screenshot-2024-03-06-at-12.24.43-PM.png" alt="bg-offering"/>
                    </div>
                    <div className="text-container bg-white text-black dark:bg-black dark:text-white border-4 sm:border-y-4 sm:border-b-4 border-black dark:border-white">
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
                <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div className="flex">
        <div className="flex-shrink-0 w-full">
          <img
            src="/placeholder.svg"
            alt="Product Image 1"
            width={600}
            height={600}
            className="aspect-square object-cover border border-gray-200 w-full overflow-hidden dark:border-gray-800"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <h1 className="font-bold text-3xl">Product Name</h1>
        <p className="text-gray-500 dark:text-gray-400">
          This is a detailed description of the product. It highlights its features, benefits, and any other relevant
          information that a potential customer might find useful.
        </p>
        <h2 className="font-bold text-2xl">$99.99</h2>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
   
        </div>
      </div>
    </div>
                <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl text-center lg:pb-8">Styrelsen</h1>
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
                            Skivbolag
                          </p>
                          <p>
                            
                          </p>
                        </div>
              </div>
              <div className="border-4 border-black dark:border-white h-90 w-80 md:w-80 m-auto overflow-x-hidden">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-48">
                  {teams && teams.map((team: { _id: string, name: string, image: any, email: string, roll: string }) => (
                      <div key={team._id} className="border-4 border-black dark:border-white h-90 w-80 md:w-80 m-auto overflow-x-hidden mb-8">
                        <Image 
                          height={320}
                          alt={team.name}
                          width={1080}
                          src={team.image ? urlFor(team.image).url() : '/assets/missing.png'} 
                          className="hover:filter-none"
                          style={{
                            width: '100%',
                            filter: 'grayscale(100%) contrast(1.2)',
                            transition: 'filter 0.3s ease',
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
            <p className='text-center'>...dessa organisationer och personer som stöttar vårt arbete. Vill ni också stötta oss? Sjävklart vill ni det - vänligen <Link className='underline' href={`/kontakt`}>kontakta</Link> oss för mer info.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-16"> 
            {sponsor && sponsor.map((sponsor: { _id: string, name: string, }) => ( 
            <div key={sponsor._id} className="border-4 border-black dark:border-white h-90 w-80 md:w-80 m-auto overflow-x-hidden"> 
            <div className="bg-white dark:bg-black w-full p-4"> 
            <p className="text-black dark:text-white text-md font-medium"> {sponsor.name} </p> 
            </div> 
            </div> 
          ))} 
            </div>
            <p className='text-center'>...och till alla ni som kommer till våra konserter, lyssnar på musiken vi släpper,  köper vår merch. Stort tack till er också.</p> 
            </div>
            <div className='flex flex-col items-center justify-center min-h-screen py-48'>
              <h1 className="text-2xl sm:text-3xl md:text-4xl text-center lg:py-8 pt-4">Bli medlem och få AAA-brickan</h1>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-48'>
              <div className='w-full h-[500px]'>
                <App/>
              </div>        
              </div>
            </div>
            <div className='lg:pb-24 sm:py-12'>
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-center lg:py-8 pt-4">Djupgående och mer specifik information</h1>
            <p className='text-center'>Nedan finns länkar om mer djupgående- och specifik information. Till exempel, hur vi hanterar data, osv.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-48 pb-6">
                      <div className="border-4 border-black dark:border-white h-90 w-80 md:w-80 m-auto overflow-x-hidden">
                        <Image 
                          height={320}
                          alt=""
                          width={1080}
                          src='/assets/B05I6324.png'
                          quality={100}
                          loading='lazy'
                          style={{
                            width: '100%',
                          }}
                        />
                        <div className="bg-white dark:bg-black w-full p-4 border-t-4 border-black dark:border-white">
                          <p className="text-black dark:text-white text-md font-medium divider border-b-2 border-black dark:border-white">
                            <b>Faktura</b>
                          </p>
                          <p>
                            Fakturor skickas till <Link href="mailto:elliot.bergdahl@kf019.se">Elliot Bergdahl</Link>, alternativ till vårt kontor. Ange alltid referens.
                          </p>
                        </div>
                      </div>
                      <div className="border-4 border-black dark:border-white h-90 w-80 md:w-80 m-auto overflow-x-hidden">
                        <Image 
                          height={320}
                          alt=""
                          width={1080}
                          src='/assets/B05I6324.png'
                          quality={100}
                          loading='lazy'
                          style={{
                            width: '100%',
                          }}
                        />
                        <div className="bg-white dark:bg-black w-full p-4 border-t-4 border-black dark:border-white">
                          <p className="text-black dark:text-white text-md font-medium divider border-b-2 border-black dark:border-white">
                            <b>Besök oss</b>
                          </p>
                          <p>
                            Du är varmt välkommen att besöka oss på vårt kontor. Vi finns på Järnvägsgatan 8, 703 62 Örebro.
                          </p>
                        </div>
                      </div>
                      <div className="border-4 border-black dark:border-white h-90 w-80 md:w-80 m-auto overflow-x-hidden">
                        <Image 
                          height={320}
                          alt=""
                          width={1080}
                          src='/assets/B05I6324.png'
                          quality={100}
                          loading='lazy'
                          style={{
                            width: '100%',
                          }}
                        />
                        <div className="bg-white dark:bg-black w-full p-4 border-t-4 border-black dark:border-white">
                          <p className="text-black dark:text-white text-md font-medium divider border-b-2 border-black dark:border-white">
                            <b>Rättslig information</b>
                          </p>
                          <p>
                            Organisationsnummer: <br/> 802541-7935
                            <br/>
                            Bankgiro: 137-0857
                            <br/>
                            Ordförande: Timothy Steckl
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