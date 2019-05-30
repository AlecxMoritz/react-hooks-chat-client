import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import MessageInput from './MessageInput/MessageInput';
import AuthContext from '../../../../Contexts/AuthContext';

import './ActiveChannel.css';

const ActiveChannel = (props) => {

    const deleteChannel = () => {
        console.log(props.channel);

        fetch(`http://localhost:8080/api/channels/${props.channel.id}`, {
            method : 'DELETE',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : props.auth.token
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            props.getChannels();
        })
        .catch(err => console.log(err));

        props.getChannels();
    }

    const display = () => {
        if(props.type === 'owned') {
            return (
                <Container>
                <Row>
                    <Col xs="9">
                        <h2>{ props.channel.name }</h2>
                        <hr />
                        <h4>{ props.channel.tagline }</h4>
                        <p>{ props.channel.purpose }</p>
                    </Col>
                    <Col xs="3">
                        <Button>
                            Edit
                        </Button>
                        <Button onClick={(e) => deleteChannel() }>
                            Delete
                        </Button>
                    </Col>
                </Row>
                <Row>

                </Row>
                <Row>
                    <MessageInput channel={ props.channel } />
                </Row>
            </Container>
            )
        } else {
            return (
                <Container>
                    <Row>
                        <Col xs="9">
                            <h2>{ props.channel.name }</h2>
                            <hr />
                            <h4>{ props.channel.tagline }</h4>
                            <p>{ props.channel.purpose }</p>
                        </Col>
                        <Col>
                            <Button>
                                Leave
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        
                    </Row>
                    <Row>
                        <MessageInput channel={ props.channel } />
                    </Row>
                </Container>
            )
        }
    }


    return (
        <section className="active-channel">
            { display() }
        </section>
    )
}

export default props => (
    <AuthContext.Consumer>
        { auth => <ActiveChannel { ...props } auth={ auth } /> }
    </AuthContext.Consumer>
);