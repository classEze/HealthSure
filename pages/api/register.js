
import mongoose from 'mongoose'
import connect_DB from 'top/db'
import Hospital from 'top/Models/hospital'
import User from 'top/Models/user'
import send_Message from 'top/Mail'
connect_DB(mongoose)

export  default async (req, res) => {
     if(req.body.user ){
          try{
               await User.create (req.body)
               send_Message(null, null, req.body.firstname),
               console.log(req.body)
               res.status(201).send('User account Successfully created')
             }
             catch(err){
                  res.status(400).send(`Error Creating User ${err.message}`)
             }
     }
     else{
          try{
               await Hospital.create ({...req.body, center:req.body.center.length>0 ? true:false})
               send_Message(null,null,req.body.brand)
               res.status(201).send('Hospital Account Successfully created')
             }
             catch(err){
                  res.status(400).send('Error Creating Account')
             }
     }

      }

   
