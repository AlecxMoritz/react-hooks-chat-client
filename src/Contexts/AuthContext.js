import React from 'react';

const AuthContext = React.createContext({
    token : '',
    user : {},
    setToken : () => {},
    setUser : () => {}
});

export default AuthContext;