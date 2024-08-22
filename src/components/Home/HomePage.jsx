import React from 'react'
import MainHeader from '../Header/MainHeader'
import MainFooter from '../Footer/Footer'
import NewArrived from '../DisplayType/NewArrived/Page'
import RecommendShoes from '../DisplayType/Recommend/Page'
import BasketballShoes from '../DisplayType/Basketball/Page'
import AdsText from '../Header/SubHead/AdsText'
import ImageSlide from '../ImageSlide'
import BrandSlide from '../BrandSlide'

export default function HomePage() {
  return (
    <>
      <div className='h-[1000rem]'>
        <MainHeader />

        <div>
          <AdsText />
          <ImageSlide />
          <BrandSlide />
        </div>

        <div className='grid gap-y-12 ml-[4.5rem] mr-[3rem] mt-[3rem]'>
          <NewArrived />
          <RecommendShoes />
          <BasketballShoes />
        </div>

        <div>
          <MainFooter />
        </div>
      </div>
    </>
  )
}
