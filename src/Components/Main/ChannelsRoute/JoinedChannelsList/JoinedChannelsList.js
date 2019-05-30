import React from 'react';

const JoinedChannelsList = (props) => {
    return (
        <ul>
            { props.channels.map(channel => {
                return <li className="list-item" key={ channel.id } onClick={(e) => props.setActive(channel, 'joined')}>{ channel.Channel.name }</li>
            })}
        </ul>
    )
}

export default JoinedChannelsList;