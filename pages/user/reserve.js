import React, {useState} from 'react'
import Textinput from 'top/components/textinput'
import { PaystackButton } from 'react-paystack'
import {useSelector} from 'react-redux'
import axios from 'axios'
import mongoose from 'mongoose';
import {useRouter} from 'next/router'
import HOC from 'top/components/authUserHOC'
import SideUser from 'top/components/sideuser'
import Hospital from 'top/Models/hospital'
import connect_DB from 'top/db'

const Book = ({hospitals}) => {
     const Router = useRouter()
     const [center, setCenter] = useState('')
     const [type, setType] = useState('')
     const [date, setDate] = useState('')
     const [email, setEmail] = useState('')
     const [message, setMessage] = useState('')
     const [complaint, setComplaint] = useState('')
     const state = useSelector(state=>state);

     const data ={
          complaint,
          center,
          type,
          date,
          email,
          amount:500000,
          publicKey:process.env.PAYSTACK_PUB_KEY,
          onSuccess:(result)=>{
               alert("Payment Successful")
               axios.post('/api/book-treatment', {...data}, {headers:{authorization:`Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}`
          }})
               .then(res=>{
                    setMessage(res.data.message)
                    Router.replace('/user/dashboard')
               })
               .catch(err=>alert(err.message))
          },
          onClose:()=>{
              alert(' You are closing payment, you have not booked yet.')
     }}
     function handle_Booking(e){
          e.preventDefault();
          return;
     }
     return (
    <>
    {state.show && <SideUser />}
      <p className='text-red-500 text-xl text-center my-2'>{message}</p>
    <form  onSubmit={handle_Booking}>
      <h1 className='text-3xl font-semibold text-center'> Please Enter your booking details below</h1>
    <select name="type" onChange={(e)=>setType(e.target[e.target.selectedIndex].value)}>
           <option value=""> What do you want to be treated for ?</option>
           <option value="malaria"> Malaria</option>
           <option value="typhoid"> Typhoid </option>
           <option value="gonorrhea"> Gonorrhea </option>
           <option value="diarrhoea"> Diarrhoea </option>
           <option value="other"> Other </option>
      </select>
      <div>
      <p> Let us know how you feel: </p>
      <textarea placeholder='feel free, lets hear your complaint...' onChange={(e)=>setComplaint(e.target.value)} value={complaint}  className='border w-full p-4 h-40' required>
      </textarea>
      </div>
      <Textinput setter={(e)=>setEmail(e.target.value)} placeholder='please enter your email address' label=" Your Email address" type="email" />
      <Textinput setter={(e)=>setDate(e.target.value)} label="Reserve a date" type="date" />
      <select name="booked"  onChange={(e)=>setCenter(e.target[e.target.selectedIndex].value)}>
          <option value=""> Please select one of our centers</option>
        {hospitals.map(hospital=><option value={hospital._id} key={hospital._id}>{hospital.brand} ({hospital.address})</option>)}
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

export async function getServerSideProps(){
    connect_DB(mongoose)
    const fetchedHospitals = await Hospital.find()
    const hospitals = JSON.parse(JSON.stringify(fetchedHospitals))
    return{
        props:{
            hospitals
        }
    }
}
export default HOC(Book)
