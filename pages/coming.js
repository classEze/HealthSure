import React from 'react'
import {useRouter} from 'next/router'
const Coming = () => {
     const Router = useRouter()
     return (
          <main className='flex justify-center flex-col items-center'>
            <p className='text-2xl coming-feature font-bold text-green-400'> This Feature is being developed. (:: </p>
            <button onClick={(e)=>Router.back()} className='p-2 bg-green-600 text-white font-bold'> Go Back </button>
          </main>
     )
}

export default Coming
