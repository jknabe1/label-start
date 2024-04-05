"use client"

import React from 'react';

const Page: React.FC = () => {
    return (
        <div>
            <header className="flex flex-col md:flex-row w-full pt-24 border-b-4 border-black">
                <div className="flex flex-1 items-center justify-center p-4">
                    <h1 className="text-4xl md:text-6xl font-bold">KONTAKTA OSS</h1>
                </div>
                <div className="w-full md:w-[4px] bg-black" />
                <div className="flex flex-1 items-center justify-center p-4">
                    <div className='p-24'>
                        <h2 className="text-xl md:text-3xl font-semibold mb-4">VI VÄNTAR PÅ DITT MEDDELANDE</h2>
                        <p className="text-xs md:text-sm">
                            Om du har några frågor om vår verksamhet eller vill skicka in en demo, tveka inte att kontakta oss. Detta formulär är det bästa sättet att nå oss och alla meddelande kommer att besvaras så snart som möjligt.
                            Detta formulär kan även användas för att rapportera problem med webbplatsen eller för att ge feedback. Vi är tacksamma för alla kommentarer och förslag.
                        </p>
                        <p className="text-xs md:text-sm mt-4">
                          Även band som vill medverka på våra konserter eller som vill skicka in en demo får även gärna använda detta formulär. Vi lyssnar på allt material som skickas in och alla band som skickar in material kommer att få svar. 
                        </p>
                    </div>
                </div>
            </header>
            <div>
                
            </div>
        </div>
    );
};

export default Page;