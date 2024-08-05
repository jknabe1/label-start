import React from 'react'
import Marquee from 'react-fast-marquee'

const About = () => {
  return (
    <div>
        <div className="">
        <div className="text-small border-y-2 border-black bg-orange dark:border-white">
          <div className="p-[10px] accordion-body gap-[10px] flex-col large ">
            <span></span> 
            <Marquee direction='right'>
            <h1 className="text-8xl dark:text-black">   /  OM OSS  / OM OSS /  OM OSS  / OM OSS /  OM OSS  / OM OSS  </h1>
            </Marquee>
          </div>
        </div>
      </div>
        <section className="relative w-full bg-black text-white bright-cursor">
            <div aria-hidden="true" className="invisible absolute top-[85vh] bottom-[12vh] dark-region bright-cursor w-px pointer-events-none"></div>
            <div className="relative w-full">
                <div className="grid grid-cols-12 bg-black text-white bright-cursor">
                    <div className="relative col-span-full row-start-1 row-end-1 min-h-[350px] md:min-h-0 md:col-start-1 md:col-end-7">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute inset-0 transition-transform duration-300 ease-bouncy">
                                <iframe src="https://player.vimeo.com/video/911366675?title=0&byline=0&portrait=0&color=000000&muted=1&autoplay=1&autopause=0&loop=1&background=1&app_id=122963" className="w-full h-full object-cover transition duration-500 opacity-100 bg-black"></iframe>
                            </div>
                        </div>
                    </div>
                <div className="relative py-8 md:p-12 lg:p-16 col-span-full md:col-start-7 md:col-end-13">
                <div className="max-w-full md:max-w-[520px]">
                    <p className="text-[14px] uppercase leading-snug font-medium 2xl:text-base transition duration-500">Om oss</p>
                    <h2 className="leading-[1.2] tracking-[-0.035em] text-[calc(1.875rem+(100vw-375px)/52)] 2xl:text-3xl transition duration-500 delay-100 pt-8">Vi stärker kulturlivet i Örebro län</h2>
                    <p className="text-[1rem] lg:text-[1.1875rem] tracking-[-0.02em] 2xl:text-lg transition duration-500 delay-200 pt-8">
                        Sedan 2019 har vi jobbat med samma syfte - stärka Örebro län som kulturregion. Vi har skapat en plattform för kulturutövare att synas och höras, och för kulturintresserade att upptäcka och uppleva.
                        Vi statsar och utvecklar kulturlivet i Örebro län genom att skapa mötesplatser, arrangera evenemang och stötta kulturutövare. 
                        </p>
                    <div className="flex gap-2 mt-7">
                        <a className="cursor-pointer inline-block transition duration-300 disabled:text-opacity-70 disabled:border-opacity-70 text-center bg-transparent text-white text-[0.9375rem] tracking-normal leading-[1.4] transition duration-500 delay-300" href="/om-oss">Läs mer -{'>'}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div aria-hidden="true" className="invisible absolute top-[85vh] bottom-[12vh] dark-region bright-cursor w-px pointer-events-none"></div>
</section>
    </div>
  )
}

export default About