import {useRouter} from 'next/router'
import {useDispatch} from 'react-redux'
import {verify} from 'jsonwebtoken'

const HOC = (Wrapped) => {
     return (props) => {
          const Router = useRouter();
          const dispatch = useDispatch()
          if(typeof window != 'undefined'){
               let activeUser = localStorage.getItem('userInfo');
           if(!activeUser){
               Router.replace('/login')
           } 

           else{
                activeUser = JSON.parse(activeUser)
                try{
                    const decodedToken = verify(activeUser.token, process.env.JWT_SECRET)
                    if(decodedToken.role !='hospital'){
                      localStorage.removeItem('userInfo')
                      Router.replace('/login')
                    }
                    dispatch(
                         {
                              type:'SET_USER',
                              payload: {id:activeUser?.id, name:activeUser?.name, token:activeUser.token}
                         })
                } 
                catch(err){
                    localStorage.removeItem('userInfo')
                    Router.replace('/login')
                }

               }
               } 
               return <Wrapped {...props} />
          } 
     } 
     export default HOC