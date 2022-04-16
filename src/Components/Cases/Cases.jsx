import React from 'react'
import './Cases.css'
import { casData } from '../../data/casData';
import HoverVideoPlayer from 'react-hover-video-player';
import  AOS  from 'aos';



export default function Cases() {
  AOS.init()
  return (
    <div className='cases__container'>
      <div className='cases__top'>
        <hr />
        <i data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" class="fa-solid fa-circle-play"></i>
        <hr />
        <h1 data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">VIDEOS</h1>
      </div>
      {casData.map((item) => (
        <HoverVideoPlayer
          key={item.id}
          className='cases__vids'
          videoSrc={item.vid}
          pausedOverlay={
            <div className='cases__bg'></div>
          }
          loadingOverlay={
          <div className="loading-overlay">
            <div className="loading-spinner" />
          </div>
          }
      />
      ))}
    </div>
  )
}
