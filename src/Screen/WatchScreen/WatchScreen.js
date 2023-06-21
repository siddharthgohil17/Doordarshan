import React, { useEffect } from "react";
import './watchscreen.scss'
import { Row,Col} from "react-bootstrap";
import VideoMetaData from "../../components/videoMetaData/VideoMetaData";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";
import Comments from "../../components/comments/Comments";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRelatedVideos, getVideoById } from "../../redux/actions/videos.action";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";




const WatchScreen=()=>{

   const {id}=useParams();

   const dispatch=useDispatch() // to take care of globally defined state

   useEffect(()=>{
      dispatch(getVideoById(id)); 
      dispatch(getRelatedVideos(id)) //function,dependency
},[dispatch,id]);//dependency which this change the function is action is mounted and render

const {video,loading}=useSelector(state=>state.selectedVideo)
const {videos,loading:relatedVideoLoading}=useSelector(state=>state.relatedVideos)

    return(
     <Row>
     <Col lg={8}>
        <div className="watchScreen__player">
               <iframe
            src={`https://www.youtube.com/embed/${id}`}
                  frameborder='0'
                  title={video?.snipper?.title}
                  allowFullScreen
                  width='100%'
                  height='100%'></iframe>         
        </div>
        {
         !loading? (<VideoMetaData video={video} videoId={id}/>):(<h1>Loading....</h1>)
        }
     
        <Comments videoId={id} totalComments={video?.statistics?.commentCount}/>
     </Col>

    <Col lg={4}>
{
  !relatedVideoLoading ? videos?.map((video)=>(
      
   <VideoHorizontal video={video} key={video.id.videoId}/>))

   : 
   <SkeletonTheme >
   <style>
    {`
      .react-loading-skeleton {
        background-color: #3c4147;
        border-color: #343a40;
      }
    `}
    </style>
   <Skeleton width="100%" height="130px" count={10} />
   </SkeletonTheme>
}
    </Col> 
     </Row>
    )
}

export default WatchScreen;