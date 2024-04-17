import { CiLocationOn } from "react-icons/ci";
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Navbar from "../../components/Navbar";
const EstateDetails = () => {
    const EstateDetails = useLoaderData();
    const { id } = useParams();
    const estate = EstateDetails.find(estate => estate.id == id);

    const { location, facilities, estate_title, segment_name, description, price, status, area, image } = estate || {}

    return (
        <div>
            <Navbar></Navbar>
            <div className='container mx-auto lg:grid grid-cols-2 justify-between gap-12 mb-[100px] mt-[52px] text-center lg:text-left'>
                <div className='col-span-1 p-10 lg:m-0'>
                    <img className='lg:w-full lg:h-[464px] mx-auto scale-110' src={image} alt="" />
                </div>
                <div className='col-span-1'>
                    <h1 className='font-bold text-[40px]'>{estate_title}</h1>
                    <p className='text-[20px] font-semibold mt-3'> {segment_name}</p>
                    <hr className='text-[#13131326] mt-2 lg:mt-6 lg:mb-4 mb-0' />
                    <div className="flex gap-2 items-center text-xl">
                        <CiLocationOn className="mb-1" />
                        <p className="pb-2">{location}</p>
                    </div>
                    <hr className='text-[#13131326] mt-6 mb-4' />
                    <div className='flex'>
                        <p className='p-4 lg:p-0'><span className='font-bold'>Review: </span>{description}</p>
                    </div>
                    <hr className='text-[#13131326] mt-6 mb-4 mx-4 lg:mx-0' />
                    <div className='flex gap-[60px] ml-4 lg:ml-0'>
                        <p className='text-[#131313B3]'>Price:</p>
                        <p className='font-bold ml-[85px]'>{price}</p>
                    </div>
                    <div className='flex gap-[120px] py-3 mx-4 lg:mx-0'>
                        <p className='text-[#131313B3]'>Facilities:</p>
                        <p className='font-bold'>{facilities}</p>
                    </div>
                    <div className='flex gap-[55px] ml-4 lg:ml-0'>
                        <p className='text-[#131313B3]'>Status:</p>
                        <p className='font-bold ml-[85px]'>{status}</p>
                    </div>
                    <div className='flex gap-[150px] py-3 ml-4 lg:ml-0'>
                        <p className='text-[#131313B3]'>Area:</p>
                        <p className='font-bold'>{area}</p>
                    </div>
                    <Link to='/'>
                        <button className='py-3 px-5 font-semibold bg-green-500 rounded-xl text-white'>Go Back</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default EstateDetails;