import React from "react";
import './videoHorizontal.scss'
import { AiFillEye } from "react-icons/ai";
import request from "../../api"; // Corrected import statement
import moment from 'moment';
import numeral from "numeral";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Row, Col } from 'react-bootstrap'

const VideoHorizontal = () => {

    const seconds = moment.duration('100').asSeconds();
    const _duration = moment.utc(seconds * 1000).format("mm:ss");

    return (
        <Row className='py-2 m-1 videoHorizontal align-items-center'>
            <Col xs={6} md={4} className='videoHorizontal__left'>
                <LazyLoadImage src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt="" effect="blur"
                    wrapperClassName='videoHorizontal__thumbnail-wrapper'
                    className='videoHorizontal__thumbnail'
                />
                <span className="video__top__duration">{_duration}</span>
            </Col>

            <Col xs={6} md={8} className='videoHorizontal__right p-0'>
                <p className='mb-1 videoHorizontal__title'>the one who knock</p>
                <div className='videoHorizontal__details'>
                    <AiFillEye /> {numeral(100000).format('0.a')} Views •
                    {moment('2020-07-12').fromNow()}
                </div>

                <div className='my-1 videoHorizontal__channel d-flex align-items-center'>
                {/* <LazyLoadImage src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt="" effect="blur"
                   
                /> */}
                <p>Backbencher</p>
                    
                </div>
            </Col>
        </Row>
    )
}

export default VideoHorizontal;