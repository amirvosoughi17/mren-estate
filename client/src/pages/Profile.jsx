import React from 'react'
import {FaRegUserCircle} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useRef } from 'react'

const Profile = () => {
  const {currentUSer} = useSelector((state) => state.user)
  const fileRef = useRef(null);
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-bold text-center my-7'>Profile</h1>
      <from className="flex flex-col gap-4 ">
        <input type='file' ref={fileRef} hidden accept='image/*'  />
        <img onClick={() => fileRef.current.click()} className='self-center cursor-pointer mt-2' size={100} />
        <input placeholder='username' id='username'  className='border p-3 rounded-lg'/>
        <input placeholder='Email' id='email'  className='border p-3 rounded-lg'/>
        <input placeholder='password' id='password'  className='border p-3 rounded-lg'/>
        <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'>update</button>
      </from>
      <div className='flex justify-between mt-6'>
        <span className='text-red-700 cursor-pointer'>Delete Account </span>
        <span className='text-red-700 cursor-pointer'>Sign out </span>
      </div>
    </div>
  )
}

export default Profile
