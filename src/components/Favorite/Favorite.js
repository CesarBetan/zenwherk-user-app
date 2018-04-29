import React, { Component } from 'react';
import './Favorite.css';
import {apiUrl} from "../../Constants";
import NavBar from '../NavBar/index';
import axios from "axios/index";

class Favorite extends Component {

    constructor(props){
        super(props);
        let user = JSON.parse(localStorage.getItem('user'));
        if(localStorage.getItem('accesstoken')) {
            this.state = {uuid: user.uuid, userFavorites:[], endpoint: apiUrl+"user/", errorMessage: "", errorServer: ""};
        }else{
            this.state = {uuid: null, userFavorites:[], endpoint: apiUrl+"user/", errorMessage: "", errorServer: ""};
        }
    }

    getUser(){
        if(localStorage.getItem("accesstoken")){
            const config = {
                headers:{'Authorization':'Bearer ' + localStorage.getItem("accesstoken")}
            };
            axios.get(this.state.endpoint + this.state.uuid, config).then(res => {
                this.setState({userFavorites:res.data.favorites});
            });
        }
    }

    componentWillMount(){
        if(!localStorage.getItem('accesstoken')) {
            this.props.history.push('/');
        }
        this.getUser();
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
