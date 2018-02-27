import React from 'react';
import SearchBar from './search_bar';
import WeatherList from './WeatherList'

export default class MainForcast extends React.Component {
    render() {
        return (
            <div className="container mt-5">
                <h3 className="display-5 mt-3">Go, search for your favorite city!</h3>
                <SearchBar />
                <WeatherList />
            </div>
        );
    };
};