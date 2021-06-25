
const Dashcard = ({description, number}) => {
     return (
     <section className=' grid justify-items-center text-blue-900 place-items-center shadow-lg bg-gray-50 w-10/12 h-28 mx-auto my-8'>
          <p className='text-4xl'> {description}</p>
          <p className='text-4xl'> {number} </p>
       </section>
     )
}
export default Dashcard
