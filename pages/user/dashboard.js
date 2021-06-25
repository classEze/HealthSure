import Link from 'next/link';
import SideUser from '../../components/sideuser';
import HOC from 'top/components/authUserHOC';
import {useSelector} from 'react-redux';
import TabplusText from 'top/components/tabplustext';
import {FaAndroid, FaBell, FaBookmark, FaHistory, FaHome, FaHospital, FaPen, FaPlusCircle, FaUserCheck} from 'react-icons/fa'
import {GiTestTubes} from 'react-icons/gi'
import {BsFilePost} from 'react-icons/bs'

function Dashboard() {
const state = useSelector(state=>state);
function activate_Tracing(e){
Android.startDiscovering();
}
   return (
 <main className='grid bg-gray-100 w-full content-start mx-auto grid-cols-2 gap-4'>
     { state.show && <SideUser />}
     <TabplusText to="/testcenters" text1="Locate Test" text2='Centers'>
          <GiTestTubes size={40} />
     </TabplusText>
     <TabplusText to="/hospitals" text1="Locate" text2='Hospitals'>
       <FaHospital size={40} />
     </TabplusText>
     <TabplusText to={"/user/bookings/"+state.user.id} text1="Appointment" text2='Calendar'>
          <FaBookmark size={40} />
     </TabplusText>
     <TabplusText to="/user/book" text1="Book for" text2='a Vaccine Shot'>
          <FaBookmark size={40} />
     </TabplusText>
     <TabplusText to="/user/reserve" text1="Book Medical" text2='Treatment'>
          <FaPen size={40} />
     </TabplusText>
     <TabplusText to={"/user/history/"+state.user.id} text1="My" text2='History'>
          <FaHistory size={40} />
     </TabplusText>
     <TabplusText to={'/user/contacts/'+state.user.id} text1="My" text2='Contacts'>
          <FaBell size={40} />
     </TabplusText>
     <TabplusText to={'/user/treatment/'+state.user.id} text1="My treatment" text2='Calendar'>
          <FaBell size={40} />
     </TabplusText>
     <figure onClick={activate_Tracing} className='flex border-gray-200  border flex-col justify-center py-1 items-center'>
              <p className='inline-flex text-blue-500 p-2 rounded-2xl bg-white shadow-md'>
              <FaBell size={40} />
             </p>
               <figcaption className='text-lg font-semibold'>Activate</figcaption>
               <figcaption className='text-lg font-semibold'>Contact Tracing</figcaption>
          </figure>

     <TabplusText to="/coming" text1="Chat" text2='Forum'>
          <BsFilePost size={40} />
     </TabplusText>
</main>   
   );
}
export default HOC(Dashboard);

