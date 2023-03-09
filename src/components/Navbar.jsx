import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
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

          <li className='nav-item'>
            <Link to='#' className='nav-link'>
              Login{' '}
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/auth/register' className='nav-link'>
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
    </>
  )
}

export default Navbar
