import React from 'react'
import './Signup.css'
import Trade from '../assets/trade.png'

const Signup = () => {
  return (
    <div className='signup'>
      <div className='container'>
        {/* left */}
        <div className='left'>
          <img src={Trade} alt='/'/>
        </div>

        {/* right */}
        <div className='right'>
          <h2>Earn passive income with crypto</h2>
          <p>Earn upto 12% annual rewards on 30+ digital assets. Simply hold automatically earn rewards at the end of each month with no lockups and no limit.</p>
          <div className='input-container'>
            <input type='email' placeholder='Enter your email' />
            <button className='btn'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup