import { COMMENT_LIST_FAIL,COMMENT_LIST_REQUEST,COMMENT_LIST_SUCCESS, CREATCOMMENT_FAIL, CREATCOMMENT_SUCCESS } from "../actionType"
import request from '../../api'



export const getCommentsVideoById = (id) => async (dispatch) => {
   try {

      dispatch({
         type: COMMENT_LIST_REQUEST,
      })
      const { data } = await request('/commentThreads', {
         params: {
            part: 'snippet',
            videoId:id,
         },
      })

      dispatch({
         type: COMMENT_LIST_SUCCESS,
         payload: data.items,
      })


   } catch (error) {
      console.log(error.response.data)
      dispatch({
         type: COMMENT_LIST_FAIL,
         payload: error.response.message,
      })
   }
}

export const addComment= (id,text) => async (dispatch,getState) => {

    try {
        const obj = {
            snippet: {
               videoId: id,
               topLevelComment: {
                  snippet: {
                     textOriginal: text,
                  },
               },
            },
         }

         await request.post('/commentThreads',obj,{
            params:{
                part:'snippet',
            }, 
             headers: {
                Authorization: `Bearer ${getState().auth.accessToken}`,
                
             },
         })
         dispatch({
            type:CREATCOMMENT_SUCCESS
         })
        setTimeout(()=>dispatch(getCommentsVideoById(id),3000))
        
    } catch (error) {
        console.log(error.message.data)
        dispatch({
            type:CREATCOMMENT_FAIL,
            payload:error.response.data.message
         })
    }
   
 }
 
  