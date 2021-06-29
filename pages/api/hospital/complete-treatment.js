import { send_single_Message } from 'top/Mail'
import authHos from 'top/Middlewares/authHos'
import Treatment from "top/Models/treatments"
import User from "top/Models/user"

const Complete = async (req, res) => {
     try{
         const result = await Treatment.findByIdAndUpdate(req.query.id, {status:2, comment:req.body.comment, drugs:req.body.drugs.split(',')})
         const user = await User.findById(result.initiator_id)
         send_single_Message(result.initiator_email_address, "Treatment Completed", `Hello, ${user.firstname}, Your Treatment results are out. Please Log in to see them. Regards.`)
         return res.status(200).json({message:'Treatment Successfully Completed'});
     }
     catch(err){
          return res.status(500).json({message:err.message})
     }
   }
   export default authHos(Complete)