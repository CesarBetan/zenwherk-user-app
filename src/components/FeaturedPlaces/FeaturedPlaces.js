import React, { Component } from 'react';
import './FeaturedPlaces.css';
import SectionTitle from '../SectionTitle';
import PlaceCard from '../PlaceCard';

class FeaturedPlaces extends Component {

    render() {
        const places = [{name: "Nothing But Coffee", pictures: [],
        headline: "A hidden gem in the heart of L.A."}, {name: "Nothing But Coffee", pictures: [],
        headline: "A hidden gem in the heart of L.A."}]
        return (
          <div className="featured-places-container PraxisNext-ExtraBlack">
            <SectionTitle title="Places We Love"/>
            {
              places.map((featuredPlace, i) =>
                <PlaceCard key={i} featuredPlace={featuredPlace}/>
              )
            }
          </div>
        );
    }
}

export default FeaturedPlaces;
