import {Link} from 'react-router-dom'

export default function Signup() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl text-center font-semibold my-7'>Signup</h1>
    <form className='flex flex-col gap-4' >
      <input type="text" placeholder='Username' id='username' className='bg-slate-100 p-3 rounded-lg ' />
      <input type="text" placeholder='Email' id='email'  className='bg-slate-100 p-3 rounded-lg ' />
      <input type="password" placeholder='Fill password' id='password'  className='bg-slate-100 p-3 rounded-lg ' />
      <button  className='bg-slate-700 text-white p-3 rounded-sm uppercase hover:opacity-95 disabled:opacity-80'>Signup</button>
    </form>
    <div className='flex gap-5 mt-8'>
      <p>Make an account </p>
      <Link to='/sign-in'>
      <span className='text-blue-500'>Sigin</span>
      </Link>
      
    </div>
    </div>
  )
}
