import Navbar from "../../components/Navbar";
import SwipperSlider from "../../components/SwipperSlider";

const Home = () => {
    return (
        <div className="mx-auto">
            <Navbar></Navbar>
            <div>
                <SwipperSlider></SwipperSlider>
            </div>
            <h1>Estate Section</h1>

        </div>
    );
};

export default Home;