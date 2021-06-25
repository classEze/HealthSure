import User from 'top/Models/user'
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
               if(decodedToken?.role !== 'user') return res.json({message:"Unauthorized"})
               const user = await User.findById(decodedToken.sub)
               if(!user) return res.json({message:"Unauthorized"})
               req.user = user
               return handler(req,res)
               }
       catch(error){
          return res.status(500).json({message: `Error, Please try again ${error.message}`})
     }
    }
     }
    