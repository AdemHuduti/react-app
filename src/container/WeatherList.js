import React from 'react';
import { connect } from 'react-redux';
import SparklinesChart from './SparklinesChart'
import { Link } from 'react-router-dom';

class WeatherList extends React.Component {

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map((weather) => weather.main.temp);
        const humidity = cityData.list.map((weather) => weather.main.humidity);
        const pressure = cityData.list.map((weather) => weather.main.pressure);

        return (
            <tr key={name}>
                <td>{name}</td>
                <td><SparklinesChart data={temps} color="black" units="K" /></td>
                <td><SparklinesChart data={humidity} color="orange" units="%" /></td>
                <td><SparklinesChart data={pressure} color="red" units="hPa" /></td>
            </tr>
        );
    };

    render() {
        return (
            <div>
                <table className="table table-hover" >
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature (K) </th>
                            <th>Humidity (%) </th>
                            <th>Pressure (hPa) </th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.weather.map(this.renderWeather)}
                    </tbody>
                </table>
                <Link to="/pick" className="btn btn-6 btn-6d">Back</Link>
            </div>
        );
    };
};

function mapStateToProps(state) {
    return {
        weather: state.weather
    };
};

export default connect(mapStateToProps)(WeatherList)