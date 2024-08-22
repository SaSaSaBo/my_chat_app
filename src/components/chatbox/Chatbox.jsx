/* eslint-disable no-unused-vars */
import React from 'react'
import './Chatbox.css'
import assets from '../../assets/assets.js'

const Chatbox = () => {
  return (

    <div className='chatbox'>
      
      <div className='chat-user'>
        <img src={assets.changbin} alt="" />
        <p>Seo Changbin <img src={assets.dot} className='dot' alt="" /></p>
        <img src={assets.help} alt="" />
      </div> 

      <div className='chat-msg'>

        <div className='s-msg'>
          <p className='msg'>For me drawing a good background is challenging.</p>
          <div>
            <img src={assets.seungmin} alt="" />
            <p>2:50pm</p>
          </div>
        </div>
        <div className='s-msg'>
          <img className='msg-img' src={assets.background} alt="" />
          <div>
            <img src={assets.seungmin} alt="" />
            <p>2:50pm</p>
          </div>
        </div>

        <div className='r-msg'>
          <p className='msg'>Drawing a background is tough, but worth every challenging moment.</p>
          <div>
            <img src={assets.changbin} alt="" />
            <p>2:30pm</p>
          </div>
        </div>

      </div>

      <div className='chat-input'>
        <input type="text" placeholder='Type a message...' />
        <input type="file" id='image' accept='image/png, image/jpeg' hidden/>
        <label htmlFor="image">
          <img src={assets.image} alt="" />
        </label>
        <img src={assets.ok} alt="" />
      </div>

    </div>

  )
}

export default Chatbox
