import React from "react";
import './watchscreen.scss'
import { Row,Col} from "react-bootstrap";
import VideoMetaData from "../../components/videoMetaData/VideoMetaData";



const WatchScreen=()=>{
    return(
     <Row>
     <Col lg={8}>
        <div className="watchScreen__player">
               <iframe
               src="https://www.youtube.com/embed/tgbNymZ7vqY"
                  frameborder='0'
                  title='My video'
                  allowFullScreen
                  width='100%'
                  height='100%'></iframe>
                  
                 
        </div>
        <VideoMetaData />
     </Col>

    <Col lg={4}>

    </Col>



       
     </Row>
    )
}

export default WatchScreen;