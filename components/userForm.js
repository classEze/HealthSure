import {Form, Formik} from 'formik'
import validationSchema from 'top/yuppy'
import axios from 'axios';
import { useRouter } from "next/router";

export default function UserForm(){
  const router = useRouter()
     
     function submit_User(values){
          axios.post('/api/register', {...values, mac_address:router.query.mac, bluetooth_address:router.query.device })
          .then(res=>{
            alert(res.data);
            window.location.assign('https://health-sure.vercel.app/login?message=Registeration was Successful')
          })
          .catch(err=>alert(err.message))
        }
        const userData = {firstname:'', lastname:'',nationality:'',age:'',
                         city:'', address:'',password:'',confirm:'', user:true
             }
      
     return(
<Formik
 initialValues={userData}
 validationSchema={validationSchema}
 onSubmit={values=> submit_User(values)}
 >  
 {
     formik=>{
           return(
                <Form>
               <h1 className='text-center text-2xl font-semibold'> Sign Up as a User</h1>
               <div>
                <label htmlFor="">FirstName</label>
                 <input type='text' required onChange={formik.handleChange('firstname')}  value={formik.values.firstname} placeholder='please enter your firstname'/>
               </div>
               <div>
               <label htmlFor="">LastName</label>
                 <input type='text' required onChange={formik.handleChange('lastname')}  value={formik.values.lastname} placeholder='please enter your lastname'/>
               </div>
               <div>
               <label htmlFor="">State</label>
                 <input type='text' required onChange={formik.handleChange('state')}  value={formik.values.state} placeholder='state of origin'/>
               </div>
               <div>
               <label htmlFor="">Nationality</label>
                 <input type='text' required onChange={formik.handleChange('nationality')}  value={formik.values.nationality} placeholder='nationality'/>
               </div>
               <div>
               <label htmlFor="">Address</label>
                 <input type='text' required onChange={formik.handleChange('address')}  value={formik.values.address} placeholder='your home address'/>
               </div>
               <div>
               <label htmlFor="">Age</label>
                 <input type='age' required onChange={formik.handleChange('age')} value={formik.values.age} placeholder='please enter your age'/>
               </div>
               <div>
               <label htmlFor="">Email</label>
                 <input type='email' required onChange={formik.handleChange('email')} value={formik.values.email} placeholder='please enter your email address'/>
               </div>
               <div>
               <label htmlFor="">Phone No</label>
                 <input type='text' required onChange={formik.handleChange('phone')} value={formik.values.phone} placeholder='e.g +2348160245124'/>
                 <p className='text-red-400'>{formik.errors.phone}</p>
               </div>
               <div>
               <label htmlFor="">Password</label>
                 <input type='password' required onChange={formik.handleChange('password')} value={formik.values.password} placeholder='please enter your  password'/>
                 <p className='text-red-400'>{formik.errors.password}</p>
               </div>
               <div>
               <label htmlFor="">Confirm Password</label>
                 <input type='password' required onChange={formik.handleChange('confirm')} value={formik.values.confirm} placeholder='retype password'/>
                 <p className='text-red-400'>{formik.errors.confirm}</p>
               </div>
               <div>
                 <button type='submit' className='bg-blue-500 text-xl font-bold w-full py-4 text-white'>Let's Go</button>
               </div>
               </Form>
           )
      }
 }    
       </Formik>

     )
}



