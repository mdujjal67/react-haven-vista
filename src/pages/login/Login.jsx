import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
// import { useContext } from "react";
// import { AuthContext } from "../authProvider/AuthProvider";
import { useForm } from "react-hook-form";
// import auth from "../firebase/firebaseConfig";
import useAuth from "../../hook/useAuth";
// import auth from "../firebase/firebaseConfig";
import { IoLogoGithub } from "react-icons/io";


const Login = () => {

    const { signInUser, googleLogin, gitHubLogin } =  useAuth()

    const { register, handleSubmit, formState: { errors }} = useForm()

    const onSubmit= (data) => {
        const {email, password} = data

        signInUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch((error) => {
            console.log(error)
          });


        gitHubLogin(email, password)
        .then(result => {
        console.log(result.user)
        })
        .catch((error) => {
        console.log(error)
        });
      }

    //   for google login
      const handleGoogleLogin = () => {
        googleLogin()
        .then(result =>console.log(result.user))
      }


    //   for google login
      const handlegitHubLogin = () => {
        gitHubLogin()
        .then(result => {
        console.log(result.user)
        });

        
    }



    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-gray-50 container mb-[80px]">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login</h1>
                    </div>
                    <div className="card shrink-0 lg:w-[600px] max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            {/* This is for Email field */}
                            <div className="form-control mt-3">
                                <input type="email" name="email" placeholder="Email" className="input input-bordered -mt-1"
                                    {...register("email", { required: true })} />
                                {errors.email && <span className="text-red-500 text-[14px]">This field is required</span>}
                            </div>
                            {/* This is for Password field*/}
                            <div className="form-control mt-4">
                                <input type="password" name="password" placeholder="Password" className="input input-bordered -mt-1"
                                    {...register("password", { required: true })} />
                                {errors.password && <span className="text-red-500 text-[14px]">This field is required</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <label className="">
                                    <p className="text-[14px] w-[200px] mx-auto mt-2 text-[#00000082]">Do not have an account? <Link to='/register' className="hover:link font-semibold text-[14px] text-[#22be0a]">Sign Up</Link>
                                    </p>
                                </label>
                            </div>
                            <div className="form-control mt-3">
                                <button className="btn border-none bg-[#22be0a] hover:bg-[#22be0ad8] text-white">Login</button>
                            </div>
                        </form>
                        <div className="flex items-center -mt-3">
                            <hr className="w-full ml-8" />
                            <p className="px-4 text-[#00000082]">Or</p>
                            <hr className="w-full mr-8" />
                        </div>
                        <div className="form-control mt-3 px-8 relative">
                            <button onClick={()=> handlegitHubLogin()} className="btn border-none bg-[black] hover:bg-[#000000cb] text-white">Login with Github</button>
                            <IoLogoGithub className="text-white absolute top-3 left-[60px] text-[24px]" />

                        </div>
                        <div className="form-control mt-4 px-8 pb-6 relative">
                            <button onClick={()=> handleGoogleLogin()} className="btn border-none text-[#00000082] hover:bg-gray-200">Login with Google</button>
                            <FcGoogle className="absolute top-3 left-[60px] text-[24px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;