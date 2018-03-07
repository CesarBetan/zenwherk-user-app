import React, { Component } from 'react';
import './Compare.css';
import queryString from 'query-string';

class Compare extends Component {

    renderComparedIds(){
        const parsed = queryString.parse(this.props.location.search);
        if(typeof parsed.place_1 === 'string' && parsed.place_1.trim().length > 0 && typeof parsed.place_2 === 'string' && parsed.place_2.trim().length > 0) {
            return (
                <span>
                    Place 1 to compare: {parsed.place_1}
                    <br/>
                    Place 2 to compare: {parsed.place_2}
                </span>
            );
        }

        return "";
    }

    render() {
        return (
            <p>Compare component!<br/>{this.renderComparedIds()}</p>
        );
    }
}

export default Compare;