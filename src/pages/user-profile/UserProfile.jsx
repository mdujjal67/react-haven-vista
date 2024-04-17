import { useEffect } from "react";
import Navbar from "../../components/Navbar";

const UserProfile = () => {

    useEffect((()=>{
        document.title = "Haven Vista | User-Profile"
    }),[])

    return (
        <div>
            <Navbar></Navbar>
            <h1>This is a user profile</h1>
        </div>
    );
};

export default UserProfile;