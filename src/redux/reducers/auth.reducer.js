import {
   LOAD_PROFILE,
   LOGIN_FAIL,
   LOGIN_REQUEST,
   LOGIN_SUCCESS,
} from '../actionType'

const intialState = {
    accessToken: null,
    user: null,
    loading: null
}

export const authReducer = (prevState = intialState, action) => {
  const {type,payload}=action

     switch(type){
        case LOGIN_REQUEST:
        return {
            ...prevState,
            loading:true,
        }
        case LOGIN_SUCCESS:
            return{
                ...prevState,
                accessToken:payload,
                loading:false,

            }
          case LOGIN_FAIL:
            return{
                ...prevState,
                accessToken:null,
                loading:false,
                error:payload,
            }
            case LOAD_PROFILE:
                return{
                    ...prevState,
                    user:payload,
                }
          default:
            return prevState

     }
}