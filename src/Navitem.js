import React from 'react';

export default function Navitem(props) {
    return (
        <li className="nav-item">
            <a className="nav-link" href={props.path}>{props.name}</a>
        </li>
    );
}