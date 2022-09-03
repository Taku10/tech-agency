import '../style/services.css'

import React from 'react'

const Services = () => {
    return (
        <div className='services-container'>
            <div className='services-grid-1'>
                <div className='things-image'>

                </div>
                <div className='things'>
                    <div className='things-wrapper'>
                        <div className='things-heading'>
                            <h2>Things we do</h2>
                            <p>We exist to create</p>
                        </div>
                        <p className='things-content'>
                            Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha. Social proof lean startup alpha scrum project non-disclosure agreement.
                        </p>
                        <button>GET IN TOUCH</button>
                    </div>
                </div>
            </div>
            <div className='services-grid-2'>
                <div className='branding'>
                    <i className="fa-regular fa-copyright"></i>
                    <div className='branding-content'>
                        <h2>Branding</h2>
                        <p>
                            Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha.
                        </p>
                    </div>
                </div>
                <div className='web'>
                    <i class="fa-solid fa-window-maximize"></i>
                    <div className='web-content'>
                        <h2>Web Design</h2>
                        <p>
                            Focus infographic venture business model canvas gamification ecosystem. Business plan gamification user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha.
                        </p>
                    </div>
                </div>
                <div className='graphic'>
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
