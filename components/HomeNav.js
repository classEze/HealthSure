import React, {useState} from 'react'
import Link from 'next/link'

const HomeNav = () => {
     const [showChildren, setShowChildren] = useState(false)

     return (
          <div className='bg-blue-200 flex flex-col font-semibold text-2xl px-4 '>
               <Link href='/about'><a> About Us </a></Link>
               <Link href='/faq'><a> FAQ </a></Link>
               <span className='cursor-pointer' onClick={()=>setShowChildren(!showChildren)}> Login { showChildren? "🔼" : "🔽" } </span>
                {showChildren &&
                <>
                 <Link href='/admin/login' ><a className='ml-4'>Admin</a></Link>
                <Link href='/user/login' ><a className='ml-4'>User</a></Link>
                </>
                }
                <Link href='/user/register'><a> Register </a></Link>

          </div>
     )
}

export default HomeNav
