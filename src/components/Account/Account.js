import React, { Component } from 'react';
import axios from 'axios';
import './Account.css';
import NavBar from '../NavBar/index'

class Account extends Component {

    constructor(props){
        super(props);
        let user = JSON.parse(localStorage.getItem('user'));
        if(user == null){
            user = [{uuid:"494380fb-fcdf-4987-b244-2a0a60b78170"}];
            localStorage.setItem('user', JSON.stringify({user}));
        }
        user = JSON.parse(localStorage.getItem('user'));
        user = user.user[0].uuid;
        this.state = {uuid: user, userData:[], apiKey:"http://192.168.0.16:8080/v1/user/"};
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleChangeNewPassword = this.handleChangeNewPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getUser(){
        axios.get(this.state.apiKey + this.state.uuid).then(res => {
            this.setState({userData:res.data});
            this.setState({userName:res.data.name});
            this.setState({userLastName:res.data.lastName});
            this.setState({userNewPassword: ''});
        });
    }

    componentWillMount(){
        this.getUser();
    }

    handleChangeName(event) {
        this.setState({userName: event.target.value});
    }
    handleChangeLastName(event) {
        this.setState({userLastName: event.target.value});
    }
    handleChangeNewPassword(event) {
        this.setState({userNewPassword: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.state.userName.value.trim().length < 1){
            console.log("El nombre debe de tener al menos 1 caracter");
        }else if(this.state.userLastName.value.trim().length < 1) {
            alert("El apellido debe de tener al menos 1 caracter");
        }else if(this.state.userNewPassword === ''){
            axios.put(this.state.apiKey + this.state.uuid, {
                name: this.state.userName,
                lastName: this.state.userLastName
            }).then(res => {
                console.log(res);
                console.log(res.data);
            });
        }else if(this.state.userNewPassword.trim.length > 0 && this.state.userNewPassword.trim.length < 8){
            console.log("La contraseña debe tener al menos 8 caracteres");
        }else{
            axios.put(this.state.apiKey + this.state.uuid, {
                name: this.state.userName,
                lastName: this.state.userLastName,
                password: this.state.userNewPassword
            }).then(res => {
                console.log(res);
                console.log(res.data);
            });
        }
    }

    render() {
        return (
            <div className="user-view">
                <NavBar/>
                <div>
                    <form class="form-style-user" onSubmit={this.handleSubmit}>
                        <ul className="PraxisNext-Bold">
                            <h2>Cuenta</h2>
                            <li>
                                <label for="name">Nombre</label>
                                <input type="text" className="PraxisNext-Bold" name="name" maxlength="100"
                                       onChange={this.handleChangeName}
                                       value={this.state.userName} />
                                <span>* Ingresa tu nombre o nombres aquí</span>
                            </li>
                            <li>
                                <label for="lastName">Apellido</label>
                                <input type="text" className="PraxisNext-Bold" name="lastName" maxlength="100"
                                       onChange={this.handleChangeLastName}
                                       value={this.state.userLastName} />
                                <span>* Ingresa tus apellidos aquí</span>
                            </li>
                            <li>
                                <label for="email">Correo Electrónico</label>
                                <input type="email" className="PraxisNext-Bold user-input-disabled" name="email" maxlength="100"
                                       value={this.state.userData.email} disabled/>
                                <span>Ingresa un correo electrónico válido</span>
                            </li>
                            <li>
                                <label for="password">Contraseña</label>
                                <input type="password" className="PraxisNext-Bold" name="password" maxlength="100"
                                       onChange={this.handleChangeNewPassword}
                                       value={this.state.userNewPassword} />
                                <span>Ingresa una nueva contraseña</span>
                            </li>
                            <li>
                                <input type="submit" value="Actualizar" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
}

export default Account;
