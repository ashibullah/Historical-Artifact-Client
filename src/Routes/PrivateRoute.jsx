/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";

import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthProvider";




const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);


    useEffect(() => {
        if (!user || !user.email) {
          toast("You need to log in to access this page.");
        }
      }, [user]);


    if(user && user?.email){
        return (children);
    }
    
    return (
        
        <div>
            
            <Navigate to={"/auth"}></Navigate>
        </div>
    );
};

export const CrashLogin =({children})=>{
    const { user } = useContext(AuthContext);

    return !(user) ? children : <Navigate to="/" />;
}


export default PrivateRoute;