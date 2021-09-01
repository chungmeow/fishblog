import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Posts from './Posts';
import Post from './Post';

class App extends React.Component {
    render() {
        return (
            <>
                <Navbar/>
                <Header header={this.props.header}/>
                <Posts>
                    <Post/>
                    <hr/>
                </Posts>
            </>
        );
    }
}

export default App;
