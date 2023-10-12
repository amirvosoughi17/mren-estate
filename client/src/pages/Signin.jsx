import React from 'react'
import { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signInStart , signInFailure, signInSuccess } from '../redux/user/userSlice'
import OAuth from '../components/OAuth'

const Signin = () => {
  const dispatch = useDispatch();
  const [formData , setFormData] = useState({})
  const {loading , error} = useSelector((state) => state.user)
  const navigate = useNavigate() 
  const handleChange = (e) => {
    setFormData({
      ...formData ,
      [e.target.id] : e.target.value
    })
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      dispatch(signInStart());
      const res = await fetch ('/api/auth/signin' ,
      {
        method : 'POST' ,
        headers : {
          'Content-type' : 'application/json'
        },
        body : JSON.stringify(formData)
      });
      const data = await res.json();
      console.log(data)
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
    }
    dispatch(signInSuccess(data))
    navigate('/')
    }catch (error){
      dispatch(signInFailure(error.message))
      setError(error.message)
    }
  }

  console.log(formData)

  return (
    <div className='p-3 max-w-lg mx-auto'> 
      <h1 className='text-2xl text-center font-semibold my-7'>Sign in</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
        <input type="email" placeholder='email' className='border p-3 rounded-lg'  id='email' onChange={handleChange} />
        <input type="password" placeholder='password' className='border p-3 rounded-lg'  id='password' onChange={handleChange} />
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 '>
          {loading ? 'loading..' : 'Sign in'}
          </button>
        <OAuth />
      </form>
      <div className=" flex gap-1 mt-5 ">
        <p>Don't Have an account ?</p>
        <Link className='text-blue-700' to='/signup'>Sign up</Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}

export default Signin
