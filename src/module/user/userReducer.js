export const USER_INITIAL_STATE = {
    token:'',
    promise:{
        isPending:false,
        isFullfilled:false,
        isErrorOcurred:false,
      }
}

const userReducer = (state = USER_INITIAL_STATE, action) =>{
    // return new state when "USER_LOGIN" action dispatch
    switch(action.type){
        case 'USER_LOGIN':{
            return {
                ...state,
                token:action.payload.token
            }
        }
        case "USER_PENDING":{
            return {
              ...state,
              promise:{
                isPending:true, isFullfilled:false, isErrorOcurred:false
              }
            }
          }
          case "USER_SUCCESS":{
            return {
              ...state,
              promise:{
                isPending:false, isFullfilled:true, isErrorOcurred:false
              }
            }
          }
          case "USER_ERROR":{
            return {
              ...state,
              promise:{
                isPending:false, isFullfilled:false, isErrorOcurred:true
              }
            }
          }
        default:{
            return state;
        }
    }
}

export default userReducer;