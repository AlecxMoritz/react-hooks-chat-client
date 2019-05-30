import React from 'react';
import './MyChannelsList.css';

const MyChannelsList = (props) => {
    return (
        <ul>
            { props.channels.map(channel => {
                return <li className="list-item" key={ channel.id } onClick={(e) => props.setActive(channel, 'owned') }>{ channel.name }</li>
            })}
        </ul>
    )
}

export default MyChannelsList;