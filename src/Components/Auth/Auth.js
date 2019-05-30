import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Signin from './Signin/Signin';
import Signup from './Signup/Signup';
import { Card, Container, Col, Row, Button } from 'reactstrap';
import './Auth.css';

const Auth = (props) => {
    const [ login, setLogin ] = useState(true);

    const toggle = () => {
        login ? setLogin(false) : setLogin(true);
    }

    return (
        <Container className="auth-container">
            <Row className="auto-row">
                <Col xs="12">
                    <h1 className="title" >Niche</h1>
                </Col>
            </Row>
            <Row  className="auto-row">
                <Col xs="6">
                    <Button className="auth-button">Sign Up</Button>
                </Col>
                <Col xs="6">
                    <Button  className="auth-button">Sign In</Button>
                </Col>
            </Row>

            <Row>
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