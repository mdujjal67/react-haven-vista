import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";

import PropTypes from 'prop-types';
const EstateCard = ({ estate }) => {
    const { location, facilities, estate_title, segment_name, description, price, status, area, image, id } = estate
    return (
        <div>

            <Link to={`/home/${id}`}>

                <div className="">
                    <div className="card-wrapper p-4 lg:p-6 border border-[#13131326] rounded-[16px] ease-in-out duration-300	lg:hover:blur-[0.5px] lg:hover:opacity-70 lg:hover:scale-105 mt-10 lg:mt-0">
                        <div className="bg-[#F3F3F3] rounded-[16px] mx-auto">
                            <img className="p-4 lg:p-6 rounded-2xl" src={image} alt="Image" />
                        </div>
                        <h2 className=" font-bold pt-4 text-xl">{segment_name}</h2>
                        <h2 className="font-bold text-2xl pt-4">{estate_title}</h2>
                        <p className="pt-4">{description}</p>
                        <p className="text-[#131313CC] font-medium py-5">Facilities: {facilities}</p>
                        <p className="pb-4">Area: {area}</p>
                        <div className="flex gap-2 items-center">
                            <CiLocationOn className="mb-1" />
                            <p className="pb-2">{location}</p>
                        </div>
                        <hr className="border-dashed text-[#13131326] pt-2 pb-5" />
                        <div className="flex justify-between items-center">
                            <p>{status}</p>
                            <div className="flex justify-between items-center gap-[10px]">
                                <p>{price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};
EstateCard.propTypes = {
    estate: PropTypes.object
};
export default EstateCard;