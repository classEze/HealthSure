import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const GeoSchema=new mongoose.Schema({
     type:{type:String, default:"Point"},
     coordinates:[Number]
 })
 
 
 
 const HospitalSchema =new mongoose.Schema({
     brand:{type:String, required:true},
     role:{type:String, default:"hospital"},
     password:{type:String, required:true},
     email:{type:String, unique:true, required:true},
     open:{type:Boolean, default:true},
     center:{type:Boolean, required:true},
     phone:{type:String, required:true, unique:true},
     state:{type:String, required:true},
     address:{type:String, required:true},
     location:{type:GeoSchema, index:'2dsphere'},
     image_url : {type:String},
     year_established : {type:Date},
     location:{type:GeoSchema, index:'2dsphere'} 
 },
 
     {timestamps:true}
 )
 
 HospitalSchema.pre('save', async function(next){
     const salti=await bcrypt.genSalt(11)
     this.password=await bcrypt.hash(this.password, salti)
     next()
 })

export default mongoose.models['Hospital'] || mongoose.model('Hospital', HospitalSchema)

