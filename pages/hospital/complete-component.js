import React, {useState} from 'react'
import Textinput from 'top/components/textinput'
import {useSelector} from 'react-redux'
import axios from 'axios'
import {useRouter} from 'next/router'
import HOC from 'top/components/authHospitalHOC'
import SideHos from 'top/components/sideHospital'

const CompleteTreatment = () => {
     const router = useRouter()
    
     const [comment, setComment] = useState('')
     const [drugs, setDrugs] = useState('')
     const [message, setMessage] = useState('')
     const state = useSelector(state=>state);

   
     function handle_Complete(e){
          e.preventDefault();
          axios.post(`/api/hospital/complete-treatment?id=${router.query.id}`, {comment,drugs}, {headers:{authorization:`Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}`}})
          .then(res=>{
               setMessage(res.data.message)
               setTimeout(()=>router.replace('/hospital/dashboard'), 2000)
          })
          .catch(err=>setMessage(err.message))
     }
     return (
    <>
    {state.show && <SideHos />}
      <p className='text-green-300 text-xl text-center my-2'>{message}</p>
    <form  onSubmit={handle_Complete}>
      <h1 className='text-3xl font-semibold text-center'> Please Enter details below to complete treatment records</h1>
      <div>
      <p> Any Comment ?? </p>
      <textarea placeholder='How was the scheduled visit' onChange={(e)=>setComment(e.target.value)} value={comment}  className='border p-4 w-full h-40' required>
      </textarea>
      </div>
      <Textinput name='drugs' setter={(e)=>setDrugs(e.target.value)} label='Drugs given' placeholder='comma separated list'/>
      {/* <div>
           <p> Upload treatment records here</p>
          <input name='file-record' type="file" disabled placeholder="Please upload treatment records"/>
      </div>  */}
      <div>
      <button className='bg-blue-500 text-xl font-bold w-full py-4 text-white' conClick={handle_Complete}>Save</button>
      </div>
    </form>
   </>
     )
}

export default HOC(CompleteTreatment)
