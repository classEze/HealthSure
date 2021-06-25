import adminAuth from 'top/Middlewares/authAdmin'
import Admin from 'top/Models/admin'
async function CreateAdmin(req, res){
    Admin.create(req.body)  
     .then(
      createdAdmin => res.status(200).json({message:"Admin Successfuly Created"})
        )
     .catch(err=>{
      res.json({message:" Error, admin could not be created, Please try again"})
     })
   }

   export default adminAuth(CreateAdmin)