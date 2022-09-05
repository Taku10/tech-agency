import '../style/contact.css'
import React from 'react'

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='contact-heading'>
        <h2>Write us a letter</h2>
        <p>We appreciate your ideas</p>
      </div>
      <div className='contact-form'>
        <form >
            <div className='name '>
                <label htmlFor="name">NAME</label>
                <input type="text" name="name" id="name" value='' placeholder='Enter your name'/>
            </div>
            <div className='email'>
                <label htmlFor="email">EMAIL ADDRESS</label>
                <input type="text" name="email" id="email" value='' placeholder='Enter your name' />
            </div>
            <div className='message'>
                <label htmlFor="message">YOUR MESSAGE</label>
                <textarea name="message" id="message" cols="30" rows="1" placeholder='Enter Message'></textarea>
            </div>
            <div className='submit-button'>
                <button>Submit</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Contact

