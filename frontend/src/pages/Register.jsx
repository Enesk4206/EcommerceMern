import React, { useState } from 'react'
import { Link } from "react-router-dom"
import register from "../assets/register.webp"
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
  }
  return (
    <div className='flex'>
      <div className='w-full md:1/2 flex flex-col justify-center items-center p-8 md:p-12'>
        <form className='w-full max-w-md bg-white p-8 rounded-lg border shadow-sm' onSubmit={handleSubmit}>
          <div className='flex justify-center mb-6'>
            <h2 className='text-xl font-medium'>Rabbit</h2>
          </div>
          <h2 className='text-2xl font-bold text-center mb-6'> Hey There! 👋</h2>
          <p className='text-center mb-6'>
            Enter name, username and password to login
          </p>
          <div className='mb-4'>
            <label className='block text-sm font-semibold mb-2'>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full p-2 border rounded'
              placeholder='Enter your name '
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-semibold mb-2'>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full p-2 border rounded'
              placeholder='Enter your email address'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-semibold mb-2'>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full p-2 border rounded'
              placeholder='Enter your password'
            />
          </div>
          <button
            type='submit'
            className='w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition'
          >
            Sign Up
          </button>
          <p className='mt-6 text-center text-sm'>
            Already have an account? {" "}
            <Link to={"/login"} className='text-blue-500'>
              Login
            </Link>
          </p>
        </form>
      </div>




      <div className='hidden md:block w-1/2 bg-gray-800'>
        <div className='h-full flex flex-col justify-center items-center'>
          <img src={register} alt="Login to Account" className='h-[750px] w-full object-cover' />
        </div>
      </div>
    </div>
  )
}

export default Register