import React from 'react'
import { Link } from 'react-router-dom';


export default function First() {
  return (
    <div className='w-12/12 mx-auto'>
    <div className='lg:w-3/12 md:w-3/12 w-10/12 mx-auto mt-16 md:pt-96 pt-40 px-6 border '>
       <h1 className='pt-16 md:text-3xl text-xl font-extrabold'>Welcome to PopX</h1>
       <p className='text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit<br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
       <Link to="/Signup" >  <button className='w-full  mt-4 text-white bg-customPurple rounded-sm py-2 '>Create Account</button></Link><br/>
       <Link to="/Signin" > <button className='w-full  mt-2 text-white bg-cebafb rounded-sm py-2 mb-8'>Already Registered?Login</button></Link>  
    
    </div>

   </div>
  )
}
