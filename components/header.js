import React, {useState} from 'react'
import {BiMenuAltRight,BiMenuAltLeft } from 'react-icons/Bi'
import {GrClose, } from 'react-icons/gr'
import Image from 'next/image'
import {useSelector, useDispatch} from 'react-redux'

const Header = ({layout}) => {
     const show = useSelector(state=>state.show);
     const homeshow = useSelector(state=>state.homeshow);
     const dispatch = useDispatch();
     function sendMessage(e){
         //  if(e.target.tagName !== 'svg') return;
          dispatch({type: e.target.parentNode.dataset.which || e.target.dataset.which == 'home' ? 'setHShow': 'setShow'}) 
     }
     return (
          <>
          {layout=='home' &&
          <>
          <section>
          <nav className='h-20 flex justify-between items-center shadow-md px-4'> 
             <Image src="/images/logo.svg" width={70} height={70}/> 
              <p className='text-3xl font-bold'> HealthSure </p>
             {!homeshow && <BiMenuAltRight data-which='home' size={40} onClick={sendMessage} /> }
             {homeshow && <GrClose data-which='home' size={30} onClick={sendMessage} /> }
          </nav>
          </section>
          </>
          }
          {layout !=='home' &&
          <>
          <section>
          <nav className='h-20 flex justify-between items-center shadow-md px-4'> 
             {!show && <BiMenuAltLeft size={40} onClick={sendMessage} /> }
             {show && <GrClose size={30} onClick={sendMessage} />}
             <Image src="/images/logo.svg" width={70} height={70}/> 
             <Image src="/images/admin.jpg" className='rounded-circle' width={70} height={70}/> 
          </nav>
          </section>
          </>
          }
          
       </>
     )
}
export default Header
