import React from 'react';
import Nav from 'react-bootstrap/Nav';

export default function NavItem(props) {
    return (
        <Nav.Item as="li">
            <Nav.Link href={props.path}>{props.name}</Nav.Link>
        </Nav.Item>
    );
}