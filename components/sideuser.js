import React, {useState} from 'react'
import Link from 'next/link'
const SideUser = () => {
     return (
          <>
          <section className='fixed top-20 left-0 h-screen z-10 w-screen'>
          <nav className='h-full w-2/6 bg-blue-400 text-white text-xl font-bold px-4'> 
           <div>
               <Link href='/user/profile'><a> Profile</a></Link>
               <Link href='/user/search'><a> View Test Centers </a></Link>
                <Link href=''><a> View Vaccination Centers</a></Link> 
               <Link href=''><a> See My Bookings </a></Link>
               <Link href=''><a> Share My Exaerience</a></Link>
               <Link href=''><a> View My Medical History</a></Link>
               <Link href='/logout'><a> Logout </a></Link>
           </div>
          </nav>
          </section>
       </>
     )
}
export default SideUser;
