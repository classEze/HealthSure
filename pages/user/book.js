import React, {useState} from 'react'
import Textinput from 'top/components/textinput'
import { PaystackButton } from 'react-paystack'
import {useSelector} from 'react-redux'
import axios from 'axios'
import {useRouter} from 'next/router'
import HOC from 'top/components/authUserHOC'
import SideUser from 'top/components/sideuser'

const Book = () => {
     const Router = useRouter()
     const [center, setCenter] = useState('')
     const [type, setType] = useState('')
     const [date, setDate] = useState('')
     const [email, setEmail] = useState('')
     const [message, setMessage] = useState('')
     const state = useSelector(state=>state);

     const data ={
          center,
          type,
          date,
          email,
          amount:10000000,
          publicKey:process.env.PAYSTACK_PUB_KEY,
          onSuccess:(result)=>{
               alert("Payment Successful")
               axios.post('/api/book', {...data}, {headers:{authorization:`Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}`
          }})
               .then(res=>{
                    setMessage(res.data.message)
                    Router.replace('/user/dashboard')
               })
               .catch(err=>alert(err.message))
          },
          onClose:()=>alert(' You are closing payment, you have not booked yet.')
     }
     function handle_Booking(e){
          e.preventDefault();
          return;
     }
     return (
    <>
    {state.show && <SideUser />}
      <p className='text-red-500 text-xl text-center my-2'>{message}</p>
    <form  onSubmit={handle_Booking}>
      <h1 className='text-3xl font-semibold text-center'> Please Select your booking options below</h1>
    <select name="type" onChange={(e)=>setType(e.target[e.target.selectedIndex].value)}>
           <option value=""> What are you booking for ?</option>
           <option value="test"> Covid 19 test</option>
           <option value="vaccine"> Covid 19 Shot </option>
      </select>
      <Textinput setter={(e)=>setEmail(e.target.value)} placeholder='please enter your email address' label=" Your Email address" type="email" />
      <Textinput setter={(e)=>setDate(e.target.value)} label="Reserve a date" type="date" />
      <select name="booked"  onChange={(e)=>setCenter(e.target[e.target.selectedIndex].value)}>
           <option value=""> Please Select a Center </option>
           <option value="6083e300df87df3bc4dd2019"> Health Sure General Hospital </option>
           <option disabled value="Best"> Another Hospital </option>
      </select>
      <div>
     <PaystackButton
      text="Proceed"
       className='bg-blue-500 text-xl font-bold w-full py-4 text-white'
        {...data}/>
      </div>
    </form>
   </>
     )
}
export default HOC(Book)
