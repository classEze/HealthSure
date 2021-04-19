import Head from 'next/head'
import Image from 'next/image'
import {useState, useCallback,useEffect} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import Dashcard from '../../components/dashcard';
import SideUser from '../../components/sideuser';
import {useSelector} from 'react-redux'


export default function Dashboard() {
   const show = useSelector(state=>state.show);
   return (
        <>
     { show && <SideUser />}
      <Dashcard description='Appointments' number={0} />
      <Dashcard description='Pending Requests' number={0} />
      <Dashcard description='Notifications' number={0} />
      <Dashcard description='Blog Posts' number={0} />
        </> 
   );

}
