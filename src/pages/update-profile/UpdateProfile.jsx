import { useEffect } from "react";
import Navbar from "../../components/Navbar";


const UpdateProfile = () => {

    useEffect((()=>{
        document.title = "Haven Vista | Update-Profile"
    }),[])

    return (
        <div>
            <Navbar></Navbar>
            <h1>Update your profile</h1>
        </div>
    );
};

export default UpdateProfile;