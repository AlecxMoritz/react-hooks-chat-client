import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaSearch, FaCog, FaBars, FaSignOutAlt, FaPlus, FaTachometerAlt } from 'react-icons/fa';

import './BottomBar.css';

const BottomBar = (props) => {
    return (
        <div className="sidebar-main">
            <Row>
                <Col xs="4"></Col>
                <Col xs="4">
                    <div className="nav-icons">
                        <Link to="/"><FaTachometerAlt /></Link>
                        <Link to="/channels"><FaBars  /></Link>
                        <Link to="/search"><FaSearch  /></Link>
                        <Link to="/settings"><FaCog  /></Link>
                        <Link to="/create"><FaPlus /></Link>
                        <Link to="/"><FaSignOutAlt onClick={ props.logout } /></Link>
                    </div>
                </Col>
                <Col xs="4"></Col>
            </Row>
        </div>
    )
}

export default BottomBar;