import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../pages/Home';
import Post from '../pages/Post';
import Login from '../pages/Login';
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../vendor/fontawesome-free/css/all.min.css';
import '../scss/clean-blog.scss';

class App extends React.Component {
    render() {
        return (
            <>
                <NavBar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/home" render={() => <Redirect to="/"/>}/>
                    <Route exact path="/post" component={Post}/>
                    <Route exact path="/login" component={Login}/>
                </Switch>
            </>
        );
    }
}

export default App;
