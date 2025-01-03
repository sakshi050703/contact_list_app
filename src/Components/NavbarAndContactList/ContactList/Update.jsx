import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

const Update = () => {

  const { register, handleSubmit, setValue } = useForm()
  const { contact } = useParams()

  const getData = async () => {
    const result = await axios.get(`http://localhost:8000/student/${contact}`)
    setValue('name', result.data.name)
    setValue('surname', result.data.surname)
    setValue('tel', result.data.tel)
  }
  useEffect(() => {
    getData()
  }, [])

  const updatedata = (data) => {
    axios.put(`http://localhost:8000/student/${contact}`, data)
    alert('Data Update Successfull !!!')
  }
  return (
    <div>
      <form className='form' onSubmit={handleSubmit(updatedata)}>
        <div className='add-new-img'>
          <img src={addnewImage} alt='Img'></img>
        </div>
        <div className='input-text'>
          <input
            type='text'
            placeholder='name'
            {...register('name')}
          />
          <input
            type='text'
            placeholder='surname'
            {...register('surname')}
          />
        </div>
        <div className='input-tel'>
          <input
            type='text'
            placeholder='contact'
            {...register('tel')}
          />
        </div>
        <Button name='Add' />
      </form>
    </div>
  )
}

export default Update