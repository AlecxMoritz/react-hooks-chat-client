import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import ChannelBar from '../ChannelBar/ChannelBar';
import DiscoverBar from '../DiscoverBar/DiscoverBar';
import SettingsBar from '../SettingsBar/SettingsBar';
import { FaCompass, FaCog, FaNeos, FaSignOutAlt } from 'react-icons/fa';

import './Sidebar.css';

const Sidebar = (props) => {
    const [ display, setDisplay ] = useState('channels');

    const showDisplay = () => {
        switch(display) {
            case 'channels' :
                return <ChannelBar token={ props.token } setActive={ props.setActive } />

            case 'discover' :
                return <DiscoverBar token={ props.token } setActive={ props.setActive } />

            case 'settings' :
                return <SettingsBar token={ props.token } setActive={ props.setActive } />

            default :
                break;
        }
    }

    return (
        <div className="sidebar-main">
            <Row>
                <Col xs="2">
                    <div className="nav-icons">
                        <FaNeos onClick={(e) => setDisplay('channels')} />
                        <FaCompass onClick={(e) => setDisplay('discover')} />
                        <FaCog onClick={(e) => setDisplay('settings')} />
                        <FaSignOutAlt onClick={ props.logout } />
                    </div>
                </Col>
                <Col xs="10">
                    { showDisplay() }
                </Col>
            </Row>
        </div>
    )
}

export default Sidebar;