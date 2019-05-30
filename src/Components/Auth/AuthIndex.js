import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from './Auth/Auth';
import Signup from './Signup/Signup';
import Signin from './Signin/Signin';

const AuthIndex = (props) => {

    return (
        <Router>
            <Switch>
                <Route path="/" exact ><Auth setToken={ props.setToken } /></Route>
                <Route path="/signup" exact ><Signup setToken={ props.setToken } /></Route>
                <Route path="/signin" exact ><Signin  setToken={ props.setToken }/></Route>
            </Switch>
        </Router>
    )
};

export default AuthIndex;