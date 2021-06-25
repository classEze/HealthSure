import React from 'react'
import connect_DB from 'top/db'
import mongoose from 'mongoose'
import Hospital from 'top/Models/hospital'
import SideUser from 'top/components/sideuser'
import {useSelector} from 'react-redux'


const Centers = ({error,centers}) => {
     const state = useSelector(state=>state)
     return (
          <main>
          {state.show && <SideUser/>}
               {error}
               {centers.map(hospital=><h1 className='m-4'> {hospital.brand}</h1>)}
          </main>
     )}

     export async function getServerSideProps(context){
          connect_DB(mongoose)
          try{
              const centers = await Hospital.find({center:true})
               return {
                    props:{
                       centers: JSON.parse(JSON.stringify(centers))
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

export default Centers
