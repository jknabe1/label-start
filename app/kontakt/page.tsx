"use client"

import React, { useState } from 'react';

const Page: React.FC = () => {
    const [category, setCategory] = useState('');

    async function handleSubmit(e: { preventDefault: () => void; target: { name: { value: any; }; email: { value: any; }; message: { value: any; }; }; }) {
        e.preventDefault();
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "43735a4f-fd97-4c61-a7d1-08a9df63804e",
                name: e.target.name.value,
                email: e.target.email.value,
                message: e.target.message.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
        }
    }

    return (
        <div>
            <header className="lg:flex flex-col md:flex-row w-full pt-24 border-b-4 border-black sm:border-b-4 break-words">
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
            <form className="space-y-4 mx-auto w-full sm:w-3/4 md:w-1/2 lg:w-1/3 p-6 overflow-auto pb-24" onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e as unknown as { preventDefault: () => void; target: { name: { value: any; }; email: { value: any; }; message: { value: any; }; }; })}>          <div>
            <label className="block font-medium text-gray-700 text-3xl" htmlFor="category">Category</label>
            <select className="mt-1 block w-full py-2 px-3 border-2 border-black  shadow-sm focus:outline-none  sm:text-sm" name="category" required onChange={(e) => setCategory(e.target.value)}>
              <option className='text-gray-700' value="">Kategori</option>
              <option value="question">Generell fråga</option>
              <option value="demo">Demo/medverka på konsert</option>
              <option value="website">Rappotera fel eller feedback om hemsidan</option>
            </select>
          </div>
          
            {category === 'question' && (
            <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="question">Din fråga</label>
                <textarea className="mt-1 block w-full py-2 px-3 border-2 border-black  shadow-sm focus:outline-none  sm:text-sm" name="question" required rows={3} placeholder="Enter your question"></textarea>
                
                <label className="block text-sm font-medium text-gray-700" htmlFor="epost">E-post</label>
                <input className="mt-1 block w-full py-2 px-3 border-2 border-black  shadow-sm focus:outline-none  sm:text-sm" type="email" name="bandName" required placeholder="Din e-post" />

            
            </div>
            )}

            {category === 'demo' && (
            <div className=''>
                <label className="block text-sm font-medium text-gray-700" htmlFor="bandName">Namn på band/artist</label>
                <input className="mt-1 block w-full py-2 px-3 border-2 border-black  shadow-sm focus:outline-none  sm:text-sm" type="text" name="bandName" required placeholder="..." />
                
                <label className="block text-sm font-medium text-gray-700" htmlFor="bandName">Stad</label>
                <input className="mt-1 block w-full py-2 px-3 border-2 border-black  shadow-sm focus:outline-none  sm:text-sm" type="text" name="bandName" required placeholder="..." />

                <label className="block text-sm font-medium text-gray-700" htmlFor="bandName">Genre</label>
                <input className="mt-1 block w-full py-2 px-3 border-2 border-black  shadow-sm focus:outline-none  sm:text-sm" type="text" name="bandName" required placeholder="..." />
                
                <label className="block text-sm font-medium text-gray-700" htmlFor="bandName">E-post</label>
                <input className="mt-1 block w-full py-2 px-3 border-2 border-black  shadow-sm focus:outline-none  sm:text-sm" type="text" name="bandName" required placeholder="..." />

                <label className="block text-sm font-medium text-gray-700" htmlFor="demoLink">Lyssningslänk</label>
                <input className="mt-1 block w-full py-2 px-3 border-2 border-black  shadow-sm focus:outline-none  sm:text-sm" type="url" name="demoLink" required placeholder="http://example.com" />
            
                <label className="block text-sm font-medium text-gray-700" htmlFor="demoLink">EPK/Presskit</label>
                <input className="mt-1 block w-full py-2 px-3 border-2 border-black  shadow-sm focus:outline-none  sm:text-sm" type="url" name="demoLink" required placeholder="http://example.com" />
            
                <label className="block text-sm font-medium text-gray-700" htmlFor="demoLink">Mer info (t.ex text om bandet eller låten, etc)</label>
                <textarea className="mt-1 block w-full py-2 px-3 border-2 border-black  shadow-sm focus:outline-none  sm:text-sm" name="info" required placeholder="..." />
            

            </div>
            )}

            {category === 'website' && (
            <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="question">Question</label>
                <textarea className="mt-1 block w-full py-2 px-3 border-2 border-black  shadow-sm focus:outline-none  sm:text-sm" name="question" required rows={3} placeholder="Enter your question"></textarea>
            </div>
            )}
        </form>
      </div>
        </div>
    );
};

export default Page;