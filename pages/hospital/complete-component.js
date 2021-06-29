import React, {useState} from 'react'
import Textinput from 'top/components/textinput'
import { PaystackButton } from 'react-paystack'
import {useSelector} from 'react-redux'
import axios from 'axios'
import mongoose from 'mongoose';
import {useRouter} from 'next/router'
import HOC from 'top/components/authHospitalHOC'
import connect_DB from 'top/db'
import SideHos from 'top/components/sideHospital'

const CompleteTreatment = () => {
     const router = useRouter()
    
     const [comment, setComment] = useState('')
     const [message, setMessage] = useState('')
     const state = useSelector(state=>state);

   
     function handle_Complete(e){
          e.preventDefault();
          return;
     }
     return (
    <>
    {state.show && <SideHos />}
      <p className='text-red-500 text-xl text-center my-2'>{message}</p>
    <form  onSubmit={handle_Complete}>
      <h1 className='text-3xl font-semibold text-center'> Please Enter details below to complete treatment records</h1>
      <div>
      <p> Any Comment ?? </p>
      <textarea placeholder='How was the scheduled visit' onChange={(e)=>setComment(e.target.value)} value={comment}  className='border p-4 w-full h-40' required>
      </textarea>
      </div>
      <div>
          <p> Upload treatment records here</p>
          <input name='file-record' type="file" placeholder="Please upload treatment records"/>
      </div>
      <div>
      <button className='bg-blue-500 text-xl font-bold w-full py-4 text-white' conClick={handle_Complete}>Save</button>
      </div>
    </form>
   </>
     )
}

export default HOC(CompleteTreatment)
