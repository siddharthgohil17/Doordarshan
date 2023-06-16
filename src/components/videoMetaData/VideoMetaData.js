import React, { useEffect } from "react";
import './videoMetaData.scss'
import moment from 'moment'
import numeral from 'numeral';
import   {MdThumbDown,MdThumbUp} from 'react-icons/md'
import ShowMoreText from "react-show-more-text";
import { useDispatch, useSelector } from "react-redux";
import { checkSubscriptionStatus, getChannelDetails } from "../../redux/actions/channel.action";


const VideoMetaData=({video:{snippet,statistics},videoId})=>{
    const {channelId,channelTitle,description,title,publishedAt}=snippet;
    const {viewCount,likeCount,dislikeCount}=statistics;

   const dispatch=useDispatch();

   

   const {snippet:channelSnippet,statistics:channelStasttics}=useSelector(state=>state.channelDetails.channel)
   
   const subscriptionStatus=useSelector(state=>state.channelDetails.subscriptionStatus)
   useEffect(()=>{
      dispatch(getChannelDetails(channelId));
      dispatch(checkSubscriptionStatus(channelId));
   },[dispatch,channelId])






return (
    <div className='videoMetaData py-2'>
    <div className='videoMetaData__top'> 
    <h5 style={{fontWeight:'600'}}>{title}</h5>
       <div className='py-1 d-flex justify-content-between align-items-center'>
       <span>
          {numeral(viewCount).format('0.a')} views •
          {moment(publishedAt).fromNow()}
       </span> 
       <div>
        <span className="m-1" >
            <MdThumbUp  size={26}/>
            {numeral(likeCount).format('0.a')} 
        </span>
        <span  className="m-3"   >
        <MdThumbDown  size={26}/>
        {/* {numeral(dislikeCount).format('0.a')}  */}
        </span>
        
       </div>
    </div>
    </div>

    <div className='py-3 my-2 videoMetaData__channel d-flex justify-content-between align-items-center'> 
    <div className="d-flex">
        <img src={channelSnippet?.thumbnails?.default?.url} 
        className="m-1 rounded-circle"
        alt=''/>
            <div className='d-flex flex-column'>
        <span>
           {channelTitle}
        </span>
        <span>{numeral(channelStasttics?.subscriberCount).format('0.a')} Subscriber</span>
    </div>

    </div>
<button className={`p-2 m-2 border-0 btn ${
                  subscriptionStatus && 'btn-gray'
               }`}>
   { subscriptionStatus?'Subscribed':"Subscrib"}
</button>
    </div>
   
    <div   className='videoMetaData__description'>
    <ShowMoreText
                /* Default options */
                lines={3}
                more="SHOW MORE"
                less="SHOW LESS"
                anchorClass="show-more-less-clickable showMoreText"
                expanded={false}
                truncatedEndingComponent={"... "}
            >
    {description}

     </ShowMoreText>
     </div>
   </div>
)
}

export default VideoMetaData;