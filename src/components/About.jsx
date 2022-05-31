import React from 'react'
import {BsCalendar3} from 'react-icons/bs'
import {IoLocationOutline,IoMusicalNoteSharp} from 'react-icons/io5'
import {IoLogoGameControllerB} from 'react-icons/io'
import {BsFillPencilFill} from 'react-icons/bs'
import {AiFillCamera} from 'react-icons/ai'
import {MdOutlineAirplanemodeActive} from 'react-icons/md'
import {BsFillSuitHeartFill} from 'react-icons/bs'


const About = () => {
  return (
   <div name='about' className='w-full h-screen bg-gray-800 text-gray-300'>
       <div className='flex flex-col justify-center items-center w-full h-full'>
           <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
               <div className='sm:text-right pb-5 pl-4 pt-12'>
                   <p className='text-4xl font-bold inline border-b-2 border-white'>
                       Bio
                   </p>
               </div>
               <div></div>
            </div>

               <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-5 px-4'>
                {/* First Row */}
                <div className='sm:text-right md:text-3xl font-bold'>
                    <p>National Institute of Technology</p>
                    <p className='md:text-2xl font-extralight'>Bachelor's of Technology<br/>Computer Science & Engineering</p>
                </div>
                <div>
                    <p className='flex items-center md:text-[18px]'><BsCalendar3 className='m-2'/> 2018 - Present</p>
                    <p className='flex items-center md:text-[18px]'><IoLocationOutline  className='m-2'/> Meghalaya, Shillong</p>
                </div>
                {/* Second Row */}
                <div className='sm:text-right md:text-3xl font-bold'>
                    <p>St.Anthony`s Higher <br/>Secondary School</p>
                    <p className='md:text-2xl font-extralight'>Completed Higher Secondary School</p>
                </div>
                <div>
                    <p className='flex items-center md:text-[18px]'><BsCalendar3 className='m-2'/> 2016 - 2018</p>
                    <p className='flex items-center md:text-[18px]'><IoLocationOutline  className='m-2'/> Meghalaya, Shillong</p>
                </div>
                {/* Second Row */}
                <div className='sm:text-right md:text-3xl font-bold'>
                    <p>St.Edmund`s School</p>
                    <p className='md:text-2xl font-extralight'>Completed High School</p>
                </div>
                <div>
                    <p className='flex items-center md:text-[18px]'><BsCalendar3 className='m-2'/> 2006-2016</p>
                    <p className='flex items-center md:text-[18px]'><IoLocationOutline  className='m-2'/> Meghalaya, Shillong</p>
                </div>
               
               </div>
               <div className='max-w-[1000px] w-full grid grid-cols-2 gap-7'>
               <div className='sm:text-right md:pb-2 pl-4 md:py-6'>
                   <p className='text-4xl font-bold inline border-b-2 border-white'>
                       I <BsFillSuitHeartFill className='inline hover:scale-125 duration-300' size={40} color='red'/>
                   </p>
               </div>
               <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4 md:px-0'>
                <div className='sm:text-right md:text-3xl font-bold'>
                </div>
                <div className='sm:text-right md:text-3xl font-bold'>
                    <p className='md:text-2xl font-extralight md:text-center flex items-center'><IoMusicalNoteSharp className='m-2'/> Music <BsFillPencilFill className='m-2'/>Drawing</p>
                    <p className='md:text-2xl font-extralight md:text-center flex items-center'><IoLogoGameControllerB className='m-2'/>Gaming <MdOutlineAirplanemodeActive className='m-2'/>Travelling</p>
                    <p className='md:text-2xl font-extralight md:text-center flex items-center'><AiFillCamera className='m-2'/>Photography</p>
                </div>
                <div className='sm:text-right md:text-3xl font-bold'>
                </div>
                </div>

           </div>
       </div>
   
  )
}

export default About