import mongoose from 'mongoose'

 const TreatmentSchema =new mongoose.Schema({
     initiator_id:{type:String, required:true},
     date_booked:{type:String},
     date_reserved:{type:String},
     date_approved:{type:String},
     date_completed:{type:String},
     initiator_email_address:{type:String},
     hospital_email_address:{type:String},
     status:{type:Number, default:0},
     hospital_id:{type:String, required:true},
     drugs:[String],
     paid:{type:Boolean, default:true},
     comment:{type:String},
     complaint:{type:String},
     file_link:{type:String},
     type:{type:String}
     },
     {timestamps:true}
 )
 
export default mongoose.models['Treatment'] || mongoose.model('Treatment', TreatmentSchema)


