import React from "react";
import './comments.scss'
import Comment from "../comment/Comment";


const Comments=()=>{

    const handleComment=()=>{
        
    }
    return(
        <div className='comments'>
        <p>12344 Comments</p>
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
                //   value={text}
                //   onChange={e => setText(e.target.value)}
               />
               <button className='p-2 border-0'>Comment</button>
            </form>
        </div>
        <div className='comments__list'>
       {
        [ ...Array(15)].map(()=>(
            <Comment/>
        ))}
         </div>

        </div>
    )
}

export default Comments;