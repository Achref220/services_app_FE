import React from 'react';
import './sections.css';
import { secData } from '../../data/secData';
import  AOS  from 'aos';

export default function Sections() {
  AOS.init()
  return (
    <div className='sec__main'>
        {secData.map((item) => (
            <div data-aos-duration="2000" data-aos={item.fade} className='sec__card' key={item.id}>
                <h3 className='sec__title'>{item.title}</h3>
                <hr className='sec__hr'/>
                <i className="sec__icon fa-brands fa-readme"></i>
            </div>
        ))}
    </div>
  )
}
