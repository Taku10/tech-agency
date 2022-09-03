import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import people_room from '../images/people-room.jpg'
import field from '../images/nature-field.jpg'
import bulb from '../images/light-bulb.jpg'
import '../style/home.css'
import Carousel from 'react-bootstrap/Carousel'
import Nav from './Nav';

const Slide = () => {
    return (
        <>
        
        <div id="carouselExampleInterval" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <Nav/>
            <div className="carousel-inner">
          
                <div className="carousel-item active" data-bs-interval="5000">
                    <img src={field} className="d-block w-100" alt="..." />
                    <div className='carousel-caption field'>
                        <h2>We can change your digital world</h2>
                        <p>Bold enough to blow a hole in your next marketing campaign.</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                    <img src={bulb} className="d-block w-100" alt="..." />
                    <div className=' carousel-caption bulb'>
                        <h2>Ideas without action are useless.</h2>
                        <p>Let us unlock the greatest versioin of yourself</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={people_room} className="d-block w-100" alt="..." />
                    <div className=' carousel-caption people-room'>
                        <h2>You need a good partner</h2>                           
                        <p>Let us help you realise your true potential</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

        </>
        
    )
}

export default Slide
