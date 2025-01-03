import addnewImage from '../../../assets/add-new.svg'
import './Form.css'
import Button from '../../UI/Button'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const Form = () => {

  const { register, handleSubmit, reset } = useForm()
  const postData = async (data) => {
    axios.post('http://localhost:8000/student', data)
    alert('Data Submited')
    reset()
  }

  return (
    <form className='form' onSubmit={handleSubmit(postData)}>
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
  )
}

export default Form