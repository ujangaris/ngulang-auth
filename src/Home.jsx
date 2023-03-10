import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'
const Home = () => {
  // deklarasi hooks islogged
  const [isLogged, setIsLogged] = useState(false)
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
  return (
    <div>
      <div className='container-fluid banner'>
        <div className='row'>
          <div className='col-md-12'>
            <Navbar />
            {!isLogged && (
              <div className='col-md-8 offset-md-2 home'>
                <h1 className='text-center'>zANABULz</h1>
                <p className='text-center'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <Link to='/auth/register' className='btn btn-md text-center'>
                  {' '}
                  GET STARTED{' '}
                </Link>
              </div>
            )}
            {isLogged && (
              <div className='col-md-8 offset-md-2 home'>
                <h1 className='text-center'>zANABULz</h1>
                {/* tampilkan username yang tampil */}
                <p className='text-center'>
                  Welcome to zANABULz,{' '}
                  <span className='user'> {username}!</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
