import Head from 'next/head'
import Image from 'next/image'
import {useState, useCallback,useEffect} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {useSelector} from 'react-redux'
import Link from 'next/link'
import HomeNav from '../components/HomeNav'


export default function Home() {
  const [index, setIndex] = useState(0)
  const show = useSelector(state=>state.homeshow)
  const text = [ "Health is wealth", "Knowing your status helps", "Get tested"]

  const slideFromTop = {
    start:{y:100, opacity:0 },
    end:{ y:0, opacity:1, transition:{ type:"spring", stiffness:150}},
    leave:{ opacity:0, transition:{ ease:"easeInOut", duration:1}}
 }


 const setAm = useCallback(
   () => {
         setIndex(index=>{
          return index === text.length - 1 ? 0 : index + 1
   })},
   [text.length]
 )

  useEffect(() => {
    setInterval( setAm , 6000)
  }, [setAm])

  return (
    <>
    <main className=''>
    {show && <HomeNav /> }
             <section className="py-8 text-center flasher text-2xl font-bold text-white bg-red-500">
              Covid 19 is real!! Wear a mask!! Stay Safe.
             </section>

      <section className='relative'>
      <Image src='/images/hospital.jpg' className='' width={1200} height={1100}/>
      <div className="text-5xl text-red-600 font-bold absolute bottom-20 left-20">
          <AnimatePresence exitBeforeEnter>
              {
                  text.map((text, i) => {
                  return i === index  &&
                  (
                    <motion.h1 key={index}
                    variants={slideFromTop}
                    initial="start"
                    animate="end"
                    exit="leave"
                    >
                    <p className=''> {text}... </p>
                     </motion.h1>
                  ) 
                   } )
              }
          </AnimatePresence>
          </div> 
          </section>
          <section className="w-11/12 mx-auto pt-2 home-card">
          <Image src='/images/elligible.svg'  width={350} height={350}/>
          <p className="word"> Check your vaccine Eligibility</p>
          </section>

          <section className="w-11/12 mx-auto home-card">
          <Image src='/images/location.svg'  width={350} height={350}/>
          <p className="word"> Locate Test Centers</p>
          </section>
          <section className="w-11/12 mx-auto home-card">
          <Image src='/images/mobile-book.svg'  width={350} height={350}/>
          <p className="word"> Book for a Covid 19 shot</p>
          </section>
          <section className="w-11/12 mx-auto home-card">
          <Image src='/images/social-network.svg'  width={350} height={350}/>
          <p className="word"> Share your experience</p>
          </section>
          <section className="w-11/12 mx-auto home-card">
          <Image src='/images/doctors.svg'  width={350} height={350}/>
          <p className="word"> Maintain Good health</p>
          </section>
    </main>
    </> 
  )
}
Home.layout = 'home'
