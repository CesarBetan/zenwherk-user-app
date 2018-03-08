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
import Reviews from './components/Reviews';
import Account from './components/Account';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/register" component={RegistrationForm}/>
                        <Route path="/place/create" component={PlaceForm}/>
                        <Route path="/place/:id/edit" component={PlaceForm}/>
                        <Route path="/place/:id/reviews" component={Reviews}/>
                        <Route path="/place/:id" component={Place}/>
                        <Route path="/search" component={SearchResults}/>
                        <Route path="/compare/:id_1/:id_2" component={CompareView}/>
                        <Route path="/near" component={NearPlaces}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/about" component={AboutUs}/>
                        <Route path="/account" component={Account}/>
                        <Redirect from='*' to='/' />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
