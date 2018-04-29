import React, { Component } from 'react';
import './Favorite.css';
import {apiUrl} from "../../Constants";
import NavBar from '../NavBar/index';
import axios from "axios/index";

class Favorite extends Component {

    constructor(props){
        super(props);

    }

    componentWillMount(){
        if(!localStorage.getItem('accesstoken')) {
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div className="favorite-view">
                <NavBar/>

            </div>
        );
    }
}

export default Favorite;
