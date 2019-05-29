import React, { useState, useEffect } from 'react';
import './App.css';
import Auth from './Components/Auth/Auth';
import Main from './Components/Main/Main';

function App() {
  const [ token, setToken ] = useState(undefined);

  useEffect(() => {
    let token = localStorage.getItem('token');

    if(token) {
      setToken(token);
    }
  }, [])

  const clearToken = () => {
    setToken(undefined);
    localStorage.removeItem('token');
  }

  const toggle = () => {
    if(token) {
      return <Main logout={ clearToken } token={ token } />
    } else {
      return <Auth setToken= { setToken } />
    }
  }

  return (
    <div className="App">
      { toggle() }
    </div>
  );
}

export default App;