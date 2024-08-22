/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './ProfileUpdate.css'
import assets from '../../assets/assets'

const ProfileUpdate = () => {

  const [image, setImage] = useState(false)

  return (
    <div className='profile'>
      <div className='profile-container'>
        <form>
          <h3>Profile Details</h3>
          <label htmlFor='avatar'>
            <input onChange={(e) => setImage(e.target.files[0])} type="file" id='avatar' accept='.png, .jpg, .jpeg' hidden />
            <img src={image? URL.createObjectURL(image) : assets.user} alt='' />
            Upload profile image
          </label>
          <input type="text" placeholder='Your Name...' required />
          <textarea placeholder='About you...' required></textarea>
          <button type='submit'>Update</button>
        </form>
        <img className='profile-pic' src={image? URL.createObjectURL(image) : assets.logo} alt='' />
      </div>
    </div>
  )
}

export default ProfileUpdate
