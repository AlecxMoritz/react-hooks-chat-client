import React, { useState } from 'react';
import Signin from './Signin/Signin';
import Signup from './Signup/Signup';
import { Card, Container, Col, Row } from 'reactstrap';
import './Auth.css';

const Auth = (props) => {
    const [ login, setLogin ] = useState(true);

    const toggle = () => {
        login ? setLogin(false) : setLogin(true);
    }

    return (
        <Container>
            <Row>
                <Col xs="1"></Col>
                <Col xs="4">
                    <h2>To enjoy Niche you need account. Please sign up or sign back in.</h2>
                </Col>
                <Col xs="1"></Col>
                <Col xs="5">
                    <Card className="auth-card">
                        <h2>{ login ? 'Sign In' : 'Sign Up' }</h2>
                        <p onClick={toggle}>{ login ? 'Need an account?' : 'I have an account' }</p>
                        { login ? <Signin setToken={ props.setToken } /> : <Signup setToken={ props.setToken } /> }
                    </Card>
                </Col>
                <Col xs="1"></Col>
            </Row>
        </Container>
    )
}

export default Auth;