import React from 'react'

const Footer = () => {
  return (
    <div>

    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-4 border-black shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-black dark:border-white">
        <span className="text-sm text-black sm:text-center dark:text-white">© 2024 K&K RECORDS™ - En del av <a href='www.kf019.se'>Kulturföreningen-019</a>. </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 ">
            <li>
                <a href="#" className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
                <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
                <a href="#" className="hover:underline">Contact</a>
            </li>
        </ul>
    </footer>
    </div>
  )
}

export default Footer