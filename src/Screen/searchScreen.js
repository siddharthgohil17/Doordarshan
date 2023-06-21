import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideosBySearch } from "../redux/actions/videos.action";
import { Container } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import VideoHorizontal from "../components/videoHorizontal/VideoHorizontal";
import InfiniteScroll from "react-infinite-scroll-component";

const SearchScreen = () => {
  const query = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideosBySearch(query.query));
  }, [query, dispatch]);

  const { videos, loading, nextPageToken } = useSelector(
    (state) => state.searchVideo
  );

  const fetchData = () => {
    dispatch(getVideosBySearch(query.query, nextPageToken));
  };

  return (
    <div>
      <Container>
        <InfiniteScroll
          dataLength={videos.length}
          next={fetchData}
          hasMore={nextPageToken !== null}
          loader={
            <div className="spinner-border text-danger d-block mx-auto"></div>
          }
        >
          {!loading ? (
            videos?.map((video) => (
              <VideoHorizontal video={video} key={video.id.videoId} />
            ))
          ) : (
            <SkeletonTheme color="#343a40" highlightColor="#3c4147">
              <Skeleton width="100%" height="160px" count={20} />
            </SkeletonTheme>
          )}
        </InfiniteScroll>
      </Container>
    </div>
  );
};

export default SearchScreen;
