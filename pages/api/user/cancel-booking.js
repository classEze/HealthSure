import authUser from 'top/Middlewares/authUser'
import Treatment from "top/Models/treatments"

const Cancel = async (req, res) => {
     try{
         const result = await Treatment.findByIdAndUpdate(req.query.id, {status:-1})
         return res.status(200).json({message:'Successfully Deleted'});
     }
     catch(err){
          return res.status(500).json({message:err.message})
     }
   }
   export default authUser(Cancel)
