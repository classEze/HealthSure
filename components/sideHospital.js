import Link from 'next/link'
import {useDispatch} from 'react-redux'

const SideHos = () => {
   const dispatch = useDispatch()
   function sendMessage(){
      dispatch({type:'setShow'}) 
 }

     return (
          <>
          <section className='fixed top-20 left-0 h-screen z-10 w-screen' onClick={sendMessage}>
          <nav className='h-full w-3/6 bg-blue-400 text-white text-xl font-bold px-4'> 
           <div>
              <p> <Link href='/coming'><a> My Profile</a></Link>  </p>
              <p> <Link href='/hospital/dashboard'><a> Dashboard</a></Link> </p>
              <p> <Link href='/logout'><a> Logout </a></Link> </p>
           </div>
          </nav>
          </section>
       </>
     )
}
export default SideHos;
