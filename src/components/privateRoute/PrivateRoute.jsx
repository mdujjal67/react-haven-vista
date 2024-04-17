import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import PropTypes from 'prop-types'; 

const PrivateRoute = ({children}) => {

    const {user} = useAuth();
    console.log(user)
    const location = useLocation()
    console.log(location)


    if(!user){
        return <Navigate to='/login' state={location?.pathname || '/home'}></Navigate>
    }

    return (
        <div>
            {children}
        </div>
    );
};
PrivateRoute.propTypes = {
    children: PropTypes.object
};
export default PrivateRoute;