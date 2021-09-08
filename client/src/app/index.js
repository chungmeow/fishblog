import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Post from '../components/Post';

class App extends React.Component {
    render() {
        return (
            <>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/home" exact render={() => <Redirect to="/"/>}/>
                    <Route path="/post" exact component={Post}/>
                </Switch>
            </>
        );
    }
}

export default App;
