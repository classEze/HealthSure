import authHos from 'top/Middlewares/authHos'
import Booking from 'top/Models/booking'
import { send_single_Message } from "top/Mail";
import  User  from "top/Models/user";


const Book = async (req, res) => {
     console.log(req.body)
     try{
         const result = await Booking.findByIdAndUpdate(req.body.bookingId, {
               completed:true,
               drugs:[...req.body.drugs.split(',')],
               symptoms:req.body.symptoms,
               comment:req.body.comment
          })
          if(req.body.status=="positive"){
          const patient =await User.findById(req.body.patient)
          patient.contacts.forEach(
               contact=>{
                    send_single_Message( contact.contactEmail ,
                          " Caution, Covid 19 Alert", `You had contact with this user with MAC ADDRESS ${patient.mac_address} on ${contact.date} who has tested positive for Covid 19, please visit a test center to confirm your status.`)
                          send_single_Message( 'alicebob@getnada.com' ,
                          " Caution, Covid 19 Alert", `You had contact with this user with MAC ADDRESS ${patient.mac_address} on ${contact.date} who has tested positive for Covid 19, please visit a test center to confirm your status.`)
                          send_single_Message( 'anymail4eze@gmail.com' ,
                          " Caution, Covid 19 Alert", `You had contact with this user with MAC ADDRESS ${patient.mac_address} on ${contact.date} who has tested positive for Covid 19, please visit a test center to confirm your status.`)

               }
          )
               }
       return res.status(200).json({message:'Record Successfully Updated'})
     }
     catch(err){
          return res.status(500).json({message:err.message})
     }
   }
   export default authHos(Book)
