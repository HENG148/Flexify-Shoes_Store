import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { useForm } from 'react-hook-form';
import Google from '../../../../assets/icons/google.png'
import Twitter from '../../../../assets/icons/twitter.png'
import Facebook from '../../../../assets/icons/facebook.png'
import Apple from '../../../../assets/icons/iphone.png'
// import { Link } from 'react-router-dom';

// let renderCount = 0;

export default function SignUP() {

  // const [name, setName] = useState('');
  // const [lastname, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPasword] = useState('');
  // const form = useForm();
  // const { register, control, handleSubmit } = form;

  // const onSubmit = (data) => {
  //   console.log('Sign In Success', data)
  // }

  // renderCount++;
  
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    // sendValidEmail()
  }

  return (
    <>
      <div className='h-[100rem]'>
        <form> 
          <div className='grid gap-y-4'>
            <div>
              <TextField
                {...register('user_name', {
                  require: true,
                })}
                className='w-full'
                name='name'
                value={formData.name}
                label="First Name*"
                onChange={handleChange}
              />
            </div>

            <div>
              <TextField
                className='w-full'
                name='lastName'
                value={formData.lastName}
                label="Last Name"
                onChange={handleChange}
              />
            </div>

            <div>
              <TextField
                {...register('user_email', {
                  require: true,
                  pattern: /^[\w-\.]+@(gmail+\.)+[\w-]{2,4}$/ // gmail only
                })}
                className='w-full'
                name='email'
                value={formData.email}
                label="Email Address*"
                onChange={handleChange}
              />
              {errors.user_email && <span className=' text-warning'>email not correct ( Gmail only )</span>}
            </div>

            <div>
              <TextField
                className='w-full'
                name='password'
                value={formData.password}
                type='password'
                label="Passwords*"
                onChange={handleChange}
              />
            </div>

            <div className='grid justify-center w-[23rem]'>
              <p className=' text-[13px] font-medium'>
                At least 8 character, 1 uppercase letter, 1 number & 1 symbol</p>
              <button className='bg-black text-white h-[3rem] rounded-md'>
                Sign Up</button>
              <p className='text-[13px] mt-2 text-dark-gray'>By signing up, you agree you've read and accepted our
                <span className='text-black font-semibold'> term and conditions.</span>Please see our 
                <span className='text-black font-semibold'> Privacy Policy</span> for information on how we process your data.</p>
            </div>
          </div>

          <div>
            <div className='flex items-center gap-7 mt-4'>
              <div className='bg-content h-[2px] w-full'></div>
              <p className='text-[0.8rem] font-medium'>OR</p>
              <div className='bg-content h-[2px] w-full'></div>
            </div>

            <div className=' grid justify-center gap-y-3 mt-6'>
              <div className='flex gap-7'>
                <div className='x flex items-center gap-3 w-full'>
                  <img src={Google} alt='Google' width={20} />
                  <p>Google</p>
                </div>
                <div className='x flex items-center gap-3 w-full'>
                  <img src={Facebook} alt='Facebook' width={20} />
                  <p>Facebook</p>
                </div>
              </div>

              <div className='flex gap-7 w-full'>
                <div className='x flex items-center gap-3 w-full'>
                  <img src={Apple} alt='Apple' width={20} />
                  <p>Apple</p>
                </div>
                <div className='x flex items-center gap-3 w-full'>
                  <img src={Twitter} alt='Twitter' width={20} />
                  <p>Twitter</p>
                </div>
              </div>
            </div>

            <div>
              <p>Already have an account?</p>
              <p>Log in</p>  /*Link */
            </div>
          </div>
        </form>
      </div>
    </>
  )
}