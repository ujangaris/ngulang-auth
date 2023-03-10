import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { toast } from 'react-toastify'
import axios from 'axios'
const Register = () => {
  // deklarasi hooks login
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // buta validasi username and password
  const validate = () => {
    let result = true
    if (username === '' || username === null) {
      result = false
      toast.warning('Please enter a Username')
    }
    if (password === '' || password === null) {
      result = false
      toast.warning('Please enter a Password')
    }
    return result
  }
  //   pasang useNavigate dari react-router-dom
  const navigate = useNavigate()
  //   buat submitLogin
  const submitLogin = (e) => {
    e.preventDefault()
    // pasang validasi
    if (validate) {
      axios
        .get(
          `http://localhost:3001/users?username=${username}&&password=${password}`
        )
        .then((res) => {
          if (res.data.length > 0) {
            sessionStorage.setItem('username', res.data[0].username)
            toast.success('Berhasil login!')
            navigate('/')
          } else {
            toast.error('Username atau password salah!')
          }
        })
        .catch((err) => {
          toast.error('Gagal login!')
          console.log(err)
        })
    }
  }
  // protected redirect ketika sudah login
  useEffect(() => {
    if (sessionStorage.getItem('username')) {
      navigate('/')
    }
  }, [navigate])
  return (
    <>
      <div className='container-fluid banner'>
        <div className='row'>
          <div className='col-md-12'>
            <Navbar />
          </div>
          <div className='row'>
            <div className='col-md-4 offset-md-4'>
              <form className='container mt-5' onSubmit={submitLogin}>
                <div className='card'>
                  <div className='card-header'>
                    <h1>Form Login</h1>
                  </div>
                  <div className='card-body'>
                    <div className='col-md-12'>
                      <div className='form-group'>
                        <label>Username</label>
                        <input
                          type='text'
                          onChange={(e) => setUsername(e.target.value)}
                          className='form-control'
                        />
                      </div>
                      <div className='form-group'>
                        <label>Password</label>
                        <input
                          type='password'
                          onChange={(e) => setPassword(e.target.value)}
                          className='form-control'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='card-footer'>
                    <Link to='/' className='btn btn-secondary '>
                      back
                    </Link>
                    <button className='btn btn-success mx-2'>Login</button>
                    <Link to='/register' className='btn btn-primary'>
                      Register
                    </Link>
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
