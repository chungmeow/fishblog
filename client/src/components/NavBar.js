import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NavItem from './NavItem';
import getNavItems from './getNavItems'
import '../css/clean-blog.min.css'; //TODO: sort out css delivery

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.divRef = React.createRef();
        this.state = {
            scrollPos: 0,
            styles: ['navbar', 'navbar-expand-lg', 'navbar-light', 'fixed-top']
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
                key={navItem.i}
                path={navItem.path}
                name={navItem.name}
            />
        );
    }
    handleScroll() {
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
            <div ref={this.divRef} className={this.state.styles.join(" ")} id="mainNav">
                <div className="container">
                    <Link className="navbar-brand" to="/">Start Bootstrap</Link>
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