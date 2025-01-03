import './ContactList.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
const ContactList = () => {

  const [formData, setFormData] = useState([])

  const getData = async (data) => {
    const response = await axios.get('http://localhost:8000/student', data)
    const result = response.data
    setFormData(result)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='contact-list'>
      <table>
        <thead>
          <tr>
            <th><p>Profile</p></th>
            <th><p>Name</p></th>
            <th><p>Surname</p></th>
            <th><p>Mobile</p></th>
            <th><p>Actions</p></th>
          </tr>
        </thead>
        <tbody>
          {
            formData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div className=' profile-img-box'>
                      <i className='fa-solid fa-user'></i>
                    </div>
                  </td>
                  <td><h2>{item.name}</h2></td>
                  <td><h2>{item.surname}</h2></td>
                  <td><h2>{item.tel}</h2></td>
                  <td>
                    <div>
                      <NavLink to={`/update/${item.id}`}><i className='fa-solid fa-pen'></i></NavLink>
                      <i className='fa-solid fa-trash'></i>
                      <i className='fa-solid fa-heart'></i>
                    </div>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div >
  )
}

export default ContactList