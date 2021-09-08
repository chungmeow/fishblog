import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Navitem from './Navitem';
import getNavitem from './getNavitem'
import '../css/clean-blog.css'; //TODO: sort out css delivery

class Navbar extends Component {
    renderItem(i) {
        const navItem = getNavitem(i);
        return (
            <Navitem
                key={i}
                path={navItem.path}
                name={navItem.name}
            />
        );
    }
    render() {
        const items = Array(5).fill(null);
        for (let i=0; i<items.length; i++) {
            items[i] = this.renderItem(i)
        }
        return (
            <div className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                    <NavLink activeClassName="navbar-brand" to="/">Start Bootstrap</NavLink>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                            data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                            aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            {items}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;