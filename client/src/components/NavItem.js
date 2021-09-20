import React from 'react';
import {NavLink} from 'react-router-dom';

export default function NavItem(props) {
    return (
        <li className="nav-item">
            <NavLink exact className="nav-link" to={props.path}>{props.name}</NavLink>
        </li>
    );
}