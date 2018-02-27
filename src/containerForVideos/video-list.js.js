import React from 'react';
import VideoListItem from './video-item-list';

const VideoList = (props) => {
    //console.log(props.videos);
    const videoItemsLists = props.videos.map((video) => {
        return <VideoListItem 
            onVideoSelect={props.onVideoSelect} 
            key={video.etag} 
            video={video} />
    });
    return (
        
        <ul className="col-md-12 col-lg-4 list-group">
            {videoItemsLists}
        </ul>
    );
};

export default VideoList;