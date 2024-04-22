import React from 'react'

const page = () => {
  return (
    <div>
        <header className="lg:flex flex-col md:flex-row w-full border-b-4 border-black sm:border-b-4 dark:border-white">
                <div className="flex flex-1 items-center justify-center p-4">
                    <h1 className="text-4xl md:text-6xl font-bold">VAD HÄNDER HOS OSS?</h1>
                </div>
                <div className="border-l-4 border-black dark:border-white" />
                <div className="flex flex-1 items-center justify-center p-4">
                    <div className='lg:p-24'>
                    <h2 className="text-xl md:text-3xl font-semibold mb-4">For the record</h2>
                    <p>
                    Har du funderingar om vad som händer hos oss? Här kan du läsa om det senaste som händer hos oss. Vi uppdaterar regelbundet med nyheter om våra konserter och evenemang. Du kan även läsa om våra artister och band som spelar hos oss.
                    </p>
                    <br/>
                    <p>
                    Bortsett från mindre rolig formalia och nyheter så kommer vi även att använda denna sida som en liten journal/blogg för att dela med oss om vad som händer bakom kulisserna. Till exempel, vad händer på kontoret denna fredag - you name it.
                    </p>
                    </div>
                </div>
        </header>
    </div>
  )
}

export default page