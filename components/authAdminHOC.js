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
           } //endifnoactiveuser

           else{
                activeUser = JSON.parse(activeUser)
                try{
                    const decodedToken = verify(activeUser.token, process.env.JWT_SECRET)
                    if(decodedToken.role !='admin'){
                      localStorage.removeItem('userInfo')
                      Router.replace('/login')
                    }
                    dispatch(
                         {
                              type:'SET_USER',
                              payload: {id:activeUser?.id, name:activeUser?.name, token:activeUser.token}
                         })
                } //endtry
                catch(err){
                     console.log(err.message)
                    localStorage.removeItem('userInfo')
                    Router.replace('/login')
                }//endcatch

               }//endifthereisactiveuser
               } //endtypeofwindow
               return <Wrapped {...props} />
          } //endsecond hoc
     } //endeverything
     export default HOC