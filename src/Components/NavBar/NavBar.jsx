import React, { useState } from 'react'
import './navBar.css';

export default function NavBar() {
  const [show, setShow] = useState(false);
  return (
    <div className='nav__container'>
        <h1 className='nav__left'>LOGO</h1>
        {!show ? (
          <h3 className='nav__right'><i onClick={() => setShow(true)} className="fa-solid fa-bars"></i></h3>
        ) : <h3 className='nav__right'><i onClick={() => setShow(false)} className="fa-solid fa-xmark"></i></h3>}
        {show ? (
          <div className='nav__menu'>
            <h3>WEB DESIGN</h3>
            <hr />
            <h3>E-COMMERCE</h3>
            <hr />
            <h3>WEB APPLICATIONS</h3>
            <hr />
            <h3>CASES</h3>
            <hr />
            <h3>CONTACT US</h3>
          </div>
        ): null}
    </div>
  )
}
