import User from 'top/Models/user'
import Hospital from 'top/Models/hospital'
import Admin from 'top/Models/admin'
import connect_DB from 'top/db'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

connect_DB(mongoose)

async function isPasswordCorrect(raw, hashed){
     return await bcrypt.compare(raw, hashed)
     }

export  default function (handler) {
    return async function (req,res) {
        const {email,password,type} = req.body
     if(type =='user'){
          try{
               const foundUser = await User.findOne({email})
               if(foundUser){
                   if( await isPasswordCorrect(password, foundUser.password)){
                    req.user = {name:foundUser.firstname, role:foundUser.role, id:foundUser._id}
                    return handler(req,res)
               }
                   else{
                    return res.status(400).json({message:'Invalid Credentials'})
                }
                   }
           else{
              return res.status(404).json({message:' User does not exist'})
           }
               }
       catch(error){
          return res.status(500).json({message:' Error logging in'})
       }
     }
     else if(type=='hp_admin'){
          try{
               const foundUser = await Hospital.findOne({email})
               if(foundUser){
                   if(await isPasswordCorrect(password, foundUser.password)) {
                    req.user = {email:foundUser.email, id:foundUser._id, role:foundUser.role}
                    return handler(req,res)
                   }
             else{
                 return res.status(400).json({message:"Invalid Credentials"})
               }
           }
           else{
               return res.status(404).json({message:'User does not exist'})
           }
               }
       catch(error){
        return res.status(500).json({message:' Error Logging in, Please try again'})
    }
 }
     else if(type == 'app_admin') {
          try{
               const foundUser = await Admin.findOne({email})
               if(foundUser){
                   if(await isPasswordCorrect(password, foundUser.password)) {
                    req.user = {email:foundUser.email, id:foundUser._id, role:foundUser.role}
                    return handler(req,res)
                   }
             else{
                 return res.status(400).json({message:"Invalid Credentials"})
               }
           }
           else{
               return res.status(404).json({message:'User does not exist'})
           }
               }
       catch(error){
        return res.status(500).json({message:' Error Logging in, Please try again'})
    }
     }
     else{ res.status(400).json({message:'Please Select an appropriate identity'})}
    }
   }