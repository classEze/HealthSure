import { send_single_Message } from 'top/Mail'
import authUser from 'top/Middlewares/authUser.js'
import Treatment from 'top/Models/treatments'
import Hospital from 'top/Models/hospital'
import User from 'top/Models/user'

const Treat = async (req, res) => {
     try{
         const user = await User.findById(req.user.id)
         const hospital = await Hospital.findById(req.body.center)
         const result = await Treatment.create({
               date_reserved:req.body.date,
               initiator_id:req.user.id,
               hospital_id:req.body.center,
               initiator_email_address:req.body.email,
               hospital_email:hospital.email,
               complaint:req.body.complaint,
               type:req.body.type,
          })
          send_single_Message(req.body.email, "Treatment Booking", `Hello, ${user.firstname}, Your booking has been successfuly sent to ${hospital.brand} hospital. You will be notified when it is accepted. Thanks.`)
          send_single_Message(hospital.email, "Treatment Booking", `Hello, ${user.firstname}, just booked for medical treatment at ${hospital.brand}. Please Log in to Healthtrack to see details of this request. Thanks`)
       return res.status(200).json({message:'Booking Successful'})
     }
     catch(err){
          return res.status(500).json({message:err.message})
     }
   }
   export default authUser(Treat)