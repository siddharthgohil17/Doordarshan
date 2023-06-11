import React from "react";
import './videoMetaData.scss'
import moment from 'moment'
import numeral from 'numeral';
import   {MdThumbDown,MdThumbUp} from 'react-icons/md'
import ShowMoreText from "react-show-more-text";


const VideoMetaData=()=>{
return (
    <div className='videoMetaData py-2'>
    <div className='videoMetaData__top'> 
    <h5>Video title</h5>
       <div className='py-1 d-flex justify-content-between align-items-center'>
       <span>
          {numeral(10000).format('0.a')} views •
          {moment('2020-06-11').fromNow()}
       </span> 
       <div>
        <span className="m-3" >
            <MdThumbUp  size={26}/>
            {numeral(10000).format('0.a')} 
        </span>
        <span  className="m-3"   >
        <MdThumbDown  size={26}/>
        {numeral(10000).format('0.a')} 
        </span>
        
       </div>
    </div>
    </div>

    <div className='py-3 my-2 videoMetaData__channel d-flex justify-content-between align-items-center'> 
    <div className="d-flex">
        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' 
        className="m-1 round-circle"
        alt=''/>
            <div className='d-flex flex-column'>
        <span>
            Backbencher
        </span>
        <span>{numeral(10000).format('0.a')}Subscriber</span>
    </div>

    </div>
<button className="p-2 m-2 border-0 btn">
    Subscrib
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
    Certainly! Here are 50 lines of Lorem Ipsum text:

Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Praesent mattis ultrices velit, at lobortis nisi placerat ac.
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed vehicula velit at mi facilisis malesuada.
Fusce consectetur, odio a consequat eleifend, sem turpis interdum justo, in convallis elit tortor in sem.
Suspendisse potenti.
Aliquam erat volutpat.
Quisque at pharetra justo, ac euismod massa.
Cras in risus nec sem laoreet consequat sed eu nisi.
Maecenas in ipsum id tellus vestibulum consequat.
Vivamus commodo, massa vitae malesuada facilisis, tellus odio aliquam mauris, at tristique mi nunc eget ante.
Curabitur euismod consectetur libero, at interdum lacus commodo non.
Nullam congue, elit non pharetra pharetra, urna metus porta nisi, sit amet tincidunt erat est sit amet nisl.
Donec finibus mollis fringilla.
Nunc fringilla vestibulum ante sed laoreet.
Etiam lacinia tellus velit, nec iaculis tortor tristique ac.
Mauris dictum urna vel luctus aliquam.
Proin eleifend mauris sed faucibus dignissim.
Sed consequat turpis et mi consequat auctor.
Vestibulum varius placerat justo, vitae eleifend dolor faucibus vel.
Nam a ultrices mi.
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
Nam at er
     </ShowMoreText>
     </div>
   </div>
)
}

export default VideoMetaData;