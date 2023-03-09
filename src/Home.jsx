import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'
const Home = () => {
  return (
    <div>
      <div className='container-fluid banner'>
        <div className='row'>
          <div className='col-md-12'>
            <Navbar />
            <div className='col-md-8 offset-md-2 home'>
              <h1 className='text-center'>zANABULz</h1>
              <p className='text-center'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
              <Link to='#' className='btn btn-md text-center'>
                {' '}
                GET STARTED{' '}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
