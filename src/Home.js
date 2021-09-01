import React from 'react';
import Header from './Header';
import Posts from './Posts';
import getHeader from './getHeader';

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