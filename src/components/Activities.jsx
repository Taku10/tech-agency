import '../style/activities.css'

import React from 'react'

const Activities = () => {
  return (
    <div className='activities-container'>
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