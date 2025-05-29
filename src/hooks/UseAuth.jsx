import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';

const UseAuth = () => {
    const authInfo = use(AuthContext)
    return authInfo
};

export default UseAuth;