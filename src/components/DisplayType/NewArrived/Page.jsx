import React, { useEffect, useState } from 'react'
import { HiMiniQuestionMarkCircle } from "react-icons/hi2";
import { Product } from '../../../data/ProductData';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';

const NewArrived = () => {

  const [state, setState] = useState([])
  const [hasError, setHasError] = useState(false)
  useEffect(() => {
    fetch(Product)
      .then(res => setState(res))
      .catch(err => setHasError(true))
  })

  const title = 'These Products are inspired by your previous browsing history'
  const recommendData = Product.find(type => type.recommend)?.recommend || [];
  return (
    <>
      <div>
        <div className='flex items-center gap-4'>
          <p className='text-[1.1rem]'>Recommend for You</p>
          <Tooltip title={title} arrow>
            <div>
              <HiMiniQuestionMarkCircle className='text-[1.3rem]'/>
            </div>
          </Tooltip>
        </div>

        <div>
          <div className='flex items-center gap-[3rem]'>
            {recommendData.map((items, idx) => (
              <div className='w-full' key={idx}>
                <Link to={`${items.id}`}>
                  <img className="hover:scale-[1.15] duration-[0.3s]" src={items.image} alt={items.title} width={items.width} />
                  <div className='pt-3'>
                    <p>{items.title} </p>
                    <p>{items.low} </p>
                    <p className='text-[1.3rem] font-price text-price font-semibold pl-1'>{items.price} </p>
                  </div>
                </Link>
              </div>
            ))}
            {/* {recommendData.length > 0 ? (
              recommendData.map((items, idx) => (
                <div className='w-full' key={idx}>
                  <Link to={items.path}>
                    <img className="hover:scale-[1.15] duration-[0.3s]" src={items.image} alt={items.title} width={items.width} />
                  <p>{items.title} </p>
                  <p>{items.low} </p>
                  <p className='text-[1.3rem] font-price text-price font-semibold pl-1'>{items.price} </p>
                  </Link>
                </div>
              ))
            ) : (
                <p>sdfwfwef</p>
            )} */}

            {/* {recommendData.length > 0 ? (
              recommendData.map((items) => (
                <div key={items.id}>
                  <p>Product ID: {items.id}</p>
                </div>
              ))
            ) : (
              <p>Hello </p>
            )}           */}
          </div>
        </div>
      </div>
    </>
  )

}

export default NewArrived;

// {Recommend.map((shoes, idx) => (
//               <div className='w-full' key={idx}>
//                 <Link to={shoes.path}>
//                   <img className="hover:scale-[1.15] duration-[0.3s]" src={shoes.image} alt={shoes.title} width={shoes.width} />
//                   <p>{shoes.title} </p>
//                   <p>{shoes.low} </p>
//                   <p className='text-[1.3rem] font-price text-price font-semibold pl-1'>{shoes.price} </p>
//                 </Link>
//               </div>
//             ))}
