import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
const SideBar = () => {
     return (
          <>
          <section className='fixed top-20 left-0 h-screen z-10 w-screen'>
          <nav className='h-full w-2/6 bg-blue-500 text-white text-xl font-bold px-2'> 
           <div className='flex flex-col'>
               <Link href='/admin/profile'><a> Profile </a></Link>
               <Link href='/admin/create'><a> Create An Admin </a></Link>
               <Link href='/admin/bookings'><a> See all bookings </a></Link>
               <Link href='/admin/requests'><a> See Pending Requests </a></Link>
               <Link href='/admin/users'><a> See All Users </a></Link>
               <Link href='/admin/email'><a> Send Email to User </a></Link>
               <Link href='/logout'><a> Logout </a></Link>
           </div>
          </nav>
          </section>
       </>
     )
}

export default SideBar;
