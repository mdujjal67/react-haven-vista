import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth();
    console.log(user)
    const location = useLocation()
    console.log(location)

    if (loading) {
        return <div className="flex justify-center items-center h-screen"><span className="loading loading-ring loading-lg text-center"></span></div>
    }


    if (!user) {
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