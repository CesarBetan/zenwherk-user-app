import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Place from './components/Place';
import SearchResults from './components/SearchResults';
import Login from './components/Login';
import Register from './components/Register';
import NearPlaces from './components/NearPlaces';
import Compare from './components/Compare';
import CreatePlace from './components/CreatePlace';
import EditPlace from './components/EditPlace';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Reviews from './components/Reviews';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={Landing}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/place/create" component={CreatePlace}/>
                        <Route path="/place/:id/edit" component={EditPlace}/>
                        <Route path="/place/:id/reviews" component={Reviews}/>
                        <Route path="/place/:id" component={Place}/>
                        <Route path="/search" component={SearchResults}/>
                        <Route path="/compare" component={Compare}/>
                        <Route path="/near" component={NearPlaces}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/about" component={AboutUs}/>
                        <Redirect from='*' to='/' />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
