import React , {useState} from 'react'
import logo from '../assets/BKK-logo.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram, FaTwitter} from 'react-icons/fa'
import {AiOutlineHome} from 'react-icons/ai'
import {BsFillPersonFill, BsTelephone} from 'react-icons/bs'
import {GiSkills} from 'react-icons/gi'
import {MdWorkOutline} from 'react-icons/md'

function Navbar() {
    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[70px] flex justify-between items-center text-gray-300 z-10'>

        {/* ListBar */}
        <div onClick={handleClick} className='md:hidden z-20 px-5 justify-center'>
            {!nav ? <FaBars size={25}/> : <FaTimes size={25}/>}
        </div>

        {/* Mobile Device Menu */}
        <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#070707] flex flex-col justify-center items-center z-10'}>
            <li className='py-6 text-3xl flex items-center hover:text-teal-600'><AiOutlineHome size={30} className='m-2'/> Home </li>
            <li className='py-6 text-3xl flex items-center hover:text-teal-600'><BsFillPersonFill size={30} className='m-2'/> Bio</li>
            <li className='py-6 text-3xl flex items-center hover:text-teal-600'><GiSkills size={30} className='m-2'/>Skills</li>
            <li className='py-6 text-3xl flex items-center hover:text-teal-600'><BsTelephone size={30} className='m-2'/>Contact</li>
        </ul>

        {/* Contact icons */}
        <div className='hidden lg:flex fixed flex-col top-[0%] left-0 h-full bg-black w-[100px] opacity-80 hover:opacity-90 duration-300 z-10'>
        <ul>
            <li>
            <div><img src={logo} alt="Logo_Image" style={{width: '80px' ,height:'80px'}}/></div>
            </li>

            <li className='h-[100px]'></li>
            <li className='h-[100px]'></li>

            <li className='w-[60px] h-[60px] flex justify-between items-center ml-[20px] duration-300 hover:text-teal-400 hover:rotate-90'><AiOutlineHome size={30}/></li>  
            <li className='w-[60px] h-[60px] flex justify-between items-center ml-[20px] duration-300 hover:text-teal-400 hover:rotate-45'><BsFillPersonFill size={30}/></li> 
            <li className='w-[60px] h-[60px] flex justify-between items-center ml-[20px] duration-300 hover:text-teal-400 hover:rotate-90'><GiSkills size={30}/></li>  
            <li className='w-[60px] h-[60px] flex justify-between items-center ml-[20px] duration-300 hover:text-teal-400 hover:rotate-45'><MdWorkOutline size={30}/></li>    
            <li className='w-[60px] h-[60px] flex justify-between items-center ml-[20px] duration-300 hover:text-teal-400 hover:rotate-90'><BsTelephone size={30}/></li>

            <li className='h-[100px]'></li>
            <li className='h-[100px]'></li>
            <div className='grid grid-cols-2'>
            <li className='w-[60px] h-[60px] flex justify-between items-center ml-[0px] duration-300 hover:text-blue-500 hover:scale-125'>
                <a className = 'flex justify-between items-center w-full'
                href='https://in.linkedin.com/in/babitdor-kayang-khonglah-aa1b68207'><FaLinkedin size={20}/></a>
            </li>
            <li className='w-[60px] h-[60px] flex justify-between items-center ml-[0px] duration-300 hover:text-gray-500 hover:scale-125'>
                <a href='https://github.com/Babitdor'><FaGithub size={20}/></a>
            </li>
            <li className='w-[60px] h-[60px] flex justify-between items-center ml-[0px] duration-300 hover:text-pink-500 hover:scale-125'>
                <a href='https://www.instagram.com/_babitdor_hartfort_/'><FaInstagram size={20}/></a>
            </li>
            <li className='w-[60px] h-[60px] flex justify-between items-center ml-[0px] duration-300 hover:text-cyan-500 hover:scale-125'>
                <a href='https://mobile.twitter.com/Bry4n66195191'><FaTwitter size={20}/></a>
            </li>
            </div>
        </ul>
        </div>

    </div>
  )
}

export default Navbar