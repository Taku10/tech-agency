import '../style/clients.css'

import Aos from 'aos';
import 'aos/dist/aos.css';
import React, {useEffect} from 'react'

const Clients = () => {

    
    useEffect(()=>{
        Aos.init({duration:1500, once: true})
    },[])

    return (
        <div className='client-container'>
            <div className='client-wrapper'>
                <div className='client-header'>
                    <h2 data-aos='fade-up'>Our clients love our work</h2>
                    <p data-aos = 'fade-left' data-aos-delay='800'>But don't just take our word for it...</p>
                </div>
                <div id="carouselExampleInterval" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="7000">
                            <div className='carousol-caption'>
                                <p className='client-caption'>
                                    “I don’t like people, but I make an exception for Taku Solutions. They’re pretty damn cool.”
                                </p>
                                <p className='client-name'>Brian Jones,  America Big Corporation</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="7000">
                            <div className='carousol-caption'>
                                <p className='client-caption'>
                                    Taku Solutions are the best. Not only did they deliver my work on time, they even walked my dog when I was out of town”
                                </p>
                                <p className='client-name'>A Smith – Neighbour</p>
                            </div>
                        </div>
                       
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Clients
