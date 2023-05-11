import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { logOut, loginUser } from '../store/slices/userInfo.slice'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {

  const {register, handleSubmit} = useForm()

  const {token, user} = useSelector(store => store.userInfo)

  const dispatch = useDispatch()

  const submit = (data) =>{
   dispatch(loginUser(data))
  }

  const handleClickLoggout = () => {
    dispatch(logOut())
  }

  return (
    <main className='bg-slate-200 grid place-content-center px-2 min-h-screen'>
      {
        token ? (
          <section className='bg-white p-4 rounded-md w-[300px] h-[400px] text-center grid gap-4 font-bold'>
            <i className='bx bxs-user-circle text-6xl py-3' ></i>
            <h2>Welcome to your favorite store!</h2>
            <h3 className='capitalize'>{user?.firstName} {user?.lastName}</h3>
            <button onClick={handleClickLoggout} className='bg-red-500 text-white py-2 rounded-md block w-full'>Loggout</button>
          </section>
        ) : (
          <form onSubmit={handleSubmit(submit)} className='bg-white p-4 rounded-md max-w-[320px] grid gap-6'>
        <h2 className='text-2xl font-[500] text-gray-700'>Welcome! Enter your email and password to continue</h2>
        <section className='bg-blue-100 p-4 rounded-md py-2'>

          <h3 className=' text-center font-bold'>Test data</h3>

          <div className='flex gap-2 items-center'>
            <i className='bx bx-envelope text-xl'></i>
            <span>carlos@student.com</span>
          </div>

          <div className=' flex gap-2 items-center'>
            <i className='bx bx-lock-alt text-xl'></i>
            <span>1234</span>
          </div>

        </section>
        <div className='grid gap-1'>
          <label htmlFor="email">Email</label>
          <input className='border-[1px] border-gray-300 p-1 outline-none' id='email' type="email" {...register("email" , { required:true})} />
        </div>
        <div className='grid gap-1'>
          <label htmlFor="password">Password</label>
          <input className='border-[1px] border-gray-300 p-1 outline-none' id='password' type="password"  {...register("password" , { required:true})}/>
        </div>
        <button className='block w-full py-2 bg-red-500 text-white hover:bg-red-600 transition-colors'>Login</button>
        <span className='text-sm '>Don't have an account? <Link className='text-[400] text-blue-400' to="#">Sign up</Link> </span>
      </form>            
        )
      }
      
    </main>
  )
}

export default Login