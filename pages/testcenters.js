import connect_DB from 'top/db'
import mongoose from 'mongoose'
import {useState} from 'react'
import centers from 'top/Models/gcenters'
import privcenters from 'top/Models/pcenters'
import cocenters from 'top/Models/ccenters'
import {useSelector} from 'react-redux'
import SideUser from 'top/components/sideuser'

export async function getStaticProps(){
     connect_DB(mongoose)
     try{
         const fetchedgovCenters = await centers.find()
         const fetchedprivCenters = await privcenters.find()
         const fetchedcorpCenters = await cocenters.find()
          return {
               props:{
                  corpcenters: JSON.parse(JSON.stringify(fetchedcorpCenters)),
                  govcenters: JSON.parse(JSON.stringify(fetchedgovCenters)),
                  privcenters: JSON.parse(JSON.stringify(fetchedprivCenters))
               }
          }
         }
     catch(err){
          return {
               props: {
               error: err.message
          }
     }
}
}

const TestCenters = ({error,govcenters,privcenters, corpcenters}) => {
     const [branch, setBranch] = useState('Govt')
     const state = useSelector(state=>state)
     return (
          <main className='bg-gray-50'>
               {state.show && <SideUser />}
          <section className='p-2 bg-blue-500 text-white'>
               <p className='text-center font-bold text-xl uppercase'> Covid 19 Test Centers in Nigeria</p>
            <div className='px-4 items-end mt-2 filter-buttons flex justify-between'>
                 <p style={{ borderBottom: branch=='Govt'? "1px solid white" : ""}} onClick={()=>setBranch('Govt')}> Government</p>
                 <p style={{ borderBottom: branch=='Priv'? "1px solid white" : ""}} onClick={()=>setBranch('Priv')}> Private</p>
                 <p style={{ borderBottom: branch=='Corp'? "1px solid white" : ""}} onClick={()=>setBranch('Corp')}> Corporate</p>
            </div>
          </section>
         { branch=='Govt' && (
               <section className="mt-4">
               <p className='text-center text-red-500'>{error}</p>
                   {govcenters.map(center=>{
                     return(
                   <div key={center} className='w-5/6 mx-auto rounded-xl font-bold shadow-md mb-4 p-4 bg-white'>
                        <p className='text-center text-xl'>{center.Name}</p>
                       <p> Type: {center.Type}</p>
                       <p> Owned by: {center.Owned_by}</p>
                       <p> State: {center.State}</p>
                       <p> Method: {center.Method}</p>
                   </div>
                        )
                   })}
              </section>
         )}
         { branch=='Priv' && (
               <section className="mt-4">
               <p className='text-center text-red-500'>{error}</p>
                   {privcenters.map(pcenter=>{
                     return(
                   <div key={pcenter} className='w-5/6 mx-auto rounded-xl font-bold shadow-md mb-4 p-4 bg-white'>
                        <p className='text-center text-xl'>{pcenter.Name}</p>
                       <p> State: {pcenter.State}</p>
                       <p>  Platform: {pcenter.Platform}</p>
                       <p> Phone: {pcenter.phone ? pcenter.phone : "N/A"}</p>
                       <p className='text-sm'> Email: {pcenter.Email ? pcenter.Email : "N/A"}</p>
                   </div>
                        )
                   })}
              </section>
         )}
         { branch=='Corp' && (
               <section className="mt-4">
               <p className='text-center text-red-500'>{error}</p>
                   {corpcenters.map(center=>{
                     return(
                   <div key={center} className='w-5/6 mx-auto rounded-xl font-bold shadow-md mb-4 p-4 bg-white'>
                        <p className='text-center text-xl'>{center.Lab}</p>
                       <p> State: {center.State}</p>
                       <p>  Platform: {center.Platform}</p>
                       <p>  Type: {center.Type}</p>
                   </div>
                        )
                   })}
              </section>
         )}

          </main>
     )}
export default TestCenters
