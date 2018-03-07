import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Test from './components/Test';
import Place from './components/Place';
import SearchResults from './components/SearchResults'
import Login from './components/Login';
import Register from './components/Register';
import NearPlaces from './components/NearPlaces';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={Landing}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route path="/test" component={Test}/>
                        <Route path="/place/:id" component={Place}/>
                        <Route path="/search" component={SearchResults}/>
                        <Route path="/near" component={NearPlaces}/>
                        <Redirect from='*' to='/' />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
