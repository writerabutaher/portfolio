import React from 'react'

function Navbar() {
    return (
        <header>
            <nav>
                <div className="container m-auto px-2 md:px-12 lg:px-7">
                    <div className="flex flex-wrap items-center justify-between py-4 gap-6 md:py-4 md:gap-0 relative">
                        <input type="checkbox" name="toggle_nav" id="toggle_nav" className="hidden peer" />
                        <div className="w-full px-6 flex justify-between lg:w-max md:px-0">
                            <a href="#" aria-label="logo" className="flex space-x-2 items-center">
                                <div aria-hidden="true" className="flex space-x-1">
                                    <div className="h-4 w-4 rounded-full bg-gray-900 dark:bg-white"></div>
                                    <div className="h-6 w-2 bg-pink-500"></div>
                                </div>
                                <span className="text-2xl font-bold text-gray-900 dark:text-white">Abu Taher</span>
                            </a>

                            <div className="flex items-center lg:hidden max-h-10">
                                <label role="button" htmlFor="toggle_nav" aria-label="humburger" id="hamburger" className="relative  p-6 -mr-6">
                                    <div aria-hidden="true" id="line" className="m-auto h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"></div>
                                    <div aria-hidden="true" id="line2" className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"></div>
                                </label>
                            </div>
                        </div>

                        <div className="hidden absolute top-full transition translate-y-1 lg:peer-checked:translate-y-0 lg:translate-y-0 left-0 
                    lg:top-0 lg:relative peer-checked:flex w-full 
                    lg:flex lg:flex-row flex-col 
                    flex-wrap justify-end items-center 
                    gap-6 p-6 rounded-xl 
                    bg-white dark:bg-gray-900 lg:gap-0 
                    lg:p-0  
                    lg:bg-transparent lg:w-7/12">
                            <div className="text-gray-600 dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0">
                                <ul className=" 
                            tracking-wide 
                            font-medium 
                            text-sm flex-col flex 
                            lg:flex-row
                            gap-6 lg:gap-0">
                                    <li>
                                        <a href="#" className="block md:px-4 transition hover:text-pink-700">
                                            <span>Home</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block md:px-4 transition hover:text-pink-700">
                                            <span>Portfolio</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block md:px-4 transition hover:text-pink-700">
                                            <span>Services</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="w-full lg:pl-2 space-y-2 border-pink-200 lg:w-auto lg:space-y-0 sm:w-max lg:border-l">
                                <button type="button" className="w-full py-3 px-6 text-center rounded-full transition bg-pink-300 hover:bg-pink-100 active:bg-pink-400 focus:bg-pink-300 sm:w-max">
                                    <span className="block text-pink-900 font-semibold text-sm">
                                        Resume
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar