import {useState, useEffect} from 'react'
import connect_DB from 'top/db'
import mongoose from 'mongoose'
import User from 'top/Models/user'
import {useSelector} from 'react-redux'
import {useRouter} from 'next/router'
import { formatRelative } from 'date-fns'

const AllUsers = ({error,users}) => {
     const state = useSelector(state=>state)
     const Router = useRouter()
     const [displayed, setDisplayed] = useState(users)
    function search(e){
        setDisplayed(
            !e.target.value ? users : users.filter(singleUser=> `${singleUser.lastname} ${singleUser.firstname}`.toLowerCase().indexOf(e.target.value.toLowerCase()) != -1)
        )
    }
     return(
          <main>
          <p className='text-center text-xl my-2 border-b font-bold'> All Registered Users ({users.length})</p>
          {/* {state.show && <SideUser/>} */}
          <button onClick={(e)=>Router.back()} className='p-2 m-2 bg-green-600 text-white font-bold'> Go Back </button>
          <input type="text" onChange={search} className='w-3/6 ml-4 h-10 border text-center' placeholder="type a user's name to search" />
               {error}
               {
               displayed.map(user=>{
                    return(
                         <div key={user._id} className='w-5/6 mx-auto font-bold text-sm rounded-xl shadow-md my-4 p-4 bg-white'>
                             <p> id: {user._id}</p>
                             <p> Name: {user.lastname} {user.firstname}</p>
                             <p> Address: {user.address}</p>
                             <p> Email : {user.email}</p>
                             <p> Phone : {user.phone}</p>
                             <p> Date registered: {formatRelative( new Date(user.createdAt) , new Date(), {addSuffix:true})}</p>
                         </div>
                               )
               })
          }
          </main>
     )}

     export async function getServerSideProps(){
          connect_DB(mongoose)
          try{
              const allusers = await User.find()
               return {
                    props:{
                       users: JSON.parse(JSON.stringify(allusers)) 
                    }
               }
              }
              
          catch(err){
               return {
                    props: {
                    error: err.message
               }
          }
     }
}

export default AllUsers
