import React, { useState } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

const Signin = (props) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            email : email,
            password : password
        };

        fetch('http://localhost:8080/api/auth/signin', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({ user : data})
        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('token', data.token);
            props.setToken(data.token);
        })
        .catch(err => err.message)
    }

    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <FormGroup>
                <Label>Email</Label>
                <Input type="text" required onChange={(e) => setEmail(e.target.value) }/>
            </FormGroup>
            <FormGroup>
                <Label>Password</Label>
                <Input type="password" required onChange={(e) => setPassword(e.target.value) }/>
            </FormGroup>
            <Button type="submit">Sign In</Button>
        </Form>
    )
}

export default Signin;