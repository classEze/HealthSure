import authUser from 'top/Middlewares/authUser'
import User from 'top/Models/user'
import send_Message, { send_single_Message } from "top/Mail";

const Save = async (req, res) => {
    try{
        send_single_Message( "anymail4eze@gmail.com" ,
        "Covid 19 Alert Single", `You had contact with this user with MAC ADDRESS  on  who has tested positive for Covid 19, please visit a test center to confirm your status.`)
        send_Message(" Hey you Many", " Health track test email")
         res.status(200).send("Nawa ooo")  
    }
    catch(err){
        res.status(500).send("error", err)
    }
}
   export default Save