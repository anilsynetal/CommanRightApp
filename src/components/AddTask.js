import { useState } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
const AddTask = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [designation, setDesignation] = useState('')
  const [number, setNumber] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!name) {
      alert('Please add a Name')
      return
    }

    onAdd({ name, email,designation, number, reminder })

    setName('')
    setEmail('')
    setDesignation('')
    setNumber('')
    setReminder(false)
  }

  return (
    <div className="Employee-form container">
        <form className='add-form container bg-white mt-3 w-75'  onSubmit={onSubmit}>
          <div >
            <label>Employee Name :</label>
            <input className='form-control'
              type='text'
              placeholder='Employee Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Email Address :</label>
            <input className='form-control'
              type='text'
              placeholder='email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Designation :</label>
            <input className='form-control'
              type='text'
              placeholder='designation'
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
          </div>
          <div>
            <label>Mobile Number :</label>
            <input className='form-control'
              type='text'
              placeholder='Mobile Number'
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className='form-control-check'>
            <label>Set Reminder</label>
            <input
            className="ml-3"
              type='checkbox'
              checked={reminder}
              value={reminder}
              onChange={(e) => setReminder(e.currentTarget.checked)}
            />
          </div>
          <input type='submit' value='Save Task' className='btn btn-block btn-success' />
        </form>
    </div>
  )
}

export default AddTask
