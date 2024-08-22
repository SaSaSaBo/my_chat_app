/* eslint-disable no-unused-vars */
import React from 'react'
import './RightSidebar.css'
import assets from '../../assets/assets.js'

const RightSidebar = () => {
  return (
    <div className='rs'>
      <div className='rs-profile'>
        <img src={assets.seungmin} alt="" />
        <h3>Kim Seungmin <img src={assets.dot} className='dot' alt="" /></h3>
        <p>Singer, Rapper, Musician</p>
      </div>
      <hr />
      <div className='rs-media'>
        <p>Media</p>
        <div>
          <img src={assets.a} alt=''></img>
          <img src={assets.b} alt=''></img>
          <img src={assets.c} alt=''></img>
          <img src={assets.d} alt=''></img>
          <img src={assets.e} alt=''></img>
          <img src={assets.f} alt=''></img>
        </div>
      </div>
      <button>Logout</button>
    </div>
  )
}

export default RightSidebar

