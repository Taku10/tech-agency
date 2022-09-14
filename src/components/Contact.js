import '../style/contact.css'
import React, {useState, useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    const[input, setInput]=useState({
        name: '',
        email:'',
        message:'',
    })

    useEffect(()=>{
        Aos.init({duration:1500, once: true})
    },[])

    const handleChange =(event)=>{
        const{name, value}= event.target;
        setInput((prev)=>{
            return{
                ...prev,
                [name]: value,
            }
        })
    }

    const{name, email, message}= input;

    const handleSumbit =(event)=>{
        event.preventDefault();
        console.log(message)
        setInput(' ')
    }



  return (
    <div className='contact-container' id='contact'>
      <div className='contact-heading'>
        <h2 data-aos='fade-up'>Write us a letter</h2>
        <p data-aos = 'fade-left' data-aos-delay='800'>We appreciate your ideas</p>
      </div>
      <div className='contact-form'>
        <form onSubmit={handleSumbit}>
            <div className='name '>
                <label htmlFor="name">NAME</label>
                <input type="text" name="name" id="name" value={name} placeholder='Enter your name' onChange={handleChange} />
            </div>
            <div className='email'>
                <label htmlFor="email">EMAIL ADDRESS</label>
                <input type="text" name="email" id="email" value={email} placeholder='Enter your name' onChange={handleChange} />
            </div>
            <div className='message'>
                <label htmlFor="message">YOUR MESSAGE</label>
                <textarea name="message" id="message" value={message} cols="30" rows="1" placeholder='Enter Message' onChange={handleChange} ></textarea>
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

