import mongoose from 'mongoose'
import connect_DB from 'top/db'
import Message from 'top/Models/message'

connect_DB(mongoose)

export  default async (req, res) => {
    console.log(req.body)
    res.status(200).json({message:"Successful"})
//      if(req.body.sender && req.body.title && req.body.message ){
//           try{
//                await Message.create(req.body);
//                res.status(201).json({message:"Successfully saved"})
//              }
//        catch(err){
//          res.status(400).json({message:"Error, Message could not be saved"})
//        }
//      }

//      else{
//          res.status(400).json({message:'Useless request'})

//      }
     }
