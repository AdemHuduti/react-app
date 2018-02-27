import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
    // const video = props.video;
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item hoverClass">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object mr-3" src={imageUrl} alt="myImages"/>
          </div>
          <div className="media-body ">
            <div className="media-heading ">{video.snippet.title}</div>
          </div>
        </div>
      </li>
    );
};

export default VideoListItem;