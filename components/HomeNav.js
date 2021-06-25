import Link from 'next/link'
const HomeNav = () => {
     return (
          <div className='bg-blue-200 flex flex-col font-semibold text-2xl px-4 '>
               <Link href='/'><a> Home </a></Link>
               <Link href='/about'><a> About Us </a></Link>
               <Link href='/faq'><a> FAQ </a></Link>
               <Link href='/login'><a> Login </a></Link>
               <Link href='/register'><a> Sign Up </a></Link>
          </div>
     )
}
export default HomeNav
