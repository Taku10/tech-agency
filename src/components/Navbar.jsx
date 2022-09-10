import React, { useEffect, useState } from 'react'
import '../style/nav.css'
import { Link } from 'react-scroll'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'


const Nav = () => {
  const [width, setWidth] = useState(window.innerWidth)


  useEffect(() => {
    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  })

  const updateWidth = () => {
    setWidth(window.innerWidth)
  }



  return (
    <div className='nav-container'>
      <Navigation className='desktop-view' />
      <MobileNavigation className='mobile-view' />
    </div>
  )
}

export default Nav