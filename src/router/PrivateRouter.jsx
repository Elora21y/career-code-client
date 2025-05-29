import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRouter = ({children}) => {
    const {users , loading} = use(AuthContext)
    const location  = useLocation()
    if(loading) return <span className="loading loading-spinner text-primary"></span>
    if(!users) return <Navigate to='/login' state={location.pathname}></Navigate>
    return children
};

export default PrivateRouter;