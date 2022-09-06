import '../style/footer.css'
import React, {useState, useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

    useEffect(()=>{
        Aos.init({duration:1500, once: true})
    },[])


    return (
        <div className='footer-container' data-aos='zoom-in'>
            <div className='footer-logo'>
                <h1>TAKU AGENCY</h1>
            </div>

            <div className='details'>
                <div className='footer-item menu'>
                    <h5 className='footer-heading'>MENU</h5>
                    <ul className='menu-list'>
                        <li><a href="">ABOUT</a></li>
                        <li><a href="">SERVICES</a></li>
                        <li><a href="">PORTFOLIO</a></li>
                        <li><a href="">CONTACT</a></li>
                    </ul>
                </div>
                <div className='footer-item address'>
                <h5 className='footer-heading'>ADDRESS</h5>
                    <ul className='address-list'>
                        <li>344</li>
                        <li>Corporation Building</li>
                        <li>Verkeer Street</li>
                        <li>Cape Town</li>
                        <li>7994</li>
                    </ul>
                </div>
                <div className="footer-item contact">
                <h5 className='footer-heading'>CONTACT</h5>
                    <ul className='contact-list'>
                        <li>E:info@takuagency.com</li>
                        <li>T:+27 23 564 5566</li>
                        <li>F:+27 234 346 8976</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer