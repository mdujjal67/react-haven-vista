import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import useAuth from "../../hook/useAuth";
import { MdOutlinePassword } from "react-icons/md";

const UpdateProfile = () => {
    const { user } = useAuth();

    // State variables for user profile data
    const [displayName, setDisplayName] = useState(user?.displayName || "your name");
    console.log(displayName)
    const [email, setEmail] = useState(user?.email || "");
    const [password, setPassword] = useState("******");

    // Update document title
    useEffect(() => {
        document.title = "Haven Vista | Update-Profile";
    }, []);

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

    };

    return (
        <div>
            <Navbar></Navbar>
            <h1 className="pt-14 md:pt-20 lg:pt-24 text-center text-2xl">Hi! <span className="text-[#46af36] Montserrat font-bold">{user?.displayName || "User"}</span></h1>
            <p className="text-center">Update your profile</p>
            <div className="w-24 lg:w-28 lg:h-28 h-24 rounded-full mx-auto mt-10 bg-gray-200">
                <img className="rounded-full w-full" src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} alt="user photo" />
            </div>
            <p className="text-center mx-auto mt-2 text-gray-500">{user?.email}</p>
            <form className="w-[320px] mx-auto mt-10" onSubmit={handleSubmit}>
                <label className="input input-bordered flex items-center gap-2 mx-4 rounded-full">
                    <input type="text" className="grow text-gray-500" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                </label>
                <label className="input input-bordered flex items-center gap-2 mx-4 mt-4 rounded-full">
                    <input type="email" className="grow text-gray-500" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label className="input input-bordered flex items-center gap-2 mx-4 mt-4 rounded-full">
                    <MdOutlinePassword className="text-gray-600" />
                    <input type="password" className="grow text-gray-500" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </label>
                <button className="btn input-bordered flex items-center gap-2 mx-4 mt-4 rounded-full w-[290px] bg-black text-white">Save Changes</button>
            </form>
        </div>
    );
};

export default UpdateProfile;