import React from 'react'
import Button from '../UI/Button'
import './HorizontalNavbar.css'

const HorizontalNavbar = () => {
  return (
    <div className='horizontal-nav'>
      <div className='profile'>
        <div className='profile-img-box'>
          <i className='fa-solid fa-user'></i>
        </div>
        <h2>Sakshi Jadhav</h2>
      </div>
      <form className='search-box'>
        <input type='text' placeholder='Sakshi Jadhav' />
        <Button name='Search' />
      </form>
    </div>
  )
}

export default HorizontalNavbar