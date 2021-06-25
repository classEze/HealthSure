import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

 const AdminSchema =new mongoose.Schema({
     name:{type:String, required:true},
     role:{type:String, default:"admin"},
     password:{type:String, required:true},
     email:{type:String, unique:true, required:true},
     phone:{type:String, required:true, unique:true},
     address:{type:String, required:true},
     image_url : {type:String},
     },
     {timestamps:true}
 )
 
 AdminSchema.pre('save', async function(next){
     const salti=await bcrypt.genSalt(11)
     this.password=await bcrypt.hash(this.password, salti)
     next()
 })
export default mongoose.models['Admin'] || mongoose.model('Admin', AdminSchema)

