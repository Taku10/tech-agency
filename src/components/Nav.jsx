import React from 'react'
import '../style/nav.css'



const Nav = () => {
  return (
    <nav className='nav-container'>
      <h1 className='taku-logo'>TAKU SOLUTIONS</h1>
      <ul className='navigation'>
       <li><a href="">HOME</a></li>
       <li><a href="">ABOUT</a></li>
       <li><a href="">SERVICES</a></li>
       <li><a href="">PORTFOLIO</a></li>
       <li><a href="">CONTACT</a></li>
      </ul>
    </nav>
  )
}

export default Nav