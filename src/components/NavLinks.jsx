import React from 'react'
import { Link } from 'react-scroll'
const NavLinks = () => {
    return (
        <ul className='navigation'>
            <li><Link to="home" spy={true} smooth={true} offset={50} duration={500}>HOME</Link></li>
            <li><Link to="about" spy={true} smooth={true} offset={-10} duration={500}>ABOUT</Link></li>
            <li><Link to="services" spy={true} smooth={true} offset={-10} duration={500}>SERVICES</Link></li>
            <li><Link to="portfolio" spy={true} smooth={true} offset={-10} duration={500}>PORTFOLIO</Link></li>
            <li><Link to="contact" spy={true} smooth={true} offset={-10} duration={500}>CONTACT</Link></li>

        </ul>
    )
}

export default NavLinks
