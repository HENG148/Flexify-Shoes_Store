import React from 'react'
import Logo from '../../../assets/Logo/logo.png'
// import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
// import SignUP from './LogIn_SignUp/Signup';
// import LogIn from './LogIn_SignUp/LogIn';

export default function LogPage() {
  return (
    <>
      <div className='grid justify-center '>
        <div className='bg-gray flex justify-center w-[119.5rem]'>
          <img src={Logo} alt='' width={180} />
        </div>
      </div>
    </>
  )
}
