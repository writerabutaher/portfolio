import React from 'react'
import hero from '../../assets/juicy-information-board-with-glasses-and-search.gif';

function Hero() {
    return (

        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl font-medium text-gray-900">Hello, I'm <span className='text-pink-600'>Abu Taher</span></h1>
                        <h3 className="sm:text-2xl text-xl mb-4 text-gray-700">Front-End Web Developer</h3>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">Resume</button>
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Contact</button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src={hero} />
                    </div>
                </div>
            </section>
        </>

    )
}

export default Hero