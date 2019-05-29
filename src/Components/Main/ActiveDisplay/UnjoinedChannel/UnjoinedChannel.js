import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Button } from 'reactstrap';

const UnjoinedChannel = (props) => {
    const [ joinedChannels, setJoinedChannels ] = useState([]);
    const [ fullUserChannels, setFullUserChannels ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/userchannels/', {
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : props.token
            }
        })
        .then(res => res.json())
        .then(data => {
            let userChanIds = data.map(channel => channel.ChannelId);
            console.log("user channels =>", data);
            setJoinedChannels(userChanIds);
            setFullUserChannels(data);
        })

    }, []);

    const joinChannel = () => {
        fetch(`http://localhost:8080/api/userchannels/${props.channel.id}`, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : props.token
            }
        })
        .then(res => res.json())
        .then(data => setJoinedChannels([...joinedChannels, data.ChannelId]))
        .catch(err => console.log(err))
    }

    const leaveChannel = () => {
        // search through user channels to find one where the ChannelId matches the current channel
        const channelToDelete = fullUserChannels.map(fullChannel => fullChannel.ChannelId == props.channel.id);
        console.log(channelToDelete);

        fetch(`http://localhost:8080/api/userchannels/${channelToDelete.id}`, {
            method : 'DELETE',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : props.token
            }
        })
        .then(res => res.json())
        .then(data => {
            let deletedIndex = joinedChannels.indexOf(props.channel.id);
            setJoinedChannels(joinedChannels.splice(deletedIndex, 1))
        })
        .catch(err => console.log(err))
    }

    const showChannel = () => {
        if(joinedChannels.includes(props.channel.id)) {
            return (
                <Row>
                    <Col>
                        <p>You are a member of this channel. Do you want to leave?</p>
                        <Button onClick={ leaveChannel }>Leave Channel</Button>
                    </Col>
                </Row>
            )
        } else {
            return (
                <Row>
                    <Col>
                        <p>Do you want to join this channel?</p>
                        <Button onClick={ joinChannel }>Join</Button>
                    </Col>
                </Row>
            )
        }
    }

    return (
        <Container>
            <Row>
                <Col xs="12">
                    <h2>{ props.channel.name }</h2>
                    <hr />
                    <h4>{ props.channel.tagline }</h4>
                    <p>{ props.channel.purpose }</p>
                </Col>
            </Row>
            { showChannel() }
        </Container>
    )
}

export default UnjoinedChannel;