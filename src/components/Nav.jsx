import React, { useEffect, useState } from 'react'
import '../style/nav.css'
import { Link } from 'react-scroll'


const Nav = () => {
  const [width, setWidth] = useState(window.innerWidth)


  useEffect(() => {
    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  })

  const updateWidth =()=>{
    setWidth(window.innerWidth)
  }

  return (
    <nav className='nav-container'>
      <h1 className='taku-logo'>TAKU AGENCY</h1>
      <ul className='navigation'>
        <li><Link to="home" spy={true} smooth={true} offset={50} duration={500}>HOME</Link></li>
        <li><Link to="about" spy={true} smooth={true} offset={-10} duration={500}>ABOUT</Link></li>
        <li><Link to="services" spy={true} smooth={true} offset={-10} duration={500}>SERVICES</Link></li>
        <li><Link to="portfolio" spy={true} smooth={true} offset={-10} duration={500}>PORTFOLIO</Link></li>
        <li><Link to="contact" spy={true} smooth={true} offset={-10} duration={500}>CONTACT</Link></li>
        <li>{width}</li>
      </ul>
    </nav>
  )
}

export default Nav