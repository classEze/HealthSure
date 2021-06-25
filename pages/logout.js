import React from 'react'
import {useRouter} from 'next/router'

const Logout= () => {
     const Router = useRouter()
     if(typeof window == 'undefined') return null
     if(localStorage.getItem('userInfo')){
          localStorage.removeItem('userInfo')
          Router.replace('/')
     }
     else{
          Router.replace('/')
     }
     return (
       <main>
       </main> 
     )
}
export default Logout
