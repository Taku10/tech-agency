import React from 'react'
import NavLinks from './NavLinks'
import '../style/nav.css'


const Navigation = () => {
  return (
    <nav className='desktop-view'>
      <h1 className='taku-logo'>TAKU AGENCY</h1>
      <NavLinks />
    </nav>
  )
}

export default Navigation
