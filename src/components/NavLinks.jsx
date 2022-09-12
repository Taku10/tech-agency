import React, { useState,useEffect } from 'react'
import { useContext } from 'react'
import { Link } from 'react-scroll'
import '../style/nav.css'
import { AiOutlineClose } from 'react-icons/ai'
import { CloseContext } from './MobileNavigation'
import Aos from 'aos';
import 'aos/dist/aos.css';

const NavLinks = ({isMobile, linkClose}) => {
    const [close, setClose] = useState(true)
    const displayX = useContext(CloseContext)
    const x_icon = <AiOutlineClose size='36px' color='black' data-aos='fade-down' className='close' onClick={() => setClose(!close)} />
   

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
   
    const navItems = (
        <ul className='navigation'>
            {displayX && x_icon}
            <h1 className='taku-logo' data-aos='zoom-out-up'>TAKU AGENCY </h1>
            <li data-aos='fade-right' ><Link to="home"  onClick={isMobile && linkClose} spy={true} smooth={true} offset={50} duration={500}>HOME</Link></li>
            <li data-aos='fade-left' ><Link to="about"  onClick={isMobile && linkClose} spy={true} smooth={true} offset={-10} duration={500}>ABOUT</Link></li>
            <li data-aos='fade-right' ><Link to="services"   onClick={isMobile && linkClose}spy={true} smooth={true} offset={-10} duration={500}>SERVICES</Link></li>
            <li data-aos='fade-left' ><Link to="portfolio"  onClick={isMobile && linkClose}spy={true} smooth={true} offset={-10} duration={500}>PORTFOLIO</Link></li>
            <li  data-aos='fade-right'><Link to="contact"  onClick={isMobile && linkClose} spy={true} smooth={true} offset={-10} duration={500}>CONTACT</Link></li>
        </ul>
    )


   

    return (
        <>
            {close ? navItems: null }
        </>

        
    )
}

export default NavLinks
