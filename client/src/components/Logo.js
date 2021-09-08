import {NavLink as Link} from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled(Link);

export default function Logo() {
    return (
        <NavLink activeClassName="navbar-brand" to="/">Start Bootstrap</NavLink>
    );
}