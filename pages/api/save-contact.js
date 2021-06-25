import authUser from 'top/Middlewares/authUser'
import User from 'top/Models/user'

const Save = async (req, res) => {
     try{
          const initial = await User.findById(req.body.id)
          const result = await User.findByIdAndUpdate(req.body.id, 
          {
                contacts : [...initial.contacts, { contactDevice:req.body.contactDevice, contactMac:req.body.contactMac, time:req.body.date} ]
           })
        return res.status(200).json({message:'Record Successfully Updated', initial, result})
      }
      catch(err){
           return res.status(500).json({message:err.message})
      }
   }
   export default Save
