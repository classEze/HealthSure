import connect_DB from 'top/db'
import mongoose from 'mongoose'
import Booking from 'top/Models/booking'
import SideUser from 'top/components/sideuser'
import { useSelector } from 'react-redux'
import { formatRelative } from 'date-fns'


const Bookings = ({bookings,error}) => {
     const state = useSelector(state=>state)
     return (
          <>
          <main>
          <p className='text-center text-xl mt-2 border-b font-bold'> Your Uncompleted Bookings({bookings.length}) </p>

               {state.show && <SideUser />}
          {error}
           {
                bookings.length > 0 ?
                bookings?.map(booking =>
                {
                    return(
                         <div key={booking._id} className='w-5/6 mx-auto text-sm rounded-xl shadow-md my-4 p-4 bg-white'>
                             <p>booking id: {booking._id}</p>
                             <p> Date created: {formatRelativeRelative( new Date(booking.createdAt) , new Date(), {addSuffix:true})}</p>
                             <p> Paid : {booking.paid}</p>
                         </div>
                    )
                })
                :
                <div className='text-center font-bold text-xl'> You have not booked for anything </div>
           } 
          </main>
   
          </>
     )
}

export async function getServerSideProps(context){
     connect_DB(mongoose)
     try{
          const fetchedBookings = await Booking.find({initiator:context.params.id, completed:false})
          return {
               props:{
                    bookings:JSON.parse(JSON.stringify(fetchedBookings))
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
