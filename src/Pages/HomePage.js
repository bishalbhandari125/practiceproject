import React from 'react';
import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';

const HomePage = () => {
    return (
      
       
      <div className="h-auto w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 pt-10">
        <Navbar />
        <div className="px-4 py-36 mx-auto sm:max-w-xl md:pt-36 sm:pt-36 md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 max-w-xl sm:mx-auto ">
          <div className="flex flex-col mb-16 sm:mb-0">

            {/* //first container */}
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center text-center lg:max-w-2xl md:mb-12 p-4 lg:px-24 lg:py-5 bg-gray-800 bg-opacity-30 mx-3 rounded-lg">
              <h2 className="max-w-lg mb-3 pt-5 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">
               DAiTA STUDIO
              </h2>
              <p className="text-xl font-sans text-gray-200 md:text-lg">
                Making annotation process simple and smooth
              </p>
              <button className='px-6 py-2 border-2 rounded-2xl mt-5 font-sans font-bold text-lg text-semibold text-gray-200 hover:bg-gray-400 hover:bg-opacity-30'>
                Watch a demo
              </button>
            </div>
          {/* second container */}
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center text-center lg:max-w-2xl md:mb-12 p-4 lg:px-24 lg:py-5 bg-gray-800 bg-opacity-30 mx-3 rounded-lg">
              <h2 className="max-w-lg mb-3 pt-5 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">
               DAiTA STUDIO
              </h2>
              <p className="text-xl font-sans text-gray-200 md:text-lg">
                Making annotation process simple and smooth
              </p>
              <button className='px-6 py-2 border-2 rounded-2xl mt-5 font-sans font-bold text-lg text-semibold text-gray-200 hover:bg-gray-400 hover:bg-opacity-30'>
                Start a free trail
              </button>
            </div> 
            </div>
            {/* <Footer /> */}
          </div>
          
        </div>
      
    )
    }

export default HomePage