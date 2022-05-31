import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
const Homepage = () => {
  return (
    <div name='home' id='home' className='w-full h-screen bg-Sakura bg-cover bg-right-top'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full lg:bg-[#24242400] bg-[#24242456]'>
            <p className='text-teal-400 text-2xl font-mono md:drop-shadow-lg sm:drop-shadow-lg'>Hi, my name is...</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd8f6] md:drop-shadow-lg sm:drop-shadow-lg'>Babitdor Kayang Khonglah</h1>
            <p className='text-[#ccd8f6] py-4 max-w-[700px] font-mono md:drop-shadow-lg sm:drop-shadow-lg'> I'm a Software Developer/Data Scientist in the making,
                trying hard to improve my skills.
                Currently i'm focused on learning by working on projects
            </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center rounded-2xl hover:bg-teal-600 font-mono md:drop-shadow-lg duration-300 sm:drop-shadow-lg'>Works 
                <span className='group-hover:rotate-180 duration-300 '><HiArrowNarrowRight className='ml-2' size={20}/></span></button> 
            </div>
        </div>
    </div>
  )
}

export default Homepage