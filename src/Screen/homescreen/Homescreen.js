import React from "react"
import Categorise from "../../components/categorise/Categorise"
import Video from "../../components/video/Video"
import { Col, Container, Row } from "react-bootstrap"


const HomeScreen=()=>{
    return (
        <Container>
            <Categorise />
            <Row>
           {[...new Array(20)].map(()=>(
            <Col lg={3} md={4}>
            <Video />
            </Col>
           ))}
            </Row>
        </Container>
    )
}
export default HomeScreen;