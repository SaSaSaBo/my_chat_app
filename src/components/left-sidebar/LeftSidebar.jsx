/* eslint-disable no-unused-vars */
import React from 'react'
import './LeftSidebar.css'
import assets from '../../assets/assets.js'

const LeftSidebar = () => {
  return (
    <div className='ls'>
        <div className='ls-top'>
            <div className='ls-nav'>
                <img src={assets.logo} className='logo' alt =""/>            
                <img src={assets.skz} className='logo-skz' alt =""/>
                <div className='menu'>
                    <img src={assets.menu} alt =""/>
                    <div className='sub-menu'>
                        <p>Edit Profile</p>
                        <hr />
                        <p>Logout</p>
                    </div>
                </div>
            </div>
            <div className='ls-search'>
                <img src={assets.search} alt =""/>
                <input type='text' placeholder='Search...' />
            </div>
        </div>
        <div className='ls-list'>
            {
                Array(12).fill("").map((item, index) => (
                    <div key={index} className='friends'>
                        <img src={assets.changbin} alt="" />
                        <div>
                            <p>Seo Changbin</p>
                            <span>Hello, Did you finish the song?</span>
                        </div>
                    </div>                
                ))
            }

        </div>
    </div>
  )
}

export default LeftSidebar
