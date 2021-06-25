import mongoose from 'mongoose'

 const BookingSchema =new mongoose.Schema({
     initiator:{type:String, required:true},
     completed:{type:Boolean, default:false},
     hospital:{type:String, required:true},
     drugs:[String],
     paid:{type:Boolean, default:true},
     comment:{type:String},
     symptoms:{type:String},
     },
     {timestamps:true}
 )
 
export default mongoose.models['Booking'] || mongoose.model('Booking', BookingSchema)

