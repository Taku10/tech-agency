import '../style/portfolio.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'



const Portfolio = () => {

    useEffect(() => {
        Aos.init({ duration: 1500, once: true })
    }, [])

    return (
        <div className='port-container' id='portfolio'>
            <div className='gallery-grid-1'>
                <div className='port-1'>
                    <div className=' latest'>
                        <div className='latest-heading'>
                            <h2 data-aos='fade-up'>Latest creations</h2>
                            <p data-aos='fade-left' data-aos-delay='800'>We make beautiful things</p>
                        </div>
                        <p className='latest-content'>
                            Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking.
                        </p>
                    </div>
                    <div className='image image-1' data-aos='zoom-in'></div>
                </div>
                <div className='port-2'>
                    <div className='image image-2' data-aos='zoom-in' data-aos-delay='200'></div>
                    <div className='image image-3' data-aos='zoom-in' data-aos-delay='300'></div>
                </div>
            </div>
            <div className='gallery-grid-2'>
                <div className="port-3">
                    <div className='image image-4' data-aos='zoom-in' data-aos-delay='500'></div>
                    <div className='image image-5' data-aos='zoom-in' data-aos-delay='600'></div>
                </div>
                <div className="port-4">
                    <div className='image image-6' data-aos='zoom-in' data-aos-delay='700'></div>
                    <div className='image image-7' data-aos='zoom-in' data-aos-delay='800'></div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio