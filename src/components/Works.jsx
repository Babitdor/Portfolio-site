import React, {useState} from 'react'
import './Works.css'
import Slider from 'react-slick'
import img1 from '../assets/Images/1.jpg'
import img2 from '../assets/Images/2.jpg'
import img3 from '../assets/Images/3.jpg'
import img4 from '../assets/Images/4.jpg'
import img5 from '../assets/Images/5.jpg'
import {FaArrowRight,FaArrowLeft} from 'react-icons/fa'

const images = [img1,img2,img3,img4,img5]
function Works() {

    const[ imageIndex, setimageIndex] = useState(0)

    const NextArrow = ({onClick}) =>{

        return(
            <div className='arrow next' onClick={onClick}>
                <FaArrowRight fontSize={30}/>
            </div>
        )
    }
    const PrevArrow = ({onClick}) =>{

        return(
            <div className='arrow prev' onClick={onClick}>
                <FaArrowLeft fontSize={30}/>
            </div>
        )
    }

    const settings = {
        infinite: true,
        height:500,
        lazyLoad: true,
        speed:500,
        slidesToShow: 1,
        swipeToSlide: false,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        beforeChange: (current, next) => setimageIndex(next)
    };
  return (
    <div className='Works'>
        <div className='md:text-center sm:text-right pl-4 pt-5 pb-10'>
                <p className='text-4xl font-bold inline border-b-2 border-white text-white'>
                    Works
                </p>
            </div>
        <Slider {...settings} className='slider'>
            {images.map((img,idx)=>
            <div className={idx === imageIndex ? "slide activeSlide": "slide"}>
                <div className='cards'>
                    <div className='card-container'>
                    <img src={img} alt={img} className='img-css'/>
                    <div className='description'>
                    <p className='text-[#000000] py-4 max-w-[700px] font-mono md:drop-shadow-lg sm:drop-shadow-lg border-2 p-10 bg-white relative '> I'm a Software Developer/Data Scientist in the making,
                    trying hard to improve my skills.
                    Currently i'm focused on learning by working on projects
                    </p>
                    </div>
                    </div>
                </div>
            </div>
            
            
            )}
            
        
        </Slider>        
    </div>
  )
}

export default Works