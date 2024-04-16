import EstateContainer from "../../components/EstateContainer";
import Navbar from "../../components/Navbar";
import SwiperSlider from "../../components/SwiperSlider";

const Home = () => {
    return (
        <div className="mx-auto">
            <Navbar></Navbar>
            <div>
                <SwiperSlider></SwiperSlider>
            </div>
            <div id="estate" className="my-[200px] container mx-auto">
                <EstateContainer></EstateContainer>
            </div>

        </div>
    );
};

export default Home;