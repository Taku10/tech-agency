import '../style/clients.css'

import React from 'react'

const Clients = () => {
    return (
        <div className='client-container'>
            <div className='client-wrapper'>
                <div className='client-header'>
                    <h2>Our clients love our work</h2>
                    <p>But don't just take our word for it...</p>
                </div>
                <div id="carouselExampleInterval" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="7000">
                            <div className='carousol-caption'>
                                <p className='client-caption'>
                                    “I don’t like people, but I make an exception for Taku Solutions. They’re pretty damn cool.”
                                </p>
                                <p className='client-name'>Brian Jones,  America Big Corporation</p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="7000">
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
