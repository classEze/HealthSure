import Head from 'next/head'
import Image from 'next/image'
import {useState, useCallback,useEffect} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import Textinput from '../../components/textinput'
import {useSelector} from 'react-redux'
import HomeNav from '../../components/HomeNav'


export default function Login() {
  const show = useSelector(state=>state.homeshow);
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  return(
    <>
    <main className="grid items-center">
    {show && <HomeNav /> }
    <form  onSubmit={()=>{}}>
      <h1 className='text-6xl font-bold text-center'> User Login</h1>
      <Textinput setter={(e)=>setEmail(e.target.value)} value={email} label="Email" type="email" />
      <Textinput setter={(e)=>setPassword(e.target.value)} value={password} label="Password" type="password" />
      <div>
      <button className='bg-blue-500 text-xl font-bold w-4/6 py-4 text-white text-'>Let's Go</button>
      </div>
    </form>
   </main>
   </>
  )   
}
Login.layout = 'home'

