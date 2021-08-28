import React from 'react';
import Navbar from './Navbar';
import Header from './Header';

class App extends React.Component {
    render() {
        return (
            <>
                <Navbar/>
                <Header header={this.props.header}/>
            </>
        );
    }
}

export default App;
