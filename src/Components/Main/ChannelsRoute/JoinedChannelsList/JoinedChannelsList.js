import React from 'react';

const JoinedChannelsList = (props) => {
    return (
        <ul>
            { props.channels.map(channel => {
                return <li key={ channel.id }>{ channel.Channel.name }</li>
            })}
        </ul>
    )
}

export default JoinedChannelsList;