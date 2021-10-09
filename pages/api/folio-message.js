import mongoose from 'mongoose'
import connect_DB from 'top/db'
import Message from 'top/Models/hospital'

connect_DB(mongoose)

export  default async (req, res) => {
     if(req.body.sender && req.body.title && req.body.message ){
          try{
               await Message.create (req.body);
               res.status(201).send('Message Received')
             }
       catch(err){
         res.status(400).send(' OOps, We ran into some problem there!!')
       }
     }

      }
