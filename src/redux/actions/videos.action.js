import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from '../actionType';
import request from '../../api'



export const getPopularVideos=()=>async (dispatch,getState) =>{
    try {
        dispatch({
            type:HOME_VIDEOS_REQUEST,
        })
      const {data}=  await  request('/videos',{
            params:{
               part:'snippet,contentDetails,statistics',
               chart:'mostPopular',
               regionCode:'IN',
               maxResults:1,
               pageToken:getState().homeVideos.nextPageToken,
            },
        })
        

        dispatch({
            type:HOME_VIDEOS_SUCCESS,
            payload:{
                videos:data.items,
                nextPageToken:data.nextPageToken,
                category:'All'

            },
        })

        //  console.log(data);
        
    } catch (error) {
      
        console.log(error.message)
        dispatch({
            type:HOME_VIDEOS_FAIL,
            payloda:error.message
        })
        
    }

}


export const getVideosByCategory=(keyword)=>async (dispatch,getState) =>{
    try {
        dispatch({
            type:HOME_VIDEOS_REQUEST,
        })
      const {data}=  await  request('/search',{
            params:{
               part:'snippet',
               maxResults:1,
               pageToken:getState().homeVideos.nextPageToken,
               q:keyword,
               type:"video"
            },
        })
        

        dispatch({
            type:HOME_VIDEOS_SUCCESS,
            payload:{
                videos:data.items,
                nextPageToken:data.nextPageToken,
                category:keyword,

            },
        })

        //  console.log(data);
        
    } catch (error) {
      
        console.log(error.message)
        dispatch({
            type:HOME_VIDEOS_FAIL,
            payloda:error.message
        })
        
    }

}