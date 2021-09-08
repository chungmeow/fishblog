import React from 'react';
import Header from '../components/Header';
import Posts from '../components/Posts';
import getHeader from '../components/getHeader';

class Home extends React.Component {
    render() {
        return (
            <>
                <Header header={getHeader(this.props.match.path)}/>
                <Posts/>
            </>
        );
    }
}

export default Home;