import mongoose from 'mongoose'
import connect_DB from 'top/db'
import Message from 'top/Models/message'
import Cors from "cors"

const cors = Cors({
  methods: ['GET', 'HEAD', 'POST'],
  origin: '*',
  optionsSuccessStatus: 200
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }
      return resolve(result)
    })
  })
}

connect_DB(mongoose)

export  default async (req, res) => {
     runMiddleware(req,res,cors)
     if(req.body.sender && req.body.title && req.body.message ){
          try{
               await Message.create(req.body);
               res.status(201).json({message:"Successfully saved"})
             }
       catch(err){
         res.status(400).json({message:"Error, Message could not be saved"})
       }
     }

     else{
         res.status(400).json({message:'Useless request'})
     }
     }
