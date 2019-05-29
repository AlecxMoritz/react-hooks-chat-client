import React, { useState, useEffect } from 'react';
import ChannelDisplay from './ChannelDisplay/ChannelDisplay';
import { Form, Input, Label } from 'reactstrap'

const DiscoverBar = (props) => {
    const [ channels, setChannels ] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:8080/api/channels/', {
            headers : {
                'Content-type' : 'application/json',
                'Authorization' : props.token
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setChannels(data);
        })
        .catch(err => console.log(err.message));
    }, []);
    
    return (
        <div className="main">

            <Form>
                <Label>Find your new Niche</Label>
                <Input type="text" />
            </Form>
            <ChannelDisplay setActive={ props.setActive } channels= { channels } />
        </div>
    )
}

export default DiscoverBar;