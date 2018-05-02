import React, { Component } from 'react';
import './FeaturedPlaces.css';
import SectionTitle from '../SectionTitle';
import {apiUrl} from "../../Constants";
import PlaceCard from '../PlaceCard';
import axios from "axios/index";

class FeaturedPlaces extends Component {

    constructor(props) {
        super(props);
        this.state = { places: [], endpoint: apiUrl+"public/place?q=featured" }
    }

    componentWillMount() {
        axios.get(this.state.endpoint).then((res) => {
            this.setState({ places: res.data.result });
        }).catch(() => {

        });
    }

    render() {
        const { places } = this.state;
        return (
          <div className="featured-places-container PraxisNext-ExtraBlack">
            <SectionTitle title="Lugares Que Amamos"/>
            {
              places.map((featuredPlace) =>
                <PlaceCard key={featuredPlace.uuid} featuredPlace={featuredPlace}/>
              )
            }
          </div>
        );
    }
}

export default FeaturedPlaces;
