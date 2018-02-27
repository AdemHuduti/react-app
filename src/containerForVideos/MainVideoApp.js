import _ from 'lodash';
import React from 'react';
import SearchVideoBar from './search-bar-video';
import VideoList from './video-list.js';
import VideoDetail from './video-details';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyD-amTNnI9BAC8BtBSWcO4VGBs-MKJqoww';

export default class MainVideoApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('NBA');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY,term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0] 
            });
        });
    };

    render() {
        const videoSearchDebounced = _.debounce((term) => {this.videoSearch(term)}, 300);
        return (
            <div className="container">
                <SearchVideoBar onSearchVideoChange={videoSearchDebounced} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    videos={this.state.videos} 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
                />
            </div>
        );
    };
};