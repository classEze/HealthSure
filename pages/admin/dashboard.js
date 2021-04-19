import Head from 'next/head'
import Image from 'next/image'
import {useState, useCallback,useEffect} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import Dashcard from '../../components/dashcard';
import SideBar from '../../components/sidebar';
import {useSelector} from 'react-redux';


export default function Dashboard() {
     const show = useSelector(state=>state.show);
   return (
        <>
     { show && <SideBar />}
      <Dashcard description='Bookings' number={0} />
      <Dashcard description='Users' number={0} />
      <Dashcard description='Admins' number={0} />
      <Dashcard description='Test Centers' number={0} />
      <Dashcard description='Vaccination Centers' number={0} />
        </>   
   );
}
