import React, { Component } from 'react';
import { Route, Switch } from 'react-router'
import Home from './pages/Home'

class App extends Component{
    render(){
        return(
            <Switch >
                <Route path="/" render={props => (
                    <Home {...props} />
                )}/>
            </Switch >
        )
    }
}

export default App;