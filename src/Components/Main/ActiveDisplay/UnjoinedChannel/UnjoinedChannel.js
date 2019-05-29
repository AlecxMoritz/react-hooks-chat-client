import React from 'react';
import { Container, Col, Row } from 'reactstrap';

const UnjoinedChannel = (props) => {
    return (
        <Container>
            <Row>
                <Col xs="12">
                    <h2>{ props.channel.name }</h2>
                    <hr />
                    <h4>{ props.channel.tagline }</h4>
                    <p>{ props.channel.purpose }</p>
                </Col>
            </Row>
        </Container>
    )
}

export default UnjoinedChannel;