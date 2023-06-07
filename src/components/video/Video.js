import React from "react"
import "./Video.scss"
import { AiFillEye } from "react-icons/ai"

const Video=()=>{
    return (
        <div className="video">
       <div className="video__top">
        <img src="	https://i.ytimg.com/vi/1QQrcTik1qo/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLAYgfNxskt_oAEwhLAes4oSolkSRgs" alt="" />
        <span className='video__top__duration'>05:34</span>
       </div>
       <div className="video__title">
    
      <span>dhoni hit 6 six #mahimarrahahai jksanxojksab</span>
       </div>
       <div className="video__details">
        <span><AiFillEye /> 5m Views •</span>
        <span>6 day ago</span>
       </div>
       <div className="video__channel">
        <img src="https://yt3.ggpht.com/ytc/AGIKgqM4MHT8GqYNCotHLhIPasr9pzvrhKKBTKBG7944=s88-c-k-c0x00ffffff-no-rj"  alt="" />
        <span>ranibow hat</span>
       </div>
        </div>
    )
}
export default Video;