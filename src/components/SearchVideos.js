import React from 'react';
import MainVideoApp from '../containerForVideos/MainVideoApp';
import Clock from 'react-live-clock';
import { Link } from 'react-router-dom';

export default class SearchVideos extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="float-right size">
                    <Clock format={'HH:mm:ss'} ticking={true} timezone={''} />
                </div>
                <h1 className="display-4 mt-4 bolder">Search your favorite video</h1>
                <MainVideoApp />
                <Link to="/pick" className="btn btn-6 btn-6d">Back</Link>
            </div>
        );
    };
};