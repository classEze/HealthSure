import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {useDispatch} from 'react-redux'
const SideAdmin = () => {
     const dispatch = useDispatch()
     function sendMessage(){
          dispatch({type:'setShow'}) 
     }

     return (
          <>
          <section className='fixed top-20 left-0 h-screen z-10 w-screen' onClick={sendMessage}>
          <nav className='h-full w-3/6 bg-blue-500 text-white text-xl font-bold px-2'> 
           <div className='flex flex-col'>
               <p><Link href='/admin/dashboard'><a> Dashboard </a></Link></p>
               <p><Link href='/coming'><a>Requests </a></Link></p>
              <p> <Link href='/logout'><a> Logout </a></Link></p>
           </div>
          </nav>
          </section>
       </>
     )
}

export default SideAdmin;
