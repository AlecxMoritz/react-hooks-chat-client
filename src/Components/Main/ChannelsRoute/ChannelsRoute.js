import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MyChannelsList from './MyChannelsList/MyChannelsList';
import JoinedChannelsList from './JoinedChannelsList/JoinedChannelsList';
import AuthContext from '../../../Contexts/AuthContext';

const ChannelsRoute = (props) => {
    const [ myChannels, setMyChannels ] = useState([]);
    const [ joinedChannels, setJoinedChannels ] = useState([]);
    const [ activeChannel, setActiveChannel ] = useState([]);

    useEffect(() => {
        console.log(props.auth);
        fetch('http://localhost:8080/api/userchannels/', {
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : props.auth.token
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log("user channels =>", data);
            setJoinedChannels(data);
            fetch('http://localhost:8080/api/channels/mine', {
                headers : {
                    'Content-Type' : 'application/json',
                    'Authorization' : props.auth.token
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log("my channels =>", data);
                setMyChannels(data);
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    }, [])

    return (
        <Container fluid={ true }>
            <Row>
                <Col xs="3">
                    <h4>My Niches</h4>
                    <MyChannelsList channels={ myChannels }/>
                    <h4>Joined Niches</h4>
                    <JoinedChannelsList channels={ joinedChannels } />
                </Col>
                <Col xs="9">
                    <h2>Active Niche</h2>
                </Col>
            </Row>
        </Container>
    )
}

export default props => (
    <AuthContext.Consumer>
        { auth => <ChannelsRoute { ...props } auth={ auth } /> }
    </AuthContext.Consumer>
);