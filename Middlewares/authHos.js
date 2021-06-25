import Hospital from 'top/Models/hospital'
import connect_DB from 'top/db'
import mongoose from 'mongoose'
import {verify} from 'jsonwebtoken'

connect_DB(mongoose)

export  default function (handler) {
    return async function (req,res) {
         if(!req.headers.authorization) return res.json({message:"Unauthorized"})
         const token = req.headers.authorization.split(" ")[1]
          try{ 
               const decodedToken = verify(token, process.env.JWT_SECRET)
               if(decodedToken?.role !== 'hospital') return res.json({message:"Unauthorized"})
               const user = Hospital.findOne({_id:token.id})
               if(!user) return res.json({message:"Unauthorized"})
               req.user = user
               return handler(req,res)
               }
       catch(error){
            console.log(error)
          return res.json({message:' Error, Please try again'})
     }
    }
     }
    