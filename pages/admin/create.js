import {useState, useCallback,useEffect} from 'react'
import Textinput from 'top/components/textinput'
import {useSelector} from 'react-redux'
import axios from 'axios'
import {useRouter} from 'next/router'
import HOC from 'top/components/authAdminHOC'
import SideAdmin from 'top/components/sideadmin'

function Create(){
  const state = useSelector(state=>state)

  const Router = useRouter()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [name,setName] = useState('')
  const [phone,setPhone] = useState('')
  const [address,setAddress] = useState('')
  const [message, setMessage] = useState('')
  const token = state.user.token

  function  handle_Create (e) {
     e.preventDefault();
    axios.post("/api/admin/create" , {name, email, password, phone, address}, {headers:{'authorization':`Bearer ${token}`}})
    .then(res=>{
      alert(res.data.message)
      res.data.message='unauthorized' && Router.replace('/admin/dashboard')
    })
    .catch(err=>alert(err.message))
  }
  return(
    <>
    <main className="grid items-center">
    {state.show && <SideAdmin />}
    <form  onSubmit={handle_Create}>
      <h1 className='text-3xl font-semibold text-center'> Create An Admin</h1>
      <p className='text-red-500 text-xl text-center my-2'>{message}</p>
      <Textinput setter={(e)=>setName(e.target.value)} value={name} label="Name" placeholder='please enter user fullname' />
      <Textinput setter={(e)=>setEmail(e.target.value)} value={email} label="Email" type="email" placeholder='please enter user email address' />
      <Textinput setter={(e)=>setPassword(e.target.value)} value={password} label="Password" placeholder='please enter user password' type="password" />
      <Textinput setter={(e)=>setPhone(e.target.value)} value={phone} label="Phone" type="number" placeholder='please enter user phone no' />
      <Textinput setter={(e)=>setAddress(e.target.value)} value={address} label="Address" placeholder='please enter user address' />
      <div>
      <button className='bg-blue-500 text-xl font-bold w-full py-4 text-white text-'> Create </button>
      </div>
    </form>
   </main>
   </>
  )
}
export default HOC(Create)