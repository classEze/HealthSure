import mongoose from 'mongoose'

const GeoSchema=new mongoose.Schema({
     type:{type:String, default:"Point"},
     coordinates:[Number]
 })
 
 
 
 const privSchema =new mongoose.Schema({
     Email:{type:String, unique:true},
     Name:{type:String, unique:true, required:true},
     Phone:{type:String, unique:true},
     State:{type:String, required:true},
     Address:{type:String, required:true},
     Platform:{type:String, required:true}, 
 },
 
     {timestamps:true}
 )
export default mongoose.models['privcenters'] || mongoose.model('privcenters', privSchema)

