import React from 'react';
import {Link} from 'react-router-dom';
import {Nav} from 'react-bootstrap';

export default function NavItem(props) {
    return (
        <Nav.Item as="li">
            <Nav.Link as={Link} to={props.path} eventKey={props.eventKey}>{props.name}</Nav.Link>
        </Nav.Item>
    );
}