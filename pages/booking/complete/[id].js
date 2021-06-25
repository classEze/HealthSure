import Textinput from "top/components/textinput"
import Users from 'top/Models/user'
import {useState} from 'react'
import {useRouter} from 'next/router'
import {useSelector} from 'react-redux'
import HOC from 'top/components/authHospitalHOC'
import axios from 'axios'
import SideHos from "top/components/sideHospital"


export async function getServerSideProps(context){
     const user = await Users.findById(context.query.id)
     return {
          props:{
               booker:(JSON.parse(JSON.stringify(user)))
          }
     }
}
const Complete = ({booker}) => {
     const state=useSelector(state=>state)
     const Router = useRouter()
     const [payload, setPayload] = useState({})
     const [message, setMessage] = useState('')
     const [result, setResult] = useState('negative')

     function handle_Change(e){
          setPayload({...payload, [e.target.name]:e.target.value})
     }
     function complete_Booking(e){
          e.preventDefault()
          axios.post('/api/update', {...payload, bookingId:Router.query.bookingId, status:result, patient:booker._id }, {headers:{authorization:`Bearer ${state.user.token}`}})
          .then(res=>{
               alert(res.data.message)
               Router.replace('/hospital/dashboard')
          })
          .catch(err=>setMessage(err.message))
     }
     return (
          <>
          <main>
               {state.show && <SideHos />}
            <p className='text-center mt-2'> Complete booking for  {booker.lastname} {booker.firstname}</p>  
          <form onSubmit={complete_Booking}>
          <p className='text-red-500 text-xl text-center my-2'>{message}</p>
          <Textinput name='symptoms' setter={handle_Change} label='Symptoms' placeholder='comma separated list'/>
          <Textinput name='drugs' setter={handle_Change} label='Drugs given' placeholder='comma separated list'/>
          <Textinput name='comment' setter={handle_Change} label='Any Comment(s) ?' placeholder='Enter any comments here'/>
          <select name="result" onChange={(e)=>setResult(e.target[e.target.selectedIndex].value)}>
           <option value=""> Test Result</option>
           <option value="positive"> Positive for Covid 19</option>
           <option value="negative"> Negative For Covid 19 </option>
      </select>
          <div>
           <button className='bg-blue-500 text-xl font-bold w-full py-4 text-white text-'>Save</button>
         </div>
          </form>
          </main>
          </>
     )
}
export default HOC(Complete)
