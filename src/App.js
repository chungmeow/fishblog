import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Post from './Post';

class App extends React.Component {
    render() {
        return (
            <>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/home" render={() => <Redirect to="/"/>}/>
                    <Route path="/post" component={Post}/>
                </Switch>
            </>
        );
    }
}

export default App;
