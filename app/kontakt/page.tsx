"use client"

import Link from 'next/link';
import React, { useState } from 'react';

const Page: React.FC = () => {
    const [category, setCategory] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    return (
        <div>
            <header className="lg:flex flex-col md:flex-row w-full border-b-4 border-black sm:border-b-4 dark:border-white">
                <div className="flex flex-1 items-center justify-center p-4">
                    <h1 className="text-4xl md:text-6xl font-bold">KONTAKTA OSS</h1>
                </div>
                <div className="border-l-4 border-black dark:border-white" />
                <div className="flex flex-1 items-center justify-center p-4">
                    <div className='lg:p-24'>
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
            <div className='m-8 md:pb-24'>
            {isSubmitted ? (
                    <div className="flex justify-center items-center h-screen">
                    <h2>Message sent</h2>
                    </div>
                ) : (
            <form className="space-y-4 mx-auto w-full sm:w-3/4 md:w-1/2 lg:w-1/3 p-6" >          <div>
            <select className="mt-1 block w-full py-2 px-3 border-2 border-black dark:border-white  shadow-sm focus:outline-none  sm:text-sm" name="category" required onChange={(e) => setCategory(e.target.value)}>
              <option  value="">Kategori</option>
              <option value="question">Generell fråga</option>
              <option value="demo">Demo och- eller medverka på konsert</option>
              <option value="website">Rappotera fel eller feedback om hemsidan</option>
            </select>
          </div>
          
            {category === 'question' && (
            <div>
                <label className="block text-sm font-medium text-black dark:text-white" htmlFor="question">Din fråga</label>
                <textarea className="mt-1 block w-full py-2 px-3 border-2 border-black dark:border-white  shadow-sm focus:outline-none  sm:text-sm" name="question" required rows={3} placeholder="..."></textarea>
                
                <label className="block text-sm font-medium text-black dark:text-white" htmlFor="epost">E-post</label>
                <input className="mt-1 block w-full py-2 px-3 border-2 border-black dark:border-white shadow-sm focus:outline-none  sm:text-sm" type="email" name="bandName" required placeholder="Din e-post" />            
            </div>
            )}

            {category === 'demo' && (
            <div className=''>
                <label className="block text-sm font-medium text-black dark:text-white" htmlFor="bandName">Namn på band/artist</label>
                <input className="mt-1 block w-full py-2 px-3 border-2 border-black dark:border-white shadow-sm focus:outline-none  sm:text-sm" type="text" name="bandName" required placeholder="..." />
                
                <label className="block text-sm font-medium text-black dark:text-white" htmlFor="bandName">Stad</label>
                <input className="mt-1 block w-full py-2 px-3 border-2 border-black dark:border-white shadow-sm focus:outline-none  sm:text-sm" type="text" name="bandName" required placeholder="..." />

                <label className="block text-sm font-medium text-black dark:text-white" htmlFor="bandName">Genre</label>
                <input className="mt-1 block w-full py-2 px-3 border-2 border-black dark:border-white shadow-sm focus:outline-none  sm:text-sm" type="text" name="bandName" required placeholder="..." />
                
                <label className="block text-sm font-medium text-black dark:text-white" htmlFor="bandName">E-post</label>
                <input className="mt-1 block w-full py-2 px-3 border-2 border-black dark:border-white shadow-sm focus:outline-none  sm:text-sm" type="text" name="bandName" required placeholder="..." />

                <label className="block text-sm font-medium text-black dark:text-white" htmlFor="demoLink">Lyssningslänk</label>
                <input className="mt-1 block w-full py-2 px-3 border-2 border-black dark:border-white shadow-sm focus:outline-none  sm:text-sm" type="url" name="demoLink" required placeholder="http://example.com" />
            
                <label className="block text-sm font-medium text-black dark:text-white" htmlFor="demoLink">EPK/Presskit</label>
                <input className="mt-1 block w-full py-2 px-3 border-2 border-black dark:border-white shadow-sm focus:outline-none  sm:text-sm" type="url" name="demoLink" required placeholder="http://example.com" />
            
                <label className="block text-sm font-medium text-black dark:text-white" htmlFor="demoLink">Mer info (t.ex text om bandet eller låten, etc)</label>
                <textarea className="mt-1 block w-full py-2 px-3 border-2 border-black dark:border-white shadow-sm focus:outline-none  sm:text-sm" name="info" required placeholder="..." />
            

            </div>
            )}

            {category === 'website' && (
            <div>
                <label className="block text-sm font-medium text-black dark:text-white" htmlFor="question">Feedback</label>
                <textarea className="mt-1 block w-full py-2 px-3 border-2 border-black dark:border-white shadow-sm focus:outline-none  sm:text-sm" name="question" required rows={3} placeholder="T.ex: denna länk fungerar inte"></textarea>
                <label className="block text-sm font-medium text-black dark:text-white" htmlFor="epost">E-post - inte obligatoriskt men ifall vi behöver kontakta dig för mer info</label>
                <input className="mt-1 block w-full py-2 px-3 border-2 border-black dark:border-white shadow-sm focus:outline-none  sm:text-sm" type="email" name="email" placeholder="Din e-post" />
            </div>
            )}
            <div>
                <label className="block text-sm font-medium text-black dark:text-white" htmlFor="terms">
                    <input className="mr-2" type="checkbox" id="terms" name="terms" required />
                    Jag har läst och godkänner <Link href="/data" className="underline">villkoren</Link> om hur vi hanterar och lagrar din data.
                </label>
            </div>
            <div className="flex justify-center">
            <button type='submit' className="mr-2 px-4 py-2 bg-white border-4 border-black text-black hover:bg-black hover:text-white">
                    Skicka
                </button>
            </div>
        </form>
                )}
      </div>
        </div>
    );
};

export default Page;