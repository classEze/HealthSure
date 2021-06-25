import React, {useState} from 'react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
const SideUser = () => {
   const dispatch = useDispatch()
   function sendMessage(){
      dispatch({type:'setShow'}) 
 }

     return (
          <>
          <section className='fixed top-20 left-0 h-screen z-10 w-screen' onClick={sendMessage}>
          <nav className='h-full w-3/6 bg-blue-400 text-white text-xl font-bold px-4'> 
           <div>
              <p> <Link href='/user/profile'><a> My Profile</a></Link>  </p>
              <p> <Link href='/user/dashboard'><a> Dashboard</a></Link> </p>
              <p> <Link href='/logout'><a> Logout </a></Link> </p>
           </div>
          </nav>
          </section>
       </>
     )
}
export default SideUser;
