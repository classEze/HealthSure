import connect_DB from 'top/db'
import mongoose from 'mongoose'
import User from 'top/Models/user'
import SideUser from 'top/components/sideuser'
import { useSelector } from 'react-redux'


const Contacts = ({contacts,error}) => {
     const state = useSelector(state=>state)
     return (
          <>
          <main className='flex flex-col items-center justify-center'>
          <p className='text-center text-xl mt-2 border-b font-bold'> 
          My Contacts 
          </p>
          <p className='w-10 h-10 mt-2 rounded-circle text-2xl border-2 font-bold text-center'> {contacts.length} </p>
               {state.show && <SideUser />}
          {error}
          </main>
   
          </>
     )
}

export async function getServerSideProps(context){
     connect_DB(mongoose)
     try{
          const fetchedUser = await User.findById(context.params.id)
          const user = JSON.parse(JSON.stringify(fetchedUser))

          return {
               props:{
                    contacts:user.contacts
               }
          }
     }
     catch(err){
          return{
               props:{
                    error:err.message
               }
          }
     }
}
export default Contacts
