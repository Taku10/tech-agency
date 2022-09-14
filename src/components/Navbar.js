import React, { useEffect, useState } from 'react'
import '../style/nav.css'
import { Link } from 'react-scroll'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'


const Nav = () => {
 


  return (
    <div className='nav-container'>
      <Navigation />
      <MobileNavigation />
    </div>
  )
}

export default Nav