import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import MyChannelsList from './MyChannelsList/MyChannelsList';
import JoinedChannelsList from './JoinedChannelsList/JoinedChannelsList';
import ActiveChannel from './ActiveChannel/ActiveChannel';
import AuthContext from '../../../Contexts/AuthContext';
import './ChannelsRoute.css';

const ChannelsRoute = (props) => {
    const [ myChannels, setMyChannels ] = useState([]);
    const [ joinedChannels, setJoinedChannels ] = useState([]);
    const [ activeChannel, setActiveChannel ] = useState([]);
    const [ activeType, setActiveType ] = useState('');

    const setActive = (channel, type) => {
        setActiveChannel(channel);
        setActiveType(type);
        console.log(channel);
    };

    const getChannels = () => {
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
                setActive(data[0]);
                setActiveType('owned');
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    }

    useEffect(() => {
        getChannels();
    }, [])

    return (
        <Container fluid={ true }>
            <Row className="row-padding">
                <Col xs="2">
                    <div className="channel-select">
                        <h4>My Niches</h4>
                        <MyChannelsList channels={ myChannels } setActive={ setActive } />
                        <h4>Joined Niches</h4>
                        <JoinedChannelsList channels={ joinedChannels } setActive={ setActive } />
                    </div>
                </Col>
                <Col xs="10">
                    <ActiveChannel channel={ activeChannel } type={ activeType } getChannels={ getChannels } />
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