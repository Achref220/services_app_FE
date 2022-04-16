import  AOS  from 'aos'
import React from 'react'
import './mainAbout.css'

export default function MainAbout() {
  AOS.init()
  return (
    <div className='ab__about'>
        <hr className='ab__hr'/>
        <i 
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" 
        className="ab__icon fa-brands fa-gg-circle"></i>
        <hr className='ab__hr'/>
        <p className='ab__p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, ullam! 
            Esse, vitae maiores, veritatis dolorem cum neque vero ipsum 
            necessitatibus repellat earum fuga. Nostrum ipsum quisquam, saepe tenetur minima voluptatum.
        </p>
        <button className='ab__btn'>ABOUT US</button>
    </div>
  )
}
