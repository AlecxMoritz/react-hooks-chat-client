import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
                <Col xs="10">
                    <h1 className="title margin-top" >Niche</h1>
                </Col>
                <Col xs="2">
                    <p className="margin-top">Sign up or sign in to use Niche</p>
                </Col>
            </Row>
            <Row  className="auto-row">
                <Col xs="6">
                    <Button className="margin-top">
                        <Link to="/signup" className="link">Sign Up</Link>
                    </Button>
                </Col>
                <Col xs="6">
                    <Button  className="margin-top">
                        <Link to="/signin" className="link">Sign In</Link>
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;