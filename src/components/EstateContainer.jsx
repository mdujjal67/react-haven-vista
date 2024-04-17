import { useLoaderData } from "react-router-dom";
import EstateCard from "./EstateCard";
const EstateContainer = () => {
    const estates = useLoaderData();
    return (

        <div>
            <div className="container mx-auto mb-[100px]">
                <div className="mb-9 text-center">
                    <h2 className="text-[40px] font-bold text-[#131313]">Estates</h2>
                </div>
                {/* books card */}
                <div className="lg:grid grid-cols-3 lg:gap-8">
                    {
                        estates.map((estate) => <EstateCard key={estate.id} estate={estate}></EstateCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default EstateContainer;