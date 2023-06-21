import {
    HOME_VIDEOS_FAIL,
    HOME_VIDEOS_SUCCESS,
    HOME_VIDEOS_REQUEST,
    SELECTED_VIDEO_FAIL,
    SELECTED_VIDEO_REQUEST,
    SELECTED_VIDEO_SUCCESS,
    RELATED_VIDEO_REQUEST,
    RELATED_VIDEO_SUCCESS,
    RELATED_VIDEO_FAIL,
    SEARCH_VIDEO_FAIL, SEARCH_VIDEO_REQUEST,SEARCH_VIDEO_SUCCESS 
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


export const selcetedVideoReducer=(
    state={
    loading:true,
    video:null,
},
action
)=>{
    const {type,payload}=action;

    switch(type){
        case SELECTED_VIDEO_REQUEST:
            return{
                 ...state,
                 loading:true,
            }
        case SELECTED_VIDEO_SUCCESS:
            return{
                ...state,
                video:payload,
                loading:false, 
            }
            case SELECTED_VIDEO_FAIL:
            return{
                ...state,
                 video:null,
                 loading:false,
                 error:payload     
            }
            default:
                return state
     }

}




export const relatedToVideoReducer=(
    state={
    loading:true,
    videos:[],
},
action
)=>{
    const {type,payload}=action;

    switch(type){
        case RELATED_VIDEO_REQUEST:
            return{
                 ...state,
                 loading:true,
            }
        case RELATED_VIDEO_SUCCESS:
            // console.log(payload); 
            return{
                ...state,
                videos:payload,
                loading:false, 
            }
            case RELATED_VIDEO_FAIL:
            return{
                ...state,

                 loading:false,
                 error:payload     
            }
            default:
                return state
     }

}



export const searchVideoReducer=(
    state={
    loading:true,
    videos:[],
},
action
)=>{
    const {type,payload}=action;

    switch(type){
        case SEARCH_VIDEO_REQUEST:
            return{
                 ...state,
                 loading:true,
            }
        case SEARCH_VIDEO_SUCCESS:
            // console.log(payload); 
            return{
                ...state,
                videos:payload,
                loading:false, 
            }
            case SEARCH_VIDEO_FAIL:
            return{
                ...state,

                 loading:false,
                 error:payload     
            }
            default:
                return state
     }

}
