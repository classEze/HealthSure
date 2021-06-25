import { send_single_Message } from 'top/Mail'

const Mailer = (req, res) => {
     try{
          send_single_Message('sendezeamail@gmail.com', " Test ", " Hey, do you see me at all , Yeah, I'm back with a bang, yahoooo??")
          res.status(200).send('Success')
     }
     catch(err) {
          console.log(err)
          res.status(500).send(err)
     }
   }
   export default Mailer