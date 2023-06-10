import {
    HOME_VIDEOS_FAIL,
    HOME_VIDEOS_SUCCESS,
    HOME_VIDEOS_REQUEST,
} from '../actionType'


export const homeVideosReducer=(
state={
 videos:[],
 loading:false,
 nextPageToken:null,
 activeCategory:'All'

},action)=>{

     const {type,payload}=action;

     switch(type){
        case HOME_VIDEOS_REQUEST:
            return{
                 ...state,
                 loading:true,
            }
        case HOME_VIDEOS_SUCCESS:
            return{
                ...state,
                videos:
                  state.activeCategory===payload.category?[...state.videos,...payload.videos]:payload.videos,
                nextPageToken:payload.nextPageToken,
                loading:false,      
                activeCategory:payload.category
            }
            case HOME_VIDEOS_FAIL:
            return{
                ...state,
                 loading:false,
                 error:payload     
            }
            default:
                return state
     }


 

}