import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/Loading';

const PrivateRoute = ({children}) => {
    const {user,loadingSpan}=use(AuthContext)
    const location=useLocation()
    console.log(location)

      if(loadingSpan){
        return <Loading></Loading>
      }
       if(user && user.photoURL){
        return children
       }

    return <Navigate state={location.pathname} to='/logInLayout/login'></Navigate>
};

export default PrivateRoute;