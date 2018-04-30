import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Place from './components/Place';
import SearchResults from './components/SearchResults';
import RegistrationForm from './components/RegistrationForm';
import NearPlaces from './components/NearPlaces';
import CompareView from './components/CompareView';
import PlaceForm from './components/PlaceForm';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Reviews from './components/Place/Reviews/ReviewsAll';
import ReviewForm from './components/Place/Reviews/ReviewForm';
import Account from './components/Account';
import Recovery from './components/Recovery';
import RecoveryToken from "./components/RecoveryToken/RecoveryToken";
import Favorite from "./components/Favorite/Favorite";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/register" component={RegistrationForm}/>
                        <Route path="/recovery" component={Recovery}/>
                        <Route path="/recovery_token" component={RecoveryToken}/>
                        <Route path="/place/create" component={PlaceForm}/>
                        <Route path="/place/:uuid/edit" component={PlaceForm}/>
                        <Route path="/place/:uuid/reviews" component={Reviews}/>
                        <Route path="/place/:uuid/review/create" component={ReviewForm}/>
                        <Route path="/place/:uuid" component={Place}/>
                        <Route path="/search" component={SearchResults}/>
                        <Route path="/compare/:uuid_1/:uuid_2" component={CompareView}/>
                        <Route path="/near" component={NearPlaces}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/about" component={AboutUs}/>
                        <Route path="/account" component={Account}/>
                        <Route path="/favorites" component={Favorite}/>
                        <Redirect from='*' to='/' />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
