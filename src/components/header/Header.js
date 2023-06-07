import React from "react"
import "./Header.scss"
import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'

const Header = (props) => {
   
  
    return (
        <div className='header'>
            <FaBars onClick={()=>props.handlesidebar()}
                className='header__menu'
                size={26}
                 />

        
            <img
                src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
                alt=''
                className='header__logo'
            />

            <form>
                <input
                    type='text'
                    placeholder='Search'

                />
                <button type='submit'>
                    <AiOutlineSearch size={22} />
                </button>
            </form>

            <div className='header__icons'>
                <MdNotifications size={28} />
                <MdApps size={28} />
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt='avatar' />
            </div>
        </div>
    )
}
export default Header;