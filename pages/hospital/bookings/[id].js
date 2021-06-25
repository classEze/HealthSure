import connect_DB from 'top/db'
import mongoose from 'mongoose'
import Booking from 'top/Models/booking'
import Link from 'next/link'
import {useSelector} from 'react-redux'
import HOC from 'top/components/authHospitalHOC';
import SideHos from 'top/components/sideHospital';
import { formatRelative} from 'date-fns'

const Bookings = ({bookings,error}) => {
     const activeUser = useSelector(state=>state.user)
     const state = useSelector(state=>state)
     return (
          <>
          <main>
               {state.show && <SideHos />}
               <p className='text-center text-xl mt-2 border-b font-bold'> Pending Bookings ({bookings.length})</p>
          {error}
           {
                bookings.length > 0 ?
                bookings?.map(booking =>{
                     return(
               <div key={booking._id} className='w-5/6 mx-auto text-sm rounded-xl shadow-md my-4 p-4 bg-white'>
                   <p> id: {booking._id}</p>
                   <p> Patientid: {booking.initiator}</p>
                   <p> Date booked: {formatRelative( new Date(booking.createdAt) , new Date(), {addSuffix:true})}</p>
                   <Link href={"/booking/complete/"+booking.initiator+"?user="+activeUser.id+"&bookingId="+booking._id}><a><button className='p-2 bg-blue-500 rounded-md mt-2 text-white'> Complete Booking </button></a></Link>
               </div>
                     )
            })
                :
                <div className='text-center font-bold text-xl'> You have no active bookings </div>
           }   
           </main> 
          </>
     )
}
export async function getServerSideProps(context){
     connect_DB(mongoose)
     try{
          const bookings = await Booking.find({hospital:context.params.id, completed:false})
          return {
               props:{
                    bookings:JSON.parse(JSON.stringify(bookings))
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
export default HOC(Bookings)
