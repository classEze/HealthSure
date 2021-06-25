import Check from 'top/Middlewares/authLogin.js'
import {sign} from 'jsonwebtoken'
const Login = (req, res) => {
     const token = sign({sub:req.user.id, role:req.user.role} , process.env.JWT_SECRET , {})
     return res.status(200).json({user:req.user, role:req.user.role, token})
   }
   export default Check(Login)