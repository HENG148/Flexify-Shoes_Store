import React from 'react'
import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  return (
    <>
      <div className='gg'>
        <input
          className='hh'
          type='text' placeholder='Search for Brands, Color, etc....' />
        <div className='rr'>
          <IoSearch className='ff' />
        </div>
      </div>
    </>
  )
}
