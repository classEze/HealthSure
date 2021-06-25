import {Form, Formik} from 'formik'
import validationSchema from '../yuppy';
import axios from 'axios';
export default function HospitalForm(){
      function submit_Hospital(values){
          axios.post('/api/register', values)
          .then(res=> {
               alert('Account successfuly Created')
               window.location.assign('https://health-sure.vercel.app/login?message=Registeration was Successful')
          })
          .catch(err=>alert("Error creating User", err.message))
        }
        const hosData = { brand:'', address:'',
          password:'', confirm : '', center:'', when:'', state:'',
          email:'', phone:''
      }

          return(
          <Formik
          initialValues={hosData}
          validationSchema={validationSchema}
          onSubmit={values=> submit_Hospital(values)}
          >
               {
               (formik)=>{
                    return(
                         <Form>
                    <h1 className='text-center text-2xl font-semibold'> Register a Hospital</h1>
                    <div>
                    <label htmlFor="brand"> Brand name </label>
                    <input onChange={formik.handleChange('brand')} value={formik.values.brand} placeholder='please input brand name'  type='text'/>
                    </div>
                    <div>
                    <label> Address </label>
                    <input type='text' onChange={formik.handleChange('address')} value={formik.values.address} placeholder='enter brand physical address'/>
                    </div>
                    <div>
                    <label> State </label>
                    <input type='text' required onChange={formik.handleChange('state')} value={formik.values.state} placeholder='State Located'/>
                    </div>
                    <div>
                    <label> Date </label>
                    <input type='text' required onChange={formik.handleChange('when')} value={formik.values.when} placeholder='Date Established - dd/mm/yy'/>
                    </div>
                    <div>
                    <label> Email </label>
                    <input type='text' required onChange={formik.handleChange('email')} value={formik.values.email} placeholder='Email Address'/>
                    </div>
                    <div>
                    <label> Phone </label>
                    <input type='text' required onChange={formik.handleChange('phone')} value={formik.values.phone} placeholder=' eg +2348138983290'/>
                    <p className='text-red-400'>{formik.errors.phone}</p>
                    </div>
                    <div>
                    <label> Password </label>
                    <input type='password' required onChange={formik.handleChange('password')} value={formik.values.password} placeholder='select a password'/>
                    <p className='text-red-400'>{formik.errors.password}</p>
                    </div>
                    <div>
                    <label> Confirm Password </label>
                    <input type='password' required onChange={formik.handleChange('confirm')} value={formik.values.confirm} placeholder='please retype password'/>
                    <p className='text-red-400'>{formik.errors.confirm}</p>
                    </div>
                    <aside className="w-10/12 flex justify-center gap-2 py-4 items-center">
                    Are You a Vaccination Center ? <input type="checkbox" className='h-4 w-4' name="center" onChange={formik.handleChange('center')}/>
                    </aside>
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
          