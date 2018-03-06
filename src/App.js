import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Test from './components/Test';
import Place from './components/Place';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={Landing}/>
                        <Route path="/test" component={Test}/>
                        <Route path="/place/:id" component={Place}/>
                        <Redirect from='*' to='/' />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
