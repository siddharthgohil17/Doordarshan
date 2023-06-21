import React, { useEffect, useState } from "react";
import './comments.scss'
import Comment from "../comment/Comment";
import { useDispatch, useSelector } from "react-redux";
import { addComment, getCommentsVideoById } from "../../redux/actions/comment.action";


const Comments=({videoId,totalComments})=>{

    const dispatch=useDispatch();
     
    useEffect(()=>{
        dispatch(getCommentsVideoById(videoId))
    },[dispatch,videoId])

    const comments=useSelector(state=>state.commentList.comments)
      
    const [text,Settext]=useState('')
    const _comments = comments?.map(
        comment => comment.snippet.topLevelComment.snippet
     )

    const handleComment=(e)=>{
        e.preventDefault()
        if(text.length===0)return 
         dispatch(addComment(videoId,text))
         Settext('')
    }
    return(
        <div className='comments'>
        <p>{totalComments} Comments</p>
        <div className=' comments__form my-2 d-flex w-100'>
        <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=''
            className="m-3 rounded-circle"
        /> 
        <form onSubmit={handleComment} className='d-flex flex-grow-1'>
               <input
                  type='text'
                  className='flex-grow-1'
                  placeholder='Write a comment...'
                  value={text}
                  onChange={e => Settext(e.target.value)}
               />
               <button className='p-2 border-0'>Comment</button>
            </form>
        </div>
        <div className='comments__list'>
       {
        _comments?.map((comment,i)=>(
            <Comment comment={comment} key={i}/>
        ))}
         </div>

        </div>
    )
}

export default Comments;