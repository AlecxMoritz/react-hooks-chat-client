import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
                    <Button className="auth-button">
                        <Link to="/signup" className="link">Sign Up</Link>
                    </Button>
                </Col>
                <Col xs="6">
                    <Button  className="auth-button">
                        <Link to="/signin" className="link">Sign In</Link>
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;