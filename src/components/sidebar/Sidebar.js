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
import { Link } from "react-router-dom"


const Sidebar=({sidebar,handlebtn})=>{

   const dispatch=useDispatch()
    const logOutHandler=()=>{
       dispatch(log_out())
    }
    
  
    return (
      
      <nav className={sidebar?"sidebar open":"sidebar"}  onClick={()=>handlebtn(false)}>
          <Link to='/'  style={{textDecoration: 'none'}}>
         <li>
            <MdHome  size={23}/>
             <span>Home</span>
        </li>
        </Link>
        <li>
            <MdThumbUp  size={23}/>
             <span>Liked Videos</span>
        </li>

        <Link to='/feed/subscriptions' style={{textDecoration: 'none'}}>
        <li>
            <MdSubscriptions  size={23}/>
             <span>Subscriptions</span>
        </li>
        </Link>
    
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