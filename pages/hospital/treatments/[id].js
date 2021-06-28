import connect_DB from 'top/db'
import mongoose from 'mongoose'
import { useState } from 'react';
import Treatment from 'top/Models/treatments'
import SideUser from 'top/components/sideuser'
import { useSelector } from 'react-redux'
import {formatRelative} from 'date-fns'
import HOC from 'top/components/authHospitalHOC'
import axios from 'axios'



const Treatments = ({pendingTreatments, acceptedTreatments, completedTreatments, error}) => {
     const state = useSelector(state=>state)
     const [branch, setBranch] = useState(0)
     const [message, setMessage] = useState('')

     function delete_Record(e){
          const id = e.target.dataset.identifier
          axios.post(`/api/hospital/delete-record?id=${id}`, {}, {headers:{authorization:`Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}`}})
          .then(res=>{
               setMessage(res.data.message)
               setTimeout(()=>window.location.assign('https://health-sure.vercel.app/hospital/dashboard'), 2000)
          })
          .catch(err=>setMessage(err.message))
     }
     function accept_Booking(e){
          const id = e.target.dataset.identifier
          axios.post(`/api/hospital/accept-booking?id=${id}`, {}, {headers:{authorization:`Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}`}})
          .then(res=>{
               setMessage(res.data.message)
               setTimeout(()=>window.location.assign('https://health-sure.vercel.app/hospital/dashboard'), 2000)
          })
          .catch(err=>setMessage(err.message))
     }
     function complete_Booking(e){
          const id = e.target.dataset.identifier
          axios.post(`/api/hospital/complete-treatment?id=${id}`, {}, {headers:{authorization:`Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}`}})
          .then(res=>{
               setMessage(res.data.message)
               setTimeout(()=>window.location.assign('https://health-sure.vercel.app/hospital/dashboard'), 2000)
          })
          .catch(err=>setMessage(err.message))
     }
     function clear_Record(e){
          const id = e.target.dataset.identifier
          axios.post(`/api/hospital/clear-record?id=${id}`, {}, {headers:{authorization:`Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}`}})
          .then(res=>{
               setMessage(res.data.message)
               setTimeout(()=>window.location.assign('https://health-sure.vercel.app/hospital/dashboard'), 2000)
          })
          .catch(err=>setMessage(err.message))
     }
     return (
          <>
          <main>
          <p className='text-center text-xl mt-2 border-b font-bold'> Your Treatment Schedule </p>
               {state.show && <SideUser />}
               <section className='p-2 bg-blue-500 text-white'>
               <p className='text-center font-bold text-xl uppercase'> TREATMENTS</p>
            <div className='px-4 items-end mt-2 filter-buttons flex justify-between'>
                 <p style={{ borderBottom: branch==0? "1px solid white" : ""}} onClick={()=>setBranch(0)}> Pending</p>
                 <p style={{ borderBottom: branch==1? "1px solid white" : ""}} onClick={()=>setBranch(1)}> Accepted</p>
                 <p style={{ borderBottom: branch==2? "1px solid white" : ""}} onClick={()=>setBranch(2)}> Completed</p>
            </div>
            <p className="text-center my-2 text-green-300 font-bold"> {message} </p>
          </section>
          { branch==0 && (
               <section className="mt-4">
               <p className='text-center text-red-500'>{error}</p>
                   {pendingTreatments.map(treatment=>{
                     return(
                   <div key={treatment._id} className='w-5/6 mx-auto rounded-xl font-bold shadow-md mb-4 p-4 bg-white'>
                       <p> Type: {treatment.type}</p>
                       <p> Status: { treatment.status==0? "Pending" : "Cancelled" }</p>
                       <p> Date created: {treatment.createdAt}</p>
                       <p> Date Reserved: {treatment.date}</p>
                       { treatment.status==0 && <button className='p-2 bg-blue-500 rounded-md mt-2 text-white' data-identifier={treatment._id} onClick={accept_Booking}> Accept Booking </button>}
                       { treatment.status==-1 && <button className='p-2 bg-blue-500 rounded-md mt-2 text-white' data-identifier={treatment._id} onClick={delete_Record}> Delete Record </button>}

                   </div>
                        )
                   })}
              </section>
         )}
          { branch==1 && (
               <section className="mt-4">
               <p className='text-center text-red-500'>{error}</p>
                   {acceptedTreatments.map(treatment=>{
                     return(
                   <div key={treatment._id} className='w-5/6 mx-auto rounded-xl font-bold shadow-md mb-4 p-4 bg-white'>
                       <p> Type: {treatment.type}</p>
                       <p> Status: Accepted</p>
                       <p> Date created: {treatment.createdAt}</p>
                       <p> Date Reserved: {treatment.date}</p>
                       <button 
                       className='p-2 bg-blue-500 rounded-md mt-2 text-white'
                        data-identifier={treatment._id} 
                        onClick={complete_Booking}>
                              Complete Booking
                         </button>
                   </div>
                        )
                   })}
              </section>
         )}
          { branch==2 && (
               <section className="mt-4">
               <p className='text-center text-red-500'>{error}</p>
                   {completedTreatments.map(treatment=>{
                     return(
                   <div key={treatment._id} className='w-5/6 mx-auto rounded-xl font-bold shadow-md mb-4 p-4 bg-white'>
                       <p> Type: {treatment.type}</p>
                       <p> Status: Completed</p>
                       <p> Date created: {treatment.createdAt}</p>
                       <p> Date Reserved: {treatment.date}</p>
                       <button className='p-2 bg-blue-500 rounded-md mt-2 text-white' data-identifier={treatment._id}
                        onClick={clear_Record}> Clear Record </button>

                   </div>
                        )
                   })}
              </section>
         )}

          </main>
          </>
     )
}

export async function getServerSideProps(context){
     connect_DB(mongoose)
     try{
          const fetchedTreatments0 = await Treatment.find({ hospital_id:context.params.id, $or:[ {status:0}, {status:-1}]})
          const fetchedTreatments1 = await Treatment.find({hospital_id:context.params.id, status:1})
          const fetchedTreatments2 = await Treatment.find({hospital_id:context.params.id, status:2})
          return {
               props:{
                    pendingTreatments:JSON.parse(JSON.stringify(fetchedTreatments0)),
                    acceptedTreatments:JSON.parse(JSON.stringify(fetchedTreatments1)),
                    completedTreatments:JSON.parse(JSON.stringify(fetchedTreatments2))
               }
          }
     }
     catch(err){
          return{
               props:{
                    error:err.message
               }
          }
     }
}
export default HOC(Treatments)
