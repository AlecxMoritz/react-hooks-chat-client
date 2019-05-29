import React from 'react';

const ChannelDisplay = (props) => {
    return (
        <ul>
        { props.channels.map(channel => {
            return ( 
            <div key={ channel.id }>
                <li onClick={(e) => props.setActive(channel, 'unjoined channel')}>{ channel.name }</li>
            </div>
            )
        })}
        </ul>
    )
}

export default ChannelDisplay;