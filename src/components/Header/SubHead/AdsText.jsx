import React from 'react'
import Marquee from 'react-fast-marquee'

export default function AdsText() {
  return (
    <>
      <Marquee className='w-full border-[1.5px] pt-1 pb-1 border-l-0 border-r-0 mt-2'>
        <div className='font-text text-[1.1rem]'>
          <text-main>You'll got free delivery if you spend on your shopping more than $50</text-main>
        </div>
      </Marquee>
    </>
  )
}