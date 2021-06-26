// import Head from 'next/head'
// import Image from 'next/image'
// import {useState, useCallback,useEffect} from 'react'
// import {motion, AnimatePresence} from 'framer-motion'
import HOC from 'top/components/authHospitalHOC';
import {useSelector} from 'react-redux';
import TabplusText from '../../components/tabplustext';
import {FaBookmark, FaHospital, FaPen} from 'react-icons/fa'
import SideHos from 'top/components/sideHospital';



function Dashboard() {
const state = useSelector(state=>state);
   return (
        <main className='grid bg-gray-100 w-full content-start mx-auto grid-cols-2 gap-4'>
             {state.show && <SideHos />}
               <TabplusText to={"/hospital/bookings/"+state.user.id} text1="Active" text2='Bookings'>
                    <FaBookmark size={40} />
               </TabplusText>
               <TabplusText to='/hospital/dashboard' text1="Edit" text2='Profile'>
                    <FaPen size={40} />
               </TabplusText>
               <TabplusText to='/coming' text1="Treated" text2='Patients'>
                    <FaHospital size={40} />
               </TabplusText>
               <TabplusText to={"/hospital/treatments/"+state.user.id} text1="Treatment" text2='Records'>
                    <FaHospital size={40} />
               </TabplusText>
        </main>   
   );
}
export default HOC(Dashboard)
