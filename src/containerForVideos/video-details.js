import React from 'react';

const VideoDetail = ({ video }) => {

    if(!video) {
        return <div><h2>Loading...</h2></div>
    }

    const videoId = video.id.videoId;
    //const url = 'https://www.youtube.com/embed' + videoId;
    const url = `https://www.youtube.com/embed/${videoId}`

    return (
        <div className="video-detail col-md-12 col-lg-8 col-sm-12 float-left ">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details ">
                <div className="lead bolder">{video.snippet.title}</div>
                <div className="">{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;