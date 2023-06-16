import React, { useEffect } from "react";
import './watchscreen.scss'
import { Row,Col} from "react-bootstrap";
import VideoMetaData from "../../components/videoMetaData/VideoMetaData";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";
import Comments from "../../components/comments/Comments";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideoById } from "../../redux/actions/videos.action";




const WatchScreen=()=>{

   const {id}=useParams();

   const dispatch=useDispatch() // to take care of globally defined state

   useEffect(()=>{
      dispatch(getVideoById(id));  //function,dependency
},[dispatch,id]);//dependency which this change the function is action is mounted and render

const {video,loading}=useSelector(state=>state.selectedVideo)

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
     
        <Comments/>
     </Col>

    <Col lg={4}>
{
   [...Array(10)].map(()=>(
      
   <VideoHorizontal/>))
}
    </Col> 
     </Row>
    )
}

export default WatchScreen;