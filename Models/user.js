import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const GeoSchema=new mongoose.Schema({
     type:{type:String, default:"Point"},
     coordinates:[Number]
 })

 const UserSchema =new mongoose.Schema({
     firstname:{type:String, required:true},
     lastname:{type:String, required:true},
     nationality:{type:String, required:true},
     city:{type:String},
     age:{type:Number, required:true},
     role:{type:String, default:"user"},
     password:{type:String, required:true},
     email:{type:String, unique:true, required:true},
     phone:{type:String, required:true, unique:true},
     address:{type:String, required:true},
     image_url : {type:String},
     location  : {type:GeoSchema, index:'2dsphere' },
     mac_address : {type:String},
     bluetooth_address  : {type:String},
     contacts : [Object]
     },
     {timestamps:true}
 )
 
 UserSchema.pre('save', async function(next){
     const salti=await bcrypt.genSalt(11)
     this.password=await bcrypt.hash(this.password, salti)
     next()
 })
export default mongoose.models['User'] || mongoose.model('User', UserSchema)

