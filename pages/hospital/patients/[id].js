import connect_DB from 'top/db'
import mongoose from 'mongoose'
import Booking from 'top/Models/booking'
import SideHos from 'top/components/sideHospital'
import { useSelector } from 'react-redux'


const Bookings = ({bookings,error}) => {
     const state= useSelector(state=>state)
     return (
          <>
          {state.show && <SideHos />}
          <h1 className='text-xl font-bold mt-2'> Treated Patients</h1>
          {error}
           {
                bookings.length > 0 ?
                bookings?.map(booking =>{
                    return(
               <div key={booking._id} className='w-5/6 mx-auto text-sm rounded-xl shadow-md my-4 p-4 bg-white'>
                  <p> id: {booking._id}</p>
                  <p> Patientid: {booking.initiator}</p>
                  <p> Booked: {formatRelative( new Date(booking.createdAt) , new Date(), {addSuffix:true})}</p>
                  <p> Completed: {formatRelative( new Date(booking.updatedAt) , new Date(), {addSuffix:true})}</p>
                  <p> Drugs administered : {booking.drugs.join(',')}</p>
                  <p> Symptoms : {booking.symptoms}</p>
                  <p> Comment : {booking.comment}</p>
              </div>
                    )
           })
               :
                <div className='text-center font-bold text-xl'> You have not treated any patients </div>
           }    
          </>
     )
}

export async function getServerSideProps(context){
     connect_DB(mongoose)
     try{
          const bookings = await Booking.find({hospital:context.params.id, completed:true})
          return {
               props:{
                    bookings
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
export default Bookings
