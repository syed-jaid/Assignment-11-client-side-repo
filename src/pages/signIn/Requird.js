import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../loading/Loading';


const Requird = ({ children }) => {
    const location = useLocation();
    const [user, loading] = useAuthState(auth)
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to='/Registor' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default Requird;