import authHos from 'top/Middlewares/authHos'
import Treatment from "top/Models/treatments"

const Clear = async (req, res) => {
     try{
         const result = await Treatment.findByIdAndUpdate(req.query.id, {status:14})
         return res.status(200).json({message:'Record Successfully Cleared'});
     }
     catch(err){
          return res.status(500).json({message:err.message})
     }
   }
   export default authHos(Clear)