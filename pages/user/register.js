import Head from 'next/head'
import Image from 'next/image'
import {useState, useCallback,useEffect} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {useSelector} from 'react-redux'
import HomeNav from '../../components/HomeNav'


export default function Register() {
  const show = useSelector(state=>state.homeshow);

  return(
    <>
    <main>
    {show && <HomeNav /> }
    <form action="">
      <h1 className='text-center text-2xl font-bold'> User Registration</h1>
      <div>
        <label htmlFor="firstname"></label>
      <input type="text" name='firstname' value='' placeholder='Firstname'/>
      </div>
      <div>
      <label htmlFor="surname"></label>
      <input type="text" name='surname' value='' placeholder='Surname'/>
      </div>
      <div>
      <label htmlFor="state"></label>
      <input type="text" name='state' value='' placeholder='State'/>
      </div>
      <div>
      <label htmlFor="lga"></label>
      <input type="text" name='lga' value='' placeholder='local govt'/>
      </div>
      <div>
      <label htmlFor="email"></label>
      <input type="email" name='email' value='' placeholder='Email'/>
      </div>
      <div>
      <label htmlFor="age"></label>
      <input type="number" name='age' value='' placeholder=''/>
      </div>
      <div>
        <button className='bg-blue-500 w-4/6 py-4 text-white font-bold'> Submit</button>
      </div>

    </form>
   </main>
   </>
  )    
}
Register.layout = 'home'

