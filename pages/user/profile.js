import Head from 'next/head'
import Image from 'next/image'
import {useState, useCallback,useEffect} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import Dashcard from '../../components/dashcard';
import SideUser from '../../components/sideUser';
import {useSelector} from 'react-redux'
import {MdEmail, MdEdit} from 'react-icons/md'
import {ImProfile} from 'react-icons/im'


export default function UserProfile() {
     const show = useSelector(state=>state.show);
   return (
        <>
     <section className='text-center mt-4'>
     { show && <SideUser />}
     <Image src="/images/user.jpg" layout='intrinsic'  width={200} height={200} className="rounded-circle z-0" />
     <p className='text-2xl font-bold'> Imade Joseph</p>
    <div className="flex items-center justify-center mb-4"> <MdEmail size={30} className='text-blue-400'/><span className="text-xl ml-4"> joseph.imade@gmail.com</span> </div>
    <div className="flex items-center justify-center"> <ImProfile size={30} className='text-blue-400'/><span className="text-xl ml-4"> I want to be healthy and wealthy. Simple </span></div>
    <aside className="inline-flex items-center px-8 py-1 bg-blue-500 mt-4 text-white justify-center"> <MdEdit size={30} className=''/><span className="text-xl  ml-4"> Edit info </span></aside>

    </section>
        </> 
   );
}
