import React, { Component } from 'react';
import './Home.css';
import NavBar from '../NavBar';
import TallSearchHeader from '../TallSearchHeader';
import FeaturesQuickSearch from '../FeaturesQuickSearch';

class Home extends Component {
    render() {
        return (
            <div>
              <NavBar/>
              <TallSearchHeader/>
              <FeaturesQuickSearch/>
            </div>
        );
    }
}

export default Home;
