import Link from 'next/link'
import {useSelector} from 'react-redux'
import HomeNav from '../components/HomeNav'
import Button from '../components/button'
import IconText from '../components/iconText'
import { MdLocationOn, MdShare, MdBook} from 'react-icons/md'
import {GiTripleNeedle} from 'react-icons/gi'
export default function Home({location}) {
  const state = useSelector(state=>state)
  return(
    <main className='main-home grid'>
     {state.homeshow && <HomeNav />}
      <section className="py-2 text-center flasher text-2xl font-bold text-white bg-red-500">
              Covid 19 is real!! Wear a mask!! Stay Safe.
        </section>
        <section className='self-center'>
          <IconText text="Locate Covid 19 Test Centers">
            <MdLocationOn/>
          </IconText>
          <IconText text="Check Vaccine Eligibility">
            <GiTripleNeedle />
          </IconText>
          <IconText text="Book For a Covid 19 shot">
            <MdBook />
          </IconText>
          <IconText text="Share Your Experience">
            <MdShare />
          </IconText>
        </section>
        <section className="my-4 w-11/12 mx-auto flex justify-between self-end">
         <Link href='/register'><a> <Button text="Get Started"/> </a></Link>
         <Link href='/login'><a> <Button text="Login"/> </a></Link>
        </section>
    </main>
  )
}
export async function getStaticProps(context){
  if(true){
    return{
      props:{ location:'hospital'}
    }
  }
  return {
    props : {}
  }
}
Home.layout = 'home'
