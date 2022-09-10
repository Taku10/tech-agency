import React from 'react'
import NavLinks from './NavLinks'

const MobileNavigation = () => {
    return (
        <nav className='mobile-view'>
            <h1 className='taku-logo'>TAKU AGENCY</h1>
            <NavLinks />
        </nav>
    )
}

export default MobileNavigation