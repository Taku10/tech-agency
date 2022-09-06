import '../style/activities.css'
import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Activities = () => {

    useEffect(()=>{
        Aos.init({duration:1500, once: true})
    },[])

  return (
    <div className='activities-container' data-aos='fade'>
        <div className='activities-wrapper'>
            <div className='coffee'>
                <h2>387</h2>
                <p>Cups of coffee</p>
            </div>
            <div className='bicycle'>
                <h2>870</h2>
                <p>Bicycle kilometres</p>
            </div>
            <div className='brainstorm'>
                <h2>520</h2>
                <p>Brainstorm sessions</p>
            </div>
            <div className='video'>
                <h2>351</h2>
                <p>Video hours</p>
            </div>
        </div>
    </div>
  )
}

export default Activities