import React from 'react';
import { Link } from 'react-router-dom';
import Clock from 'react-live-clock';

class Pick extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="text-right violet size">
                    <Clock format={'HH:mm:ss'} ticking={true} timezone={''} />
                </div>
                <h1 className="display-4 py-2 bolder">Pick something</h1>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card-header bg-light font-weight-bold titles"><h2>Forcast</h2></div>
                        <div className="card-body bg-light"> 
                            <p className="card-text lead">Find out for a forcast in you favorite city!</p>
                            <Link to="/forcast" className="btn btn-primary">Find out</Link>
                        </div>
                        
                    </div>
                    <div className="col-sm-4 ">
                        <div className="card-header bg-light font-weight-bold "><h2 className="titles">Simple todo app</h2></div>
                        <div className="card-body bg-light">
                            <p className="card-text lead">In this application you can write what you need todo today.</p>
                            <Link to="todo" className="btn btn-primary">TODO</Link>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card-header bg-light font-weight-bold titles"><h2>Search any video</h2></div>
                        <div className="card-body bg-light">
                            <p className="card-text lead">Here you can find any video you like. Music, fails or anything.</p>
                            <Link to="SearchVideos" className="btn btn-primary">Go, search</Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    };
};

export default Pick;