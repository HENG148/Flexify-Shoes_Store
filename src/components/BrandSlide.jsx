import React from 'react'
import Marquee from 'react-fast-marquee'
import { SlideImage } from '../data/slideImage'

export default function BrandSlide() {
  return (
    <>
      <div className='grid justify-items-center mt-9' data-aos="fade-up">
        <p className='text-[1.9rem] font-text font-extrabold'>Shop by Brands</p>
        <Marquee>
          <div className='flex items-center gap-[6rem] mt-8'>
            {SlideImage.map((images, idx) => (
              <img src={images.image} key={idx} alt={images.title} width={images.width} />
            ))}
          </div>
        </Marquee>
      </div>
    </>
  )
}
