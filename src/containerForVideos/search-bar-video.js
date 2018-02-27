import React from 'react';

export default class SearchVideoBar extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            term: ''
        };
    }
    
    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchVideoChange(term);
    }

    render() {   
        return (
            <div className="container search-bar">
                <input  
                placeholder="Search video.."
                value={this.state.term}
                onChange={e => this.onInputChange(e.target.value)}
                />
            </div>
        );
    };
};