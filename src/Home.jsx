import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <div className='container-fluid banner'>
        <div className='row'>
          <div className='col-md-12'>
            <nav className='navbar navbar-md'>
              <div className='navbar-brand'>
                <Link to='/' className='brand'>zANABULz</Link>
              </div>
              <ul className='nav'>
                <li className='nav-item'>
                  <Link to='/' className='nav-link active'>
                    {' '}
                    Home{' '}
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link to='#' className='nav-link'>
                    Login{' '}
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='#' className='nav-link'>
                    {' '}
                    Register{' '}
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link to='#' className='nav-link'>
                    {' '}
                    Logout{' '}
                  </Link>
                </li>
              </ul>
            </nav>
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
