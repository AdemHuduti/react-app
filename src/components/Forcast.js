import React from 'react';
import MainForcast from '../container/MainForcast';
import Clock from 'react-live-clock';

export default class Forcast extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="text-right violet size">
                    <Clock format={'HH:mm:ss'} ticking={true} timezone={''} />
                </div>
                <MainForcast />
            </div>
        );
    };
};