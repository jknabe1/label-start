import React from 'react'

const Newsletter = () => {
  return (
    <div className="flex flex-col divide-y divide-black dark:divide-white dark:bg-black">
      <div className="grid grid-cols-2 divide-x text-[12px] divide-black dark:divide-white">
        <div>
          <input type="text" name="firstName" className="uppercase p-[10px] w-full dark:bg-black" placeholder="Namn"/></div>
        <div>
          <input type="text" name="lastName" className="uppercase p-[10px] w-full dark:bg-black" placeholder="Efternamn"/></div>
          </div>
          <div className="grid divide-y md:divide-y-0 grid-cols-1 md:grid-cols-2 md:divide-x divide-black dark:divide-white"><div>
            <input type="email" name="email" id="email" className="uppercase p-[10px] text-[12px] w-full dark:bg-black" placeholder="email"/></div>
          <div>
            <button role="button" className="uppercase text-center text-[12px] md:text-left p-[10px] w-full hover:bg-black hover:text-white bg-orange dark:text-black">
            <span>gå med</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter