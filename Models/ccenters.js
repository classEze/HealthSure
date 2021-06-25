import mongoose from 'mongoose'

const GeoSchema=new mongoose.Schema({
     type:{type:String, default:"Point"},
     coordinates:[Number]
 })
 
 
 
 const corpSchema =new mongoose.Schema({
     Lab:{type:String, required:true},
     State:{type:String, required:true},
     Platform:{type:String, required:true}, 
     Type:{type:String, required:true}
 },
 
     {timestamps:true}
 )
export default mongoose.models['cocenters'] || mongoose.model('cocenters', corpSchema)

