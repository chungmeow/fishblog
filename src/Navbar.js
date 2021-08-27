import React from 'react';
import './css/clean-blog.css';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand" href="/">Start Bootstrap</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                            data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                            aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">New Post</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Log out</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">New User</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;