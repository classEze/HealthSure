import HOC from 'top/components/authAdminHOC';
import SideAdmin from 'top/components/sideadmin';
import {useSelector} from 'react-redux';
import TabplusText from 'top/components/tabplustext';
import {FaBookmark, FaHospital, FaPlusCircle, FaUserCheck} from 'react-icons/fa'

function Dashboard() {
const state = useSelector(state=>state);
   return (
        <main className='grid bg-gray-100 w-full content-start mx-auto grid-cols-2 gap-4'>
     { state.show && <SideAdmin />}
     <TabplusText to="/hospitals" text1="All" text2='Hospitals'>
          <FaHospital size={40} />
     </TabplusText>
     <TabplusText to="/admin/allusers" text1="All" text2='Users'>
          <FaUserCheck size={40} />
     </TabplusText>
     <TabplusText to="/coming" text1="Active" text2='Bookings'>
          <FaBookmark size={40} />
     </TabplusText>
     <TabplusText to="/admin/create" text1="Create" text2='An Admin'>
     <FaPlusCircle size={40} />
     </TabplusText>
        </main>
   );
}

export default HOC(Dashboard)
