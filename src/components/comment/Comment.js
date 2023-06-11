import React from "react";
import moment from "moment";
import './Comment.scss'


const Comment=()=>{

    return(
        <div className="comment p-2 d-flex">
                  <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=''
            className="m-3 rounded-circle"
        /> 
         <div className='comment__body'>
            <p className='mb-1 comment__header'>
              sid gohil • {moment('2020-05-08').fromNow()}
            </p>
            <p className="mb-0">Nice video dude</p>
         </div>
        </div>
    )
}

export default Comment;