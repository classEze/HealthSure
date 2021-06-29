import {useState, useCallback,useEffect} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import Textinput from '../components/textinput'
import {useSelector} from 'react-redux'
import HomeNav from '../components/HomeNav'
import axios from 'axios'
import {useRouter} from 'next/router'

export default function Login(){
  const router = useRouter()
  const show = useSelector(state=>state.homeshow);
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [type, setType] = useState('')
  const [message, setMessage] = useState('')

  async function  handle_Login (e) {
     e.preventDefault();
    axios.post('/api/login' , { email, password, type})
    .then(res=>{
      localStorage.setItem('userInfo', JSON.stringify({
        role:res.data.user?.role,
        token:res.data.token,
        id:res.data.user.id}))
        //router.push(`${res.data.user.role}/dashboard?token=${res.data.token}`)
      window.location.assign(`https://health-sure.vercel.app/${res.data.user.role}/dashboard?token=${res.data.token}`)
    })
    .catch(err=>{
      setMessage(err.message)
    })
  }
  return(
    <>
    <main className="grid items-center">
    {show && <HomeNav />}
    <p className="text-center my-2 text-green-300 font-bold"> {router.query?.message}  </p>
    <form  onSubmit={handle_Login}>
      <h1 className='text-3xl font-semibold text-center'> Login</h1>
      <p className='text-red-500 text-xl text-center my-2'>{message}</p>
      <Textinput setter={(e)=>setEmail(e.target.value)} value={email} label="Email" type="email" placeholder='please input registered email' />
      <Textinput setter={(e)=>setPassword(e.target.value)} value={password} label="Password" type="password" placeholder='please input password' />
      <div className=' radio-div flex justify-between bg-blue-500 p-2 text-white font-semibold'> 
         <p > <label htmlFor="user">User</label> <input type="radio" name="type" value='user' id="user" onClick={()=>setType('user')}/> </p>
         <p > <label htmlFor="hospital">Admin_1</label>  <input type="radio" value='hospital' name="type" id="hospital" onClick={()=>setType('hp_admin')}/> </p>
         <p > <label htmlFor="admin">Admin_2</label>  <input type="radio" name="type" value='admin' id="admin" onClick={()=>setType('app_admin')}/> </p>
        </div>
      <div>
      <button className='bg-blue-500 text-xl font-bold w-full py-4 text-white text-'>Let's Go</button>
      </div>
    </form>
   </main>
   </>
  )
}
Login.layout = 'home'
