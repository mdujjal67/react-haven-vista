import { useEffect } from "react";
import Navbar from "../../components/Navbar";


const Agents = () => {

    useEffect((()=>{
        document.title = "Haven Vista | Agents"
    }),[])

    return (
        <div>
            <Navbar></Navbar>
            This is Agents page
        </div>
    );
};

export default Agents;