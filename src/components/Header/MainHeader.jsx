import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo/logo.png'
import SearchBar from './Search/Searchbar'

export default function MainHeader() {
  return (
    <>
      <div>
        <div className='flex items-center gap-10 ml-9 mt-2'>
          <div>
            <Link to='/'>
              <img src={Logo} alt='' width={200} />
            </Link>
          </div>

          <div>
            <SearchBar />
          </div>

          <div className='flex items-center gap-3 ml-7'>
            <div className='flex gap-8 text-[1.2rem]'>
              <Link
                to='/News' 
                className='hover:text-light-blue duration-[0.3s]'>
                News
              </Link>
              <Link
                to='/News' 
                className='hover:text-light-blue duration-[0.3s]'>
                News
              </Link>
              <Link
                to='/News' 
                className='hover:text-light-blue duration-[0.3s]'>
                News
              </Link>
              <Link
                to='/News' 
                className='hover:text-light-blue duration-[0.3s]'>
                News
              </Link>
              <Link
                to='/News' 
                className='hover:text-light-blue duration-[0.3s]'>
                News
              </Link>
            </div>

            <div className='text-[1.1rem] flex gap-5 ml-7'>
              <Link to='LogPage' className='log-link'>
                <button className='login-sign'>Sign Up</button>
              </Link>
              <Link to='LogPage' className='log-link log-link-s'>
                <button className='login'>Log In</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='flex justify-center bg-primary-gray pt-2 pb-2'>
          <div className='flex gap-8 text-[1.2rem] font-medium font-main'>
            <Link to='/All_Brands' className='oo'>Brands</Link>
            <Link to='/Men_Type' className='oo'>Men</Link>
            <Link to='/Women' className='oo'>Women</Link>
            <Link to='/Kids' className='oo'>Kids</Link>
            <Link to='/Accessories' className='oo'>Accessories</Link>
            <Link to='/Sneaker' className='oo'>Sneaker</Link>
            <Link to='/More_Categories' className='oo'>More Categories</Link>
          </div>
        </div>
      </div>
    </>
  )
}
