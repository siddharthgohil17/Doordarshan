import React, {  useState } from "react"
import "./Header.scss"
import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps, MdVideoCall } from 'react-icons/md'
import { Link, useNavigate } from "react-router-dom"

const Header = ({handlesidebar}) => {

   
    const [input,setInput]=useState('')

     const navigate=useNavigate();
    const handleSubmit=(e)=>{
       e.preventDefault();
       navigate(`search/${input}`)
    }
  
    return (
        <div className='header'>
            <FaBars 
            onClick={()=>handlesidebar()}
                className='header__menu'
                size={26}
                 />

        
         <Link to='/'  style={{textDecoration: 'none'}}>
         <div style={{display:'flex'}}>
           
            <img
                src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
                alt=''
                className='header__logo'
            />
            <h3 className="mx-3" style={{color:'white'}}>𝒚𝒐𝒖𝒕𝒖𝒃𝒆</h3>
            </div>
            </Link>
            

            <form style={{ borderRadius: '50px' }} onSubmit={handleSubmit}>

            
            <button className="py-2" style={{pointerEvents: 'none'}} > <AiOutlineSearch size={22} /> </button>

                <input
                    type='text'
                    placeholder='    Search'
                    value={input}
                onChange={e=>setInput(e.target.value)}
                />
                <button className="py-2" type='submit' style={{ backgroundColor:'black', borderRadius: '20px' }}>
                    <AiOutlineSearch size={22} />
                </button>
            </form>

            <div className='header__icons'>
            <MdVideoCall size={28} />
                <MdNotifications size={28} />
                <Link to='/'> 
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt='avatar' />
                </Link>
            </div>
        </div>
    )
}
export default Header;