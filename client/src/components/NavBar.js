import React, {Component} from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import NavItem from './NavItem';
import getNavItems from './getNavItems'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.divRef = React.createRef();
        this.state = {
            scrollPos: 0,
            styles: []
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', ()=> {this.handleScroll()});
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', ()=> {this.handleScroll()});
    }
    renderItem(navItem) {
        return (
            <NavItem
                key={navItem.key}
                path={navItem.path}
                name={navItem.name}
                eventKey={navItem.eventKey}
            />
        );
    }
    handleScroll() {
        const MQL = 992;
        if (window.document.documentElement.clientWidth > MQL) {
            const newScrollPos = window.pageYOffset;
            const prevScrollPos = this.state.scrollPos;
            const styles = this.state.styles;
            const height = this.divRef.current.clientHeight;
            if (newScrollPos < prevScrollPos) { //scroll up
                if (newScrollPos > 0 && styles.includes('is-fixed')) {
                    !styles.includes('is-visible') && styles.push('is-visible');
                } else {
                    styles.includes('is-fixed') && styles.splice(styles.indexOf('is-fixed'), 1);
                    styles.includes('is-visible') && styles.splice(styles.indexOf('is-visible'), 1);
                }
            } else if (newScrollPos > prevScrollPos) { //scroll down
                styles.includes('is-visible') && styles.splice(styles.indexOf('is-visible'), 1);
                newScrollPos > height && !styles.includes('is-fixed') && styles.push('is-fixed');
            }
            this.setState({
                styles: styles,
                scrollPos: newScrollPos
            });
        }
    }
    render() {
        const navItems = getNavItems();
        const items = Array(navItems.length).fill(null);
        for (let i=0; i<items.length; i++) {
            items[i] = this.renderItem({
                key: i,
                path: navItems[i].path,
                name: navItems[i].name,
                eventKey: navItems[i].eventKey
            });
        }
        return (
            <Navbar collapseOnSelect fluid="true" ref={this.divRef} className={this.state.styles.join(" ")} id="mainNav" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="/">Start Bootstrap</Navbar.Brand>
                    <Navbar.Toggle  aria-controls="navbarResponsive">
                        Menu
                        <i className="fas fa-bars"/>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="navbarResponsive">
                        <Nav as="ul" className="ml-auto">
                            {items}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavBar;