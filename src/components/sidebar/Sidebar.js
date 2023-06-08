import React from "react"
import {
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    MdSentimentDissatisfied,
 }from 'react-icons/md'
 import "./Sidebar.scss"
import { useDispatch } from "react-redux"
import { log_out } from "../../redux/actions/auth.action"

const Sidebar=({sidebar,handlebtn})=>{

   const dispatch=useDispatch()
    const logOutHandler=()=>{
       dispatch(log_out())
    }
  
    return (
      
      <nav className={sidebar?"sidebar open":"sidebar"}  onClick={()=>handlebtn(false)}>
         <li>
            <MdHome  size={23}/>
             <span>Home</span>
        </li>
        <li>
            <MdThumbUp  size={23}/>
             <span>Liked Videos</span>
        </li>
        <li>
            <MdSubscriptions  size={23}/>
             <span>Subscriptions</span>
        </li>
    
        <li>
            <MdHistory  size={23}/>
             <span>Histroy</span>
        </li>
        <li>
            <MdLibraryBooks  size={23}/>
             <span>Library</span>
        </li>
        <li>
            <MdSentimentDissatisfied  size={23}/>
             <span>Sentiment</span>
        </li>

        <hr />
        <li onClick={logOutHandler}>
            <MdExitToApp  size={23}/>
             <span>Log Out</span>
        </li>

        <hr />
     
      </nav>
    )
}

export default Sidebar;