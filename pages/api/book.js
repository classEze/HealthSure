import authUser from 'top/Middlewares/authUser.js'
import Booking from 'top/Models/booking'

const Book = async (req, res) => {
     try{
         const result = await Booking.create({
               initiator:req.user.id,
               hospital:req.body.center,
          })
       return res.status(200).json({message:'Booking Successful, Please print your invoice and carry it along to the hospital'})
     }
     catch(err){
          return res.status(500).json({message:err.message})
     }
   }
   export default authUser(Book)