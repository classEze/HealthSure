import authHos from 'top/Middlewares/authHos'
import Treatment from "top/Models/treatments"

const Accept = async (req, res) => {
     try{
         const result = await Treatment.findByIdAndUpdate(req.query.id, {status:14})
         return res.status(200).json({message:'Request Successful'});
     }
     catch(err){
          return res.status(500).json({message:err.message})
     }
   }
   export default authHos(Delete)

//    .lookup({from:"Users", localField:"initiator_id", foreignField:"_id", as:"Joined"})
