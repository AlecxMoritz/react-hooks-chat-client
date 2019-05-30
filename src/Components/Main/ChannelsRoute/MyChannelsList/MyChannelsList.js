import React from 'react';

const MyChannelsList = (props) => {
    return (
        <ul>
            { props.channels.map(channel => {
                return <li key={ channel.id }>{ channel.name }</li>
            })}
        </ul>
    )
}

export default MyChannelsList;