import React, { useState } from 'react';
import AuthContext from '../../../Contexts/AuthContext';
import { Redirect } from 'react-router-dom';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const CreateRoute = (props) => {
    const [ name, setName ] = useState('');
    const [ tagline, setTagline ] = useState('');
    const [ purpose, setPurpose ] = useState('');

    const handleCreate = (e) => {
        e.preventDefault();
        let data = {
            name : name,
            tagline : tagline,
            purpose : purpose
        };

        fetch('http://localhost:8080/api/channels/', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : props.auth.token
            },
            body : JSON.stringify({ channel : data }),
        })
        .then(res => res.json())
        .then(data => props.history.replace('/channels'))
        .catch(err => console.log(err))
    }

    return (
        <Container>
            <Row>
                <Col xs="2"></Col>
                <Col xs="8">
                    <Form>
                        <FormGroup>
                            <Label>Name</Label>
                            <Input type="text" onChange={(e) => setName(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Tagline</Label>
                            <Input type="text" onChange={(e) => setTagline(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Purpose</Label>
                            <Input type="textarea" onChange={(e) => setPurpose(e.target.value)} />
                        </FormGroup>
                    </Form>
                </Col>
                <Col xs="2">
                    <Button onClick={(e) => handleCreate(e)}>Create</Button>
                </Col>
            </Row>
        </Container>
    )
};

export default props => (
    <AuthContext.Consumer>
        { auth => <CreateRoute { ...props } auth={ auth } /> }
    </AuthContext.Consumer>
);