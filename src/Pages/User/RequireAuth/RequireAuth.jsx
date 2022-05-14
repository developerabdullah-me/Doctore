import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from "../../../firabase.init";

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
  
   
    let location = useLocation();
   
    if (!user) {
       
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
    
      return children;
};

export default RequireAuth;