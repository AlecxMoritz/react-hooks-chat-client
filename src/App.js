import React, { useState, useEffect } from 'react';
import './App.css';
import AuthIndex from './Components/Auth/AuthIndex';
import Main from './Components/Main/Main';
import AuthContext from './Contexts/AuthContext';

class App extends React.Component  {
  constructor() {
    super();
    this.setToken = (token) => {
      localStorage.setItem('token', token);
      this.setState({ token : token });
    }

    this.setUser = (user) => {
      this.setState({ user : user });
    }

    this.state = {
      token : '',
      user : {},
      setToken : this.setToken,
      setUser : this.setUser
    }
  }
  
  componentDidMount = () => {
    let token = localStorage.getItem('token');
    this.setState({ token : token })
  }

  clearToken = (token) => {
    localStorage.removeItem('token');
    this.setState({ token : '' })
  }
  
  toggle = () => {
    if(this.state.token) {
      return <Main logout={ this.clearToken } token={ this.token } />
    } else {
      return <AuthIndex setToken= { this.state.setToken } />
    }
  }

  render() {
    return (
      <div className="App">
        <AuthContext.Provider value={ this.state }>
          { this.toggle() }
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;