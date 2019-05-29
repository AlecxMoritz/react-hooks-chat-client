import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BottomBar from '../UI/BottomBar/BottomBar';
import ChannelsRoute from './ChannelsRoute/ChannelsRoute';
import ChannelInfoRoute from './ChannelInfoRoute/ChannelInfoRoute';
import SearchRoute from './SearchRoute/SearchRoute';
import SettingsRoute from './SettingsRoute/SettingsRoute';
import CreateRoute from './CreateRoute/CreateRoute';
import DashboardRoute from './DashboardRoute/DashboardRoute';

const Main = (props) => {
    return (
        <Container fluid={ true }>
            <Router>
                <Row>
                    <Col xs="12">
                        <Switch>
                            <Route path="/" exact component={ DashboardRoute }></Route>
                            <Route path="/channels" exact component={ ChannelsRoute }></Route>
                            <Route path="/info" exact component={ ChannelInfoRoute }></Route>
                            <Route path="/search" exact component={ SearchRoute }></Route>
                            <Route path="/settings" exact component={ SettingsRoute }></Route>
                            <Route path="/create" exact component={ CreateRoute }></Route>
                        </Switch>
                    </Col>
                </Row>
                <Row>
                    <BottomBar token={ props.token } logout={ props.logout } />
                </Row>
            </Router>
        </Container>
    )
}

export default Main;