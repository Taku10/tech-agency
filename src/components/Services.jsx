import '../style/services.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, {useEffect} from 'react'

const Services = () => {

    useEffect(()=>{
        Aos.init({duration:1500, once: true})
    },[])

    return (
        <div className='services-container' id='services'>
            <div className='services-grid-1'>
                <div className='things-image'>

                </div>
                <div className='things'>
                    <div className='things-wrapper'>
                        <div className='things-heading'>
                            <h2 data-aos='fade-up' >Things we do</h2>
                            <p data-aos = 'fade-left' data-aos-delay='500'>We exist to create</p>
                        </div>
                        <p className='things-content'>
                            Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha. Social proof lean startup alpha scrum project non-disclosure agreement.
                        </p>
                        <button>GET IN TOUCH</button>
                    </div>
                </div>
            </div>
            <div className='services-grid-2'>
                <div className='branding' data-aos='fade-up' >
                    <i className="fa-regular fa-copyright"></i>
                    <div className='branding-content'>
                        <h2>Branding</h2>
                        <p>
                            Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha.
                        </p>
                    </div>
                </div>
                <div className='web' data-aos='fade-up' data-aos-delay='500'  >
                    <i className="fa-solid fa-window-maximize"></i>
                    <div className='web-content'>
                        <h2>Web Design</h2>
                        <p>
                            Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha.
                        </p>
                    </div>
                </div>
                <div className='graphic' data-aos='fade-up' data-aos-delay='1000'  >
                    <i className="fa-regular fa-image"></i>
                    <div className='graphic-content'>
                        <h2>Graphic Design</h2>
                        <p>
                            Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
