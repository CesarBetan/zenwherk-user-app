import React, { Component } from 'react';
import './Home.css';
import NavBar from '../NavBar';
import TallSearchHeader from '../TallSearchHeader';
import FeaturesQuickSearch from '../FeaturesQuickSearch';
import FeaturedPlaces from '../FeaturedPlaces';
import {authUrl} from "../../Constants";
import axios from "axios/index";
import queryString from "query-string";

class Home extends Component {

    remove_hash_from_url() {
        const uri = window.location.toString();
        if (uri.indexOf("#") > 0) {
            const clean_uri = uri.substring(0, uri.indexOf("#"));
            window.history.replaceState({}, document.title, clean_uri);
        }
    }

    componentWillMount(){
        //const parsedHash = queryString.parse(this.props.location.hash);
        const parsedHash = queryString.parse(window.location.hash);
        this.remove_hash_from_url();
        if(parsedHash.access_token){
            localStorage.setItem("accesstoken", parsedHash.access_token);
        }

        if(localStorage.getItem("accesstoken")){
            const config = {
                headers:{'Authorization':'Bearer ' + localStorage.getItem("accesstoken")}
            };
            axios.get(authUrl + "user",config)
                .then(resp =>
                    localStorage.setItem('user', JSON.stringify({uuid: resp.data.principal.uuid}))
                )
                .catch((error) => console.log(error))
        }
    }
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
