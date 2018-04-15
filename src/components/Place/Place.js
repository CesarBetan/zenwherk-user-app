import React, { Component } from 'react';
import './Place.css';
import NavBar from '../NavBar';
import Hero from './Hero';
import Reviews from './Reviews';
import Services from './Services';
import Address from './Address'
import About from './About';
import Hours from './Hours';

class Place extends Component {
    render() {
        return (
            <div>
              <NavBar/>
              <Hero/>
              <Reviews/>
              <Services/>
              <Address/>
              <About/>
              <Hours/>
            </div>
        );
    }
}

export default Place;
