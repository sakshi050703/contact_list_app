import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <a href=''>
            <i className='fa-solid fa-address-book'></i>
            <div>
              <h2>All Contacts</h2>
              <p>10 contacts</p>
            </div>
          </a>
        </li>
        <li>
          <a href=''>
            <i className='fa-solid fa-heart'></i>
            <div>
              <h2>Favourites</h2>
              <p>10 contacts</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar