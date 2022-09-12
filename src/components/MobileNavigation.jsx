import React, { useState } from 'react'
import NavLinks from './NavLinks'
import '../style/nav.css'
import { CgMenu } from 'react-icons/cg'
import { AiOutlineClose } from 'react-icons/ai'
import { createContext } from 'react'


export const CloseContext = createContext()

const MobileNavigation = () => {
    const [open, setOpen] = useState(false)
    const hamburger = <CgMenu size='36px' color='white' className='hamburger' onClick={() => setOpen(!open)} />


    const linkClose = ()=>{
        setOpen(false)
    }

    return (
        <CloseContext.Provider value={open}>
            <nav className='mobile-view'>
                <h1 className='taku-logo'>TAKU AGENCY</h1>
                {open && <NavLinks isMobile = {true} linkClose={linkClose} />}
                {hamburger}
            </nav>
        </CloseContext.Provider>

    )
}

export default MobileNavigation