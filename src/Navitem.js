import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Navitem(props) {
    return (
        <li className="nav-item">
            <NavLink activeClassName="nav-link" to={props.path}>{props.name}</NavLink>
        </li>
    );
}