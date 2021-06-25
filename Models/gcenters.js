import mongoose from 'mongoose'

// const GeoSchema=new mongoose.Schema({
//      type:{type:String, default:"Point"},
//      coordinates:[Number]
//  })
 
 
 
 const gcenterSchema =new mongoose.Schema({
     Name:{type:String, required:true},
     State:{type:String, default:"hospital"},
     Method:{type:String, required:true},
     Owned_by:{type:String, unique:true, required:true},
     Type:{type:String}
 
 },
 
     {timestamps:true}
     )
     export default mongoose.models['centers'] || mongoose.model('centers', gcenterSchema)

