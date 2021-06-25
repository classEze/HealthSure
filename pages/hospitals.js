import React from 'react'
import connect_DB from 'top/db'
import mongoose from 'mongoose'
import Hospital from 'top/Models/hospital'
import SideUser from 'top/components/sideuser'
import {useSelector} from 'react-redux'
import {useRouter} from 'next/router'
import { formatRelative } from 'date-fns'

const Hospitals = ({error,hospitals}) => {
     const state = useSelector(state=>state)
     const Router = useRouter()
     return (
          <main>
          <p className='text-center text-xl mt-2 border-b font-bold'> Available Hospitals ({hospitals.length})</p>
          {state.show && <SideUser/>}
          <button onClick={(e)=>Router.back()} className='p-2 ml-4 bg-green-600 text-white font-bold'> Go Back </button>
               {error}
               {
               hospitals.map(hospital=>{
                    return(
                         <div key={hospital._id} className='w-5/6 mx-auto font-bold text-sm rounded-xl shadow-md my-4 p-4 bg-white'>
                             <p> id: {hospital._id}</p>
                             <p> Brand Name: {hospital.brand}</p>
                             <p> Address: {hospital.address}</p>
                             <p> Email : {hospital.email}</p>
                             <p> Phone : {hospital.phone}</p>
                             <p> Date registered: {formatRelative( new Date(hospital.createdAt) , new Date(), {addSuffix:true})}</p>
                         </div>
                               )
               })
          }
          </main>
     )}

     export async function getServerSideProps(){
          connect_DB(mongoose)
          try{
              const hospitals = await Hospital.find()
               return {
                    props:{
                       hospitals: JSON.parse(JSON.stringify(hospitals)) 
                    }
               }
              }
              
          catch(err){
               return {
                    props: {
                    error: err.message
               }
          }
     }
}

export default Hospitals
