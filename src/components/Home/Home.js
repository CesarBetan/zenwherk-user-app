import React, { Component } from 'react';
import './Home.css';
import NavBar from '../NavBar';
import TallSearchHeader from '../TallSearchHeader';
import FeaturesQuickSearch from '../FeaturesQuickSearch';
import FeaturedPlaces from '../FeaturedPlaces';

class Home extends Component {
    render() {
        document.title = "ZenWherk";
        return (
            <div>
              <NavBar/>
              <TallSearchHeader/>
              <FeaturesQuickSearch/>
              <FeaturedPlaces/>
            </div>
        );
    }
}

export default Home;
