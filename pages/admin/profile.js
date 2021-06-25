// import Head from 'next/head'
// import {useState, useCallback,useEffect} from 'react'
// import {motion, AnimatePresence} from 'framer-motion'
// import Dashcard from '../../components/dashcard';
import SideBar from '../../components/sideadmin';
import Image from 'next/image'
import {useSelector} from 'react-redux'
import {MdEmail, MdEdit} from 'react-icons/md'
import {ImProfile} from 'react-icons/im'


export default function Profile() {
     const show = useSelector(state=>state.show);
   return (
        <>
     <section className='text-center mt-4'>
     { show && <SideBar />}
     <Image src="/images/admin.jpg"   width={200} height={200} className="rounded-circle z-0" />
     <p className='text-2xl font-bold'> Ochonogor Chibeze</p>
    <div className="flex items-center justify-center mb-4"> <MdEmail size={30} className='text-blue-400'/><span className="text-xl ml-4"> ochonogor.chibeze@gmail.com</span> </div>
    <div className="flex items-center justify-center"> <ImProfile size={30} className='text-blue-400'/><span className="text-xl ml-4"> I want to make a difference in my world </span></div>
    <aside className="inline-flex items-center px-8 py-1 bg-blue-500 mt-4 text-white justify-center"> <MdEdit size={30} className=''/><span className="text-xl  ml-4"> Edit info </span></aside>

    </section>
        </> 
   );
}
