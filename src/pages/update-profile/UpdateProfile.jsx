import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import useAuth from "../../hook/useAuth";
import { MdOutlinePassword } from "react-icons/md";
import toast from "react-hot-toast";

const UpdateProfile = () => {
    const { user, updateUserProfile } = useAuth();

    // State variables for user profile data
    const [displayName, setDisplayName] = useState(user?.displayName || "Your name");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg");
    const [password, setPassword] = useState(""); // For new password

    // Update document title
    useEffect(() => {
        document.title = "Haven Vista | Update-Profile";
    }, []);

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            await updateUserProfile(displayName, photoURL);
            // Check if password is not empty to update password
            if (password.trim() !== "") {
                // Update password logic here
                // For example:
                // await updatePassword(password);
            }
            // Provide feedback to the user that their changes have been saved
            toast.success('Profile Updated Successfully!');
        } catch (error) {
            console.error("Error updating profile:", error.message);
            // Handle error and provide feedback to the user if necessary
        }
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
                {/* Name field */}
                <label className="input input-bordered flex items-center gap-2 mx-4 rounded-full">
                    <input type="text" className="grow text-gray-500" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                </label>

                {/* photoURL field */}
                <label className="input input-bordered flex items-center gap-2 mx-4 mt-4 rounded-full">
                    <input type="text" className="grow text-gray-500" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} />
                </label>
                {/* password field */}
                <label className="input input-bordered flex items-center gap-2 mx-4 mt-4 rounded-full">
                    <MdOutlinePassword className="text-gray-600" />
                    <input type="password" className="grow text-gray-500" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New Password" />
                </label>
                <button className="btn input-bordered flex items-center gap-2 mx-4 mt-4 rounded-full w-[290px] bg-black text-white">Save Changes</button>
            </form>
        </div>
    );
};

export default UpdateProfile;
