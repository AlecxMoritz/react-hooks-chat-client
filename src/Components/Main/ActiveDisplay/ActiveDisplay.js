import React from 'react';
import UnjoinedChannel from './UnjoinedChannel/UnjoinedChannel';

const ActiveDisplay = (props) => {

    const configureDisplay = () => {
        switch(props.type) {
            case 'unjoined channel' :
                return <UnjoinedChannel channel={ props.item } />

            default :
                return <div><h2>Something went wrong / select something plz</h2></div>
        }
    }

    return (
        <React.Fragment>
            { configureDisplay() }
        </React.Fragment>
    )
}

export default ActiveDisplay;