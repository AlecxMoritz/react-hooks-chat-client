import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap'
import Sidebar from '../UI/Sidebar/Sidebar';
import ActiveDisplay from './ActiveDisplay/ActiveDisplay';

const Main = (props) => {
    const [ activeItem, setActiveItem ] = useState({})
    const [ activeType , setActiveType ] = useState('')
 
    const setActive = (item, type) => {
        setActiveItem(item);
        setActiveType(type);
        console.log(activeItem);
        console.log(activeType);
    }


    return (
        <Container fluid={ true }>
            <Row>
                <Col xs="4">
                    <Sidebar token={ props.token } logout={ props.logout } setActive={ setActive }/>
                </Col>
                <Col xs="8">
                    <ActiveDisplay item={ activeItem } type={ activeType } />
                </Col>
            </Row>
        </Container>
    )
}

export default Main;