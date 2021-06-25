import React from 'react'
import  Link from 'next/link'

const TabplusText = ({children, text1,text2,to}) => {
     return (
          <Link href={to}><a>
          <figure className='flex border-gray-200  border flex-col justify-center py-1 items-center'>
              <p className='inline-flex text-blue-500 p-2 rounded-2xl bg-white shadow-md'>
                    {children}
             </p>
               <figcaption className='text-xl font-semibold'>{text1}</figcaption>
               <figcaption className='text-xl font-semibold'>{text2}</figcaption>
          </figure>
          </a></Link>
     )
}
export default TabplusText
