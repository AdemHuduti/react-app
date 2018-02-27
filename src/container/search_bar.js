import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';

class SearchBar extends React.Component {
    constructor(props) {
        super (props);

        this.state = {
            myValue: ''
        }
    }

    onChangeInput(e) {
        this.setState({
            myValue: e.target.value
        });
    };

    onFormHandle(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.myValue);
        this.setState({
            myValue: ''
        });
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onFormHandle.bind(this)} className="input-group">
                    <input 
                    onChange={this.onChangeInput.bind(this)}
                    className="form-control"
                    placeholder="Search your favorite city"
                    value={this.state.myValue}
                    />
                    <span className="input-group-button">
                        <button type="submit" className="btn btn-outline-info">Search</button>
                    </span>
                </form>
            </div>
        );
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch) 
}

export default connect(null, mapDispatchToProps)(SearchBar)