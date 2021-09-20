import React from 'react';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import getHeader from '../components/getHeader';


class Login extends React.Component {
    render() {
        return (
            <>
                <Header header={getHeader(this.props.match.path)}/>
                <LoginForm/>
            </>
        );
    }
}

export default Login;