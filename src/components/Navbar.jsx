import React, { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const Navbar = () => {
  // deklarasi hooks islogged
  const [isLogged, setIsLogged] = useState(false)
  // deklarasi hooks username
  const [username, setUsername] = useState('')
  // pasang useEffect  untuk memeriksa apakah ada data username yang tersimpan di session storage.
  useEffect(() => {
    // Membuat sebuah variabel dengan nama username, yang berisi data yang tersimpan di session storage dengan key 'username'.
    let username = sessionStorage.getItem('username')
    if (username !== '' && username !== null) {
      setIsLogged(true)
      setUsername(username.toUpperCase())
    } else {
      setIsLogged(false)
    }
  }, [])
  // pasang handleLogout
  const handleLogout = () => {
    sessionStorage.removeItem('username')
    setIsLogged(false)
    toast.info('Anda telah logout!')
    navigate('/login')
  }
  return (
    <>
      <nav className='navbar navbar-md'>
        <div className='navbar-brand'>
          <Link to='/' className='brand'>
            zANABULz
          </Link>
        </div>
        <ul className='nav'>
          <li className='nav-item'>
            <Link to='/' className='nav-link active'>
              {' '}
              Home{' '}
            </Link>
          </li>
          {!isLogged && (
            <>
              <li className='nav-item'>
                <Link to='/auth/login' className='nav-link'>
                  Login{' '}
                </Link>
              </li>
              <li className='nav-item '>
                <Link to='/auth/register' className='nav-link '>
                  {' '}
                  Register{' '}
                </Link>
              </li>
            </>
          )}
          {isLogged && (
            <>
              {/* tampilkan nama user yang login */}
              <li className='nav-item'>
                <span
                  className='nav-link fas fa-user mx-3 my-2'
                  style={{ color: '#e91d43' }}
                >
                  {' '}
                  {username}
                </span>
              </li>
              <li className='nav-item'>
                <Link to='#' className='nav-link' onClick={handleLogout}>
                  {' '}
                  Logout{' '}
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
