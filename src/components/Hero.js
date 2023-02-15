import React from 'react'
import './Hero.css'
import Crypto from '../assets/hero-img.jpg'

 const Hero = () => {
  return (

    // leftside
    <div className='hero'>
       <div className='container'>
        <div className='left'>
          <p>Buy & sell crypto using your saving account</p>
          <h1>Invest in cryptocurrency with your IRA</h1>
          <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
          <div className='input-container'>
            <input type='email' placeholder='enter your email' />
            <button className='btn'>Learn More</button>
          </div>
        </div>

        {/* reight side */}
        <div className='right'>
            <div className='img-container'>
              <img src={Crypto} alt='' />
            </div>
        </div>
        

       </div>
    </div>
  )
}
export default Hero
