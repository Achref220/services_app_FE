import React from 'react'
import NavBar from '../NavBar/NavBar'
import vd1 from '../../assets/videos/vid55.mp4'
import './home.css'

export default function Home() {
  return (
    <div className='home__container'>
        <NavBar />
        <video className='home__vid' src={vd1} autoPlay loop muted></video>
        <div className='home__content'>
            <div className='home__left'>
                <h1 className='home__title'>WEBDESIGN 100%<br/>CUSTOM BUILT</h1>
                <hr className='home__hr1'/>
                <p className='home__p'><i>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/>
                    Dolore voluptate, sit tenetur enim maiores nisi laudantium facere <br />
                    dolor, sit amet consectetur adipisicing elitdolor, sit amet consectetur adipisicing elit
                    </i>
                </p>
                <button className='home__btn'>OUR CASES</button>
            </div>
            <div className='home__right'>
                <hr className='home__hr2'/>
                <a href="#" className='home__li'><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" className='home__li'><i className="fa-brands fa-instagram"></i></a>
                <a href="#" className='home__li'><i className="fa-brands fa-linkedin-in"></i></a>
                <hr className='home__hr2'/>
            </div>
        </div>
        <div className='home__contact'>
            <i className="home__ic fa-solid fa-envelope"></i>
            <h4>Contact Us</h4>
        </div>
    </div>
  )
}
