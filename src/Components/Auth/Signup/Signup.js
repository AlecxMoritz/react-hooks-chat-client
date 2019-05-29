import React, { useState } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

const Signup = (props) => {
    const [ screenname, setScreenname ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ name, setName ] = useState('');
    const [ password, setPassword ] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            screenname : screenname,
            email : email,
            name : name,
            password : password
        };

        fetch('http://localhost:8080/api/auth/signup', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({ user : data })
        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('token', data.token);
            props.setToken(data.token);
        })
        .catch(err => console.log(err))
    }

    return (
        <React.Fragment>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <FormGroup>
                    <Label>Screen name</Label>
                    <Input type="text" required onChange={(e) => setScreenname(e.target.value) }/>
                </FormGroup>
                <FormGroup>
                    <Label>Email</Label>
                    <Input type="text" required onChange={(e) => setEmail(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label>Name</Label>
                    <Input type="text" required onChange={(e) => setName(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" required onChange={(e) => setPassword(e.target.value)} />
                </FormGroup>
                <Button type="submit">Sign Up</Button>
            </Form>
        </React.Fragment>
    )
}

export default Signup;