import React, { Component } from 'react';
import './Menu.css';
import axios from 'axios'
import queryString from 'query-string'
import {authUrl, frontUrl} from "../../Constants";
import { NavLink } from 'react-router-dom';

class Menu extends Component {

    constructor(props){
        super(props);
        let user = JSON.parse(localStorage.getItem('user'));
    }

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
        return (
            <div className="expandable-menu">
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        Nearby
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
                {
                    !localStorage.getItem('accesstoken') ?
                        <ul className="list-account">
                            <li>
                                <a href={authUrl + "oauth/authorize?client_id=zenwherk&response_type=token&redirect_uri="+frontUrl}> Iniciar Sesión</a>
                            </li>
                        </ul>
                        :
                        <ul className="list-account">
                            <li>
                                <NavLink to ={'/account'}>Ver Cuenta </NavLink>
                            </li>
                            <li>
                                <a
                                    style={{color:'#FFF', cursor:'pointer'}}
                                    onClick={() => {
                                        localStorage.removeItem("accesstoken");
                                        localStorage.removeItem("user");
                                        window.location.href = authUrl + 'logout';
                                    }
                                    }>Salir</a>
                            </li>
                        </ul>
                }
            </div>
        );
    }
}

export default Menu;
