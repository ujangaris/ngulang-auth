import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { toast } from 'react-toastify'
import axios from 'axios'
const Register = () => {
  // deklarasi hooks register
  const [register, setRegister] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    city: '',
    address: '',
    gender: '',
  })
  //   pasang useNavigate dari react-router-dom
  const navigate = useNavigate()
  //   buat handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post(`http://localhost:3001/users`, register)
      .then((res) => {
        //pasang toastify
        toast.success('Register Berhasil!')
        navigate('/auth/login')
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  //   buat function genderChange
  const genderChange = (e) => {
    const value = e.target.value
    setRegister({ ...register, gender: value })
  }
  return (
    <>
      <div className='container-fluid banner'>
        <div className='row'>
          <div className='col-md-12'>
            <Navbar />
          </div>
          <div className='row'>
            <div className='col-md-6 offset-3 auth'>
              <form className='container' onSubmit={handleSubmit}>
                <div className='card'>
                  <div className='card-header'>
                    <h1>User Registration</h1>
                  </div>
                  <div className='card-body'>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <div className='form-group'>
                          <label htmlFor='name'>Full Name</label>
                          <input
                            type='text'
                            className='form-control'
                            id='name'
                            placeholder='Enter Full Name'
                            onChange={(e) =>
                              setRegister({ ...register, name: e.target.value })
                            }
                          />
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='form-group'>
                          <label htmlFor='username'> Username</label>
                          <input
                            type='text'
                            className='form-control'
                            id='username'
                            placeholder='Enter Username'
                            onChange={(e) =>
                              setRegister({
                                ...register,
                                username: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='form-group'>
                          <label htmlFor='email'> Email</label>
                          <input
                            type='email'
                            className='form-control'
                            id='email'
                            placeholder='Enter  Email'
                            onChange={(e) =>
                              setRegister({
                                ...register,
                                email: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='form-group'>
                          <label htmlFor='password'> Password</label>
                          <input
                            type='password'
                            className='form-control'
                            id='password'
                            placeholder='Enter Password'
                            onChange={(e) =>
                              setRegister({
                                ...register,
                                password: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='form-group'>
                          <label htmlFor='phone'> Phone</label>
                          <input
                            type='phone'
                            className='form-control'
                            id='phone'
                            placeholder='Enter Phone'
                            onChange={(e) =>
                              setRegister({
                                ...register,
                                phone: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='form-group'>
                          <label htmlFor='city'> City</label>
                          <select
                            className='form-select'
                            onChange={(e) =>
                              setRegister({ ...register, city: e.target.value })
                            }
                          >
                            <option value='Jakarta'>Jakarta</option>
                            <option value='Bandung'>Bandung</option>
                            <option value='Jogjakarta'>Jogjakarta</option>
                          </select>
                        </div>
                      </div>
                      <div className='col-lg-12'>
                        <div className='form-group'>
                          <label htmlFor='address'> Address</label>
                          <textarea
                            className='form-control'
                            onChange={(e) =>
                              setRegister({
                                ...register,
                                address: e.target.value,
                              })
                            }
                          ></textarea>
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='form-group'>
                          <label htmlFor='gender'>Gender</label>
                          <br />
                          <input
                            type='radio'
                            name='gender'
                            value='male'
                            className='form-check-input mx-2'
                            checked={register.gender === 'male'}
                            onChange={genderChange}
                          ></input>
                          <label>Male</label>
                          <input
                            type='radio'
                            name='gender'
                            value='female'
                            className='form-check-input mx-2'
                            checked={register.gender === 'female'}
                            onChange={genderChange}
                          ></input>
                          <label>Female</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='card-footer'>
                    <button type='submit' className='btn btn-success'>
                      Register
                    </button>
                    <button type='submit' className='btn btn-danger mx-2'>
                      Back
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
