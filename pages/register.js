import {useState} from 'react'
import { GiTrumpet } from 'react-icons/gi';
import Head from 'next/head'
import {useSelector} from 'react-redux';
import Button from '../components/button';
import HomeNav from '../components/HomeNav';
import UserForm from 'top/components/userForm';
import HospitalForm from 'top/components/hospitalForm';
export default function Register() {
  const show = useSelector(state=>state.homeshow);
  const [user, setUser] = useState('user')

 
  return(
    <>
    <main>
    {show && <HomeNav /> }

    <section className="my-4 w-11/12 mx-auto flex justify-between self-end">
          <Button text="User" setter={()=>setUser('user')}/>
          <Button text="Hospital" setter={()=>setUser('hospital')}/>
      </section>
    {user=='user' ? <UserForm /> : <HospitalForm />}
   </main>
   </>
  )    
}
Register.layout = 'home'

