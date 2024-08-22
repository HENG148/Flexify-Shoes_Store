import React from 'react'
import { FooterList } from '../../data/FooterData'

export default function MainFooter() {

  // const Jordan = FooterList.find(type => type.AirJordan)?.AirJordan || [];
  // const NewBalance = FooterList.find(type => type.NewBalance)?.NewBalance || [];
  // const Popular = FooterList.find(type => type.Popular)?.Popular || [];
  // const Apparel = FooterList.find(type => type.Apparel)?.Apparel || [];
  // const Nike = FooterList.find(type => type.Nike)?.Nike || [];
  // const Sell = FooterList.find(type => type.Sell)?.Sell || [];
  // const Women = FooterList.find(type => type.Women)?.Women || [];
  // const Accessories = FooterList.find(type => type.Accessories)?.Accessories || [];
  // const About = FooterList.find(type => type.About)?.About || [];

  // const categories = ['AirJordan', 'NewBalance', 'Popular', 'Apparel', 'Nike', 'Sell', 'Women', 'Accessories', 'About'];
  // categories.forEach(category => {
  //   result[category] = FooterList.find(type => type[category])?.[category] || [];
  // });
  // const { Air}

  const getCategory = (category) => FooterList.find(type => type[category])?.[category] || [];
  const categories = {
    Jordan: getCategory('AirJordan'), 
    NewBalance: getCategory('NewBalance'),
    Popular: getCategory('Popular'),
    Apparel: getCategory('Apparel'),
    Nike: getCategory('Nike'),
    Sell: getCategory('Sell'),
    Women: getCategory('Women'),
    Accessories: getCategory('Accessories'),
    About: getCategory('About')
  }

  return (
    <>
      <div className='bg-footer text-white grid justify-items-center pt-14 pb-14 mt-[10rem]'>
        <div>
          <p className='text-[2.5rem] pb-8'>Flexify. Access the Now.</p>

          <div className='flex gap-[5rem] pb-10'>
            <div>
              <p className='text-[16px] font-semibold pb-3'>Air Jordan</p>
              <div className='grid gap-y-[0.6rem]'>
                {categories.Jordan.map((items, idx) => (
                  <div key={idx}>
                    <p>{items.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className='text-[16px] font-semibold pb-3'>New Balance</p>
              <div className='grid gap-y-[0.6rem]'>
                {categories.NewBalance.map((items, idx) => (
                  <div key={idx}>
                    <p>{items.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className='text-[16px] font-semibold pb-3'>Popular</p>
              <div className='grid gap-y-[0.6rem]'>
                {categories.Popular.map((items, idx) => (
                  <div key={idx}>
                    <p>{items.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className='text-[16px] font-semibold pb-3'>Apparel</p>
              <div className='grid gap-y-[0.6rem]'>
                {categories.Apparel.map((items, idx) => (
                  <div key={idx}>
                    <p>{items.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className='text-[16px] font-semibold pb-3'>Nike</p>
              <div className='grid gap-y-[0.6rem]'>
                {categories.Nike.map((items, idx) => (
                  <div key={idx}>
                    <p>{items.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className='text-[16px] font-semibold pb-3'>Selling</p>
              <div className='grid gap-y-[0.6rem]'>
                {categories.Sell.map((items, idx) => (
                  <div key={idx}>
                    <p>{items.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='flex gap-[5rem]'>
            <div>
              <p className='text-[16px] font-semibold pb-3'>Women</p>
              <div className='grid gap-y-[0.6rem]'>
                {categories.Women.map((items, idx) => (
                  <div key={idx}>
                    <p>{items.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className='pl-4'>
              <p className='text-[16px] font-semibold pb-3'>Accessories</p>
              <div className='grid gap-y-[0.6rem]'>
                {categories.Accessories.map((items, idx) => (
                  <div key={idx}>
                    <p>{items.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className='ml-[-3.2rem]'>
              <p className='text-[16px] font-semibold pb-3'>About</p>
              <div className='grid gap-y-[0.6rem]'>
                {categories.About.map((items, idx) => (
                  <div key={idx}>
                    <p>{items.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
