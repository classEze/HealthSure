const initialState = {
     isLoggedIn:false,
     user:{},
     show:false,
     homeshow:false
}

const myReducer = (state=initialState, action) =>{
     switch(action.type){
          case 'setIsLoggedIn' : {
               return {...state, isLoggedIn : action.payload}
          }
          case 'setShow':
               return {...state, show:!state.show }
          case 'setHShow':
               return {...state, homeshow:!state.homeshow }
          case 'SET_USER':
               return {...state, user:action.payload }
          default:
               return state;
     }
}
export default myReducer;