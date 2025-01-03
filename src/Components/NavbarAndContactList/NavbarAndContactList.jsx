import React from 'react'
import './NavbarAndContactList.css'
import VerticalNavbar from './VerticalNavbar/VerticalNavbar'
import ContactList from './ContactList/ContactList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Update from './ContactList/Update'
const NavbarAndContactList = () => {
  return (

    <div className='navbar-and-list'>

      <BrowserRouter>
        <VerticalNavbar />
        <ContactList />
        <Routes>
          <Route path='/update/:contact' element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>


  )
}

export default NavbarAndContactList