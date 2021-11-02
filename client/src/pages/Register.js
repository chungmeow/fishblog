import React from 'react';
import Header from '../components/Header';
import RegisterForm from '../components/RegisterForm';
import getHeader from '../components/getHeader';

class Register extends React.Component {
    render() {
        return (
            <>
                <Header header={getHeader(this.props.match.path)}/>
                <RegisterForm history={this.props.history}/>
            </>
        )
    }
}

export default Register;