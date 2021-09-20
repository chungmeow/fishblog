import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import NavItem from './NavItem';
import getNavItems from './getNavItems'
import '../css/clean-blog.css'; //TODO: sort out css delivery

class NavBar extends Component {
    renderItem(navItem) {
        return (
            <NavItem
                key={navItem.i}
                path={navItem.path}
                name={navItem.name}
            />
        );
    }
    render() {
        const navItems = getNavItems();
        const items = Array(navItems.length).fill(null);
        for (let i=0; i<items.length; i++) {
            items[i] = this.renderItem({
                i: i,
                path: navItems[i].path,
                name: navItems[i].name
            });
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

export default NavBar;