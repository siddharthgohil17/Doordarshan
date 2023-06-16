import React, { useEffect, useState } from "react";
import "./Video.scss";
import { AiFillEye } from "react-icons/ai";
import request from "../../api"; // Corrected import statement
import moment from 'moment';
import numeral from "numeral";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {useNavigate} from 'react-router-dom'

const Video = ({ video }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const _videoId=id?.videoId||id

  const navigate = useNavigate();
  const handleVideoClick = () => {
    navigate(`/watch/${_videoId}`);
  };
  
  useEffect(() => {
    const getVideoDetails = async () => {
      const { data: { items } } = await request('/videos', {
        params: {
          part: 'contentDetails,statistics',
          id: _videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    getVideoDetails();
  }, [_videoId]);
  // API when the component mounts or when the _videoId dependency changes. 

  useEffect(() => {
    const getChannelIcon = async () => {
      const { data: { items } } = await request('/channels', {
        params: {
          part: 'snippet',
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    getChannelIcon();
  }, [channelId]);

 

  return (
    <div className="video"  onClick={handleVideoClick}>
      <div className="video__top">
        <LazyLoadImage  src={medium.url} alt="" effect="blur" />
        <span className="video__top__duration">{_duration}</span>
      </div>
      <div className="video__title">
        <span>{title}</span>
      </div>
      <div className="video__details">
        <span> <AiFillEye/> {numeral(views).format('0.a')} views •</span>
        <span>{moment(publishedAt).fromNow()}</span>
      </div>
      <div className="video__channel">
        <LazyLoadImage src={channelIcon?.url} alt="" effect="blur"/>
        <span>{channelTitle}</span>
      </div>
    </div>
  );
};

export default Video;
