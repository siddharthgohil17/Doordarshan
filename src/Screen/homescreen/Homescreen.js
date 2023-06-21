import React, { useEffect } from "react"
import Categorise from "../../components/categorise/Categorise"
import Video from "../../components/video/Video"
import { Col, Container} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getPopularVideos, getVideosByCategory } from "../../redux/actions/videos.action"
import InfiniteScroll  from "react-infinite-scroll-component"
import 'react-loading-skeleton/dist/skeleton.css'
import 'react-lazy-load-image-component/src/effects/blur.css';
import './home.scss'


import SkeletonVideo from "../../components/skeletons/SkeletonVideo"


const HomeScreen=()=>{

    const {videos,activeCategory,loading}=useSelector(state=>state.homeVideos)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getPopularVideos())
    },[dispatch])

    const fetchData=()=>{
        if(activeCategory==='All')
       { dispatch(getPopularVideos())}
       else{
        dispatch(getVideosByCategory(activeCategory))
       }
    }

   
    return (
        <Container>
            <Categorise />
        
        <InfiniteScroll
            dataLength={videos.length}
            next={fetchData}
            hasMore={true}
            loader={
                <div className="spinner-border text-danger d-block mx-auto"> </div>
            }
          >
            <div className="row">
         {!loading
               ? videos.map(video => (
                    <Col lg={3} md={4}>
                       <Video video={video} key={video.id} />
                    </Col>
                 ))
               : [...Array(20)].map(() => (
                    <Col lg={3} md={4}>
                       <SkeletonVideo />
                    </Col>
                 ))}
         
                 </div>
           </InfiniteScroll>
         
           </Container>
    )
}
export default HomeScreen;