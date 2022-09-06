import '../style/about.css'
import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';




const About = () => {

    useEffect(()=>{
        Aos.init({duration:1500, once: true})
    },[])
    return (
        <div className='about-container' id='about'>
            <div className='about-grid-1'>
                <div className='creative-image'>

                </div>
                <div className='creative-fresh'>
                    <div className='creative-wrapper'>
                        <div className='creative-heading'>
                            <h2 data-aos='fade-up'>Creative & fresh</h2>
                            <p data-aos = 'fade-left' data-aos-delay='800'>Our digital agency</p>
                        </div>
                        <p className='creative-description'>
                            Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha. Social proof lean startup alpha scrum project non-disclosure agreement.
                        </p>
                        <button>VIEW PORTFOLIO</button>
                    </div>
                </div>
            </div>
            <div className="about-grid-2">
                <div className='hip-funky'>
                    <div className="hip-wrapper">
                        <div className="hip-heading">
                            <h2 data-aos='fade-up' >Hip & Funky</h2>
                            <p  data-aos = 'fade-right'  data-aos-delay='800'>We try new things</p>
                        </div>
                        <p className='hip-description'>
                            Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha. Social proof lean startup alpha scrum project non-disclosure agreement.
                        </p>
                        <button>OUR SERVICES</button>
                    </div>
                </div>
                <div className='hip-image'>

                </div>
            </div>
        </div>
    )
}

export default About
