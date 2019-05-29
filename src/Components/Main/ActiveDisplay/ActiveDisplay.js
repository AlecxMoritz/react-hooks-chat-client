import React from 'react';
import UnjoinedChannel from './UnjoinedChannel/UnjoinedChannel';

const ActiveDisplay = (props) => {

    const configureDisplay = () => {
        switch(props.type) {
            case 'unjoined channel' :
                return <UnjoinedChannel channel={ props.item } token={ props.token } />

            default :
                return <div><h2>Welcome back to Niche</h2></div>
        }
    }

    return (
        <React.Fragment>
            { configureDisplay() }
        </React.Fragment>
    )
}

export default ActiveDisplay;