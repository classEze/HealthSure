import { send_single_Message } from 'top/Mail'
import authHos from 'top/Middlewares/authHos'
import Treatment from "top/Models/treatments"
import User from "top/Models/user"

const Accept = async (req, res) => {
     try{
         const result = await Treatment.findByIdAndUpdate(req.query.id, {status:1})
         const user = await User.findById(result.initiator_id)
         send_single_Message(result.initiator_email_address, "Treatment Booking", `Hello, ${user.firstname}, Your booking has been accepted by ${hospital.brand}. You can attend treatment as scheduled. Regards.`)
         return res.status(200).json({message:'Request Successful'});
     }
     catch(err){
          return res.status(500).json({message:err.message})
     }
   }
   export default authHos(Accept)

//    .lookup({from:"Users", localField:"initiator_id", foreignField:"_id", as:"Joined"})
